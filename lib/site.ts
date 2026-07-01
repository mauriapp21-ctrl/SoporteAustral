export const SITE = {
  name: "Soporte Austral",
  legalName: "Soporte Austral SpA",
  url: "https://www.soporteaustral.cl",
  description:
    "Servicios TI para empresas del sur de Chile: soporte informático, cloud, ciberseguridad, desarrollo de software, Business Intelligence y automatización de procesos.",
  email: "contacto@soporteaustral.cl",
  phone: "+56 9 8573 8648",
  // Número de WhatsApp sin "+" ni espacios (formato para wa.me y APIs).
  whatsapp: "56985738648",
  address: {
    street: "Av. Diego Portales 100, Oficina 5",
    city: "Puerto Montt",
    region: "Los Lagos",
    country: "Chile",
    postalCode: "5480000",
  },
  // Coordenadas aproximadas del centro de Puerto Montt (para LocalBusiness/GeoCoordinates).
  geo: { latitude: -41.4717, longitude: -72.9369 },
  // Horario de atención comercial (para OpeningHoursSpecification).
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const,
    opens: "09:00",
    closes: "18:00",
  },
  // Principales ciudades de la Región de Los Lagos donde se ofrece servicio (areaServed).
  areasServed: [
    "Puerto Montt",
    "Puerto Varas",
    "Llanquihue",
    "Frutillar",
    "Calbuco",
    "Maullín",
    "Los Muermos",
    "Cochamó",
    "Castro",
    "Ancud",
    "Quellón",
    "Dalcahue",
    "Chonchi",
    "Achao",
  ] as const,
  // Temas de especialidad (knowsAbout) para motores de IA.
  knowsAbout: [
    "Soporte informático",
    "Mesa de ayuda",
    "Outsourcing TI",
    "Servicios cloud",
    "Microsoft 365",
    "Ciberseguridad",
    "Desarrollo de software",
    "Business Intelligence",
    "Power BI",
    "Automatización de procesos",
    "Infraestructura TI",
    "Respaldos y continuidad operacional",
  ] as const,
  social: {
    linkedin: "https://www.linkedin.com/company/soporte-austral",
    facebook: "https://www.facebook.com/soporteaustral",
    instagram: "https://www.instagram.com/soporteaustral",
    tiktok: "https://www.tiktok.com/@soporteaustral",
    youtube: "https://www.youtube.com/@soporteaustral",
  },
} as const;
