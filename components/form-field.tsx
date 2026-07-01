import type { ReactNode } from "react";

const baseInput =
  "w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

export function Field({
  label,
  htmlFor,
  children,
  required,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
  required?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={htmlFor} className="block text-sm font-medium text-foreground">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      {children}
    </div>
  );
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={baseInput} />;
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={baseInput} />;
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={baseInput} />;
}
