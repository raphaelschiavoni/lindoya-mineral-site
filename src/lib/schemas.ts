import { z } from "zod";

const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;

export const contactSchema = z.object({
  name: z.string().min(2, "Informe seu nome completo."),
  email: z.string().email("Informe um e-mail válido."),
  phone: z
    .string()
    .regex(phoneRegex, "Informe um telefone válido, ex.: (11) 99999-9999."),
  subject: z.string().min(2, "Informe o assunto."),
  message: z.string().min(10, "Escreva uma mensagem com mais detalhes."),
  consent: z.literal(true, {
    errorMap: () => ({ message: "É necessário aceitar a Política de Privacidade." }),
  }),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const distributorSchema = z.object({
  name: z.string().min(2, "Informe seu nome completo."),
  company: z.string().min(2, "Informe o nome da empresa."),
  cnpj: z.string().min(14, "Informe um CNPJ válido."),
  email: z.string().email("Informe um e-mail válido."),
  whatsapp: z
    .string()
    .regex(phoneRegex, "Informe um WhatsApp válido, ex.: (11) 99999-9999."),
  city: z.string().min(2, "Informe a cidade."),
  state: z.string().min(2, "Selecione o estado."),
  regions: z.string().min(2, "Informe as regiões atendidas."),
  segment: z.string().min(2, "Informe o segmento de atuação."),
  hasDistribution: z.enum(["sim", "nao"], {
    errorMap: () => ({ message: "Selecione uma opção." }),
  }),
  hasFleet: z.enum(["sim", "nao"], {
    errorMap: () => ({ message: "Selecione uma opção." }),
  }),
  currentBrands: z.string().optional().default(""),
  estimatedVolume: z.string().optional().default(""),
  wantsExclusivity: z.boolean().optional().default(false),
  message: z.string().optional().default(""),
  consent: z.literal(true, {
    errorMap: () => ({ message: "É necessário aceitar a Política de Privacidade." }),
  }),
});

export type DistributorFormData = z.infer<typeof distributorSchema>;

const cpfRegex = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;

export const vendorSchema = z.object({
  name: z.string().min(2, "Informe seu nome completo."),
  cpf: z.string().regex(cpfRegex, "Informe um CPF válido, ex.: 000.000.000-00."),
  email: z.string().email("Informe um e-mail válido."),
  whatsapp: z
    .string()
    .regex(phoneRegex, "Informe um WhatsApp válido, ex.: (11) 99999-9999."),
  city: z.string().min(2, "Informe a cidade."),
  state: z.string().min(2, "Selecione o estado."),
  regions: z.string().min(2, "Informe as regiões onde pretende atuar."),
  experience: z.string().optional().default(""),
  message: z.string().optional().default(""),
  consent: z.literal(true, {
    errorMap: () => ({ message: "É necessário aceitar a Política de Privacidade." }),
  }),
});

export type VendorFormData = z.infer<typeof vendorSchema>;

export const accessSchema = z.object({
  name: z.string().min(2, "Informe seu nome."),
  email: z.string().email("Informe um e-mail válido."),
  whatsapp: z
    .string()
    .regex(phoneRegex, "Informe um WhatsApp válido, ex.: (11) 99999-9999."),
  company: z.string().optional().default(""),
  profile: z.enum(["distribuidor", "vendedor", "lojista", "outro"], {
    errorMap: () => ({ message: "Selecione seu perfil." }),
  }),
  consent: z.literal(true, {
    errorMap: () => ({ message: "É necessário aceitar a Política de Privacidade." }),
  }),
});

export type AccessFormData = z.infer<typeof accessSchema>;
