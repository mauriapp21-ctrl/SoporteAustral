import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { SERVICES, getService, ACCENT_CLASSES } from "@/lib/services";
import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/cta-section";
import { Reveal } from "@/components/reveal";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.metaDescription,
    alternates: { canonical: `/servicios/${service.slug}` },
    openGraph: {
      title: service.title,
      description: service.metaDescription,
      url: `/servicios/${service.slug}`,
    },
  };
}

export default async function ServicioPage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = service.icon;
  const accent = ACCENT_CLASSES[service.accent];
  const otros = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="border-b border-border bg-background-soft">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:px-8">
          <Reveal>
            <span className={cn("grid size-14 place-items-center rounded-2xl", accent.bg)}>
              <Icon className={cn("size-7", accent.text)} />
            </span>
            <span className="mt-6 block text-sm font-semibold uppercase tracking-wide text-primary">
              {service.name}
            </span>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">{service.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/cotizacion">Cotizar este servicio</Link>
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
                alt={service.imageAlt}
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
              Qué incluye
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Adaptamos el alcance a tu empresa. Estos son los componentes
              habituales del servicio:
            </p>
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
          <p className="mt-8 text-sm text-muted-foreground">
            * Contenido de ejemplo, editable. Cada propuesta se ajusta tras un
            diagnóstico inicial sin costo.
          </p>
        </div>
      </section>

      {/* Otros servicios */}
      <section className="border-t border-border bg-background-soft">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Otros servicios
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {otros.map((s) => {
              const OIcon = s.icon;
              const oa = ACCENT_CLASSES[s.accent];
              return (
                <Link
                  key={s.slug}
                  href={`/servicios/${s.slug}`}
                  className="group flex flex-col rounded-2xl border border-border bg-white p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-slate-900/5"
                >
                  <span className={cn("grid size-11 place-items-center rounded-xl", oa.bg)}>
                    <OIcon className={cn("size-5", oa.text)} />
                  </span>
                  <h3 className="mt-4 font-semibold text-foreground">{s.name}</h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Conocer más
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
