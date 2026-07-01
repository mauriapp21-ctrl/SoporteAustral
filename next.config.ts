import type { NextConfig } from "next";

/**
 * Content-Security-Policy.
 *
 * Nota: se permite 'unsafe-inline' en script-src porque el sitio es estático
 * (SSG) y Next inyecta scripts de hidratación y JSON-LD inline sin nonce. Una
 * CSP con nonce requeriría renderizado dinámico vía middleware, lo que
 * penalizaría el rendimiento. Se restringen el resto de directivas (object-src,
 * base-uri, frame-ancestors, form-action) que sí aportan protección real.
 */
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-ancestors 'self'",
  "form-action 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  // Aísla el contexto de navegación (protege de ataques cross-origin).
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  // Impide que otros orígenes carguen recursos de este sitio.
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
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
