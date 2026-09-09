import type { Metadata } from "next";
import { LegalLayout } from "@/components/ui/LegalLayout";
import { companyInfo } from "@/config/company";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos de Uso do site da Lindóya Mineral: condições de utilização, propriedade intelectual e responsabilidades.",
  alternates: { canonical: "/termos-de-uso" },
};

export default function TermosPage() {
  return (
    <LegalLayout title="Termos de Uso" updatedAt="—" breadcrumbLabel="Termos de Uso">
      <p>
        Ao acessar e utilizar o site da {companyInfo.companyName}, você concorda
        com os termos e condições descritos abaixo.
      </p>

      <h2>1. Uso do site</h2>
      <p>
        O conteúdo deste site é fornecido para fins informativos e comerciais. É
        vedado o uso para finalidades ilícitas ou que violem estes Termos.
      </p>

      <h2>2. Propriedade intelectual</h2>
      <p>
        A marca, o logotipo, a ilustração da Índia Lindóya, os textos, as imagens
        e os demais elementos deste site são protegidos e não podem ser
        reproduzidos sem autorização.
      </p>

      <h2>3. Informações de produtos</h2>
      <p>
        As informações de produtos têm caráter comercial e podem ser atualizadas.
        Especificações técnicas e composições estão sujeitas a validação oficial.
      </p>

      <h2>4. Limitação de responsabilidade</h2>
      <p>
        Empenhamo-nos para manter as informações corretas e atualizadas, mas não
        garantimos a ausência de eventuais imprecisões. O uso do site é de
        responsabilidade do usuário.
      </p>

      <h2>5. Alterações</h2>
      <p>
        Estes Termos podem ser atualizados a qualquer momento. Recomendamos a
        revisão periódica desta página.
      </p>

      <h2>6. Contato</h2>
      <p>
        Dúvidas sobre estes Termos podem ser encaminhadas pela página de{" "}
        <a href="/contato">Contato</a>.
      </p>
    </LegalLayout>
  );
}
