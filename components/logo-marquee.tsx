"use client";

import { motion } from "framer-motion";

const LOGOS = [
  "Acuinova",
  "Patagonia Retail",
  "Estudio Andes",
  "Grupo Reloncaví",
  "LogiSur",
  "Maderas del Sur",
  "Salmones Chiloé",
  "Austral Foods",
];

export function LogoMarquee() {
  return (
    <section className="border-y border-border bg-background-soft">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground">
          Empresas del sur de Chile confían en nosotros
        </p>

        <div className="relative mt-7 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <motion.div
            className="flex w-max gap-14 pr-14"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <span
                key={`${logo}-${i}`}
                className="whitespace-nowrap text-lg font-semibold text-muted-foreground/55 transition-colors hover:text-foreground"
              >
                {logo}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
