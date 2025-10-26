import { useEffect, useRef, useState, type JSX } from 'react';
import Nav from './components/Nav';
import Inicio from './components/Inicio';
import Proyectos from './components/Proyectos';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';

function getRouteFromHash() {
  const h = window.location.hash.replace('#', '').toLowerCase();
  return h || 'inicio';
}

export default function App(): JSX.Element {
  const [route, setRoute] = useState(getRouteFromHash());
  const [displayRoute, setDisplayRoute] = useState<string>(getRouteFromHash());
  const [visible, setVisible] = useState<boolean>(true);
  const timeoutRef = useRef<number | null>(null);
  const ANIM_DURATION = 260;

  useEffect(() => {
    function onHash() {
      const newRoute = getRouteFromHash();
      if (newRoute === route) return;

      setRoute(newRoute);
      setVisible(false);

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = window.setTimeout(() => {
        setDisplayRoute(newRoute);
        setVisible(true);
      }, ANIM_DURATION);
    }

    window.addEventListener('hashchange', onHash);

    if (!window.location.hash) {
      window.location.hash = '#inicio';
    } else {
      setRoute(getRouteFromHash());
      setDisplayRoute(getRouteFromHash());
      setVisible(true);
    }

    return () => {
      window.removeEventListener('hashchange', onHash);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route]);

  function renderSection(name: string) {
    switch (name) {
      case 'inicio': return <Inicio />;
      case 'proyectos': return <Proyectos />;
      case 'servicios': return <Servicios />;
      case 'contacto': return <Contacto />;
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
        <div
          className={`max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDuration: `${ANIM_DURATION}ms` }}
          key={displayRoute}
        >
          {renderSection(displayRoute)}
        </div>
      </main>

      <footer className="bg-white border-t py-4">
        <div className="max-w-6xl mx-auto px-4 text-sm text-slate-500">© {new Date().getFullYear()} Codexa — Diseño ilustrado</div>
      </footer>
    </div>
  );
}
