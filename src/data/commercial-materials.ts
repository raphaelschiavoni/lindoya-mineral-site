export type CommercialMaterial = {
  id: string;
  title: string;
  description: string;
  category: string;
  coverImage: string;
  format: string;
  size: string;
  url: string;
  updatedAt: string;
  access: "public" | "restricted";
};

/**
 * DADOS MOCKADOS da área comercial.
 * TODO: Substituir URLs e arquivos pelos materiais oficiais. Materiais
 * "restricted" exigem futura autenticação (ver /area-comercial).
 */
export const commercialMaterials: CommercialMaterial[] = [
  {
    id: "manual-marca",
    title: "Manual de Marca",
    description:
      "Guia completo de identidade visual, aplicação do logotipo, cores e tipografia da Lindóya Mineral.",
    category: "Marca",
    coverImage: "/images/logo-lindoya-mineral-horizontal.png",
    format: "PDF",
    size: "12,1 MB",
    url: "/documents/manual-de-marca-lindoya-mineral.pdf",
    updatedAt: "2025-07-20",
    access: "public",
  },
  {
    id: "catalogo-produtos",
    title: "Catálogo de Produtos",
    description:
      "Portfólio completo com fotos, volumes e descrições comerciais da linha Lindóya Mineral.",
    category: "Vendas",
    coverImage: "/images/pet-premium-azul-vermelha-lindoya-mineral.png",
    format: "PDF",
    size: "—",
    url: "#",
    updatedAt: "2025-07-20",
    access: "restricted",
  },
  {
    id: "tabela-comercial",
    title: "Tabela Comercial",
    description:
      "Condições e tabela de preços para distribuidores e representantes.",
    category: "Vendas",
    coverImage: "/images/pet-premium-lindoya-mineral.png",
    format: "PDF",
    size: "—",
    url: "#",
    updatedAt: "2025-07-20",
    access: "restricted",
  },
  {
    id: "fotos-produtos",
    title: "Fotos dos Produtos",
    description:
      "Pacote de imagens em alta resolução das embalagens para uso em divulgação.",
    category: "Mídia",
    coverImage: "/images/pet-simples-lindoya-mineral.png",
    format: "ZIP",
    size: "—",
    url: "#",
    updatedAt: "2025-07-20",
    access: "restricted",
  },
  {
    id: "logotipos",
    title: "Logotipos",
    description:
      "Versões oficiais do logotipo Lindóya Mineral em diferentes formatos.",
    category: "Marca",
    coverImage: "/images/logo-lindoya-mineral.png",
    format: "ZIP",
    size: "—",
    url: "#",
    updatedAt: "2025-07-20",
    access: "restricted",
  },
  {
    id: "apresentacao",
    title: "Apresentação Institucional",
    description:
      "Apresentação da marca, história e portfólio para reuniões comerciais.",
    category: "Vendas",
    coverImage: "/images/fonte-serra-lindoya-mineral.png",
    format: "PDF",
    size: "—",
    url: "#",
    updatedAt: "2025-07-20",
    access: "restricted",
  },
];

export const materialCategories = [
  "Todos",
  "Marca",
  "Vendas",
  "Mídia",
];
