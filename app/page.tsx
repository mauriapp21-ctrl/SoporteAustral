import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { SERVICES, ACCENT_CLASSES } from "@/lib/services";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
import { HomeHero } from "@/components/home-hero";
import { LogoMarquee } from "@/components/logo-marquee";

const DIFERENCIADORES = [
  {
    icon: MapPin,
    title: "Cercanía local",
    text: "Equipo en el sur de Chile. Soporte en terreno en Puerto Montt y la región de Los Lagos, no un call center lejano.",
  },
  {
    icon: Clock,
    title: "SLA garantizado",
    text: "Tiempos de respuesta comprometidos por contrato y mesa de ayuda con seguimiento de tickets de principio a fin.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad primero",
    text: "Buenas prácticas de ciberseguridad integradas en cada servicio, desde el respaldo hasta el acceso de usuarios.",
  },
  {
    icon: Users,
    title: "Un solo socio TI",
    text: "Soporte, cloud, desarrollo y datos bajo un mismo equipo. Menos proveedores, más coherencia.",
  },
];

const CASOS = [
  {
    sector: "Acuícola",
    title: "Centro de cultivo conectado en zonas remotas",
    text: "Implementamos enlaces redundantes y respaldo cloud para una salmonera con operaciones en el sur austral, asegurando continuidad operacional.",
    metric: "99,9% uptime",
  },
  {
    sector: "Retail regional",
    title: "Dashboards de ventas con Power BI",
    text: "Centralizamos datos de 12 sucursales en tableros de Business Intelligence, reduciendo el cierre mensual de días a horas.",
    metric: "-80% tiempo de reporte",
  },
  {
    sector: "Servicios profesionales",
    title: "Migración completa a Microsoft 365",
    text: "Migramos correo, archivos y colaboración a la nube para un estudio con 60 usuarios, sin interrumpir la operación.",
    metric: "60 usuarios migrados",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <HomeHero />

      {/* ============ CONFIANZA / LOGOS ============ */}
      <LogoMarquee />

      {/* ============ BENTO SERVICIOS ============ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Todo lo que tu empresa necesita en TI
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Seis áreas de especialidad, un solo equipo. Diseñamos la solución
              según tu operación, no al revés.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              const accent = ACCENT_CLASSES[s.accent];
              return (
                <Reveal key={s.slug} delay={i * 0.05}>
                  <Link
                    href={`/servicios/${s.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-slate-900/5"
                  >
                    <span
                      className={cn(
                        "grid size-12 place-items-center rounded-xl",
                        accent.bg
                      )}
                    >
                      <Icon className={cn("size-6", accent.text)} />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-foreground">
                      {s.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">
                      {s.tagline}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Conocer más
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ DIFERENCIADORES ============ */}
      <section className="border-y border-border bg-background-soft">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <Reveal>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Por qué Soporte Austral
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                No somos un proveedor más. Somos el equipo TI que entiende la
                realidad de operar en el sur: distancias, conectividad y la
                necesidad de respuestas rápidas y reales.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Atención en español, con personas, no robots",
                  "Propuestas claras y precios transparentes",
                  "Acompañamiento de largo plazo",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {DIFERENCIADORES.map((d, i) => {
                const Icon = d.icon;
                return (
                  <Reveal key={d.title} delay={i * 0.05}>
                    <div className="h-full rounded-2xl border border-border bg-white p-6">
                      <span className="grid size-11 place-items-center rounded-xl bg-primary/10">
                        <Icon className="size-5 text-primary" />
                      </span>
                      <h3 className="mt-4 text-base font-semibold text-foreground">
                        {d.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">{d.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============ CASOS DE ÉXITO ============ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Resultados que se notan
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Algunos proyectos recientes con empresas de la región.
              </p>
            </div>
            <Button asChild variant="link" size="sm">
              <Link href="/casos-de-exito">
                Ver todos los casos <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {CASOS.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
                <article className="flex h-full flex-col rounded-2xl border border-border bg-background-soft p-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {c.sector}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-foreground">
                    {c.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">
                    {c.text}
                  </p>
                  <p className="mt-5 text-2xl font-semibold text-foreground">
                    {c.metric}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA FINAL ============ */}
      <CtaSection />
    </>
  );
}
