/**
 * script.js — Juan Diego Marchena · Portafolio
 * ─────────────────────────────────────────────
 * Contenido:
 *  1. Banner de bienvenida
 *  2. Botón cambiar texto del párrafo "Sobre mí"
 *  3. Botón mostrar/ocultar curiosidad
 *  4. Interacción extra: contador de visitas con localStorage
 *  5. Menú hamburguesa (móvil)
 *  6. Lightbox de galería (mascotas.html)
 *  7. Formulario: feedback al enviar
 */

/* ══════════════════════════════════════
   1. BANNER DE BIENVENIDA
   Aparece al cargar, se cierra con ×
   ══════════════════════════════════════ */
function initBanner() {
  const banner = document.createElement('div');
  banner.id = 'welcome-banner';
  banner.setAttribute('role', 'status');

  const hora = new Date().getHours();
  const saludo = hora < 12 ? 'Buenos días' : hora < 18 ? 'Buenas tardes' : 'Buenas noches';

  banner.innerHTML = `
    <span>${saludo} — Bienvenido al portafolio de Juan Diego Marchena</span>
    <button aria-label="Cerrar banner" title="Cerrar">×</button>
  `;

  document.body.insertBefore(banner, document.body.firstChild);

  banner.querySelector('button').addEventListener('click', () => {
    banner.style.transition = 'opacity 0.3s ease, max-height 0.4s ease, padding 0.4s ease';
    banner.style.opacity    = '0';
    banner.style.maxHeight  = '0';
    banner.style.padding    = '0';
    banner.style.overflow   = 'hidden';
    setTimeout(() => banner.remove(), 400);
  });
}

/* ══════════════════════════════════════
   2. BOTÓN CAMBIAR TEXTO DE "SOBRE MÍ"
   ══════════════════════════════════════ */
function initCambiarTexto() {
  const seccion = document.getElementById('sobre-mi');
  if (!seccion) return;

  const parrafo = seccion.querySelector('p');
  if (!parrafo) return;

  const textoOriginal  = parrafo.textContent;
  const textoExtendido =
    'Soy Juan Diego Marchena, cocinero-repostero apasionado por la gastronomía. ' +
    'Me enfoco en crear experiencias a través del detalle, la estética y el sabor. ' +
    'Cada creación es una conversación entre técnica y emoción — desde una torta en slice ' +
    'de Noor Patisserie hasta un concepto editorial que no existe aún.';

  let expandido = false;

  const btn = document.createElement('button');
  btn.textContent = 'Leer más';
  btn.classList.add('btn');
  btn.style.marginTop = '20px';
  btn.setAttribute('aria-expanded', 'false');
  seccion.appendChild(btn);

  btn.addEventListener('click', () => {
    expandido           = !expandido;
    parrafo.textContent = expandido ? textoExtendido : textoOriginal;
    btn.textContent     = expandido ? 'Leer menos' : 'Leer más';
    btn.setAttribute('aria-expanded', String(expandido));
  });
}

/* ══════════════════════════════════════
   3. MOSTRAR / OCULTAR CURIOSIDAD
   ══════════════════════════════════════ */
function initCuriosidad() {
  const seccion = document.getElementById('proyectos');
  if (!seccion) return;

  const wrap = document.createElement('div');
  wrap.id = 'curiosidad-toggle';

  const btn = document.createElement('button');
  btn.textContent = '✦ ¿Sabías esto?';
  btn.classList.add('btn');
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-controls', 'curiosidad-contenido');

  const contenido = document.createElement('div');
  contenido.id = 'curiosidad-contenido';
  contenido.setAttribute('role', 'region');
  contenido.textContent =
    'El nombre "Noor" proviene del árabe نور, que significa luz. ' +
    'Fue elegido porque cada porción busca ser un pequeño momento luminoso ' +
    'en el día de quien la recibe. Frescura, precisión y presencia — eso es Noor.';

  wrap.appendChild(btn);
  wrap.appendChild(contenido);
  seccion.appendChild(wrap);

  btn.addEventListener('click', () => {
    const abierto = contenido.classList.toggle('visible');
    btn.setAttribute('aria-expanded', String(abierto));
    btn.textContent = abierto ? '✦ Ocultar' : '✦ ¿Sabías esto?';
  });
}

/* ══════════════════════════════════════
   4. CONTADOR DE VISITAS (localStorage)
   ══════════════════════════════════════ */
function initContadorVisitas() {
  const footer = document.querySelector('footer p');
  if (!footer) return;

  try {
    const clave   = 'jdm_visitas';
    const visitas = parseInt(localStorage.getItem(clave) || '0', 10) + 1;
    localStorage.setItem(clave, String(visitas));

    const span = document.createElement('span');
    span.style.cssText = 'margin-left:16px; opacity:0.4; font-size:0.72rem;';
    span.textContent   = `· Visita #${visitas}`;
    footer.appendChild(span);
  } catch {
    // localStorage no disponible — no bloquea nada
  }
}

/* ══════════════════════════════════════
   5. MENÚ HAMBURGUESA (móvil)
   ══════════════════════════════════════ */
function initHamburguesa() {
  const header = document.querySelector('header');
  const nav    = document.querySelector('nav');
  if (!header || !nav) return;

  const toggle = document.createElement('button');
  toggle.className = 'nav-toggle';
  toggle.setAttribute('aria-label', 'Abrir menú');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.innerHTML = '<span></span><span></span><span></span>';

  const h1 = header.querySelector('h1');
  if (h1) h1.insertAdjacentElement('afterend', toggle);

  toggle.addEventListener('click', () => {
    const abierto = nav.classList.toggle('open');
    toggle.classList.toggle('open', abierto);
    toggle.setAttribute('aria-expanded', String(abierto));
    toggle.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
  });

  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ══════════════════════════════════════
   6. LIGHTBOX DE GALERÍA (mascotas.html)
   ══════════════════════════════════════ */
function initLightbox() {
  const galeria = document.querySelector('.galeria');
  if (!galeria) return;

  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');

  const imgGrande = document.createElement('img');
  imgGrande.alt   = '';

  const cerrar = document.createElement('button');
  cerrar.className = 'lightbox-close';
  cerrar.innerHTML = '×';
  cerrar.setAttribute('aria-label', 'Cerrar lightbox');

  overlay.appendChild(imgGrande);
  overlay.appendChild(cerrar);
  document.body.appendChild(overlay);

  galeria.querySelectorAll('img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      imgGrande.src = img.src;
      imgGrande.alt = img.alt;
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      cerrar.focus();
    });
  });

  function cerrarLightbox() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  cerrar.addEventListener('click', cerrarLightbox);
  overlay.addEventListener('click', e => { if (e.target === overlay) cerrarLightbox(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) cerrarLightbox();
  });
}

/* ══════════════════════════════════════
   7. FORMULARIO: confirmación al enviar
   ══════════════════════════════════════ */
function initFormulario() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    const nombre = form.querySelector('input[type="text"]').value.trim();

    const confirmacion = document.createElement('p');
    confirmacion.style.cssText =
      'color: var(--gold2); font-size:0.92rem; line-height:1.7; ' +
      'padding:16px 20px; background: var(--navy2); border-left:2px solid var(--gold); ' +
      'border-radius:0 3px 3px 0; margin-top:8px;';
    confirmacion.textContent =
      `Gracias${nombre ? ', ' + nombre : ''}. Tu mensaje ha sido recibido — te escribiré pronto.`;

    form.style.opacity    = '0';
    form.style.transition = 'opacity 0.3s ease';
    setTimeout(() => form.replaceWith(confirmacion), 300);
  });
}

/* ══════════════════════════════════════
   INICIALIZACIÓN — dentro de DOMContentLoaded
   para garantizar que el DOM existe
   ══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  // Detectar página AQUÍ, cuando el DOM ya está listo
  const esIndex    = document.querySelector('.hero')    !== null;
  const esMascotas = document.querySelector('.galeria') !== null;

  // Comunes a todas las páginas
  initBanner();
  initHamburguesa();
  initContadorVisitas();

  // Solo index.html
  if (esIndex) {
    initCambiarTexto();
    initCuriosidad();
    initFormulario();
  }

  // Solo mascotas.html
  if (esMascotas) {
    initLightbox();
  }

});
