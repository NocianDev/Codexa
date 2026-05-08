const EMAIL = 'angeldevsweb@gmail.com';
const WHATSAPP_NUMBER = '528261271886';

type Service = {
  title: string;
  desc: string;
  items: string[];
  icon: string;
  waText: string;
};

const services: Service[] = [
  {
    title: 'Diseño y desarrollo web',
    desc: 'Sitios modernos, rápidos y responsivos para negocios que necesitan verse profesionales desde el primer clic.',
    items: ['Landing pages', 'Sitios corporativos', 'Portafolios comerciales'],
    icon: '◆',
    waText: 'Hola NYT. Quiero información sobre diseño y desarrollo web.',
  },
  {
    title: 'Automatización digital',
    desc: 'Flujos, formularios, bases de datos e integraciones para reducir trabajo manual y capturar clientes mejor.',
    items: ['Formularios conectados', 'Dashboards básicos', 'Integración de herramientas'],
    icon: '●',
    waText: 'Hola NYT. Me interesa automatizar procesos de mi negocio.',
  },
  {
    title: 'Mantenimiento y mejora',
    desc: 'Actualización visual, corrección de errores, optimización y mejoras constantes para sitios ya publicados.',
    items: ['Rediseños', 'SEO técnico inicial', 'Optimización responsive'],
    icon: '▲',
    waText: 'Hola NYT. Quiero mejorar o dar mantenimiento a mi página web.',
  },
];

function whatsappHref(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function mailHref(service: string) {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(`Cotización — ${service} | NYT`)}&body=${encodeURIComponent(`Hola Nova Ypsilon Tech,\n\nMe interesa el servicio de ${service}. Quisiera recibir información y una cotización.\n\nMi nombre es:`)}`;
}

export default function Servicios() {
  return (
    <section className="section-shell py-20">
      <div className="fade-up text-center">
        <p className="eyebrow mx-auto">Servicios</p>
        <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-6xl">
          Soluciones digitales para que tu marca se vea más grande, más seria y más confiable.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-white/62">
          NYT combina diseño visual, estructura comercial y tecnología web para transformar una idea en una presencia digital lista para clientes reales.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {services.map((service, index) => (
          <article key={service.title} className="service-card fade-up" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-2xl font-black text-white shadow-red-glow">
              {service.icon}
            </div>
            <h2 className="mt-7 text-2xl font-black text-white">{service.title}</h2>
            <p className="mt-4 leading-7 text-white/60">{service.desc}</p>

            <ul className="mt-6 space-y-3">
              {service.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-semibold text-white/70">
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={whatsappHref(service.waText)} target="_blank" rel="noopener noreferrer" className="btn-card">WhatsApp</a>
              <a href={mailHref(service.title)} className="btn-secondary px-4 py-3 text-sm">Email</a>
            </div>
          </article>
        ))}
      </div>

      <div className="fade-up mt-14 rounded-[2rem] border border-red-500/20 bg-gradient-to-br from-red-600/20 via-white/[0.04] to-black p-8 md:p-10">
        <div className="grid gap-8 md:grid-cols-[1fr_0.7fr] md:items-center">
          <div>
            <p className="eyebrow">Método NYT</p>
            <h2 className="mt-4 text-3xl font-black text-white">No solo se trata de que la página exista; se trata de que parezca una marca real.</h2>
            <p className="mt-4 text-white/60">
              Por eso se cuida el diseño, los textos, la navegación, la velocidad, las rutas, las llamadas a la acción y la estructura para publicar en Vercel sin perder profesionalismo.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/45 p-6">
            <div className="text-5xl font-black text-white">NYT</div>
            <div className="mt-2 text-sm uppercase tracking-[0.28em] text-red-300">Build · Launch · Improve</div>
          </div>
        </div>
      </div>
    </section>
  );
}
