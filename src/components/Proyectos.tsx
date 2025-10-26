

const projects = [
  { id: 1, title: 'Quantum UI', tag: 'UI/UX', img: 'https://picsum.photos/800/600?random=21', desc: 'Interfaz moderna para app SaaS.' },
  { id: 2, title: 'E-commerce Fast', tag: 'E-commerce', img: 'https://picsum.photos/800/600?random=22', desc: 'Tienda con rendimiento y SEO.' },
  { id: 3, title: 'Portfolio Brand', tag: 'Branding', img: 'https://picsum.photos/800/600?random=23', desc: 'Identidad visual y landing.' },
  { id: 4, title: 'Analytics Dash', tag: 'Data', img: 'https://picsum.photos/800/600?random=24', desc: 'Dashboard interactivo.' },
  { id: 5, title: 'Landing Boost', tag: 'Marketing', img: 'https://picsum.photos/800/600?random=25', desc: 'Landing orientada a conversión.' },
  { id: 6, title: 'App Mobile', tag: 'Mobile', img: 'https://picsum.photos/800/600?random=26', desc: 'App con microinteracciones.' },
];

export default function Proyectos() {
  return (
    <section className="max-w-6xl mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold">Proyectos</h2>
          <p className="text-slate-600">Una selección de trabajos con diseño y rendimiento.</p>
        </div>
        <a href="#proyectos" className="text-sm font-medium text-indigo-600">Ver todo</a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => (
          <article key={p.id} className="relative rounded-2xl overflow-hidden shadow-lg card-hover">
            <img src={p.img} alt={p.title} className="w-full h-56 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
              <div>
                <div className="text-xs text-white/80">{p.tag}</div>
                <h3 className="text-lg text-white font-semibold">{p.title}</h3>
                <p className="text-sm text-white/80">{p.desc}</p>
                <div className="mt-3">
                  <a className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-sm border border-white/10">Ver proyecto</a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
