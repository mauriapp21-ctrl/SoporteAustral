import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Casos de éxito",
  description:
    "Proyectos reales de Soporte Austral con empresas del sur de Chile: soporte TI, cloud, ciberseguridad, desarrollo, Business Intelligence y automatización.",
  alternates: { canonical: "/casos-de-exito" },
};

const CASOS = [
  { sector: "Acuícola", title: "Continuidad operacional en centros remotos", text: "Enlaces redundantes y respaldo cloud para asegurar operación 24/7 en zonas de difícil conectividad.", metric: "99,9% uptime" },
  { sector: "Retail regional", title: "Business Intelligence con Power BI", text: "Tableros centralizados de ventas e inventario para 12 sucursales, con cierre mensual casi automático.", metric: "-80% tiempo de reporte" },
  { sector: "Servicios profesionales", title: "Migración a Microsoft 365", text: "Migración de correo, archivos y colaboración a la nube sin interrumpir la operación diaria.", metric: "60 usuarios" },
  { sector: "Logística", title: "Automatización de despachos", text: "Flujos con Power Automate que eliminaron la digitación manual de guías y redujeron errores.", metric: "-70% tareas manuales" },
  { sector: "Industria", title: "Plan de ciberseguridad integral", text: "EDR, segmentación de red y concientización de usuarios para una planta productiva.", metric: "0 incidentes graves" },
  { sector: "Salud", title: "Sistema de gestión a medida", text: "Aplicación web para agendamiento y fichas, integrada con los sistemas existentes.", metric: "+40% eficiencia" },
];

export default function CasosPage() {
  return (
    <>
      <PageHero
        eyebrow="Casos de éxito"
        title="Resultados reales en el sur de Chile"
        description="Una muestra de proyectos en los que la tecnología generó un impacto medible. Contenido de ejemplo, editable con casos reales."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative aspect-[2.6/1] overflow-hidden rounded-3xl border border-border shadow-lg shadow-slate-900/5">
              <Image
                src="/images/casos.jpg"
                alt="Análisis de resultados de negocio con datos y reportes"
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CASOS.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.04}>
                <article className="flex h-full flex-col rounded-2xl border border-border bg-background-soft p-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {c.sector}
                  </span>
                  <h2 className="mt-3 text-lg font-semibold text-foreground">{c.title}</h2>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{c.text}</p>
                  <p className="mt-5 text-2xl font-semibold text-foreground">{c.metric}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
