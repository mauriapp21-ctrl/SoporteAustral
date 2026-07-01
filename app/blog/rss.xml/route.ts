import { SITE } from "@/lib/site";
import { POSTS } from "@/lib/blog";

// El feed depende solo de datos en build → generación estática y cacheada.
export const dynamic = "force-static";

/** Escapa caracteres reservados de XML. */
function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function GET() {
  const feedUrl = `${SITE.url}/blog/rss.xml`;
  const items = [...POSTS]
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .map((p) => {
      const url = `${SITE.url}/blog/${p.slug}`;
      return `    <item>
      <title>${esc(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <category>${esc(p.category)}</category>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description>${esc(p.excerpt)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(SITE.name)} — Blog</title>
    <link>${SITE.url}/blog</link>
    <description>${esc(SITE.description)}</description>
    <language>es-CL</language>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
