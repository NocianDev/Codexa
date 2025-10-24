import React, { useState, type JSX } from "react";

// CAMBIA ESTA CONSTANTE por tu correo real
const RECEIVER = "angeldevsweb@gmail.com";

export default function App(): JSX.Element {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = encodeURIComponent(`Contacto desde QuantumGrid - ${name || "Nuevo contacto"}`);
    const body = encodeURIComponent(`Nombre: ${name}
Correo: ${email}

Mensaje:
${message}`);

    // Abre el cliente de correo del usuario con el mensaje prellenado
    window.location.href = `mailto:${RECEIVER}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-700 to-pink-600 text-slate-50 antialiased">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center shadow-lg">QG</div>
          <div>
            <h1 className="font-bold text-lg">QuantumGrid</h1>
            <p className="text-sm opacity-80">Experiencias web audaces que convierten</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 items-center">
          <a href="#servicios" className="hover:underline">Servicios</a>
          <a href="#solutions" className="hover:underline">Soluciones</a>
          <a href="#contacto" className="bg-white/20 px-4 py-2 rounded-md hover:bg-white/30">Contacto</a>
        </nav>

        <button className="md:hidden bg-white/10 px-3 py-2 rounded-md">Menu</button>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-20">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-center mt-6">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Haz que tu proyecto destaque<br />
              <span className="text-yellow-300">- diseño que convierte.</span>
            </h2>

            <p className="text-lg opacity-90">Transformamos ideas en sitios rápidos y atractivos que generan resultados.</p>

            <div className="flex gap-4">
              {/* CTA principal: va al formulario de contacto */}
              <a href="#contacto" className="inline-block bg-yellow-300 text-indigo-900 font-semibold px-6 py-3 rounded-lg shadow-lg transform hover:-translate-y-0.5 transition">Solicitar presupuesto</a>

              {/* Acción secundaria: ver soluciones */}
              <a href="#solutions" className="inline-block border border-white/25 px-6 py-3 rounded-lg">Ver soluciones</a>
            </div>

            <div className="mt-4 flex gap-3 text-sm opacity-90">
              <span className="bg-white/10 px-3 py-2 rounded">+5 proyectos entregados</span>
              <span className="bg-white/10 px-3 py-2 rounded">Diseño + Desarrollo</span>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop&q=60" alt="Imagen principal" className="w-full h-72 object-cover md:h-96" />
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="mt-16 bg-white/6 rounded-2xl p-6">
          <h3 className="text-2xl font-bold">Servicios</h3>
          <p className="mt-2 opacity-90">Todo lo necesario para lanzar una presencia digital sólida.</p>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="p-4 bg-white/5 rounded-lg hover:scale-[1.02] transition-shadow shadow-sm">
              <h4 className="font-semibold">Diseño UI/UX</h4>
              <p className="mt-2 text-sm opacity-90">Interfaces modernas enfocadas en claridad y conversión.</p>
            </div>

            <div className="p-4 bg-white/5 rounded-lg hover:scale-[1.02] transition-shadow shadow-sm">
              <h4 className="font-semibold">Desarrollo Frontend</h4>
              <p className="mt-2 text-sm opacity-90">React, Vite, rendimiento y accesibilidad.</p>
            </div>

            <div className="p-4 bg-white/5 rounded-lg hover:scale-[1.02] transition-shadow shadow-sm">
              <h4 className="font-semibold">E-commerce</h4>
              <p className="mt-2 text-sm opacity-90">Tiendas online con checkout fluido y panel administrativo.</p>
            </div>
          </div>
        </section>

        {/* Soluciones (reemplaza Portafolio) */}
        <section id="solutions" className="mt-12">
          <h3 className="text-2xl font-bold">Soluciones</h3>
          <p className="mt-2 opacity-90">Elige un punto de partida; adaptamos cada paquete a tus necesidades.</p>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="p-6 bg-white/5 rounded-xl shadow-lg">
              <h4 className="font-semibold text-lg">Sitio Inicial</h4>
              <p className="mt-2 text-sm opacity-90">Ideal para marcas personales y páginas de producto único.</p>
              <div className="mt-4">
                <a href="#contacto" className="inline-block text-sm font-semibold underline">Solicitar</a>
              </div>
            </div>

            <div className="p-6 bg-white/5 rounded-xl shadow-lg">
              <h4 className="font-semibold text-lg">Paquete Empresarial</h4>
              <p className="mt-2 text-sm opacity-90">Landing pages, captación de leads y analíticas para crecer ventas.</p>
              <div className="mt-4">
                <a href="#contacto" className="inline-block text-sm font-semibold underline">Solicitar</a>
              </div>
            </div>

            <div className="p-6 bg-white/5 rounded-xl shadow-lg">
              <h4 className="font-semibold text-lg">Lanzamiento E-commerce</h4>
              <p className="mt-2 text-sm opacity-90">Configuración completa de tienda, pagos y gestión de pedidos.</p>
              <div className="mt-4">
                <a href="#contacto" className="inline-block text-sm font-semibold underline">Solicitar</a>
              </div>
            </div>
          </div>
        </section>

        {/* Contacto / CTA */}
        <section id="contacto" className="mt-16 bg-white/6 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold">Listo para empezar?</h4>
            <p className="mt-2 opacity-90">Envía un mensaje breve y te responderemos pronto.</p>
          </div>

          <form onSubmit={handleSubmit} className="w-full md:w-auto flex flex-col md:flex-row gap-2 items-stretch">
            <input
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tu nombre"
              required
              className="px-4 py-3 rounded-lg bg-white/10 text-white placeholder:text-white/70 caret-white outline-none outline-none"
            />

            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@correo.com"
              required
              className="px-4 py-3 rounded-lg bg-white/10 text-white placeholder:text-white/70 caret-white outline-none outline-none"
            />

            <input
              name="message"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Mensaje breve"
              required
              className="px-4 py-3 rounded-lg bg-white/10 text-white placeholder:text-white/70 caret-white outline-none outline-none md:w-64"
            />

            <button type="submit" className="bg-yellow-300 text-indigo-900 px-5 py-3 rounded-lg font-semibold">Enviar mensaje</button>
          </form>
        </section>

        {/* Footer */}
        <footer className="mt-12 py-8 text-sm opacity-80">
          <div className="flex items-center justify-between">
            <div>© {new Date().getFullYear()} QuantumGrid</div>
            <div className="flex gap-4">
              <a href="#">LinkedIn</a>
              <a href="#">GitHub</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

/*
  Notas:
  - La seccion "Soluciones" reemplaza al portafolio. Cada tarjeta enlaza al formulario de contacto.
  - El CTA principal ahora lee "Solicitar presupuesto" y ancla al formulario de contacto.
  - Nombre de empresa actualizado a QuantumGrid y el texto traducido al español.
  - Si quieres envio de correo sin abrir el cliente del usuario (server-side), puedo agregar una funcion serverless de ejemplo.
*/
