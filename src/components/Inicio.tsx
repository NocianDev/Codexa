type InicioProps = {
  navigate: (path: string) => void;
};

const highlights = [
  { value: '+5', label: 'proyectos publicados' },
  { value: '24/7', label: 'presencia digital' },
  { value: '100%', label: 'enfoque visual' },
];

const process = [
  'Identidad visual y estructura del sitio',
  'Diseño responsive con animaciones suaves',
  'Publicación, optimización y soporte inicial',
];

export default function Inicio({ navigate }: InicioProps) {
  return (
    <section className="relative">
      <div className="section-shell grid min-h-[calc(100vh-80px)] items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="fade-up">
          <p className="eyebrow">Nova Ypsilon Tech · Desarrollo digital</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Sitios web modernos con presencia fuerte, velocidad y estilo profesional.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
            En NYT creamos páginas web, interfaces y soluciones digitales para negocios que necesitan verse serios, vender mejor y diferenciarse desde el primer impacto. Diseño oscuro, detalles premium y estructura lista para crecer.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <button onClick={() => navigate('/proyectos')} className="btn-primary">
              Ver portafolio
            </button>
            <button onClick={() => navigate('/servicios')} className="btn-secondary">
              Explorar servicios
            </button>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
            {highlights.map((item) => (
              <div key={item.label} className="metric-card">
                <div className="text-2xl font-black text-white">{item.value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/45">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-up delay-150">
          <div className="hero-visual card-3d">
            <div className="hero-screen">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-red-300">NYT System</p>
                  <h2 className="mt-2 text-2xl font-black text-white">Web Experience</h2>
                </div>
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="h-3 w-3 rounded-full bg-white/40" />
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                </div>
              </div>

              <div className="mt-7 grid gap-4">
                {process.map((step, index) => (
                  <div key={step} className="glass-row">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600 font-black text-white">0{index + 1}</span>
                    <span className="text-sm font-semibold text-white/80">{step}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-3xl border border-red-400/20 bg-gradient-to-br from-red-600/25 via-white/5 to-black p-5">
                <p className="text-sm text-white/60">Resultado esperado</p>
                <p className="mt-2 text-3xl font-black text-white">Una marca que se ve lista para vender.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
