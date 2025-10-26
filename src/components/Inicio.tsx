import React from 'react';

export default function Inicio() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="blob w-56 h-56 -left-24 -top-16 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full floaty"></div>
      <div className="blob w-44 h-44 right-6 top-56 bg-gradient-to-r from-amber-300 to-pink-400 rounded-full opacity-60 floaty" style={{ animationDelay: '1.6s' }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            <span className="gradient-text">Diseño web</span> que conecta con tu público
          </h1>
          <p className="text-lg text-slate-600 mb-6">Proyectos modernos, rendimiento real y una estética que convierte visitantes en clientes. Miro al detalle, diseño con propósito.</p>

          <div className="flex items-center gap-3">
            <a href="#proyectos" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold shadow-lg transform hover:-translate-y-1 transition">
              Ver proyectos
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>

            <a href="#contacto" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 text-sm text-slate-700">Contacto</a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            <div className="p-3 bg-white rounded shadow-sm text-center">
              <div className="text-2xl font-bold">+12</div>
              <div className="text-xs text-slate-500">Proyectos</div>
            </div>
            <div className="p-3 bg-white rounded shadow-sm text-center">
              <div className="text-2xl font-bold">4.9</div>
              <div className="text-xs text-slate-500">Calificación</div>
            </div>
            <div className="p-3 bg-white rounded shadow-sm text-center">
              <div className="text-2xl font-bold">Rápido</div>
              <div className="text-xs text-slate-500">Optimizado</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl shadow-2xl overflow-hidden transform-gpu card-hover">
            <img
              src="https://picsum.photos/900/700?random=15"
              alt="Hero proyecto"
              className="w-full h-96 object-cover"
            />
            <div className="p-5 bg-gradient-to-t from-black/40 to-transparent text-white">
              <h3 className="text-xl font-semibold">Proyecto destacado</h3>
              <p className="text-sm text-white/80">Concepto y desarrollo para una marca de tecnología.</p>
            </div>
          </div>

          {/* small floating card */}
          <div className="absolute -left-8 -bottom-8 bg-white rounded-xl p-4 shadow-lg glass w-60 card-hover">
            <div className="text-xs text-slate-500">Propuesta</div>
            <div className="font-semibold">Web + SEO + Soporte</div>
            <div className="mt-2 text-sm text-slate-600">Paquetes pensados para empezar rápido.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
