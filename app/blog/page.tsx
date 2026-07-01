import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { POSTS, formatDate } from "@/lib/blog";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos sobre tecnología para empresas: soporte TI, cloud, ciberseguridad, datos y automatización, con foco en el sur de Chile.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Ideas y guías de tecnología para tu empresa"
        description="Contenido práctico para tomar mejores decisiones TI. Artículos de ejemplo, editables."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-4 lg:grid-cols-3">
            {POSTS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-slate-900/5">
                  <Link href={`/blog/${p.slug}`} className="relative block aspect-[16/9] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="font-semibold uppercase tracking-wide text-primary">
                      {p.category}
                    </span>
                    <span>·</span>
                    <time dateTime={p.date}>{formatDate(p.date)}</time>
                  </div>
                  <h2 className="mt-3 text-lg font-semibold text-foreground">
                    <Link href={`/blog/${p.slug}`} className="hover:text-primary">
                      {p.title}
                    </Link>
                  </h2>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary"
                  >
                    Leer artículo <ArrowRight className="size-4" />
                  </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
