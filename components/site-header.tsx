"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { SERVICES, ACCENT_CLASSES } from "@/lib/services";
import { Button } from "@/components/ui/button";

const NAV = [
  { href: "/empresa", label: "Empresa" },
  { href: "/servicios", label: "Servicios", hasMenu: true },
  { href: "/casos-de-exito", label: "Casos de éxito" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
            SA
          </span>
          <span className="text-lg font-medium tracking-tight text-foreground">
            Soporte Austral
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) =>
            item.hasMenu ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                    pathname.startsWith("/servicios") && "text-foreground"
                  )}
                >
                  {item.label}
                  <ChevronDown className="size-4" />
                </Link>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-1/2 top-full w-[34rem] -translate-x-1/2 pt-3"
                    >
                      <div className="grid grid-cols-2 gap-1 rounded-xl border border-border bg-white p-2 shadow-lg shadow-slate-900/5">
                        {SERVICES.map((s) => {
                          const Icon = s.icon;
                          const accent = ACCENT_CLASSES[s.accent];
                          return (
                            <Link
                              key={s.slug}
                              href={`/servicios/${s.slug}`}
                              className="group flex gap-3 rounded-lg p-3 transition-colors hover:bg-background-soft"
                            >
                              <span
                                className={cn(
                                  "grid size-9 shrink-0 place-items-center rounded-lg",
                                  accent.bg
                                )}
                              >
                                <Icon className={cn("size-5", accent.text)} />
                              </span>
                              <span className="min-w-0">
                                <span className="block text-sm font-medium text-foreground">
                                  {s.name}
                                </span>
                                <span className="block truncate text-xs text-muted-foreground">
                                  {s.tagline}
                                </span>
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  pathname === item.href && "text-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="primary" size="sm">
            <Link href="/cotizacion">Cotizar</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Abrir menú"
          className="grid size-10 place-items-center rounded-lg text-foreground lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-border bg-white lg:hidden"
          >
            <div className="space-y-1 px-4 py-4" onClick={closeMobile}>
              <Link href="/empresa" className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-background-soft">
                Empresa
              </Link>
              <p className="px-3 pb-1 pt-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Servicios
              </p>
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/servicios/${s.slug}`}
                  className="block rounded-lg px-3 py-2 text-sm text-foreground hover:bg-background-soft"
                >
                  {s.name}
                </Link>
              ))}
              {NAV.filter((n) => !n.hasMenu && n.href !== "/empresa").map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-background-soft"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3">
                <Button asChild variant="primary" size="md" className="w-full">
                  <Link href="/cotizacion">Cotizar</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
