import React from 'react';

const services = [
  { id: 's1', title: 'Diseño Web', desc: 'UX/UI centrado en conversión y rendimiento.', icon: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none"><path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )},
  { id: 's2', title: 'Desarrollo', desc: 'Front + Backend + optimizaciones.', icon: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )},
  { id: 's3', title: 'Soporte', desc: 'Mantenimiento y hosting gestionado.', icon: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none"><path d="M12 2l3 6 6 .5-4.5 3.5L18 22l-6-3.5L6 22l1.5-9.0L3 9.5 9 9z" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )},
];

export default function Servicios() {
  return (
    <section className="max-w-6xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold">Servicios</h2>
        <p className="text-slate-600">Paquetes adaptados a startups y PYMEs.</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        {services.map(s => (
          <div key={s.id} className="p-6 rounded-2xl glass card-hover">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-400 text-white mb-4">
              {s.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-slate-600">{s.desc}</p>
            <div className="mt-4">
              <a href="#contacto" className="text-sm font-medium inline-flex items-center gap-2 text-indigo-600">Solicitar info →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
