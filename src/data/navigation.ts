export type NavItem = {
  label: string;
  href: string;
};

/** Navegação principal (header desktop e menu mobile). */
export const mainNav: NavItem[] = [
  { label: "Produtos", href: "/produtos" },
  { label: "Nossa história", href: "/nossa-historia" },
  { label: "Qualidade", href: "/qualidade" },
  { label: "Distribuição", href: "/distribuidores" },
  { label: "Onde encontrar", href: "/onde-encontrar" },
  { label: "Contato", href: "/contato" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Institucional",
    items: [
      { label: "Nossa história", href: "/nossa-historia" },
      { label: "Qualidade", href: "/qualidade" },
      { label: "Onde encontrar", href: "/onde-encontrar" },
      { label: "Contato", href: "/contato" },
    ],
  },
  {
    title: "Comercial",
    items: [
      { label: "Nossos produtos", href: "/produtos" },
      { label: "Distribuição", href: "/distribuidores" },
      { label: "Encontre um representante", href: "/representantes" },
      { label: "Seja um vendedor", href: "/seja-um-vendedor" },
      { label: "Seja um distribuidor", href: "/seja-um-distribuidor" },
      { label: "Área comercial", href: "/area-comercial" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Política de Privacidade", href: "/politica-de-privacidade" },
      { label: "Termos de Uso", href: "/termos-de-uso" },
    ],
  },
];
