import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

import { SITE } from "@/lib/site";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { LeadForm } from "@/components/lead-form";
import { Field, Input, Textarea } from "@/components/form-field";

export const metadata: Metadata = {
  title: "Contacto — Servicios TI en Puerto Montt",
  description:
    "Contáctanos para conversar sobre los servicios TI de tu empresa. Estamos en Puerto Montt y damos soporte en todo el sur de Chile.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}/#localbusiness`,
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phone,
    image: `${SITE.url}/opengraph-image`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: "CL",
    },
    areaServed: ["Puerto Montt", "Región de Los Lagos", "Sur de Chile"],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: Object.values(SITE.social),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <PageHero
        eyebrow="Contacto"
        title="Conversemos sobre tu proyecto TI"
        description="Cuéntanos qué necesitas y te respondemos a la brevedad. Atención en Puerto Montt y todo el sur de Chile."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            {/* Datos de contacto */}
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Datos de contacto
              </h2>
              <ul className="mt-6 space-y-5">
                <ContactItem icon={MapPin} label="Dirección">
                  {SITE.address.street}, {SITE.address.city}, {SITE.address.region}
                </ContactItem>
                <ContactItem icon={Mail} label="Correo">
                  <a href={`mailto:${SITE.email}`} className="hover:text-primary">
                    {SITE.email}
                  </a>
                </ContactItem>
                <ContactItem icon={Phone} label="Teléfono">
                  <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                    {SITE.phone}
                  </a>
                </ContactItem>
                <ContactItem icon={Clock} label="Horario">
                  Lunes a viernes, 09:00 a 18:00 hrs
                </ContactItem>
              </ul>
            </Reveal>

            {/* Formulario */}
            <Reveal delay={0.1}>
              <LeadForm
                formType="contacto"
                submitLabel="Enviar mensaje"
                className="rounded-2xl border border-border bg-background-soft p-6 sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Nombre" htmlFor="nombre" required>
                    <Input id="nombre" name="nombre" placeholder="Tu nombre" />
                  </Field>
                  <Field label="Empresa" htmlFor="empresa">
                    <Input id="empresa" name="empresa" placeholder="Tu empresa" />
                  </Field>
                  <Field label="Correo" htmlFor="email" required>
                    <Input id="email" name="email" type="email" placeholder="tucorreo@empresa.cl" />
                  </Field>
                  <Field label="Teléfono" htmlFor="telefono">
                    <Input id="telefono" name="telefono" placeholder="+56 9 ..." />
                  </Field>
                </div>
                <div className="mt-5">
                  <Field label="Mensaje" htmlFor="mensaje" required>
                    <Textarea id="mensaje" name="mensaje" rows={5} placeholder="Cuéntanos en qué podemos ayudarte" />
                  </Field>
                </div>
              </LeadForm>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactItem({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Mail;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10">
        <Icon className="size-5 text-primary" />
      </span>
      <div>
        <p className="text-sm font-medium text-foreground">{label}</p>
        <p className="mt-0.5 text-sm text-muted-foreground">{children}</p>
      </div>
    </li>
  );
}
