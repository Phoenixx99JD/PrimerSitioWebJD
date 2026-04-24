# PrimerSitioWebJD

Portafolio personal de **Juan Diego Marchena** — cocinero, repostero y creativo. Desarrollado como proyecto académico de introducción al desarrollo web con HTML, CSS y JavaScript.

---

## Páginas

| Archivo | Descripción |
|---|---|
| `index.html` | Página principal con hero, perfil, proyectos y contacto |
| `mascotas.html` | Galería de fotos de Zeus, el Golden Retriever |
| `noor_patisserie.html` | Página dedicada al emprendimiento de repostería Noor Patisserie |

---

## Estructura de archivos

```
PrimerSitioWebJD/
├── index.html
├── mascotas.html
├── noor_patisserie.html
├── script.js
├── public/
│   └── img/
│       └── (fotos de Zeus)
└── src/
    └── css/
        ├── style2.css       ← estilos de index.html
        ├── mascotas.css     ← estilos de mascotas.html
        ├── noor.css         ← estilos de noor_patisserie.html
        └── style.min.css    ← versión minificada de style2.css
```

---

## Tecnologías

- **HTML5** — estructura semántica
- **CSS3** — variables globales (`--navy`, `--gold`, etc.), Flexbox, Grid, media queries y animaciones
- **JavaScript** (vanilla) — manipulación del DOM sin librerías externas
- **Google Fonts** — tipografías Cormorant Garamond y Nothing You Could Do

---

## Funcionalidades JavaScript (`script.js`)

- **Banner de bienvenida** — aparece al cargar con saludo según la hora del día (buenos días / tardes / noches). Se cierra con × y no vuelve a aparecer mientras la sesión esté activa (`sessionStorage`)
- **Leer más / menos** — expande el párrafo de la sección "Sobre mí"
- **¿Sabías esto?** — muestra u oculta un dato sobre Noor Patisserie en la sección de proyectos
- **Contador de visitas** — registra cuántas veces se ha abierto el sitio usando `localStorage`
- **Menú hamburguesa** — navegación colapsable en pantallas móviles
- **Lightbox** — al hacer clic en una foto de Zeus se abre en pantalla completa; se cierra con × o con la tecla `Esc`
- **Confirmación de formulario** — al enviar el formulario de contacto muestra un mensaje de confirmación elegante

---

## Diseño

El sitio usa una paleta oscura y elegante coherente en las tres páginas:

| Variable | Color | Uso |
|---|---|---|
| `--navy` | `#0D1B2A` | Fondo principal |
| `--navy2` | `#1B2E45` | Fondo de tarjetas |
| `--gold` | `#C9A96E` | Acentos, títulos, bordes |
| `--gold2` | `#E2C99A` | Gold suave, hover |
| `--ice` | `#C8D8E8` | Texto secundario |
| `--white` | `#F5F7FA` | Texto principal |

---

## Responsive

El sitio se adapta a tres tamaños de pantalla:

- **Desktop** — diseño completo, galería en 3 columnas
- **Tablet** (≤ 900px) — márgenes reducidos, galería en 2 columnas
- **Móvil** (≤ 640px) — menú hamburguesa, galería en 1 columna, tipografía ajustada

---

## Cómo abrir el proyecto

No requiere servidor ni instalación. Simplemente abre `index.html` directamente en cualquier navegador moderno (Chrome, Firefox, Edge, Safari).

> Las rutas de CSS y JS son **relativas**, por lo que el proyecto funciona correctamente al abrirse como archivo local.

---

## Autor

**Juan Diego Marchena**  
Cocinero · Repostero · Creativo  
Barranquilla, Colombia · 2026