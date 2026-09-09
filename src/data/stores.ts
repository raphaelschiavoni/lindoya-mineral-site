export type StoreType =
  | "supermercado"
  | "restaurante"
  | "hotel"
  | "distribuidor"
  | "conveniencia";

export type Store = {
  id: string;
  name: string;
  type: StoreType;
  typeLabel: string;
  address: string;
  city: string;
  state: string;
  neighborhood: string;
  phone?: string;
  hasPremium: boolean;
  hasPet: boolean;
  hasSparkling: boolean;
  hasStill: boolean;
  mapsQuery: string;
};

export const storeTypeLabels: Record<StoreType, string> = {
  supermercado: "Supermercado",
  restaurante: "Restaurante",
  hotel: "Hotel",
  distribuidor: "Distribuidor",
  conveniencia: "Conveniência",
};

/**
 * DADOS MOCKADOS / DEMONSTRATIVOS.
 * TODO: Substituir por pontos de venda reais fornecidos pela empresa.
 * Nenhum estabelecimento real deve ser listado sem dados oficiais.
 * Arquitetura preparada para futura integração com API/banco de dados.
 */
export const stores: Store[] = [
  {
    id: "demo-1",
    name: "Ponto de Venda (exemplo)",
    type: "supermercado",
    typeLabel: storeTypeLabels.supermercado,
    address: "Rua Exemplo, 000 — Centro",
    city: "Águas de Lindóia",
    state: "SP",
    neighborhood: "Centro",
    hasPremium: true,
    hasPet: true,
    hasSparkling: true,
    hasStill: true,
    mapsQuery: "Águas de Lindóia SP",
  },
  {
    id: "demo-2",
    name: "Restaurante Parceiro (exemplo)",
    type: "restaurante",
    typeLabel: storeTypeLabels.restaurante,
    address: "Av. Exemplo, 000 — Jardim",
    city: "Serra Negra",
    state: "SP",
    neighborhood: "Jardim",
    hasPremium: true,
    hasPet: false,
    hasSparkling: true,
    hasStill: true,
    mapsQuery: "Serra Negra SP",
  },
  {
    id: "demo-3",
    name: "Hotel Parceiro (exemplo)",
    type: "hotel",
    typeLabel: storeTypeLabels.hotel,
    address: "Estrada Exemplo, km 0",
    city: "Amparo",
    state: "SP",
    neighborhood: "Zona Rural",
    hasPremium: true,
    hasPet: true,
    hasSparkling: false,
    hasStill: true,
    mapsQuery: "Amparo SP",
  },
];

export const brazilianStates = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS",
  "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC",
  "SP", "SE", "TO",
];
