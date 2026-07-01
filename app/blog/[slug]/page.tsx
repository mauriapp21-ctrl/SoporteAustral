import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { SITE } from "@/lib/site";
import { POSTS, getPost, formatDate } from "@/lib/blog";
import { breadcrumbList } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE.url}${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    inLanguage: "es-CL",
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: { "@id": `${SITE.url}/#organization` },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
  };

  const breadcrumbs = breadcrumbList([
    { name: "Inicio", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd data={breadcrumbs} />
      <article>
        <header className="border-b border-border bg-background-soft">
          <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary"
            >
              <ArrowLeft className="size-4" /> Volver al blog
            </Link>
            <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
              <span className="font-semibold uppercase tracking-wide text-primary">
                {post.category}
              </span>
              <span>·</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>·</span>
              <span>{post.readingTime} de lectura</span>
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {post.title}
            </h1>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative -mt-0 aspect-[16/9] overflow-hidden rounded-3xl border border-border shadow-lg shadow-slate-900/5 sm:aspect-[2.4/1]">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
          <Reveal className="space-y-6 text-base leading-relaxed text-muted-foreground">
            {post.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
        </div>
      </article>

      <CtaSection />
    </>
  );
}
