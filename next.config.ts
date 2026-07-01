import type { NextConfig } from "next";

const securityHeaders = [
  // Evita que el navegador "adivine" tipos MIME (protege de XSS por sniffing).
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Anti-clickjacking: el sitio no puede incrustarse en iframes de otros.
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Controla cuánta info de referer se envía.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Fuerza HTTPS en el navegador durante 2 años.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Desactiva APIs sensibles del navegador que el sitio no usa.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
