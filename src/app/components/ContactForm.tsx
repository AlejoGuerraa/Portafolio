import React, { useState, FormEvent, ChangeEvent } from 'react';
import './ContactForm.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormState {
  data: FormData;
  loading: boolean;
  success: boolean;
  error: string;
}

export function ContactForm(): React.ReactElement {
  const [state, setState] = useState<FormState>({
    data: { name: '', email: '', message: '' },
    loading: false,
    success: false,
    error: '',
  });

  // Reset form state after success
  const resetState = () => {
    setTimeout(() => {
      setState({
        data: { name: '', email: '', message: '' },
        loading: false,
        success: false,
        error: '',
      });
    }, 3000);
  };

  // Handle input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      data: { ...prev.data, [name]: value },
      error: '', // Clear error on input change
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate required fields
    if (!state.data.name.trim()) {
      setState((prev) => ({ ...prev, error: 'El nombre es obligatorio' }));
      return;
    }

    if (!state.data.email.trim()) {
      setState((prev) => ({ ...prev, error: 'El email es obligatorio' }));
      return;
    }

    if (!state.data.message.trim()) {
      setState((prev) => ({ ...prev, error: 'El mensaje es obligatorio' }));
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(state.data.email)) {
      setState((prev) => ({ ...prev, error: 'El email no es válido' }));
      return;
    }

    // Check message length
    if (state.data.message.trim().length < 10) {
      setState((prev) => ({
        ...prev,
        error: 'El mensaje debe tener al menos 10 caracteres',
      }));
      return;
    }

    setState((prev) => ({ ...prev, loading: true, error: '' }));

    try {
      const response = await fetch('https://formsubmit.co/ajax/6c45e88acc80458cf593824949cee70c ', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...state.data,
          _subject: 'Nuevo mensaje desde el portfolio',
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Error al enviar el mensaje');
      }

      const successData = await response.json().catch(() => null);
      if (successData && successData.success === false) {
        throw new Error(successData.message || 'No se pudo enviar el mensaje');
      }

      setState((prev) => ({
        ...prev,
        loading: false,
        success: true,
        data: { name: '', email: '', message: '' },
      }));

      resetState();
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'No se pudo enviar el mensaje';
      setState((prev) => ({
        ...prev,
        loading: false,
        error: errorMessage,
      }));
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Tu nombre"
          value={state.data.name}
          onChange={handleChange}
          disabled={state.loading}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="tu@email.com"
          value={state.data.email}
          onChange={handleChange}
          disabled={state.loading}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Cuéntame sobre tu proyecto o propuesta..."
          value={state.data.message}
          onChange={handleChange}
          disabled={state.loading}
          className="form-textarea"
          rows={5}
        />
      </div>

      {/* Error message */}
      {state.error && <div className="form-error">{state.error}</div>}

      {/* Success message */}
      {state.success && (
        <div className="form-success">Mensaje enviado correctamente ✓</div>
      )}

      {/* Submit button */}
      <button
        type="submit"
        disabled={state.loading || state.success}
        className="form-button"
      >
        {state.loading ? (
          <>
            <span className="spinner"></span>
            <span>Enviando...</span>
          </>
        ) : state.success ? (
          <>
            <span className="checkmark">✓</span>
            <span>Enviado</span>
          </>
        ) : (
          'Enviar Mensaje'
        )}
      </button>
    </form>
  );
}
