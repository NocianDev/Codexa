import { CartoonCard } from './graphics';

export default function Proyectos() {
  const projects = [
    { id: 1, title: 'Quantum UI', tag: 'UI/UX', colorA:'#ffd86b', colorB:'#ffb199', desc: 'Interfaz ilustrada para SaaS.' },
    { id: 2, title: 'E-commerce Joy', tag: 'E-commerce', colorA:'#a29bfe', colorB:'#81ecec', desc: 'Tienda con estética divertida.' },
    { id: 3, title: 'Brand Spark', tag: 'Branding', colorA:'#ff9ff3', colorB:'#feca57', desc: 'Identidad con mascots.' },
    { id: 4, title: 'Analytics Pop', tag: 'Data', colorA:'#63e6be', colorB:'#60a5fa', desc: 'Dashboards con metáforas gráficas.' },
    { id: 5, title: 'Landing Boost', tag: 'Marketing', colorA:'#ff8fab', colorB:'#ffd166', desc: 'Landing orientada a conversión.' },
    { id: 6, title: 'App Mobile', tag: 'Mobile', colorA:'#b8f2e6', colorB:'#c7d2fe', desc: 'App con microinteracciones.' },
  ];

  return (
    <section className="max-w-6xl mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold">Proyectos</h2>
          <p className="text-slate-600">Selección de trabajos con ilustraciones propias.</p>
        </div>
        <a href="#proyectos" className="text-sm font-medium text-indigo-600">Ver todo</a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => (
          <article key={p.id} className="relative rounded-2xl overflow-hidden shadow-lg card-hover bg-white">
            <div className="p-4">
              <div className="h-40 mb-4 rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-tr" style={{ background: `linear-gradient(135deg, ${p.colorA}, ${p.colorB})` }}>
                <div style={{ width: '80%', height: '70%' }}>
                  {CartoonCard({ colorA: p.colorA, colorB: p.colorB, label: p.title })}
                </div>
              </div>

              <div className="px-1">
                <div className="text-xs text-slate-400">{p.tag}</div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-slate-500">{p.desc}</p>
                <div className="mt-3">
                  <a href="#proyectos" className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm">Ver proyecto</a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
