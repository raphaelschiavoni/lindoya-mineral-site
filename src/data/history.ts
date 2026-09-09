export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

/**
 * Linha do tempo institucional.
 * Linguagem histórica/institucional — não apresenta fatos como garantias
 * científicas atuais. TODO: validar datas e marcos com a empresa.
 */
export const historyTimeline: TimelineItem[] = [
  {
    year: "Origens",
    title: "Povos originários e as águas da região",
    description:
      "Muito antes das cidades, as nascentes que brotavam entre as montanhas já eram reconhecidas por sua pureza pelos povos originários da região.",
  },
  {
    year: "Séculos XVIII–XIX",
    title: "Bandeirantes e tropeiros",
    description:
      "Rotas de bandeirantes e tropeiros passaram a cruzar a região, difundindo a fama das águas que corriam entre as serras do interior paulista.",
  },
  {
    year: "1909",
    title: "Início da tradição das Thermas de Lindoya",
    description:
      "Consolida-se a tradição hidromineral da região, marco de uma história ligada às águas de Águas de Lindóia.",
  },
  {
    year: "1926",
    title: "Estudos associados às águas da região",
    description:
      "Estudos passam a se debruçar sobre as características das águas minerais da região, reforçando sua reputação.",
  },
  {
    year: "1969",
    title: "Uma referência histórica",
    description:
      "A tradição das águas da região é lembrada como referência histórica de um período de grandes marcos, incluindo a missão Apollo 11.",
  },
  {
    year: "Hoje",
    title: "A nova identidade Lindóya Mineral",
    description:
      "Inspirada na lenda da Índia Lindóya, a marca preserva sua origem e se apresenta com uma identidade contemporânea, pronta para crescer.",
  },
];

export const legendText = {
  title: "A lenda da Índia Lindóya",
  paragraphs: [
    "Conta a tradição que a Índia Lindóya, movida pela lealdade e pelo amor, conduziu seu pai enfermo até as águas que brotavam entre as montanhas. Ele banhou-se e bebeu dessas águas, recuperando suas forças.",
    "Desde então, sua história tornou-se símbolo da ligação entre o povo, as nascentes e a natureza desta região.",
  ],
};

export const legendValues: { title: string; description: string }[] = [
  { title: "Lealdade", description: "à natureza e às origens" },
  { title: "Formosura", description: "da nossa terra e das águas" },
  { title: "Honestidade", description: "em cada escolha, em cada gota" },
];
