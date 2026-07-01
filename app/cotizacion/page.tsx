import type { Metadata } from "next";

import { SERVICES } from "@/lib/services";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { LeadForm } from "@/components/lead-form";
import { Field, Input, Textarea, Select } from "@/components/form-field";

export const metadata: Metadata = {
  title: "Cotización — Solicita tu propuesta TI",
  description:
    "Solicita una cotización para los servicios TI de tu empresa. Te respondemos con una propuesta clara y sin compromiso.",
  alternates: { canonical: "/cotizacion" },
};

export default function CotizacionPage() {
  return (
    <>
      <PageHero
        eyebrow="Cotización"
        title="Solicita tu cotización sin compromiso"
        description="Completa el formulario con los detalles de tu necesidad y te enviaremos una propuesta a la medida."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <Reveal>
            <LeadForm
              formType="cotizacion"
              submitLabel="Solicitar cotización"
              className="rounded-2xl border border-border bg-background-soft p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Nombre" htmlFor="nombre" required>
                  <Input id="nombre" name="nombre" placeholder="Tu nombre" />
                </Field>
                <Field label="Empresa" htmlFor="empresa" required>
                  <Input id="empresa" name="empresa" placeholder="Tu empresa" />
                </Field>
                <Field label="Correo" htmlFor="email" required>
                  <Input id="email" name="email" type="email" placeholder="tucorreo@empresa.cl" />
                </Field>
                <Field label="Teléfono" htmlFor="telefono">
                  <Input id="telefono" name="telefono" placeholder="+56 9 ..." />
                </Field>
                <Field label="Servicio de interés" htmlFor="servicio">
                  <Select id="servicio" name="servicio" defaultValue="">
                    <option value="" disabled>
                      Selecciona un servicio
                    </option>
                    {SERVICES.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.name}
                      </option>
                    ))}
                    <option value="varios">Varios / no estoy seguro</option>
                  </Select>
                </Field>
                <Field label="N° de usuarios / equipos" htmlFor="tamano">
                  <Select id="tamano" name="tamano" defaultValue="">
                    <option value="" disabled>
                      Selecciona un rango
                    </option>
                    <option value="1-10">1 a 10</option>
                    <option value="11-50">11 a 50</option>
                    <option value="51-200">51 a 200</option>
                    <option value="200+">Más de 200</option>
                  </Select>
                </Field>
              </div>
              <div className="mt-5">
                <Field label="Detalle de tu necesidad" htmlFor="detalle" required>
                  <Textarea id="detalle" name="detalle" rows={5} placeholder="Describe el proyecto o problema que quieres resolver" />
                </Field>
              </div>
            </LeadForm>
          </Reveal>
        </div>
      </section>
    </>
  );
}
