/**
 * Ubicaciones para SEO local (arquitectura SILO servicio × ciudad).
 *
 * Cada ciudad aporta contexto ÚNICO (provincia, sectores, un ángulo económico
 * local) para que las landings generadas no sean contenido duplicado. Google
 * penaliza páginas casi idénticas; aquí cada una tiene datos propios.
 */

export interface Location {
  slug: string;
  /** Nombre de la ciudad/comuna. */
  name: string;
  /** Provincia dentro de la Región de Los Lagos. */
  province: string;
  /** Sectores, barrios o localidades cercanas (contenido único + cobertura). */
  sectors: string[];
  /** Ángulo económico/local propio de la ciudad (para el intro). */
  angle: string;
}

export const LOCATIONS: Location[] = [
  {
    slug: "puerto-montt",
    name: "Puerto Montt",
    province: "Llanquihue",
    sectors: [
      "Centro",
      "Alerce",
      "Mirasol",
      "Pelluco",
      "Cardonal",
      "Chinquihue",
      "Angelmó",
      "Valle Volcanes",
      "Parque Industrial",
      "El Tepual",
    ],
    angle:
      "capital regional y principal centro logístico, portuario y de servicios del sur austral",
  },
  {
    slug: "puerto-varas",
    name: "Puerto Varas",
    province: "Llanquihue",
    sectors: ["Centro", "Puerto Chico", "Nueva Braunau", "Ensenada", "Río Pescado"],
    angle:
      "polo turístico y de servicios profesionales a orillas del lago Llanquihue",
  },
  {
    slug: "llanquihue",
    name: "Llanquihue",
    province: "Llanquihue",
    sectors: ["Centro", "sector industrial"],
    angle: "comuna industrial y agroalimentaria junto al lago",
  },
  {
    slug: "frutillar",
    name: "Frutillar",
    province: "Llanquihue",
    sectors: ["Frutillar Alto", "Frutillar Bajo"],
    angle: "ciudad turística y cultural del lago Llanquihue",
  },
  {
    slug: "calbuco",
    name: "Calbuco",
    province: "Llanquihue",
    sectors: ["Centro", "sector portuario"],
    angle: "comuna costera con fuerte actividad acuícola y pesquera",
  },
  {
    slug: "maullin",
    name: "Maullín",
    province: "Llanquihue",
    sectors: ["Centro", "Carelmapu"],
    angle: "comuna costera de pesca artesanal y turismo",
  },
  {
    slug: "los-muermos",
    name: "Los Muermos",
    province: "Llanquihue",
    sectors: ["Centro"],
    angle: "comuna agrícola y ganadera del sector costero",
  },
  {
    slug: "castro",
    name: "Castro",
    province: "Chiloé",
    sectors: ["Centro", "Gamboa", "Ten Ten"],
    angle: "capital de Chiloé y centro comercial y administrativo del archipiélago",
  },
  {
    slug: "ancud",
    name: "Ancud",
    province: "Chiloé",
    sectors: ["Centro", "Pudeto"],
    angle: "principal puerta de entrada a Chiloé, con actividad turística y acuícola",
  },
  {
    slug: "quellon",
    name: "Quellón",
    province: "Chiloé",
    sectors: ["Centro", "sector portuario"],
    angle: "puerto austral de la Carretera Longitudinal y polo salmonicultor",
  },
  {
    slug: "dalcahue",
    name: "Dalcahue",
    province: "Chiloé",
    sectors: ["Centro", "Quinchao (Achao)"],
    angle: "comuna del borde costero chilote con feria artesanal y turismo",
  },
  {
    slug: "chonchi",
    name: "Chonchi",
    province: "Chiloé",
    sectors: ["Centro"],
    angle: "comuna patrimonial del sur de Chiloé",
  },
];

export function getLocation(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}
