// src/components/Contacto.tsx
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Lee variables Vite (asegúrate de tenerlas en .env.local y en Vercel)
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default function Contacto() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorText, setErrorText] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorText(null);

    // Validaciones básicas
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorText('Por favor completa todos los campos.');
      return;
    }
    // email simple
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setErrorText('Introduce un correo válido.');
      return;
    }

    setLoading(true);
    setStatus('idle');

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([{ name: name.trim(), email: email.trim(), message: message.trim() }]);

      if (error) {
        console.error('Supabase insert error:', error);
        setErrorText('Error al enviar. Intenta de nuevo más tarde.');
        setStatus('error');
      } else {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      setErrorText('Error inesperado. Revisa la consola.');
      setStatus('error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="max-w-6xl mx-auto p-6 grid lg:grid-cols-2 gap-8 items-start">
      <div className="p-6 rounded-2xl bg-gradient-to-tr from-indigo-600 to-pink-500 text-white shadow-lg">
        <h2 className="text-3xl font-bold mb-2">Hablemos de tu proyecto</h2>
        <p className="mb-6 text-white/90">Cuéntame tu idea y te responderé con una propuesta ilustrada y presupuesto estimado.</p>

        <div className="mt-4 space-y-3">
          <div className="bg-white/10 p-3 rounded">
            <div className="text-xs text-white/90">Tiempo estimado de respuesta</div>
            <div className="font-semibold">24 - 48 horas</div>
          </div>
          <div className="bg-white/10 p-3 rounded">
            <div className="text-xs text-white/90">Precio base</div>
            <div className="font-semibold">$900</div>
          </div>
        </div>

        <div className="mt-6 text-sm">
          <div>También disponible via:</div>
          <div className="mt-3 flex gap-3">
            <a className="px-3 py-2 rounded bg-white/20">WhatsApp</a>
            <a className="px-3 py-2 rounded bg-white/20">Email</a>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Nombre</span>
            <input
              className="mt-1 block w-full border p-3 rounded"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Correo</span>
            <input
              className="mt-1 block w-full border p-3 rounded"
              placeholder="correo@ejemplo.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Mensaje</span>
            <textarea
              className="mt-1 block w-full border p-3 rounded"
              rows={5}
              placeholder="Cuéntame sobre tu idea..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={loading}
              className={`px-5 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold shadow-md transform transition ${
                loading ? 'opacity-60 cursor-wait' : 'hover:-translate-y-0.5'
              }`}
            >
              {loading ? 'Enviando...' : 'Enviar mensaje'}
            </button>

            <div className="text-sm text-slate-500">O escribe a <strong>hola@codexa.com</strong></div>
          </div>

          {/* Feedback */}
          {status === 'success' && (
            <div className="mt-3 p-3 rounded bg-green-50 text-green-800">¡Mensaje enviado! Te responderé pronto.</div>
          )}
          {status === 'error' && errorText && (
            <div className="mt-3 p-3 rounded bg-rose-50 text-rose-800">{errorText}</div>
          )}
          {status === 'idle' && errorText && (
            <div className="mt-3 p-3 rounded bg-rose-50 text-rose-800">{errorText}</div>
          )}
        </form>

        <div className="mt-6">
          {/* simple cartoon svg illustration kept from design */}
          <svg viewBox="0 0 800 320" className="w-full rounded-lg object-cover h-40" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" rx="12" fill="#f8fafc" />
            <g transform="translate(40,40)">
              <circle cx="60" cy="70" r="36" fill="#ffd86b" />
              <rect x="120" y="40" width="340" height="120" rx="12" fill="#c7d2fe" />
              <rect x="140" y="60" width="120" height="12" rx="6" fill="#fff" />
              <rect x="270" y="60" width="160" height="12" rx="6" fill="#fff" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
