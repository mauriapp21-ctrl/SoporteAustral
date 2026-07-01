"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Clock,
  Headphones,
  Star,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const float: Variants = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* ---- Malla de gradiente luminosa ---- */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 24, 0], opacity: [0.55, 0.8, 0.55] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-10%] top-[-15%] h-[46rem] w-[46rem] rounded-full bg-[#2563EB] opacity-60 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 18, 0], opacity: [0.4, 0.65, 0.4] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-8%] top-[0%] h-[34rem] w-[34rem] rounded-full bg-[#06B6D4] opacity-50 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, 24, 0], y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] left-[28%] h-[30rem] w-[30rem] rounded-full bg-[#8B5CF6] opacity-40 blur-[120px]"
        />
      </div>

      {/* ---- Cuadrícula técnica ---- */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35] [mask-image:radial-gradient(ellipse_75%_65%_at_42%_40%,black,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* ---- Grano ---- */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 pb-28 pt-24 sm:px-6 lg:grid-cols-[1.4fr_0.9fr] lg:gap-20 lg:pb-36 lg:pt-32 lg:px-8">
        {/* ===== IZQUIERDA: imagen luminosa + tarjetas ===== */}
        <motion.div
          initial={{ opacity: 0, x: -44, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-2 lg:order-1"
        >
          {/* glow detrás */}
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-[#2563EB]/40 via-[#8B5CF6]/20 to-[#06B6D4]/40 blur-3xl" />

          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] p-px shadow-[0_40px_120px_-20px_rgba(37,99,235,0.5)] sm:aspect-[16/11]">
            {/* borde luminoso */}
            <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-tr from-white/30 via-[#06B6D4]/30 to-transparent" />
            <div className="relative h-full w-full overflow-hidden rounded-[calc(1.75rem-1px)]">
              <Image
                src="/images/hero.jpg"
                alt="Equipo de Soporte Austral colaborando en servicios TI para empresas del sur de Chile"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 820px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
            </div>
          </div>

          {/* Tarjeta flotante: SLA */}
          <motion.div
            variants={float}
            animate="animate"
            className="absolute -left-4 top-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-3 pr-4 shadow-xl shadow-black/30 backdrop-blur-xl sm:-left-7"
          >
            <span className="grid size-10 place-items-center rounded-xl bg-[#2563EB]/25">
              <Clock className="size-5 text-[#60a5fa]" />
            </span>
            <div className="text-left">
              <p className="text-sm font-semibold text-white">SLA garantizado</p>
              <p className="text-xs text-slate-300">Respuesta en minutos</p>
            </div>
          </motion.div>

          {/* Tarjeta flotante: uptime */}
          <motion.div
            variants={float}
            animate="animate"
            transition={{ delay: 1.2 }}
            className="absolute -right-4 top-1/2 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-3 pr-4 shadow-xl shadow-black/30 backdrop-blur-xl sm:-right-7"
          >
            <span className="grid size-10 place-items-center rounded-xl bg-[#8B5CF6]/25">
              <ShieldCheck className="size-5 text-[#a78bfa]" />
            </span>
            <div className="text-left">
              <p className="text-sm font-semibold text-white">99,9% uptime</p>
              <p className="text-xs text-slate-300">Operación continua</p>
            </div>
          </motion.div>

          {/* Tarjeta flotante: soporte local */}
          <motion.div
            variants={float}
            animate="animate"
            transition={{ delay: 2.2 }}
            className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-3 pr-4 shadow-xl shadow-black/30 backdrop-blur-xl"
          >
            <span className="grid size-10 place-items-center rounded-xl bg-[#06B6D4]/25">
              <Headphones className="size-5 text-[#22d3ee]" />
            </span>
            <div className="text-left">
              <p className="text-sm font-semibold text-white">Soporte local</p>
              <p className="text-xs text-slate-300">Puerto Montt y el sur</p>
            </div>
          </motion.div>
        </motion.div>

        {/* ===== DERECHA: textos ===== */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="order-1 text-center lg:order-2 lg:text-left"
        >
          <motion.div variants={item} className="flex justify-center lg:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-200 backdrop-blur">
              <Sparkles className="size-4 text-[#a78bfa]" />
              Servicios TI para el sur de Chile
              <span className="relative ml-1 flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22d3ee]/70" />
                <span className="relative inline-flex size-2 rounded-full bg-[#22d3ee]" />
              </span>
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-7 text-[2.6rem] font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl sm:leading-[1.1] lg:text-[3.6rem]"
          >
            Tecnología confiable,{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#60a5fa] via-[#3B82F6] to-[#22d3ee] bg-clip-text text-transparent">
                soporte cercano
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.9, duration: 0.7, ease: "easeOut" }}
                className="absolute -bottom-1.5 left-0 h-1.5 w-full origin-left rounded-full bg-gradient-to-r from-[#2563EB] to-[#22d3ee] shadow-[0_0_20px_rgba(34,211,238,0.6)]"
              />
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-slate-300 lg:mx-0"
          >
            Somos el socio tecnológico de las empresas del sur de Chile. Soporte
            informático, cloud, ciberseguridad, desarrollo de software, Business
            Intelligence y automatización, con un equipo que está donde tú estás.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Button asChild size="lg" className="group shadow-lg shadow-[#2563EB]/40">
              <Link href="/cotizacion">
                Cotizar ahora
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="border border-white/20 bg-white/5 text-white hover:bg-white/10"
            >
              <Link href="/servicios">Ver servicios</Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-8 lg:max-w-none"
          >
            {[
              { value: "+10", label: "años de experiencia" },
              { value: "99,9%", label: "uptime garantizado" },
              { value: "24/7", label: "monitoreo" },
            ].map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <p className="text-2xl font-semibold tracking-tight text-white">
                  {s.value}
                </p>
                <p className="mt-1 text-xs leading-tight text-slate-400">{s.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={item}
            className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-300 lg:justify-start"
          >
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
              ))}
            </span>
            Empresas del sur que ya confían en nosotros
          </motion.div>
        </motion.div>
      </div>

      {/* transición suave hacia el contenido claro */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
