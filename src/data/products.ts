export type ProductCategory = "premium" | "pet";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  volume: string;
  sparkling: boolean;
  image: string;
  gallery: string[];
  shortDescription: string;
  description: string;
  recommendedFor: string[];
  specifications: { label: string; value: string }[];
  featured: boolean;
  available: boolean;
};

export const categoryLabels: Record<ProductCategory, string> = {
  premium: "Linha Premium",
  pet: "Linha PET",
};

/**
 * Catálogo Lindóya Mineral (linha atual).
 *
 * TODO: A composição química, dados de embalagem e demais especificações
 * técnicas devem ser confirmados e aprovados pela equipe responsável antes
 * da publicação. Nenhum dado técnico não confirmado foi incluído aqui.
 */
export const products: Product[] = [
  {
    id: "premium-510-sem-gas",
    slug: "premium-510ml-sem-gas",
    name: "Lindóya Mineral Premium 510 ml — Sem Gás",
    category: "premium",
    categoryLabel: categoryLabels.premium,
    volume: "510 ml",
    sparkling: false,
    image: "/images/pet-premium-lindoya-mineral.png",
    gallery: [
      "/images/pet-premium-lindoya-mineral.png",
      "/images/pet-premium-azul-vermelha-lindoya-mineral.png",
    ],
    shortDescription:
      "Água mineral natural sem gás na garrafa premium azul, para a mesa e ocasiões especiais.",
    description:
      "A linha premium sem gás da Lindóya Mineral traduz elegância e pureza em cada detalhe. Identificada pela cor azul, é a escolha para restaurantes, hotéis, eventos e para o consumo à mesa, unindo a leveza da água mineral natural à tradição da marca.",
    recommendedFor: ["Restaurantes", "Hotéis", "Eventos", "Consumo à mesa"],
    specifications: [
      { label: "Volume", value: "510 ml" },
      { label: "Tipo", value: "Sem gás" },
      { label: "Linha", value: "Premium" },
      { label: "Identificação", value: "Azul" },
    ],
    featured: true,
    available: true,
  },
  {
    id: "premium-510-com-gas",
    slug: "premium-510ml-com-gas",
    name: "Lindóya Mineral Premium 510 ml — Com Gás",
    category: "premium",
    categoryLabel: categoryLabels.premium,
    volume: "510 ml",
    sparkling: true,
    image: "/images/pet-premium-azul-vermelha-lindoya-mineral.png",
    gallery: [
      "/images/pet-premium-azul-vermelha-lindoya-mineral.png",
      "/images/pet-premium-lindoya-mineral.png",
    ],
    shortDescription:
      "Água mineral natural com gás na garrafa premium vermelha, para gastronomia e encontros especiais.",
    description:
      "A versão com gás da linha premium, identificada pela cor vinho, acompanha a gastronomia, os encontros e as ocasiões especiais. Mesma pureza de origem, com a efervescência que valoriza a experiência à mesa.",
    recommendedFor: ["Gastronomia", "Restaurantes", "Hotéis", "Ocasiões especiais"],
    specifications: [
      { label: "Volume", value: "510 ml" },
      { label: "Tipo", value: "Com gás" },
      { label: "Linha", value: "Premium" },
      { label: "Identificação", value: "Vinho" },
    ],
    featured: true,
    available: true,
  },
  {
    id: "pet-510-sem-gas",
    slug: "pet-510ml-sem-gas",
    name: "Lindóya Mineral 510 ml — Sem Gás",
    category: "pet",
    categoryLabel: categoryLabels.pet,
    volume: "510 ml",
    sparkling: false,
    image: "/images/pet-510ml-sem-gas.png",
    gallery: ["/images/pet-510ml-sem-gas.png"],
    shortDescription:
      "Praticidade para o dia a dia, no formato ideal para o consumo individual.",
    description:
      "A embalagem de 510 ml sem gás acompanha a rotina com praticidade: fácil de levar, perfeita para o consumo individual em casa, no trabalho, na academia e nos deslocamentos.",
    recommendedFor: ["Consumo individual", "Mercados", "Empresas", "Academias"],
    specifications: [
      { label: "Volume", value: "510 ml" },
      { label: "Tipo", value: "Sem gás" },
      { label: "Linha", value: "PET" },
      { label: "Tampa", value: "Azul" },
    ],
    featured: true,
    available: true,
  },
  {
    id: "pet-510-com-gas",
    slug: "pet-510ml-com-gas",
    name: "Lindóya Mineral 510 ml — Com Gás",
    category: "pet",
    categoryLabel: categoryLabels.pet,
    volume: "510 ml",
    sparkling: true,
    image: "/images/pet-510ml-com-gas.png",
    gallery: ["/images/pet-510ml-com-gas.png"],
    shortDescription:
      "A leveza da água com gás no formato individual, para o dia a dia e as refeições.",
    description:
      "A embalagem de 510 ml com gás, identificada pela tampa vermelha, leva a efervescência da água mineral natural para o consumo individual, acompanhando refeições e momentos do dia a dia.",
    recommendedFor: ["Consumo individual", "Mercados", "Restaurantes", "Refeições"],
    specifications: [
      { label: "Volume", value: "510 ml" },
      { label: "Tipo", value: "Com gás" },
      { label: "Linha", value: "PET" },
      { label: "Tampa", value: "Vermelha" },
    ],
    featured: true,
    available: true,
  },
  {
    id: "pet-1l-sem-gas",
    slug: "pet-1l-sem-gas",
    name: "Lindóya Mineral 1 L — Sem Gás",
    category: "pet",
    categoryLabel: categoryLabels.pet,
    volume: "1 L",
    sparkling: false,
    image: "/images/pet-1l-sem-gas.png",
    gallery: ["/images/pet-1l-sem-gas.png"],
    shortDescription:
      "O tamanho ideal para acompanhar as refeições e o dia a dia em casa.",
    description:
      "A embalagem de 1 litro sem gás é a opção para toda a casa: rende mais, acompanha as refeições e mantém a hidratação da família com a qualidade da água mineral natural.",
    recommendedFor: ["Consumo familiar", "Mercados", "Refeições em casa"],
    specifications: [
      { label: "Volume", value: "1 L" },
      { label: "Tipo", value: "Sem gás" },
      { label: "Linha", value: "PET" },
      { label: "Tampa", value: "Azul" },
    ],
    featured: true,
    available: true,
  },
  {
    id: "pet-1l-com-gas",
    slug: "pet-1l-com-gas",
    name: "Lindóya Mineral 1 L — Com Gás",
    category: "pet",
    categoryLabel: categoryLabels.pet,
    volume: "1 L",
    sparkling: true,
    image: "/images/pet-1l-com-gas.png",
    gallery: ["/images/pet-1l-com-gas.png"],
    shortDescription:
      "Água com gás no tamanho família, para a mesa e os momentos em casa.",
    description:
      "A embalagem de 1 litro com gás, identificada pela tampa vermelha, leva a efervescência da água mineral natural para a mesa e os encontros em família, rendendo mais em cada ocasião.",
    recommendedFor: ["Consumo familiar", "Mercados", "Refeições em casa", "Encontros"],
    specifications: [
      { label: "Volume", value: "1 L" },
      { label: "Tipo", value: "Com gás" },
      { label: "Linha", value: "PET" },
      { label: "Tampa", value: "Vermelha" },
    ],
    featured: true,
    available: true,
  },
];

export const productFilters: { key: string; label: string; test: (p: Product) => boolean }[] = [
  { key: "todos", label: "Todos", test: () => true },
  { key: "premium", label: "Premium", test: (p) => p.category === "premium" },
  { key: "pet", label: "PET", test: (p) => p.category === "pet" },
  { key: "sem-gas", label: "Sem gás", test: (p) => !p.sparkling },
  { key: "com-gas", label: "Com gás", test: (p) => p.sparkling },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .concat(products.filter((p) => p.id !== product.id && p.category !== product.category))
    .slice(0, limit);
}
