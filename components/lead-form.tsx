"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { sendLead, type FormState } from "@/app/actions/send-lead";
import { Button } from "@/components/ui/button";

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader2 className="size-4 animate-spin" /> Enviando…
        </>
      ) : (
        label
      )}
    </Button>
  );
}

export function LeadForm({
  formType,
  submitLabel,
  children,
  className,
}: {
  formType: "contacto" | "cotizacion" | "postulacion";
  submitLabel: string;
  children: React.ReactNode;
  className?: string;
}) {
  const [state, formAction] = useActionState<FormState, FormData>(
    sendLead,
    null
  );

  return (
    <form action={formAction} className={className}>
      <input type="hidden" name="formType" value={formType} />
      {/* Honeypot anti-spam: oculto para humanos, tentador para bots. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />
      {children}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <SubmitButton label={submitLabel} />

        {state && (
          <p
            className={cn(
              "flex items-center gap-2 text-sm font-medium",
              state.ok ? "text-emerald-600" : "text-red-600"
            )}
            role="status"
          >
            {state.ok ? (
              <CheckCircle2 className="size-4 shrink-0" />
            ) : (
              <AlertCircle className="size-4 shrink-0" />
            )}
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
