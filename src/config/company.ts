/**
 * Dados institucionais da empresa.
 *
 * Dados fornecidos pelo cliente ("usar por enquanto"). Razão social e CNPJ
 * ainda a preencher. WhatsApp/e-mail podem vir de variáveis de ambiente.
 */
export const companyInfo = {
  companyName: "Lindóya Mineral",
  legalName: "", // Razão social — a preencher
  cnpj: "", // CNPJ — a preencher
  foundedYear: 1952,
  slogan: "Distribuindo saúde até você",
  tagline: "Levamos saúde e tradição até você",
  address: "R. Silviano Brandão, 30 — Centro, Jacutinga - MG, 37590-000",
  city: "Jacutinga",
  state: "MG",
  phone: "(19) 98179-0197",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5519981790197",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "", // a preencher
  instagram: "@lindoyamineral",
  instagramUrl: "https://instagram.com/lindoyamineral",
  website: "https://www.lindoyamineral.com.br",
} as const;

/** Anos de tradição a partir do ano de fundação. */
export function companyYears(): number {
  return new Date().getFullYear() - companyInfo.foundedYear;
}

/** Indica se um dado institucional está disponível para exibição. */
export function hasCompanyData(value: string): boolean {
  return value.trim().length > 0;
}
