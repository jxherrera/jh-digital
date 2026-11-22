import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const contact = {
  phone: '+593 96 314 7051',
  email: 'josueherrera.2007.febrero@gmail.com',
  whatsapp: 'https://wa.me/593963147051',
};
const whatsapp = (message: string) => `${contact.whatsapp}?text=${encodeURIComponent(message)}`;
const demos = [
  { id: 'tienda', name: 'Tienda de ropa', category: 'Catálogo y pedidos', url: 'https://tinedasropa.vercel.app', image: '/tienda.jpg', title: 'Tu colección, lista para explorar.', description: 'Una muestra de catálogo con filtros, fotografías, selección de tallas y carrito.', verified: 'Filtros por categoría, selección de talla y total del carrito comprobados.', limit: 'El código prepara el pedido para WhatsApp. No procesa pagos ni verifica inventario. No se enviaron pedidos durante la revisión.', note: 'La demo contiene datos y canales de una tienda. Son ajenos a JH Digital; no realices pedidos de prueba.' },
  { id: 'gym', name: 'Página Gym', category: 'Servicios y membresías', url: 'https://paginagym.vercel.app', image: '/gym.jpg', title: 'Una presentación a la altura de tu club.', description: 'Página de disciplinas y planes con un panel de ejemplo para mostrar una idea de gestión.', verified: 'Navegación y simulación local de accesos probadas: válido, vencido e inexistente.', limit: 'El panel usa datos de ejemplo, no guarda cambios ni autentica usuarios. “Portal socios” lleva al pie de página; no existe una reserva real.', note: 'Las métricas, personas y precios son contenido demostrativo. La portada presenta recortes en pantallas muy estrechas.' },
  { id: 'courier', name: 'Demo Courier', category: 'Servicios y cálculo orientativo', url: 'https://demotradox.vercel.app', image: '/courier.jpg', title: 'Explica tu servicio antes del primer mensaje.', description: 'Un recorrido visual del servicio, preguntas frecuentes y una calculadora de peso.', verified: 'Conversión de kilogramos a libras, estimación por tarifa y preguntas desplegables comprobadas.', limit: 'La calculadora no incluye impuestos, peso volumétrico ni otros cargos. No es rastreo de envíos ni una cotización final.', note: 'El sitio original conserva su marca y enlaces externos. Aquí se presenta como Demo Courier; su URL permanece igual.' },
  { id: 'sele', name: 'Sele One', category: 'Experiencia personalizada', url: 'https://sele-one.vercel.app', image: '/sele.jpg', title: 'Una historia que merece su propio lugar.', description: 'Una experiencia personal con historia, galería de recuerdos y carta interactiva.', verified: 'Entrada sin música, apertura de carta y navegación de galería comprobadas.', limit: 'No es una tienda ni un sistema de reservas. La reproducción de audio depende del navegador y no se certifica en esta revisión.', note: 'Ejemplo de diseño personalizado, con fotografías acreditadas en el sitio original. No representa un cliente comercial de JH Digital.' },
];

function App() {
  const [active, setActive] = useState('tienda');
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('JH Presencia');
  const [business, setBusiness] = useState('');
  const demo = demos.find(item => item.id === active)!;
  const inquiry = `Hola JH Digital, me interesa ${selectedPlan}${business.trim() ? ` para ${business.trim()}` : ' para mi negocio'}. Quisiera confirmar alcance, precio final y tiempos de entrega.`;
  return <>
    <a className="skip" href="#contenido">Saltar al contenido</a>
    <header className="header">
      <div className="wrap nav">
        <a className="brand" href="#inicio" aria-label="JH Digital, inicio"><span className="monogram">JH</span><span>JH Digital<small>Webs para tu negocio</small></span></a>
        <button className="menu-button" aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Cerrar menú' : 'Menú'}</button>
        <nav id="navigation" className={menuOpen ? 'navigation open' : 'navigation'} aria-label="Principal">
          <a href="#demos" onClick={() => setMenuOpen(false)}>Explorar demos</a><a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios y precios</a><a className="button small" href="#contacto" onClick={() => setMenuOpen(false)}>Hablemos de tu negocio</a>
        </nav>
      </div>
    </header>
    <main id="contenido">
      <section className="hero" id="inicio">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="intro">Diseño web para pequeños negocios en Quito</p>
            <h1>Tecnología sencilla para hacer crecer tu negocio</h1>
            <p className="lead">Tu negocio tiene algo que ofrecer. Hagamos que sea fácil descubrirlo, entenderlo y dar el siguiente paso.</p>
            <div className="actions"><a className="button teal" href="#demos">Ver lo que podemos crear</a><a className="text-link" href="#servicios">Conocer los planes</a></div>
            <p className="hero-footnote">Propuestas desde $89 · Alcance acordado antes de empezar</p>
          </div>
          <div className="hero-showcase">
            <div className="showcase-label"><span>Así puede verse tu próximo paso</span><span className="sample">Demo</span></div>
            <a className="hero-image" href="#demos" aria-label="Explorar la demo Tienda de ropa"><img src="/tienda.jpg" alt="Captura real de la portada de la demo Tienda de ropa" width="1528" height="651" fetchPriority="high"/></a>
            <div className="showcase-caption"><span><strong>De una idea a una web que puedes explorar.</strong><small>Empieza por una muestra. Define después tu alcance.</small></span><span className="corner-mark" aria-hidden="true">JH</span></div>
          </div>
        </div>
      </section>
      <div className="principles wrap"><p><strong>Diseño que se adapta</strong><span>Una web pensada para móvil y escritorio.</span></p><p><strong>Lo que ves, bien explicado</strong><span>Demos con funciones y límites claros.</span></p><p><strong>Un inicio a tu medida</strong><span>Sin añadir funciones que no necesitas.</span></p></div>
      <section className="section wrap" id="demos">
        <div className="section-heading"><div><p className="intro">Explora el trabajo</p><h2>Encuentra una idea<br/>para tu negocio.</h2></div><p>Cuatro ejemplos para abrir la conversación. Son demostraciones, no testimonios ni resultados de clientes.</p></div>
        <div className="demo-selector" role="group" aria-label="Seleccionar demostración">{demos.map(item => <button key={item.id} className={active === item.id ? 'selected' : ''} aria-pressed={active === item.id} onClick={() => setActive(item.id)}><span>{item.name}</span><small>{item.category}</small></button>)}</div>
        <article className="demo-panel" aria-label={`Detalle de ${demo.name}`}>
          <div className="demo-visual"><div className="browser-bar"><span>Vista de la demo</span><span>{new URL(demo.url).hostname}</span></div><img key={demo.id} src={demo.image} alt={`Captura real de ${demo.name}`} width="1528" height="651" loading="lazy"/><div className="demo-footer"><span>Revisión: 20 noviembre 2026</span><a href={demo.url} target="_blank" rel="noopener noreferrer">Abrir {demo.name}<span className="sr-only"> en otra pestaña</span></a></div></div>
          <div className="demo-copy" aria-live="polite"><p className="intro">{demo.category}</p><h3>{demo.title}</h3><p>{demo.description}</p><div className="verified"><strong>Qué puedes explorar</strong><p>{demo.verified}</p></div><details key={demo.id}><summary>Alcance y límites de esta demo</summary><p>{demo.limit}</p><p>{demo.note}</p></details></div>
        </article>
        <p className="section-note">No ingreses datos personales ni hagas compras en las demos. Las marcas, tarifas y contenidos de cada ejemplo no forman parte de la oferta de JH Digital.</p>
      </section>
      <section className="services section" id="servicios"><div className="wrap">
        <div className="section-heading"><div><p className="intro">Empieza con lo que necesitas</p><h2>Alcance claro.<br/>Un precio de partida.</h2></div><p>Precios iniciales en USD para un alcance definido. El total y el plazo se confirman por escrito antes de iniciar.</p></div>
        <div className="plans">
          <article className="plan"><p className="plan-use">Para presentar tu negocio</p><h3>JH Presencia</h3><p className="price"><span>Desde</span> $89<small>pago por proyecto</small></p><p>Un lugar claro para explicar qué haces y cómo encontrarte.</p><ul><li>Una página de hasta 5 secciones.</li><li>Servicios, horarios y datos de contacto.</li><li>Botón de WhatsApp con tu número comercial.</li><li>Diseño adaptable y datos básicos para buscadores.</li><li>Una ronda de ajustes y publicación inicial.</li></ul><a className="button outline" href="#contacto" onClick={()=>setSelectedPlan('JH Presencia')}>Consultar JH Presencia</a></article>
          <article className="plan business"><p className="plan-use">Para mostrar lo que vendes</p><h3>JH Negocio</h3><p className="price"><span>Desde</span> $249<small>pago por proyecto</small></p><p>Tu oferta organizada, con un camino sencillo hacia la consulta.</p><ul><li>Todo lo incluido en JH Presencia.</li><li>Catálogo inicial de hasta 12 productos o servicios.</li><li>Categorías y ficha de cada producto.</li><li>Selección y resumen de pedido para WhatsApp.</li><li>Dos rondas de ajustes y guía de uso.</li></ul><a className="button teal" href="#contacto" onClick={()=>setSelectedPlan('JH Negocio')}>Consultar JH Negocio</a></article>
        </div>
        <div className="maintenance"><div><h3>Que tu web siga al día.</h3><p>Mantenimiento opcional desde <strong>$20/mes</strong>: revisión mensual de enlaces y hasta 30 minutos de cambios de texto o imágenes. Sin acumulación de minutos; nuevas funciones se cotizan aparte.</p></div><a className="text-link" href="#contacto" onClick={()=>setSelectedPlan('Mantenimiento')}>Consultar mantenimiento</a></div>
        <details className="scope"><summary>Qué debes aportar y qué se cotiza aparte</summary><p>Los precios parten de textos, logotipo, fotografías y datos comerciales entregados por el cliente con permiso de uso. Las revisiones cubren ajustes dentro del alcance acordado.</p><p>Dominio, alojamiento, correo profesional, licencias, fotografías de pago, comisiones de pasarelas y servicios externos no están incluidos. Cualquier costo externo requiere aprobación previa. Los impuestos aplicables se detallan en la cotización final.</p><p>No se incluyen cobros en línea, inventario sincronizado, facturación, cuentas de usuarios ni sistemas de reservas. Esas funciones requieren alcance, desarrollo y pruebas independientes. No se garantiza una cantidad de ventas ni una posición en buscadores.</p></details>
      </div></section>
      <section className="section wrap process"><div className="section-heading"><div><p className="intro">Una conversación, un plan</p><h2>De tu negocio<br/>a tu nueva web.</h2></div><p>Sin complicarte con palabras técnicas. Sabrás qué vamos a construir y qué necesitas entregar.</p></div><ol><li><span>1</span><h3>Conocemos tu idea</h3><p>Revisamos tu negocio, tus prioridades y la demo que más se acerca a lo que necesitas.</p></li><li><span>2</span><h3>Acordamos el alcance</h3><p>Recibes una propuesta con entregables, precio final, costos externos y plazo.</p></li><li><span>3</span><h3>Revisamos y publicamos</h3><p>Pruebas la web, hacemos los ajustes incluidos y la publicamos con tu aprobación.</p></li></ol></section>
      <section className="contact section" id="contacto"><div className="wrap contact-grid"><div><p className="intro">Hablemos de tu próximo paso</p><h2>Cuéntame qué<br/>quieres crear.</h2><p>Empecemos por una idea sencilla. No necesitas tener todo resuelto para conversar.</p><div className="contact-links"><a href={whatsapp('Hola JH Digital, quisiera conversar sobre una web para mi negocio.')} target="_blank" rel="noopener noreferrer">WhatsApp: {contact.phone}</a><a href={`mailto:${contact.email}`}>{contact.email}</a></div></div>
        <div className="inquiry"><label htmlFor="plan">Me interesa</label><select id="plan" value={selectedPlan} onChange={e=>setSelectedPlan(e.target.value)}><option>JH Presencia</option><option>JH Negocio</option><option>Mantenimiento</option><option>Una web personalizada</option></select><label htmlFor="business">Nombre o tipo de negocio <span>(opcional)</span></label><input id="business" value={business} onChange={e=>setBusiness(e.target.value)} maxLength={120} placeholder="Ej. mi tienda de ropa" autoComplete="organization"/><a className="button teal" href={whatsapp(inquiry)} target="_blank" rel="noopener noreferrer">Preparar consulta en WhatsApp</a><p>Se abrirá WhatsApp con un borrador. Tú decides cuándo enviarlo. Esta página no guarda tus datos.</p></div>
      </div></section>
    </main>
    <footer className="wrap footer"><a className="brand" href="#inicio"><span className="monogram">JH</span><span>JH Digital<small>Tecnología sencilla para tu negocio</small></span></a><p>Quito, Ecuador<br/>© 2026 JH Digital · Marca provisional</p><a className="text-link" href="#inicio">Volver al inicio</a></footer>
  </>;
}

createRoot(document.getElementById('root')!).render(<App/>);
