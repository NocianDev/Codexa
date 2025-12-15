export default function Inicio() {
  return (
    <section className="relative overflow-hidden">
      <div className="blob w-56 h-56 -left-24 -top-16 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full floaty"></div>
      <div className="blob w-44 h-44 right-6 top-56 bg-gradient-to-r from-amber-300 to-pink-400 rounded-full opacity-60 floaty" style={{ animationDelay: '1.6s' }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4"><span className="gradient-text">Nova Ypsilon Tech</span> — Diseño ilustrado que convierte</h1>
          <p className="text-lg text-slate-600 mb-6">Diseños coloridos, historias visuales y experiencias con personalidad. Ilustraciones propias para cada proyecto.</p>

          <div className="flex items-center gap-3">
            <a href="#proyectos" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold shadow-lg transform hover:-translate-y-1 transition">Ver proyectos</a>
            <a href="#contacto" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 text-sm text-slate-700">Contacto</a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            <div className="p-3 bg-white rounded shadow-sm text-center">
              <div className="text-2xl font-bold">+5</div>
              <div className="text-xs text-slate-500">Proyectos</div>
            </div>
            <div className="p-3 bg-white rounded shadow-sm text-center">
              <div className="text-2xl font-bold">5.0</div>
              <div className="text-xs text-slate-500">Satisfacción</div>
            </div>
            <div className="p-3 bg-white rounded shadow-sm text-center">
              <div className="text-2xl font-bold">Rápido</div>
              <div className="text-xs text-slate-500">Entrega</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl shadow-2xl overflow-hidden transform-gpu card-hover">
            {/* Reemplazado CartoonHero por una imagen estática */}
            <img src="/images/Hero2.png" alt="Proyecto ilustrado" className="w-full h-64 sm:h-80 md:h-96 object-cover" />

            <div className="p-5 bg-gradient-to-t from-black/40 to-transparent text-white">
              
            </div>
          </div>

          <div className="absolute -left-8 -bottom-8 bg-white rounded-xl p-4 shadow-lg glass w-60 card-hover">
            <div className="text-xs text-slate-500">Paquete</div>
            <div className="font-semibold">Ilustración + Web</div>
            <div className="mt-2 text-sm text-slate-600">Perfecto para startups creativas.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
