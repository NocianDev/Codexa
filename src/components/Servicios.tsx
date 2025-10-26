// src/components/Servicios.tsx
// PERSONALIZA estos datos:
const EMAIL = 'angeldevsweb@gmail.com'; // pon aquí tu correo real: 'tuemail@dominio.com'
const WHATSAPP_NUMBER = '528261271886'; // formato internacional sin '+'. Ej: Mexico -> '5215512345678'

type Service = {
  id: string;
  title: string;
  desc: string;
  icon: string;
};

// Mensajes personalizados por servicio
const SERVICE_MESSAGES: Record<string, { emailSubject: string; emailBody: string; waText: string }> = {
  s1: {
    emailSubject: 'Solicitud de información — Dudas (Codexa)',
    emailBody:
      `Hola Codexa,\n\nMe interesa el servicio de Dudas.\n[Tu nombre]`,
    waText:
      'Hola Codexa. Me interesa el servicio de Dudas',
  },
  s2: {
    emailSubject: 'Solicitud de presupuesto — Desarrollo Web (Codexa)',
    emailBody:
      `Hola Codexa,\n\nQuisiera presupuesto para desarrollo web: sitio responsivo, integración de CMS y optimización SEO. ¿Me pueden indicar tarifas y tiempos estimados?\n\nSaludos,\n[Tu nombre]`,
    waText:
      'Hola Codexa. Quiero info sobre Desarrollo (sitio responsivo + CMS + SEO). ¿Me envían precios y tiempos?',
  },
  s3: {
    emailSubject: 'Consulta — Soporte y Mantenimiento (Codexa)',
    emailBody:
      `Hola Codexa,\n\nEstoy interesado en soporte y mantenimiento continuo (actualizaciones, backups y monitoreo). ¿Podrían compartir planes, precios y SLA?\n\nGracias,\n[Tu nombre]`,
    waText:
      'Hola Codexa. Me interesa el servicio de Soporte (mantenimiento, backups, SLA). ¿Me comparten planes y precios?',
  },
};

export default function Servicios() {
  const services: Service[] = [
    { id: 's1', title: 'Dudas', desc: 'Hosting, Paquetes y dominios.', icon: '💬' },
    { id: 's2', title: 'Desarrollo', desc: 'Web moderna, rápida y accesible.', icon: '⚙️' },
    { id: 's3', title: 'Soporte', desc: 'Mantenimiento y crecimiento continuo.', icon: '🤝' },
  ];

  // Construye mailto con asunto y cuerpo personalizados para cada servicio
  function mailtoHrefFor(serviceId: string) {
    const msg = SERVICE_MESSAGES[serviceId];
    const subject = encodeURIComponent(msg?.emailSubject ?? `Solicitud — ${serviceId}`);
    const body = encodeURIComponent(msg?.emailBody ?? `Hola Codexa,\n\nMe interesa: ${serviceId}.\n\nGracias,\n[Tu nombre]`);
    return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  // Construye enlace WhatsApp con texto personalizado
  function whatsappHrefFor(serviceId: string) {
    const msg = SERVICE_MESSAGES[serviceId];
    const text = encodeURIComponent(msg?.waText ?? `Hola Codexa. Me interesa el servicio: ${serviceId}.`);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  }

  return (
    <section className="max-w-6xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold">Servicios</h2>
        <p className="text-slate-600">Paquetes creativos para marcas que quieren destacar. Elige un servicio y contáctame al instante.</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.id} className="p-6 rounded-2xl glass card-hover">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-400 text-white mb-4 text-xl">{s.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-slate-600">{s.desc}</p>

            <div className="mt-4 flex gap-3">
              {/* Email (abre cliente de correo con asunto y body personalizados) */}
              <a
                href={mailtoHrefFor(s.id)}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white text-indigo-600 border border-slate-200 text-sm shadow-sm"
                role="button"
                aria-label={`Contactar por email sobre ${s.title}`}
              >
                Email
              </a>

              {/* WhatsApp (abre web/app con mensaje personalizado). Se abre en pestaña nueva para no perder la web */}
              <a
                href={whatsappHrefFor(s.id)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-green-500 text-white text-sm shadow-sm"
                role="button"
                aria-label={`Contactar por WhatsApp sobre ${s.title}`}
              >
                WhatsApp
              </a>
            </div>

            {/* Opcional: vista previa del mensaje (pequeño) */}
            <div className="mt-3 text-xs text-slate-400">
              Mensaje ejemplo: <em>{SERVICE_MESSAGES[s.id].waText}</em>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
