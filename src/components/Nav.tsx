import { useState } from 'react';

export default function Nav({ current }: { current: string }) {
  const items = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white/60 backdrop-blur-md sticky top-0 z-30 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            {/* Logo: reemplazado por SVG del Código 2 */}
            <div
              className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg"
              style={{ boxShadow: '0 8px 24px rgba(99,102,241,0.18)' }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
              >
                <path
                  d="M12 2L15.5 8.5L22 12L15.5 15.5L12 22L8.5 15.5L2 12L8.5 8.5L12 2Z"
                  fill="white"
                />
              </svg>
            </div>

            <div>
              <a href="#inicio" onClick={() => setOpen(false)} className="text-lg font-semibold">Nova Ypsilon Tech</a>
              <div className="text-xs text-slate-400">diseño ilustrado</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {items.map(it => (
              <div key={it.id} className="relative">
                <a
                  href={`#${it.id}`}
                  className={`px-3 py-2 text-sm font-medium ${current === it.id ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  {it.label}
                </a>
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0">
                  <div
                    className="nav-underline"
                    style={{
                      width: current === it.id ? '60%' : '0%',
                      background: current === it.id ? 'linear-gradient(90deg,#7c3aed,#06b6d4)' : 'transparent'
                    }}
                  />
                </div>
              </div>
            ))}
            <a href="#contacto" className="ml-2 inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-pink-500 text-white text-sm shadow-md">Contrátame</a>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} aria-label="menu" className="p-2 rounded-md focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${open ? 'block' : 'hidden'} border-t`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {items.map(it => (
            <a
              key={it.id}
              href={`#${it.id}`}
              className={`block px-3 py-2 rounded-md text-base font-medium ${current === it.id ? 'bg-slate-100' : 'hover:bg-slate-50'}`}
            >
              {it.label}
            </a>
          ))}
          <a href="#contacto" className="block px-3 py-2 rounded-md text-base font-medium bg-indigo-600 text-white text-center">Contrátame</a>
        </div>
      </div>
    </header>
  );
}

