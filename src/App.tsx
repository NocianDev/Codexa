import { useEffect, useState, type JSX } from 'react';
import Nav from './components/Nav';
import Inicio from './components/Inicio';
import Proyectos from './components/Proyectos';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';

const routes = ['/', '/proyectos', '/servicios', '/contacto'];

function normalizePath(pathname: string) {
  const clean = pathname.replace(/\/$/, '') || '/';
  return routes.includes(clean) ? clean : '/404';
}

function getCurrentPath() {
  return normalizePath(window.location.pathname);
}

export default function App(): JSX.Element {
  const [route, setRoute] = useState(getCurrentPath());
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onPopState = () => {
      setVisible(false);
      window.setTimeout(() => {
        setRoute(getCurrentPath());
        setVisible(true);
      }, 180);
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  function navigate(path: string) {
    if (path === route) return;
    setVisible(false);
    window.setTimeout(() => {
      window.history.pushState({}, '', path);
      setRoute(normalizePath(path));
      setVisible(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 180);
  }

  function renderPage() {
    switch (route) {
      case '/':
        return <Inicio navigate={navigate} />;
      case '/proyectos':
        return <Proyectos navigate={navigate} />;
      case '/servicios':
        return <Servicios />;
      case '/contacto':
        return <Contacto />;
      default:
        return (
          <section className="section-shell py-24 text-center">
            <p className="eyebrow mx-auto">Error 404</p>
            <h1 className="mt-5 text-4xl font-black text-white">Esta ruta no existe</h1>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              La página que intentaste abrir no se encontró. Puedes regresar al inicio para seguir explorando Nova Ypsilon Tech.
            </p>
            <button onClick={() => navigate('/')} className="btn-primary mt-8">Volver al inicio</button>
          </section>
        );
    }
  }

  return (
    <div className="min-h-screen overflow-hidden bg-nyt-dark text-white">
      <div className="site-grid-bg" />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <Nav current={route} navigate={navigate} />

      <main className={`relative z-10 transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        {renderPage()}
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-black/50 py-8 backdrop-blur-xl">
        <div className="section-shell flex flex-col gap-3 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Nova Ypsilon Tech. Tecnología, diseño y soluciones digitales.</span>
          <span className="font-semibold text-white/75">NYT · Red / Black / White System</span>
        </div>
      </footer>
    </div>
  );
}
