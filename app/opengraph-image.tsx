import { ImageResponse } from "next/og";

import { SITE } from "@/lib/site";

export const alt =
  "Soporte Austral — Servicios TI para empresas del sur de Chile";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #020617 0%, #0f172a 55%, #1e293b 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "#2563eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
              fontWeight: 700,
            }}
          >
            SA
          </div>
          <div style={{ fontSize: "30px", fontWeight: 600 }}>{SITE.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: "900px",
            }}
          >
            Servicios TI para empresas del sur de Chile
          </div>
          <div style={{ fontSize: "30px", color: "#94a3b8", maxWidth: "820px" }}>
            Soporte informático, cloud, ciberseguridad, desarrollo y datos.
            Cobertura en la Región de Los Lagos.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "26px",
            color: "#38bdf8",
            fontWeight: 600,
          }}
        >
          soporteaustral.cl
        </div>
      </div>
    ),
    { ...size }
  );
}
