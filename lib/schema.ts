import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";

/**
 * Datos estructurados Schema.org (JSON-LD) centralizados.
 *
 * Se usa una arquitectura de grafo (`@graph`) con `@id` estables para que los
 * distintos nodos (Organization, WebSite, LocalBusiness) se referencien entre
 * sí sin duplicar entidades. Esto es lo recomendado por Google y facilita la
 * comprensión por motores de IA (GEO/AEO).
 */

const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;
const LOCALBUSINESS_ID = `${SITE.url}/#localbusiness`;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: SITE.address.street,
  addressLocality: SITE.address.city,
  addressRegion: SITE.address.region,
  postalCode: SITE.address.postalCode,
  addressCountry: "CL",
};

const areaServed = SITE.areasServed.map((name) => ({
  "@type": "City",
  name,
}));

/** Nodo Organization + ProfessionalService (empresa). */
export function organizationNode() {
  return {
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    description: SITE.description,
    email: SITE.email,
    telephone: SITE.phone,
    logo: {
      "@type": "ImageObject",
      url: `${SITE.url}/images/hero.jpg`,
    },
    image: `${SITE.url}/images/hero.jpg`,
    address: postalAddress,
    areaServed,
    knowsAbout: [...SITE.knowsAbout],
    sameAs: Object.values(SITE.social),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      email: SITE.email,
      contactType: "customer support",
      areaServed: "CL",
      availableLanguage: ["Spanish"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios TI",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          url: `${SITE.url}/servicios/${s.slug}`,
        },
      })),
    },
  };
}

/** Nodo LocalBusiness con geolocalización y horario (SEO local). */
export function localBusinessNode() {
  return {
    "@type": "LocalBusiness",
    "@id": LOCALBUSINESS_ID,
    name: SITE.name,
    url: SITE.url,
    image: `${SITE.url}/images/hero.jpg`,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: "$$",
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    areaServed,
    parentOrganization: { "@id": ORG_ID },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [...SITE.openingHours.days],
      opens: SITE.openingHours.opens,
      closes: SITE.openingHours.closes,
    },
    sameAs: Object.values(SITE.social),
  };
}

/** Nodo WebSite con SearchAction (sitelinks searchbox). */
export function webSiteNode() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": ORG_ID },
    inLanguage: "es-CL",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/** Grafo global inyectado en el layout raíz. */
export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationNode(), localBusinessNode(), webSiteNode()],
  };
}

/** BreadcrumbList reutilizable. */
export function breadcrumbList(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE.url}${item.url}`,
    })),
  };
}

/** Nodo Service para páginas de servicio. */
export function serviceNode(service: {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.name,
    description: service.metaDescription,
    url: `${SITE.url}/servicios/${service.slug}`,
    provider: { "@id": ORG_ID },
    areaServed,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${SITE.url}/cotizacion`,
      servicePhone: SITE.phone,
    },
  };
}

/** FAQPage a partir de una lista de preguntas/respuestas. */
export function faqPageNode(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** Helper para serializar JSON-LD de forma segura contra XSS. */
export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
