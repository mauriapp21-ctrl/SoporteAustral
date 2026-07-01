import { jsonLd } from "@/lib/schema";

/**
 * Inserta datos estructurados JSON-LD de forma segura.
 * Server Component: no añade JS al cliente.
 */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd(data) }}
    />
  );
}
