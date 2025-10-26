// src/App.tsx
import React, { useEffect, useRef, useState, type JSX } from 'react';
import Nav from './components/Nav';
import Inicio from './components/Inicio';
import Proyectos from './components/Proyectos';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';

function getRouteFromHash() {
  const h = window.location.hash.replace('#', '').toLowerCase();
  return h || 'inicio';
}

/**
 * Comportamiento de la animación:
 * - `route` mantiene la ruta actual (se usa para la navbar activa).
 * - `displayRoute` es la sección que se renderiza en pantalla.
 * - `visible` controla la clase de entrada/salida (fade + translateY).
 * Al detectar cambio de hash: actualizamos `route` inmediatamente (underline nav),
 * luego hacemos fade-out (visible=false), cambiamos `displayRoute` y hacemos fade-in.
 */
export default function App(): JSX.Element {
  const [route, setRoute] = useState(getRouteFromHash());
  const [displayRoute, setDisplayRoute] = useState<string>(getRouteFromHash());
  const [visible, setVisible] = useState<boolean>(true);
  const timeoutRef = useRef<number | null>(null);
  const ANIM_DURATION = 260; // durable de la animación (ms) - ajustar si quieres más suave

  useEffect(() => {
    function onHash() {
      const newRoute = getRouteFromHash();
      if (newRoute === route) return;

      // Nav indicator updates immediately
      setRoute(newRoute);

      // Start exit animation
      setVisible(false);

      // After the exit animation, swap content and enter
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = window.setTimeout(() => {
        setDisplayRoute(newRoute);
        setVisible(true);
      }, ANIM_DURATION);
    }

    window.addEventListener('hashchange', onHash);

    // Ensure there's a hash on initial load
    if (!window.location.hash) {
      window.location.hash = '#inicio';
    } else {
      setRoute(getRouteFromHash());
      setDisplayRoute(getRouteFromHash());
      setVisible(true);
    }

    return () => {
      window.removeEventListener('hashchange', onHash);
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route]); // intentionally depends on route so handler sees latest route

  // Small helper to render the chosen section
  function renderSection(name: string) {
    switch (name) {
      case 'inicio':
        return <Inicio />;
      case 'proyectos':
        return <Proyectos />;
      case 'servicios':
        return <Servicios />;
      case 'contacto':
        return <Contacto />;
      default:
        return (
          <section className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-3">Página no encontrada</h2>
            <p className="text-slate-600">La sección solicitada no existe. Usa la navbar para navegar.</p>
          </section>
        );
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Nav current={route} />

      <main className="flex-1 py-8">
        {/* Container con animación: usamos utilidades de Tailwind para transition, opacity y transform */}
        <div
          // transition-all aplicado: duración coherente con ANIM_DURATION (ms)
          className={`max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDuration: `${ANIM_DURATION}ms` }}
          key={displayRoute} // opcional: ayuda al rendimiento en algunos casos
        >
          {renderSection(displayRoute)}
        </div>
      </main>

      <footer className="bg-white border-t py-4">
        <div className="max-w-6xl mx-auto px-4 text-sm text-slate-500">© {new Date().getFullYear()} MiSitio — Vite demo</div>
      </footer>
    </div>
  );
}
