export default function Contacto() {
  return (
    <section className="max-w-6xl mx-auto p-6 grid lg:grid-cols-2 gap-8 items-start">
      <div className="p-6 rounded-2xl bg-gradient-to-tr from-indigo-600 to-pink-500 text-white shadow-lg">
        <h2 className="text-3xl font-bold mb-2">Hablemos de tu proyecto</h2>
        <p className="mb-6 text-white/90">Cuéntame tu idea y te responderé con una propuesta con ilustraciones y propuesta visual.</p>

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
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Formulario simulado: gracias — pronto te contacto.'); }}>
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Nombre</span>
            <input className="mt-1 block w-full border p-3 rounded" placeholder="Tu nombre" required />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Correo</span>
            <input className="mt-1 block w-full border p-3 rounded" placeholder="correo@ejemplo.com" type="email" required />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Mensaje</span>
            <textarea className="mt-1 block w-full border p-3 rounded" rows={5} placeholder="Cuéntame sobre tu idea..." required />
          </label>

          <div className="flex items-center justify-between">
            <button type="submit" className="px-5 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold shadow-md transform hover:-translate-y-0.5 transition">Enviar mensaje</button>
            <div className="text-sm text-slate-500">O escribe a <strong>hola@codexa.com</strong></div>
          </div>
        </form>

        <div className="mt-6">
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
