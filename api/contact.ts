import { Resend } from 'resend';

// Simple serverless handler compatible with Vercel (Node runtime)
// Exports a default function: (req, res) => void

const MIN_MESSAGE_LENGTH = 10;
const MAX_MESSAGE_LENGTH = 5000;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const SEND_FROM = process.env.RESEND_FROM || 'noreply@alejo-guerra.dev';
const SEND_TO = process.env.CONTACT_EMAIL || 'guerra.alejoet36@gmail.com';

if (!RESEND_API_KEY) {
  console.error('[Contact API] RESEND_API_KEY is not configured');
}

const resend = new Resend(RESEND_API_KEY || '');

function escapeHtml(text: string): string {
  return String(text || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function generateEmailHTML(name: string, email: string, message: string, ip?: string | null, ua?: string | null) {
  const timestamp = new Date().toLocaleString();
  return `
  <div style="font-family: Inter, system-ui, -apple-system, Roboto, 'Segoe UI', sans-serif; color:#111; background:#fff; padding:24px; border-radius:12px; max-width:680px;">
    <h2 style="margin-top:0; color:#000;">Nuevo mensaje desde el portfolio</h2>
    <p style="margin:6px 0; color:#444;"><strong>Nombre:</strong> ${escapeHtml(name)}</p>
    <p style="margin:6px 0; color:#444;"><strong>Email:</strong> ${escapeHtml(email)}</p>
    <div style="margin-top:12px; padding:14px; background:#f7f7f7; border-radius:8px; white-space:pre-wrap;">${escapeHtml(message)}</div>
    <div style="margin-top:16px; color:#777; font-size:12px;">
      <div>Recibido: ${escapeHtml(timestamp)}</div>
      ${ip ? `<div>IP: ${escapeHtml(ip)}</div>` : ''}
      ${ua ? `<div>User-Agent: ${escapeHtml(ua)}</div>` : ''}
    </div>
  </div>`;
}

function validatePayload(name: string, email: string, message: string) {
  if (!name || name.trim().length < 2) return 'El nombre es obligatorio y debe tener al menos 2 caracteres.';
  if (!email || !EMAIL_REGEX.test(email)) return 'El email no es válido.';
  if (!message || message.trim().length < MIN_MESSAGE_LENGTH) return `El mensaje debe tener al menos ${MIN_MESSAGE_LENGTH} caracteres.`;
  if (message.trim().length > MAX_MESSAGE_LENGTH) return `El mensaje no puede exceder ${MAX_MESSAGE_LENGTH} caracteres.`;
  return null;
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Método no permitido' });
  }

  if (!RESEND_API_KEY) {
    console.error('[Contact API] Missing RESEND_API_KEY');
    return res.status(500).json({ error: 'El servidor no está configurado correctamente' });
  }

  try {
    const { name = '', email = '', message = '' } = req.body || {};

    const validationError = validatePayload(String(name), String(email), String(message));
    if (validationError) {
      return res.status(400).json({ error: validationError });
    }

    const ip = (req.headers['x-forwarded-for'] || req.socket?.remoteAddress || null) as string | null;
    const ua = (req.headers['user-agent'] || null) as string | null;

    const html = generateEmailHTML(String(name), String(email), String(message), ip, ua);

    // Send via Resend
    const result = await resend.emails.send({
      from: SEND_FROM,
      to: SEND_TO,
      replyTo: String(email),
      subject: `Nuevo mensaje de ${String(name)} - Portfolio`,
      html,
    });

    // Resend SDK throws on error in most cases; still check result
    if (!result || (result as any).id === undefined) {
      console.error('[Contact API] Resend returned unexpected result', result);
      return res.status(502).json({ error: 'No fue posible enviar el mensaje. Intenta más tarde.' });
    }

    return res.status(200).json({ success: true, message: 'Mensaje enviado correctamente' });
  } catch (err: any) {
    console.error('[Contact API] Error sending email:', err);
    // Avoid leaking internal errors
    return res.status(500).json({ error: 'Ocurrió un error procesando tu mensaje' });
  }
}
