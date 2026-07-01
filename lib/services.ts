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
