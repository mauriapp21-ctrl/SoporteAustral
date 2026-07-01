import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { SERVICES, ACCENT_CLASSES } from "@/lib/services";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Servicios TI para empresas en el sur de Chile",
  description:
    "Conoce los servicios TI de Soporte Austral: soporte informático, cloud, ciberseguridad, desarrollo de software, Business Intelligence y automatización de procesos.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Servicios TI para empresas del sur de Chile"
        description="Seis áreas de especialidad que cubren todo el ciclo tecnológico de tu empresa, desde el soporte diario hasta la inteligencia de datos."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              const accent = ACCENT_CLASSES[s.accent];
              // Primer y último item ocupan más espacio (bento).
              const wide = i === 0 || i === SERVICES.length - 1;
              return (
                <Reveal
                  key={s.slug}
                  delay={i * 0.05}
                  className={cn(wide && "sm:col-span-2 lg:col-span-2")}
                >
                  <Link
                    href={`/servicios/${s.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-slate-900/5"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={s.image}
                        alt={s.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                    <span className={cn("grid size-12 place-items-center rounded-xl", accent.bg)}>
                      <Icon className={cn("size-6", accent.text)} />
                    </span>
                    <h2 className="mt-5 text-xl font-semibold text-foreground">
                      {s.name}
                    </h2>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">
                      {s.tagline}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Conocer más
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
