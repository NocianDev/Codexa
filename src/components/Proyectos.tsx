type ProyectosProps = {
  navigate: (path: string) => void;
};

type Project = {
  title: string;
  category: string;
  desc: string;
  image: string;
  link: string;
  status: string;
};

const projects: Project[] = [
  {
    title: 'BrightSpark',
    category: 'UI / Landing Page',
    desc: 'Sitio visual para presentar una marca tecnológica con secciones claras, estética moderna y llamado a la acción directo.',
    image: '/images/Bright.png',
    link: 'https://bright-spark-three.vercel.app/',
    status: 'Publicado',
  },
  {
    title: 'QuantumGrid',
    category: 'E-commerce',
    desc: 'Experiencia digital enfocada en productos, navegación rápida y presentación atractiva para catálogo en línea.',
    image: '/images/Quantum.png',
    link: 'https://quantum-grid-iota.vercel.app/',
    status: 'Publicado',
  },
  {
    title: 'SonrisaNova',
    category: 'Sitio profesional',
    desc: 'Página para servicios dentales con comunicación confiable, diseño limpio y estructura pensada para generar citas.',
    image: '/images/SonrisaNova.png',
    link: 'https://sonrisanova.vercel.app/',
    status: 'Publicado',
  },
  {
    title: 'Retama Maquinaria',
    category: 'Servicios industriales',
    desc: 'Sitio para maquinaria con enfoque comercial, tarjetas de equipo, ubicación y presentación clara de venta/renta.',
    image: '/images/Trabajo1.png',
    link: 'https://retama-eight.vercel.app/',
    status: 'Publicado',
  },
  {
    title: 'Climatec',
    category: 'Concepto corporativo',
    desc: 'Propuesta visual para empresa técnica, ideal para mostrar servicios, confianza y capacidad operativa.',
    image: '/images/Climatec.png',
    link: '',
    status: 'Concepto',
  },
  {
    title: 'Intelitech',
    category: 'Software / Tech',
    desc: 'Concepto de presencia digital para soluciones de tecnología, automatización y sistemas empresariales.',
    image: '/images/Intelitech.png',
    link: '',
    status: 'Concepto',
  },
];

export default function Proyectos({ navigate }: ProyectosProps) {
  return (
    <section className="section-shell py-20">
      <div className="fade-up flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Portafolio</p>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-6xl">Proyectos con estética digital real.</h1>
          <p className="mt-5 max-w-2xl text-white/62">
            Esta sección muestra trabajos y conceptos que pueden abrirse como proyectos independientes. La idea es que NYT se vea como un estudio serio, no como una plantilla básica.
          </p>
        </div>
        <button onClick={() => navigate('/contacto')} className="btn-primary w-fit">Quiero algo así</button>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <article key={project.title} className="project-card fade-up" style={{ animationDelay: `${index * 80}ms` }}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <img src={project.image} alt={project.title} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full border border-red-300/30 bg-black/65 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-red-100 backdrop-blur-xl">
                {project.status}
              </span>
            </div>

            <div className="p-6">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-red-300">{project.category}</p>
              <h2 className="mt-3 text-2xl font-black text-white">{project.title}</h2>
              <p className="mt-3 min-h-20 text-sm leading-6 text-white/58">{project.desc}</p>

              <div className="mt-6 flex items-center justify-between gap-3">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-card">
                    Abrir proyecto
                  </a>
                ) : (
                  <span className="rounded-full border border-white/10 px-4 py-3 text-sm font-bold text-white/45">Próximamente</span>
                )}
                <span className="text-2xl text-red-400">↗</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
