import { companyInfo } from "@/config/company";

export type WhatsAppAudience =
  | "consumer"
  | "business"
  | "distributor"
  | "customer"
  | "sales";

/** Mensagens pré-preenchidas por público (abertas no WhatsApp). */
export const whatsappMessages: Record<WhatsAppAudience, string> = {
  consumer:
    "Olá! Gostaria de saber onde encontrar os produtos Lindóya Mineral.",
  business:
    "Olá! Gostaria de receber informações comerciais para minha empresa.",
  distributor:
    "Olá! Tenho interesse em distribuir os produtos Lindóya Mineral em minha região.",
  customer: "Olá! Já sou cliente e preciso de atendimento.",
  sales: "Olá! Gostaria de falar com um vendedor da Lindóya Mineral.",
};

export const whatsappMenu: Array<{ audience: WhatsAppAudience; label: string }> = [
  { audience: "consumer", label: "Sou consumidor" },
  { audience: "business", label: "Quero comprar para minha empresa" },
  { audience: "distributor", label: "Quero ser distribuidor" },
  { audience: "customer", label: "Já sou cliente" },
  { audience: "sales", label: "Quero falar com um vendedor" },
];

/**
 * Monta o link do WhatsApp para um público. Retorna null se o número não
 * estiver configurado (ver companyInfo.whatsapp / .env).
 */
export function buildWhatsAppLink(
  audience: WhatsAppAudience,
  customMessage?: string,
): string | null {
  const number = companyInfo.whatsapp.replace(/\D/g, "");
  if (!number) return null;
  const text = encodeURIComponent(customMessage ?? whatsappMessages[audience]);
  return `https://wa.me/${number}?text=${text}`;
}

export const isWhatsAppConfigured = (): boolean =>
  companyInfo.whatsapp.replace(/\D/g, "").length > 0;
