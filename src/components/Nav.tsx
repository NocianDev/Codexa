import { useState } from 'react';

type NavProps = {
  current: string;
  navigate: (path: string) => void;
};

const items = [
  { path: '/', label: 'Inicio' },
  { path: '/proyectos', label: 'Proyectos' },
  { path: '/servicios', label: 'Servicios' },
  { path: '/contacto', label: 'Contacto' },
];

export default function Nav({ current, navigate }: NavProps) {
  const [open, setOpen] = useState(false);

  function go(path: string) {
    setOpen(false);
    navigate(path);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-2xl">
      <div className="section-shell">
        <div className="flex h-20 items-center justify-between">
          <button onClick={() => go('/')} className="group flex items-center gap-4 text-left" aria-label="Ir al inicio">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-red-400/40 bg-gradient-to-br from-red-600 via-black to-white/10 shadow-red-glow transition group-hover:scale-105">
              <span className="text-lg font-black tracking-tighter text-white">NYT</span>
              <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-red-500 shadow-red-dot" />
            </div>
            <div>
              <p className="text-base font-black uppercase tracking-[0.22em] text-white">Nova Ypsilon Tech</p>
              <p className="text-xs uppercase tracking-[0.28em] text-red-300/80">Digital Studio</p>
            </div>
          </button>

          <nav className="hidden items-center gap-2 md:flex">
            {items.map((item) => {
              const active = current === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => go(item.path)}
                  className={`nav-link ${active ? 'nav-link-active' : ''}`}
                >
                  {item.label}
                </button>
              );
            })}
            <button onClick={() => go('/contacto')} className="btn-primary ml-3 py-3">
              Cotizar proyecto
            </button>
          </nav>

          <button
            onClick={() => setOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
            aria-label="Abrir menú"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 7h16M4 12h16M4 17h16'} />
            </svg>
          </button>
        </div>
      </div>

      <div className={`md:hidden ${open ? 'block' : 'hidden'} border-t border-white/10 bg-black/90 px-4 pb-5 pt-3`}>
        <div className="space-y-2">
          {items.map((item) => (
            <button
              key={item.path}
              onClick={() => go(item.path)}
              className={`w-full rounded-xl px-4 py-3 text-left text-sm font-bold uppercase tracking-[0.18em] ${current === item.path ? 'bg-red-600 text-white' : 'bg-white/5 text-white/70'}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
