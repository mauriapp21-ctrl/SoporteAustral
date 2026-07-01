"use server";

import { Resend } from "resend";

import { SITE } from "@/lib/site";

export type FormState = { ok: boolean; message: string } | null;

const TO = process.env.CONTACT_EMAIL || SITE.email;
// Remitente configurable: al verificar el dominio en Resend, define
// RESEND_FROM (ej. "Soporte Austral <contacto@soporteaustral.cl>") para
// mejorar la entregabilidad. Mientras tanto usa el remitente de pruebas.
const FROM = process.env.RESEND_FROM || "Soporte Austral <onboarding@resend.dev>";

// Etiquetas legibles para los campos de los formularios.
const LABELS: Record<string, string> = {
  nombre: "Nombre",
  empresa: "Empresa",
  email: "Correo",
  telefono: "Teléfono",
  servicio: "Servicio de interés",
  tamano: "N° de usuarios / equipos",
  detalle: "Detalle",
  mensaje: "Mensaje",
  cargo: "Cargo de interés",
  link: "LinkedIn / Portafolio",
};

const TYPE_LABEL: Record<string, string> = {
  contacto: "Contacto",
  cotizacion: "Cotización",
  postulacion: "Postulación",
};

/**
 * Envía un aviso a WhatsApp usando CallMeBot (gratis). Solo actúa si están
 * definidas las variables WHATSAPP_PHONE y CALLMEBOT_APIKEY. Nunca lanza:
 * si falla, se registra y el formulario igual se considera enviado (el
 * correo por Resend es el canal principal).
 */
async function notifyWhatsApp(label: string, nombre: string, email: string) {
  const phone = process.env.WHATSAPP_PHONE;
  const apikey = process.env.CALLMEBOT_APIKEY;
  if (!phone || !apikey) return;

  const text = encodeURIComponent(
    `Nuevo ${label} en soporteaustral.cl\nDe: ${nombre}\nCorreo: ${email}`
  );
  const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${text}&apikey=${apikey}`;

  try {
    await fetch(url, { method: "GET" });
  } catch (err) {
    console.error("CallMeBot error:", err);
  }
}

export async function sendLead(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  // Honeypot anti-spam: campo oculto que solo los bots rellenan.
  // Si viene con contenido, fingimos éxito y no enviamos nada.
  if (String(formData.get("website") || "").trim() !== "") {
    return { ok: true, message: "¡Gracias! Recibimos tu mensaje y te contactaremos pronto." };
  }

  const type = String(formData.get("formType") || "contacto");
  const nombre = String(formData.get("nombre") || "").trim();
  const email = String(formData.get("email") || "").trim();

  // Validación básica en el servidor.
  if (!nombre || !email) {
    return { ok: false, message: "Por favor completa tu nombre y correo." };
  }
  if (nombre.length > 120 || email.length > 160) {
    return { ok: false, message: "Los datos ingresados son demasiado largos." };
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return { ok: false, message: "El correo ingresado no es válido." };
  }

  if (!process.env.RESEND_API_KEY) {
    return {
      ok: false,
      message: "El envío no está configurado aún. Inténtalo más tarde.",
    };
  }

  // Construye el resumen de todos los campos enviados.
  const lines: string[] = [];
  for (const [key, value] of formData.entries()) {
    if (key === "formType" || key === "website") continue;
    const v = String(value).trim().slice(0, 2000);
    if (!v) continue;
    lines.push(`${LABELS[key] ?? key}: ${v}`);
  }

  const label = TYPE_LABEL[type] ?? "Contacto";

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `[${label}] Nuevo mensaje de ${nombre}`,
      text: `Nuevo mensaje desde el formulario de ${label} del sitio web.\n\n${lines.join(
        "\n"
      )}\n`,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        ok: false,
        message: "No pudimos enviar tu mensaje. Intenta nuevamente.",
      };
    }

    // Notificación opcional a WhatsApp vía CallMeBot (no bloquea el flujo).
    await notifyWhatsApp(label, nombre, email);

    return {
      ok: true,
      message: "¡Gracias! Recibimos tu mensaje y te contactaremos pronto.",
    };
  } catch (err) {
    console.error("sendLead exception:", err);
    return {
      ok: false,
      message: "Ocurrió un error al enviar. Intenta nuevamente.",
    };
  }
}
