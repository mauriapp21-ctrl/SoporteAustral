import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <span className="text-6xl font-semibold tracking-tight text-primary">404</span>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
          Página no encontrada
        </h1>
        <p className="mt-3 text-muted-foreground">
          La página que buscas no existe o fue movida. Volvamos a un lugar conocido.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/">Ir al inicio</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/servicios">Ver servicios</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
