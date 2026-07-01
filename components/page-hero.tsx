import { Reveal } from "@/components/reveal";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-border bg-background-soft">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal className="max-w-3xl">
          {eyebrow && (
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg text-muted-foreground">{description}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
