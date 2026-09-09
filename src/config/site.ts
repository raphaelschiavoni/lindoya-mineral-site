import { companyInfo } from "./company";

/** Configuração global do site — usada em SEO, metadata e schema.org. */
export const siteConfig = {
  name: "Lindóya Mineral",
  shortName: "Lindóya",
  tagline: "Fonte de pureza e tradição",
  description:
    "Água mineral natural da região de Águas de Lindóia (SP). Da fonte para a sua mesa: origem, qualidade e uma história que atravessa gerações. Opções com e sem gás para consumidores, empresas e distribuidores.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? companyInfo.website,
  locale: "pt_BR",
  themeColor: "#16233f",
  ogImage: "/images/pet-premium-azul-vermelha-lindoya-mineral.png",
  keywords: [
    "Lindóya Mineral",
    "água mineral Lindóya",
    "água mineral de Águas de Lindóia",
    "distribuidor de água mineral",
    "água mineral para restaurantes",
    "água mineral para hotéis",
    "fornecedor de água mineral",
    "água mineral com gás",
    "água mineral sem gás",
    "água premium 510ml",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
