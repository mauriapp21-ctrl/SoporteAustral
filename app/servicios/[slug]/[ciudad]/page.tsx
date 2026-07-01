import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MapPin } from "lucide-react";

import { cn } from "@/lib/utils";
import { SERVICES, getService, ACCENT_CLASSES } from "@/lib/services";
import { LOCATIONS, getLocation } from "@/lib/locations";
import { SITE } from "@/lib/site";
import { breadcrumbList, faqPageNode } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/json-ld";
import { CtaSection } from "@/components/cta-section";
import { Reveal } from "@/components/reveal";

type Params = { params: Promise<{ slug: string; ciudad: string }> };

export function generateStaticParams() {
  return SERVICES.flatMap((s) =>
    LOCATIONS.map((l) => ({ slug: s.slug, ciudad: l.slug }))
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug, ciudad } = await params;
  const service = getService(slug);
  const location = getLocation(ciudad);
  if (!service || !location) return {};

  const title = `${service.name} en ${location.name}`;
  const description = `${service.name} para empresas en ${location.name}, provincia de ${location.province}. ${service.tagline} Soporte local de Soporte Austral con cobertura en ${location.name} y alrededores.`;

  return {
    title,
    description,
    alternates: { canonical: `/servicios/${service.slug}/${location.slug}` },
    openGraph: {
      title: `${title} | ${SITE.name}`,
      description,
      url: `/servicios/${service.slug}/${location.slug}`,
    },
  };
}

export default async function ServicioCiudadPage({ params }: Params) {
  const { slug, ciudad } = await params;
  const service = getService(slug);
  const location = getLocation(ciudad);
  if (!service || !location) notFound();

  const Icon = service.icon;
  const accent = ACCENT_CLASSES[service.accent];

  const h1 = `${service.name} en ${location.name}`;
  const canonicalUrl = `${SITE.url}/servicios/${service.slug}/${location.slug}`;

  const breadcrumbs = breadcrumbList([
    { name: "Inicio", url: "/" },
    { name: "Servicios", url: "/servicios" },
    { name: service.name, url: `/servicios/${service.slug}` },
    { name: location.name, url: `/servicios/${service.slug}/${location.slug}` },
  ]);

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: h1,
    serviceType: service.name,
    description: `${service.name} para empresas en ${location.name}, ${location.province}, Región de Los Lagos.`,
    url: canonicalUrl,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: {
      "@type": "City",
      name: location.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Región de Los Lagos",
      },
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${SITE.url}/cotizacion`,
      servicePhone: SITE.phone,
    },
  };

  // FAQ localizada: una pregunta específica de ciudad + las del servicio.
  const localFaqs = [
    {
      question: `¿Ofrecen ${service.name.toLowerCase()} en ${location.name}?`,
      answer: `Sí. Soporte Austral entrega ${service.name.toLowerCase()} para empresas en ${location.name} y sus sectores (${location.sectors.slice(0, 4).join(", ")}), con soporte remoto y visitas en terreno coordinadas en la provincia de ${location.province}.`,
    },
    ...service.faqs,
  ];

  const otrasCiudades = LOCATIONS.filter((l) => l.slug !== location.slug).slice(0, 6);

  return (
    <>
      <JsonLd data={serviceLd} />
      <JsonLd data={breadcrumbs} />
      <JsonLd data={faqPageNode(localFaqs)} />

      <section className="border-b border-border bg-background-soft">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:px-8">
          <Reveal>
            <nav aria-label="Ruta de navegación" className="mb-6 text-sm text-muted-foreground">
              <Link href="/servicios" className="hover:text-primary">Servicios</Link>
              <span className="mx-2">/</span>
              <Link href={`/servicios/${service.slug}`} className="hover:text-primary">{service.name}</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">{location.name}</span>
            </nav>
            <span className={cn("grid size-14 place-items-center rounded-2xl", accent.bg)}>
              <Icon className={cn("size-7", accent.text)} />
            </span>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-primary">
              <MapPin className="size-4" /> {location.name}, {location.province}
            </span>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {h1}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Ofrecemos {service.name.toLowerCase()} para empresas en {location.name},{" "}
              {location.angle}. Combinamos soporte remoto y atención en terreno en{" "}
              {location.name} y sus alrededores, con la cercanía de un equipo del sur de Chile.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/cotizacion">Cotizar en {location.name}</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/contacto">Hablar con un especialista</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-xl shadow-slate-900/5">
              <Image
                src={service.image}
                alt={`${service.name} para empresas en ${location.name}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Qué incluye */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {service.name} para empresas de {location.name}
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">{service.intro}</p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {service.features.map((f, i) => (
              <Reveal key={f} delay={i * 0.05}>
                <div className="flex items-start gap-3 rounded-2xl border border-border bg-background-soft p-6">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary/10">
                    <Check className="size-4 text-primary" />
                  </span>
                  <p className="text-sm font-medium text-foreground">{f}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cobertura local */}
      <section className="border-t border-border bg-background-soft">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Cobertura en {location.name}
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Atendemos empresas en {location.name} y sectores cercanos:
            </p>
          </Reveal>
          <div className="mt-6 flex flex-wrap gap-2">
            {location.sectors.map((sec) => (
              <span
                key={sec}
                className="rounded-full border border-border bg-white px-4 py-1.5 text-sm text-foreground"
              >
                {sec}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Preguntas frecuentes
            </h2>
          </Reveal>
          <div className="mt-8 divide-y divide-border rounded-2xl border border-border">
            {localFaqs.map((faq, i) => (
              <Reveal key={faq.question} delay={i * 0.05}>
                <details className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-medium text-foreground">
                    {faq.question}
                    <ArrowRight className="size-5 shrink-0 text-primary transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Otras ciudades */}
      <section className="border-t border-border bg-background-soft">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            {service.name} en otras ciudades
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {otrasCiudades.map((l) => (
              <Link
                key={l.slug}
                href={`/servicios/${service.slug}/${l.slug}`}
                className="rounded-full border border-border bg-white px-4 py-1.5 text-sm font-medium text-primary transition-colors hover:border-primary/30"
              >
                {service.name} en {l.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
