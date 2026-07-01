export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readingTime: string;
  /** Imagen de portada en /public/images. */
  image: string;
  imageAlt: string;
  /** Párrafos del cuerpo (placeholder editable). */
  body: string[];
}

export const POSTS: Post[] = [
  {
    slug: "ciberseguridad-pymes-sur-chile",
    title: "5 medidas de ciberseguridad que toda pyme del sur debería tener",
    excerpt:
      "Proteger tu empresa no requiere un gran presupuesto, sino las prioridades correctas. Repasamos lo esencial.",
    category: "Ciberseguridad",
    date: "2026-06-10",
    readingTime: "5 min",
    image: "/images/blog-ciberseguridad.jpg",
    imageAlt: "Candado digital sobre código representando la ciberseguridad en pymes",
    body: [
      "La ciberseguridad dejó de ser un tema exclusivo de las grandes empresas. Hoy las pymes son uno de los principales objetivos, justamente porque suelen tener menos defensas.",
      "En esta guía revisamos cinco medidas de alto impacto y bajo costo: respaldos automáticos, autenticación multifactor, EDR, capacitación de usuarios y un plan básico de respuesta ante incidentes.",
      "Este es contenido de ejemplo, editable. Aquí irá el artículo completo redactado por el equipo.",
    ],
  },
  {
    slug: "migrar-microsoft-365-sin-dolor",
    title: "Cómo migrar a Microsoft 365 sin frenar tu operación",
    excerpt:
      "Una migración bien planificada es transparente para los usuarios. Te contamos cómo lo abordamos.",
    category: "Cloud",
    date: "2026-05-28",
    readingTime: "6 min",
    image: "/images/blog-cloud.jpg",
    imageAlt: "Red de conexiones cloud sobre el planeta representando Microsoft 365",
    body: [
      "Migrar correo y archivos a la nube genera nervios, pero con la planificación correcta el cambio es prácticamente invisible para el día a día.",
      "Explicamos las etapas clave: diagnóstico, plan de coexistencia, migración por fases y acompañamiento posterior.",
      "Contenido de ejemplo, editable.",
    ],
  },
  {
    slug: "power-bi-decisiones-con-datos",
    title: "De planillas a decisiones: el valor de Power BI en tu pyme",
    excerpt:
      "Si todavía tomas decisiones revisando Excel manualmente, estás dejando valor sobre la mesa.",
    category: "Business Intelligence",
    date: "2026-05-12",
    readingTime: "4 min",
    image: "/images/blog-bi.jpg",
    imageAlt: "Gráficos y reportes de datos en pantalla representando Power BI",
    body: [
      "Las planillas funcionan, hasta que dejan de hacerlo. Cuando los datos crecen, consolidar a mano se vuelve lento y propenso a errores.",
      "Business Intelligence con Power BI permite centralizar fuentes, automatizar la reportería y ver el negocio en tiempo real.",
      "Contenido de ejemplo, editable.",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
