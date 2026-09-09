export type RepType = "vendedor" | "distribuidor";

export type Rep = {
  id: string;
  name: string;
  type: RepType;
  company?: string;
  city: string;
  state: string;
  regions: string[];
  whatsapp: string; // apenas dígitos, formato internacional. Ex.: 5519999999999
  phone?: string;
  email?: string;
};

export const repTypeLabels: Record<RepType, string> = {
  vendedor: "Vendedor",
  distribuidor: "Distribuidor",
};

/**
 * DADOS MOCKADOS / DEMONSTRATIVOS.
 * TODO: Substituir pela rede real de vendedores e distribuidores.
 * Fase leve (sem banco): esta lista é mantida pela equipe editando este
 * arquivo. Quando houver banco/CMS, trocar por consulta dinâmica.
 * Nenhum representante real deve ser listado sem dados oficiais.
 */
export const reps: Rep[] = [
  {
    id: "demo-vendedor-1",
    name: "Representante (exemplo)",
    type: "vendedor",
    city: "Águas de Lindóia",
    state: "SP",
    regions: ["Águas de Lindóia", "Serra Negra", "Amparo"],
    whatsapp: "",
  },
  {
    id: "demo-distribuidor-1",
    name: "Distribuidora Parceira (exemplo)",
    type: "distribuidor",
    company: "Distribuidora Exemplo Ltda.",
    city: "Campinas",
    state: "SP",
    regions: ["Região Metropolitana de Campinas", "Interior de SP"],
    whatsapp: "",
  },
  {
    id: "demo-distribuidor-2",
    name: "Atacado Parceiro (exemplo)",
    type: "distribuidor",
    company: "Atacado Exemplo",
    city: "Belo Horizonte",
    state: "MG",
    regions: ["Grande BH"],
    whatsapp: "",
  },
];

/** Monta link de WhatsApp para um representante (null se sem número). */
export function repWhatsAppLink(rep: Rep): string | null {
  const number = rep.whatsapp.replace(/\D/g, "");
  if (!number) return null;
  const text = encodeURIComponent(
    `Olá, ${rep.name}! Vim pelo site da Lindóya Mineral e gostaria de falar sobre os produtos.`,
  );
  return `https://wa.me/${number}?text=${text}`;
}
