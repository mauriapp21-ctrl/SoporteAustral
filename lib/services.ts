import {
  Headphones,
  Cloud,
  ShieldCheck,
  Code2,
  BarChart3,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type ServiceAccent = "blue" | "purple" | "cyan";

export interface Service {
  slug: string;
  /** Etiqueta corta para menús y bento. */
  name: string;
  /** H1 / título optimizado SEO. */
  title: string;
  /** Keyword principal que targetea la página. */
  keyword: string;
  /** Descripción de 1 línea para el bento grid. */
  tagline: string;
  /** Meta description SEO. */
  metaDescription: string;
  /** Primer párrafo (incluye keyword de forma natural). */
  intro: string;
  icon: LucideIcon;
  accent: ServiceAccent;
  /** Beneficios / entregables. */
  features: string[];
  /** Ruta de imagen en /public/images (coincide con el slug). */
  image: string;
  /** Texto alternativo descriptivo para SEO/accesibilidad. */
  imageAlt: string;
  /** Preguntas frecuentes (AEO / FAQPage). */
  faqs: { question: string; answer: string }[];
}

export const SERVICES: Service[] = [
  {
    slug: "soporte-ti",
    name: "Soporte TI",
    title: "Soporte informático para empresas en Chile",
    keyword: "soporte informático empresas Chile",
    tagline: "Mesa de ayuda y soporte en terreno con SLA garantizado.",
    metaDescription:
      "Soporte informático para empresas en Chile: mesa de ayuda, soporte en terreno y administración de equipos con SLA garantizado. Cobertura en el sur de Chile.",
    intro:
      "Ofrecemos soporte informático para empresas en Chile con una mesa de ayuda cercana y tiempos de respuesta garantizados. Mantenemos tu operación funcionando con soporte remoto y en terreno en Puerto Montt y todo el sur del país.",
    icon: Headphones,
    accent: "blue",
    features: [
      "Mesa de ayuda con SLA y tickets",
      "Soporte remoto y en terreno",
      "Administración de equipos y usuarios",
      "Mantención preventiva programada",
    ],
    image: "/images/soporte-ti.jpg",
    imageAlt:
      "Especialista de soporte informático atendiendo a una empresa en Chile",
    faqs: [
      {
        question: "¿Qué incluye el soporte informático para empresas?",
        answer:
          "Incluye mesa de ayuda con SLA, soporte remoto y en terreno, administración de equipos y usuarios, y mantención preventiva programada. El alcance se ajusta a cada empresa tras un diagnóstico inicial sin costo.",
      },
      {
        question: "¿Atienden soporte en terreno en Puerto Montt y la región de Los Lagos?",
        answer:
          "Sí. Contamos con equipo local que realiza soporte en terreno en Puerto Montt, Puerto Varas, Llanquihue, Frutillar, Calbuco y el resto de la Región de Los Lagos, además de soporte remoto para todo Chile.",
      },
      {
        question: "¿Cuál es el tiempo de respuesta del soporte?",
        answer:
          "Trabajamos con SLA (acuerdos de nivel de servicio) comprometidos por contrato, con tiempos de respuesta priorizados según la criticidad del incidente y seguimiento de tickets de principio a fin.",
      },
    ],
  },
  {
    slug: "cloud",
    name: "Cloud",
    title: "Servicios cloud para empresas en Chile",
    keyword: "servicios cloud empresas Chile",
    tagline: "Migración, infraestructura y respaldo en Microsoft 365 y Azure.",
    metaDescription:
      "Servicios cloud para empresas en Chile: migración a Microsoft 365 y Azure, infraestructura escalable y respaldos gestionados con soporte local.",
    intro:
      "Diseñamos e implementamos servicios cloud para empresas en Chile sobre Microsoft 365, Azure y AWS. Migramos tu infraestructura a la nube con respaldos, alta disponibilidad y costos predecibles.",
    icon: Cloud,
    accent: "blue",
    features: [
      "Migración a Microsoft 365 y Azure",
      "Infraestructura escalable como servicio",
      "Respaldos y recuperación ante desastres",
      "Optimización de costos cloud",
    ],
    image: "/images/cloud.jpg",
    imageAlt:
      "Infraestructura de servidores y servicios cloud para empresas en Chile",
    faqs: [
      {
        question: "¿Qué plataformas cloud implementan?",
        answer:
          "Trabajamos principalmente con Microsoft 365 y Azure, y también con AWS y Google Workspace. Elegimos la plataforma según las necesidades, el presupuesto y las aplicaciones de cada empresa.",
      },
      {
        question: "¿Cómo migran a la nube sin interrumpir la operación?",
        answer:
          "Planificamos la migración por fases, con respaldos previos, ventanas de mantención coordinadas y validación posterior. El objetivo es que el cambio sea transparente para los usuarios.",
      },
      {
        question: "¿Los respaldos en la nube están incluidos?",
        answer:
          "Sí. Configuramos respaldos automáticos y planes de recuperación ante desastres (DRP) para asegurar la continuidad operacional ante fallos, ransomware o borrados accidentales.",
      },
    ],
  },
  {
    slug: "ciberseguridad",
    name: "Ciberseguridad",
    title: "Ciberseguridad para empresas en Chile",
    keyword: "ciberseguridad empresas Chile",
    tagline: "Protección perimetral, EDR y concientización de usuarios.",
    metaDescription:
      "Ciberseguridad para empresas en Chile: protección perimetral, EDR, gestión de vulnerabilidades y concientización de usuarios con monitoreo continuo.",
    intro:
      "Protegemos tu organización con servicios de ciberseguridad para empresas en Chile. Implementamos defensa perimetral, EDR, gestión de vulnerabilidades y planes de respuesta ante incidentes adaptados a tu realidad.",
    icon: ShieldCheck,
    accent: "purple",
    features: [
      "Firewall y protección perimetral",
      "EDR / antivirus de nueva generación",
      "Gestión de vulnerabilidades",
      "Concientización y phishing simulado",
    ],
    image: "/images/ciberseguridad.jpg",
    imageAlt:
      "Concepto de ciberseguridad y protección de datos para empresas en Chile",
    faqs: [
      {
        question: "¿Qué medidas de ciberseguridad necesita una pyme?",
        answer:
          "Las prioridades de alto impacto y bajo costo son: respaldos automáticos, autenticación multifactor (MFA), EDR/antivirus de nueva generación, capacitación de usuarios y un plan básico de respuesta ante incidentes.",
      },
      {
        question: "¿Ofrecen monitoreo continuo?",
        answer:
          "Sí. Implementamos protección perimetral, EDR y gestión de vulnerabilidades con monitoreo continuo para detectar y contener amenazas antes de que afecten la operación.",
      },
      {
        question: "¿Realizan capacitación contra phishing?",
        answer:
          "Sí. Incluimos concientización de usuarios y campañas de phishing simulado, porque la mayoría de los incidentes comienza por un error humano evitable con formación.",
      },
    ],
  },
  {
    slug: "desarrollo-software",
    name: "Desarrollo de software",
    title: "Desarrollo de software a medida en Chile",
    keyword: "desarrollo software a medida Chile",
    tagline: "Aplicaciones web y sistemas a medida para tu negocio.",
    metaDescription:
      "Desarrollo de software a medida en Chile: aplicaciones web, integraciones y sistemas de gestión construidos a la medida de tu negocio.",
    intro:
      "Construimos desarrollo de software a medida en Chile para resolver los procesos que las soluciones genéricas no cubren. Creamos aplicaciones web, integraciones y sistemas de gestión escalables y mantenibles.",
    icon: Code2,
    accent: "blue",
    features: [
      "Aplicaciones web y portales",
      "Integraciones y APIs",
      "Sistemas de gestión a medida",
      "Mantención y evolución continua",
    ],
    image: "/images/desarrollo-software.jpg",
    imageAlt:
      "Pantalla con código durante el desarrollo de software a medida en Chile",
    faqs: [
      {
        question: "¿Cuándo conviene un software a medida en vez de uno genérico?",
        answer:
          "Cuando los procesos del negocio no encajan en las soluciones estándar, cuando se necesitan integraciones específicas o cuando el software genérico obliga a trabajar de forma ineficiente. El desarrollo a medida se adapta al negocio, no al revés.",
      },
      {
        question: "¿Qué tecnologías utilizan?",
        answer:
          "Construimos aplicaciones web modernas, APIs e integraciones con tecnologías vigentes y mantenibles, priorizando escalabilidad, seguridad y facilidad de evolución en el tiempo.",
      },
      {
        question: "¿Dan mantención después de entregar el software?",
        answer:
          "Sí. Ofrecemos mantención y evolución continua para corregir, mejorar y hacer crecer el sistema a medida que cambian las necesidades de la empresa.",
      },
    ],
  },
  {
    slug: "business-intelligence",
    name: "Business Intelligence",
    title: "Business Intelligence con Power BI en Chile",
    keyword: "Business Intelligence Power BI Chile",
    tagline: "Dashboards y reportería con Power BI para decidir con datos.",
    metaDescription:
      "Business Intelligence con Power BI en Chile: dashboards, modelos de datos y reportería automatizada para tomar decisiones basadas en datos.",
    intro:
      "Transformamos tus datos en decisiones con Business Intelligence y Power BI en Chile. Diseñamos modelos de datos, dashboards y reportería automatizada que dan visibilidad real a tu gestión.",
    icon: BarChart3,
    accent: "cyan",
    features: [
      "Dashboards e informes en Power BI",
      "Modelado y limpieza de datos",
      "KPIs y reportería automatizada",
      "Integración de múltiples fuentes",
    ],
    image: "/images/business-intelligence.jpg",
    imageAlt:
      "Dashboard de Business Intelligence con gráficos de Power BI en Chile",
    faqs: [
      {
        question: "¿Qué es Business Intelligence y para qué sirve?",
        answer:
          "Business Intelligence (BI) transforma los datos dispersos de una empresa en dashboards e informes claros para tomar decisiones basadas en evidencia. Con Power BI centralizamos fuentes, definimos KPIs y automatizamos la reportería.",
      },
      {
        question: "¿Pueden integrar datos de varios sistemas?",
        answer:
          "Sí. Integramos múltiples fuentes (ERP, planillas, bases de datos, servicios en la nube) en un modelo de datos único y confiable que alimenta los tableros de Power BI.",
      },
      {
        question: "¿Cuánto tarda en estar listo un dashboard?",
        answer:
          "Depende de la cantidad y calidad de las fuentes, pero un primer tablero con los KPIs clave suele estar operativo en pocas semanas, iterando luego según el feedback del equipo.",
      },
    ],
  },
  {
    slug: "automatizacion",
    name: "Automatización",
    title: "Automatización de procesos para empresas en Chile",
    keyword: "automatización de procesos empresas Chile",
    tagline: "Flujos automatizados con Power Automate e IA aplicada.",
    metaDescription:
      "Automatización de procesos para empresas en Chile: flujos con Power Automate, integraciones e IA aplicada para reducir tareas manuales y errores.",
    intro:
      "Eliminamos tareas repetitivas con automatización de procesos para empresas en Chile. Implementamos flujos con Power Automate, integraciones e inteligencia artificial aplicada que ahorran tiempo y reducen errores.",
    icon: Workflow,
    accent: "purple",
    features: [
      "Flujos con Power Automate",
      "Integración entre sistemas",
      "IA aplicada a documentos y datos",
      "Reducción de tareas manuales",
    ],
    image: "/images/automatizacion.jpg",
    imageAlt:
      "Automatización de procesos empresariales con flujos de trabajo digitales",
    faqs: [
      {
        question: "¿Qué procesos se pueden automatizar?",
        answer:
          "Tareas repetitivas y basadas en reglas: aprobaciones, notificaciones, traspaso de datos entre sistemas, generación de reportes, procesamiento de documentos y correos. El objetivo es reducir tiempo manual y errores.",
      },
      {
        question: "¿Qué herramientas usan para automatizar?",
        answer:
          "Principalmente Power Automate e integraciones entre sistemas, sumando inteligencia artificial aplicada para procesar documentos y datos no estructurados cuando aporta valor.",
      },
      {
        question: "¿La automatización requiere cambiar mis sistemas actuales?",
        answer:
          "No necesariamente. En la mayoría de los casos conectamos e integramos los sistemas que ya usas, evitando reemplazos costosos y aprovechando la inversión existente.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export const ACCENT_CLASSES: Record<
  ServiceAccent,
  { text: string; bg: string; ring: string }
> = {
  blue: {
    text: "text-primary",
    bg: "bg-primary/10",
    ring: "ring-primary/20",
  },
  purple: {
    text: "text-accent-purple",
    bg: "bg-accent-purple/10",
    ring: "ring-accent-purple/20",
  },
  cyan: {
    text: "text-accent-cyan",
    bg: "bg-accent-cyan/10",
    ring: "ring-accent-cyan/20",
  },
};
