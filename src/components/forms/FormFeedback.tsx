import { CheckCircle2, AlertCircle } from "lucide-react";

export function FormSuccess({
  title,
  message,
}: {
  title: string;
  message: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-card border border-gold/30 bg-offwhite px-6 py-12 text-center">
      <CheckCircle2 className="h-12 w-12 text-gold" />
      <h3 className="font-serif text-2xl font-medium text-navy">{title}</h3>
      <p className="max-w-md font-sans text-muted">{message}</p>
    </div>
  );
}

export function FormError({ message }: { message: string }) {
  return (
    <div
      role="alert"
      className="flex items-center gap-3 rounded-card border border-sparkling/30 bg-sparkling/5 px-4 py-3 font-sans text-sm text-sparkling"
    >
      <AlertCircle className="h-5 w-5 shrink-0" />
      {message}
    </div>
  );
}
