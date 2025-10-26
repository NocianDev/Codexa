
import { CartoonCard } from './graphics';

export default function Proyectos() {
  const projects = [
    // Ejemplos: puedes reemplazar image por una ruta en /public ("/images/..")
    // o por un import (import qImg from './assets/q.jpg' -> image: qImg)
    { id: 1, title: 'BrightSpark', tag: 'UI/UX', colorA:'#ffd86b', colorB:'#ffb199', desc: 'Interfaz ilustrada para SaaS.', image: '/images/Bright.png', link: 'https://bright-spark-three.vercel.app/' },
    { id: 2, title: 'QuantumGrid', tag: 'E-commerce', colorA:'#a29bfe', colorB:'#81ecec', desc: 'Tienda con estética divertida.', image: '/images/Quantum.png', link: 'https://quantum-grid-iota.vercel.app/' },
    { id: 3, title: 'Brand Spark', tag: 'Branding', colorA:'#ff9ff3', colorB:'#feca57', desc: 'Identidad con mascots.' }, // sin imagen -> fallback
    { id: 4, title: 'Analytics Pop', tag: 'Data', colorA:'#63e6be', colorB:'#60a5fa', desc: 'Dashboards con metáforas gráficas.', image: '/images/analytics-pop.jpg' },
    { id: 5, title: 'Landing Boost', tag: 'Marketing', colorA:'#ff8fab', colorB:'#ffd166', desc: 'Landing orientada a conversión.' , image: '/images/landing-boost.jpg', link: 'https://tusitio.com/landing-boost'},
    { id: 6, title: 'App Mobile', tag: 'Mobile', colorA:'#b8f2e6', colorB:'#c7d2fe', desc: 'App con microinteracciones.' },
  ];

  const hasImage = (img: any) => !!img;

  // normalizar src cuando se usa import (Vite/CRA pueden devolver objeto)
  const resolveSrc = (img: any) => {
    if (!img) return '';
    if (typeof img === 'string') return img;
    // módulos importados pueden venir como { default: '...'}
    return (img as any).default ?? img;
  };

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
          <article
            key={p.id}
            className="relative rounded-2xl overflow-hidden shadow-lg card-hover bg-white"
            aria-labelledby={`project-${p.id}-title`}
          >
            <div className="p-4">
              <div
                className="h-40 mb-4 rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-tr"
                style={{ background: `linear-gradient(135deg, ${p.colorA}, ${p.colorB})` }}
              >
                {/* Imagen clicable si hay link; fallback CartoonCard */}
                {hasImage(p.image) ? (
                  p.link ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Abrir ${p.title}`}
                      className="w-full h-full block group"
                    >
                      <img
                        src={resolveSrc(p.image)}
                        alt={p.title}
                        loading="lazy"
                        className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                      />
                    </a>
                  ) : (
                    <img
                      src={resolveSrc(p.image)}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  )
                ) : (
                  p.link ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Abrir ${p.title}`}
                      className="w-full h-full block"
                    >
                      <div className="w-11/12 h-4/5">
                        <CartoonCard colorA={p.colorA} colorB={p.colorB} label={p.title} />
                      </div>
                    </a>
                  ) : (
                    <div className="w-11/12 h-4/5">
                      <CartoonCard colorA={p.colorA} colorB={p.colorB} label={p.title} />
                    </div>
                  )
                )}
              </div>

              <div className="px-1">
                <div className="text-xs text-slate-400">{p.tag}</div>
                <h3 id={`project-${p.id}-title`} className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-slate-500">{p.desc}</p>
                <div className="mt-3">
                  {/* Si hay link, el botón abre la URL; si no, mantiene el ancla local */}
                  <a
                    href={p.link ?? '#proyectos'}
                    target={p.link ? '_blank' : undefined}
                    rel={p.link ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm"
                  >
                    Ver proyecto
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
