import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import {
  LinkedInIcon,
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  YouTubeIcon,
} from "@/components/social-icons";

const EMPRESA = [
  { href: "/empresa", label: "Nosotros" },
  { href: "/casos-de-exito", label: "Casos de éxito" },
  { href: "/trabaja-con-nosotros", label: "Trabaja con nosotros" },
  { href: "/contacto", label: "Contacto" },
];

const RECURSOS = [
  { href: "/blog", label: "Blog" },
  { href: "/cotizacion", label: "Cotización" },
  { href: "/servicios", label: "Todos los servicios" },
];

const SOCIAL = [
  { href: SITE.social.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: SITE.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: SITE.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: SITE.social.tiktok, label: "TikTok", Icon: TikTokIcon },
  { href: SITE.social.youtube, label: "YouTube", Icon: YouTubeIcon },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background-soft">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand + contacto */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                SA
              </span>
              <span className="text-lg font-medium tracking-tight text-foreground">
                Soporte Austral
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Servicios TI para empresas del sur de Chile. Tecnología confiable,
              soporte cercano.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="size-4 text-primary" />
                {SITE.address.city}, {SITE.address.region}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-primary" />
                <a href={`mailto:${SITE.email}`} className="hover:text-foreground">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-primary" />
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-foreground">
                  {SITE.phone}
                </a>
              </li>
            </ul>
          </div>

          <FooterCol title="Servicios" links={SERVICES.map((s) => ({ href: `/servicios/${s.slug}`, label: s.name }))} />
          <FooterCol title="Empresa" links={EMPRESA} />
          <FooterCol title="Recursos" links={RECURSOS} />
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {SITE.legalName}. Todos los derechos reservados.
          </p>
          <ul className="flex items-center gap-2">
            {SOCIAL.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-9 place-items-center rounded-lg border border-border bg-white text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href + l.label}>
            <Link href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
