import { useState } from 'react';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;
const EMAIL = 'angeldevsweb@gmail.com';
const WHATSAPP_NUMBER = '528261271886';

const supabase: SupabaseClient | null = SUPABASE_URL && SUPABASE_ANON_KEY
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

export default function Contacto() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorText, setErrorText] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorText(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorText('Completa todos los campos para poder enviar tu solicitud.');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setErrorText('Introduce un correo válido.');
      return;
    }

    if (!supabase) {
      const subject = encodeURIComponent('Solicitud de proyecto — Nova Ypsilon Tech');
      const body = encodeURIComponent(`Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`);
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      return;
    }

    setLoading(true);
    setStatus('idle');

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([{ name: name.trim(), email: email.trim(), message: message.trim() }]);

      if (error) {
        setErrorText('No se pudo guardar el mensaje. Intenta por WhatsApp o correo.');
        setStatus('error');
      } else {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      }
    } catch {
      setErrorText('Ocurrió un error inesperado. Intenta por WhatsApp o correo.');
      setStatus('error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="section-shell grid gap-10 py-20 lg:grid-cols-[0.85fr_1fr] lg:items-start">
      <div className="fade-up rounded-[2rem] border border-red-500/20 bg-gradient-to-br from-red-700/35 via-black to-white/[0.04] p-8 shadow-red-glow md:p-10">
        <p className="eyebrow">Contacto</p>
        <h1 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl">Hablemos de tu página, sistema o rediseño.</h1>
        <p className="mt-5 leading-8 text-white/64">
          Cuéntanos qué necesitas y te respondemos con una propuesta clara. Podemos ayudarte a lanzar una página nueva, modernizar una existente o darle una presencia más profesional a tu empresa.
        </p>

        <div className="mt-8 grid gap-4">
          <div className="contact-info-card">
            <span>Tiempo de respuesta</span>
            <strong>24 a 48 horas</strong>
          </div>
          <div className="contact-info-card">
            <span>Canales</span>
            <strong>WhatsApp · Email · Formulario</strong>
          </div>
          <div className="contact-info-card">
            <span>Especialidad</span>
            <strong>Web moderna, rutas reales y diseño premium</strong>
          </div>
        </div>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola NYT. Quiero cotizar un proyecto web.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-8 inline-flex"
        >
          Escribir por WhatsApp
        </a>
      </div>

      <form onSubmit={handleSubmit} className="fade-up delay-150 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl md:p-8">
        <div className="grid gap-5">
          <label className="form-field">
            <span>Nombre</span>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre" />
          </label>

          <label className="form-field">
            <span>Correo</span>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="correo@ejemplo.com" type="email" />
          </label>

          <label className="form-field">
            <span>Mensaje</span>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Cuéntanos qué tipo de sitio o solución necesitas..." rows={7} />
          </label>
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button type="submit" disabled={loading} className="btn-primary disabled:cursor-wait disabled:opacity-60">
            {loading ? 'Enviando...' : 'Enviar solicitud'}
          </button>
          <p className="text-sm text-white/45">También puedes escribir a <strong className="text-white/75">{EMAIL}</strong></p>
        </div>

        {status === 'success' && <div className="feedback-success">Mensaje enviado correctamente. Te responderemos pronto.</div>}
        {(status === 'error' || errorText) && errorText && <div className="feedback-error">{errorText}</div>}
      </form>
    </section>
  );
}
