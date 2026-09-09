import type { LucideIcon } from "lucide-react";
import {
  Droplets,
  Mountain,
  Sparkles,
  Headset,
  Home,
  Store,
  Handshake,
  Truck,
  Users,
  FileImage,
  Boxes,
  MapPin,
  HeartHandshake,
} from "lucide-react";

export const heroContent = {
  eyebrow: "Água mineral natural",
  title: "Pureza que nasce da tradição.",
  description:
    "Da fonte para a sua mesa, a Lindóya Mineral une origem, qualidade e uma história que atravessa gerações.",
  seal: "Águas de Lindóia — SP",
  primaryCta: { label: "Conheça nossos produtos", href: "/produtos" },
  secondaryCta: { label: "Seja um distribuidor", href: "/seja-um-distribuidor" },
};

export const differentials: { icon: LucideIcon; title: string }[] = [
  { icon: Droplets, title: "Água mineral natural" },
  { icon: Mountain, title: "Fonte em Águas de Lindóia" },
  { icon: Sparkles, title: "Opções com e sem gás" },
  { icon: Headset, title: "Atendimento para consumidores e distribuidores" },
];

export type AudiencePath = {
  icon: LucideIcon;
  title: string;
  text: string;
  ctaLabel: string;
  href: string;
};

export const audiencePaths: AudiencePath[] = [
  {
    icon: Home,
    title: "Para sua casa",
    text: "Água mineral para acompanhar sua rotina, sua família e os momentos à mesa.",
    ctaLabel: "Encontrar um ponto de venda",
    href: "/onde-encontrar",
  },
  {
    icon: Store,
    title: "Para seu negócio",
    text: "Soluções para restaurantes, hotéis, mercados, empresas, eventos e estabelecimentos comerciais.",
    ctaLabel: "Solicitar atendimento comercial",
    href: "/contato",
  },
  {
    icon: Handshake,
    title: "Para distribuidores",
    text: "Faça parte da expansão da Lindóya Mineral e leve uma marca de tradição para a sua região.",
    ctaLabel: "Quero ser distribuidor",
    href: "/seja-um-distribuidor",
  },
];

/** Indicadores comerciais — rótulos editáveis, sem números inventados. */
export const commercialIndicators: { icon: LucideIcon; title: string }[] = [
  { icon: Headset, title: "Atendimento comercial" },
  { icon: HeartHandshake, title: "Suporte ao distribuidor" },
  { icon: FileImage, title: "Materiais de divulgação" },
  { icon: Boxes, title: "Linha para diferentes canais" },
  { icon: MapPin, title: "Logística regional" },
  { icon: Users, title: "Relacionamento de longo prazo" },
];

export const distributionSection = {
  eyebrow: "Da fonte para o mercado",
  title: "Da fonte até o seu negócio.",
  text: "Estrutura comercial, logística e atendimento para apoiar vendedores, representantes, distribuidores e pontos de venda.",
  icon: Truck,
};
