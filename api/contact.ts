declare const process: {
  env: Record<string, string | undefined>
};

export async function POST(request: Request) {
  try {
    const SEND_FROM = process.env.RESEND_FROM || 'onboarding@resend.dev';
    const SEND_TO = process.env.CONTACT_EMAIL || 'guerra.alejoet36@gmail.com';
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      return new Response(JSON.stringify({ error: 'Falta la configuración del servidor de correo.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = await request.json();
    const name = String(data.name || '').trim();
    const email = String(data.email || '').trim();
    const message = String(data.message || '').trim();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Nombre, email y mensaje son obligatorios.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const emailBody = `Nuevo mensaje desde el portfolio de Alejo Guerra:\n\nNombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`;
    const htmlBody = `
      <div style="font-family: Inter, sans-serif; color: #f5f5f5; background: #050505; padding: 24px; border-radius: 18px;">
        <h2 style="margin: 0 0 16px; color: #ffffff; font-size: 22px;">Nuevo mensaje desde el portfolio</h2>
        <p style="margin: 0 0 8px; color: #cbd5e1;">Nombre: <strong>${name}</strong></p>
        <p style="margin: 0 0 8px; color: #cbd5e1;">Email: <strong>${email}</strong></p>
        <div style="margin-top: 16px; padding: 18px; border-radius: 16px; background: rgba(255,255,255,0.05);">
          <p style="margin: 0; color: #e2e8f0; white-space: pre-wrap; line-height: 1.7;">${message}</p>
        </div>
      </div>
    `;

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: SEND_FROM,
        to: [SEND_TO],
        subject: 'Nuevo mensaje del portfolio de Alejo Guerra',
        text: emailBody,
        html: htmlBody,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return new Response(JSON.stringify({ error: 'Error enviando el correo: ' + errorText }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error interno al procesar el mensaje.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
