import type { Metadata } from "next";
import Image from "next/image";
import { Compass, HeartHandshake, Rocket, ShieldCheck } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Empresa — Quiénes somos",
  description:
    "Soporte Austral es una empresa de servicios TI del sur de Chile. Conoce nuestra historia, misión y los valores con los que acompañamos a nuestros clientes.",
  alternates: { canonical: "/empresa" },
};

const VALORES = [
  { icon: HeartHandshake, title: "Cercanía", text: "Hablamos claro y estamos disponibles. La tecnología es un medio; las personas son el centro." },
  { icon: ShieldCheck, title: "Confiabilidad", text: "Cumplimos lo que prometemos, con seguridad y continuidad operacional como prioridad." },
  { icon: Rocket, title: "Mejora continua", text: "Buscamos siempre la forma de hacer más eficiente la operación de nuestros clientes." },
  { icon: Compass, title: "Compromiso local", text: "Creemos en el desarrollo del sur de Chile y trabajamos para impulsarlo con tecnología." },
];

export default function EmpresaPage() {
  return (
    <>
      <PageHero
        eyebrow="Empresa"
        title="Tecnología del sur, para el sur"
        description="Nacimos en el sur de Chile con una convicción simple: las empresas de la región merecen un socio tecnológico de primer nivel, cercano y confiable."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 pt-16 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative aspect-[2.4/1] overflow-hidden rounded-3xl border border-border shadow-lg shadow-slate-900/5">
              <Image
                src="/images/empresa.jpg"
                alt="Equipo de profesionales TI de Soporte Austral en una reunión de trabajo"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <Reveal className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Soporte Austral surge de la experiencia de un equipo que conoce de
              cerca los desafíos de operar TI en el sur de Chile: distancias,
              conectividad variable y la necesidad de respuestas rápidas y reales.
            </p>
            <p>
              Hoy acompañamos a empresas de distintos rubros —acuícola, retail,
              servicios profesionales, logística e industria— entregando soporte
              informático, soluciones cloud, ciberseguridad, desarrollo de
              software, Business Intelligence y automatización de procesos.
            </p>
            <p>
              Nuestro propósito es que la tecnología deje de ser un dolor de
              cabeza y se transforme en una ventaja competitiva. Este texto es
              editable y se ajustará al relato real de la empresa.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-background-soft">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">
              Nuestros valores
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VALORES.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 0.05}>
                  <div className="h-full rounded-2xl border border-border bg-white p-6">
                    <span className="grid size-11 place-items-center rounded-xl bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </span>
                    <h3 className="mt-4 font-semibold text-foreground">{v.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
                  </div>
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
