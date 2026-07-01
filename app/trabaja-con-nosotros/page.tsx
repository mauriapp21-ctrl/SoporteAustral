import type { Metadata } from "next";
import { Heart, GraduationCap, Home, TrendingUp } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/lead-form";
import { Field, Input, Textarea, Select } from "@/components/form-field";

export const metadata: Metadata = {
  title: "Trabaja con nosotros",
  description:
    "Únete al equipo de Soporte Austral. Buscamos talento TI en el sur de Chile que quiera crecer con nosotros.",
  alternates: { canonical: "/trabaja-con-nosotros" },
};

const BENEFICIOS = [
  { icon: Home, title: "Trabajo flexible", text: "Modalidad híbrida y horarios pensados para conciliar vida y trabajo." },
  { icon: GraduationCap, title: "Formación continua", text: "Certificaciones y capacitación para que sigas creciendo profesionalmente." },
  { icon: TrendingUp, title: "Proyección", text: "Plan de carrera real en una empresa en crecimiento en el sur de Chile." },
  { icon: Heart, title: "Buen ambiente", text: "Un equipo cercano que valora a las personas tanto como a la técnica." },
];

const VACANTES = [
  { rol: "Técnico de soporte TI", lugar: "Puerto Montt · Presencial/Híbrido", tipo: "Full-time" },
  { rol: "Ingeniero Cloud (Azure / M365)", lugar: "Sur de Chile · Híbrido", tipo: "Full-time" },
  { rol: "Desarrollador/a Full-Stack", lugar: "Remoto (Chile)", tipo: "Full-time" },
];

export default function TrabajaPage() {
  return (
    <>
      <PageHero
        eyebrow="Trabaja con nosotros"
        title="Crece con un equipo que apuesta por el sur"
        description="Buscamos personas apasionadas por la tecnología y el servicio. Si quieres dejar huella en empresas de la región, este es tu lugar."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">
              Por qué trabajar aquí
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFICIOS.map((b, i) => {
              const Icon = b.icon;
              return (
                <Reveal key={b.title} delay={i * 0.05}>
                  <div className="h-full rounded-2xl border border-border bg-white p-6">
                    <span className="grid size-11 place-items-center rounded-xl bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </span>
                    <h3 className="mt-4 font-semibold text-foreground">{b.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-background-soft">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">
              Vacantes abiertas
            </h2>
            <p className="mt-3 text-muted-foreground">
              Ejemplos de roles. Las vacantes reales se publicarán aquí.
            </p>
          </Reveal>
          <ul className="mt-8 space-y-3">
            {VACANTES.map((v, i) => (
              <Reveal key={v.rol} delay={i * 0.05}>
                <li className="flex flex-col gap-3 rounded-2xl border border-border bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground">{v.rol}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {v.lugar} · {v.tipo}
                    </p>
                  </div>
                  <Button asChild variant="secondary" size="sm">
                    <a href="#postular">Postular</a>
                  </Button>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section id="postular" className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">
              Envíanos tu CV
            </h2>
            <p className="mt-3 text-muted-foreground">
              ¿No ves tu cargo? Igual queremos conocerte.
            </p>
            <LeadForm
              formType="postulacion"
              submitLabel="Enviar postulación"
              className="mt-8 rounded-2xl border border-border bg-background-soft p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Nombre" htmlFor="nombre" required>
                  <Input id="nombre" name="nombre" placeholder="Tu nombre" />
                </Field>
                <Field label="Correo" htmlFor="email" required>
                  <Input id="email" name="email" type="email" placeholder="tucorreo@email.cl" />
                </Field>
                <Field label="Cargo de interés" htmlFor="cargo">
                  <Select id="cargo" name="cargo" defaultValue="">
                    <option value="" disabled>
                      Selecciona un área
                    </option>
                    <option>Soporte TI</option>
                    <option>Cloud / Infraestructura</option>
                    <option>Desarrollo de software</option>
                    <option>Datos / BI</option>
                    <option>Ciberseguridad</option>
                    <option>Otro</option>
                  </Select>
                </Field>
                <Field label="LinkedIn / Portafolio" htmlFor="link">
                  <Input id="link" name="link" placeholder="https://..." />
                </Field>
              </div>
              <div className="mt-5">
                <Field label="Cuéntanos sobre ti" htmlFor="mensaje">
                  <Textarea id="mensaje" name="mensaje" rows={4} placeholder="Experiencia, motivación, etc." />
                </Field>
              </div>
            </LeadForm>
          </Reveal>
        </div>
      </section>
    </>
  );
}
