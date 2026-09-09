import type { Metadata } from "next";
import { LegalLayout } from "@/components/ui/LegalLayout";
import { companyInfo, hasCompanyData } from "@/config/company";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade da Lindóya Mineral: como coletamos, usamos e protegemos os seus dados.",
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function PoliticaPage() {
  return (
    <LegalLayout
      title="Política de Privacidade"
      updatedAt="—"
      breadcrumbLabel="Política de Privacidade"
    >
      <p>
        Esta Política de Privacidade descreve como a {companyInfo.companyName}{" "}
        coleta, utiliza e protege as informações fornecidas por você ao navegar
        neste site e ao preencher nossos formulários de contato e de interesse
        comercial.
      </p>

      <h2>1. Dados que coletamos</h2>
      <p>
        Podemos coletar dados fornecidos voluntariamente por você, como nome,
        e-mail, telefone, empresa e demais informações inseridas em nossos
        formulários, além de dados de navegação coletados por meio de cookies.
      </p>

      <h2>2. Como utilizamos os dados</h2>
      <p>
        Utilizamos os dados para responder a solicitações, prestar atendimento
        comercial, avaliar interesses de distribuição e aprimorar a experiência
        de navegação. Não vendemos seus dados a terceiros.
      </p>

      <h2>3. Cookies</h2>
      <p>
        Utilizamos cookies para melhorar a navegação e entender como o site é
        utilizado. Você pode gerenciar as preferências de cookies no seu
        navegador.
      </p>

      <h2>4. Compartilhamento</h2>
      <p>
        Os dados podem ser compartilhados com prestadores de serviço que apoiam
        nossas operações comerciais e de comunicação, sempre em conformidade com
        a legislação aplicável (LGPD — Lei nº 13.709/2018).
      </p>

      <h2>5. Seus direitos</h2>
      <p>
        Você pode solicitar acesso, correção ou exclusão dos seus dados, bem como
        revogar consentimentos, entrando em contato conosco pelos canais
        oficiais.
      </p>

      <h2>6. Contato</h2>
      <p>
        Em caso de dúvidas sobre esta Política, entre em contato pela página de{" "}
        <a href="/contato">Contato</a>
        {hasCompanyData(companyInfo.email) && (
          <>
            {" "}
            ou pelo e-mail {companyInfo.email}
          </>
        )}
        .
      </p>
    </LegalLayout>
  );
}
