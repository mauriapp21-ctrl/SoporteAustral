import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function CtaSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="overflow-hidden rounded-3xl border border-border bg-background-soft px-6 py-14 text-center sm:px-12">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            ¿Conversamos sobre tu próximo proyecto TI?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Cuéntanos qué necesita tu empresa y te respondemos con una propuesta
            clara, sin compromiso. Soporte cercano en todo el sur de Chile.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/cotizacion">Cotizar ahora</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/contacto">Hablar con un especialista</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
