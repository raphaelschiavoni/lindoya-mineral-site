import { NextResponse } from "next/server";
import { isValidCnpj } from "@/lib/utils";

/**
 * Consulta pública de CNPJ via BrasilAPI (grátis, sem chave).
 * Usada para autopreencher o cadastro de distribuidores.
 * Doc: https://brasilapi.com.br/docs#tag/CNPJ
 */
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ cnpj: string }> },
) {
  const { cnpj } = await params;
  const digits = (cnpj ?? "").replace(/\D/g, "");

  if (!isValidCnpj(digits)) {
    return NextResponse.json({ ok: false, error: "CNPJ inválido." }, { status: 400 });
  }

  try {
    const res = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${digits}`, {
      headers: { Accept: "application/json" },
      cache: "no-store",
    });

    if (res.status === 404) {
      return NextResponse.json({ ok: false, error: "CNPJ não encontrado." }, { status: 404 });
    }
    if (!res.ok) {
      return NextResponse.json({ ok: false, error: "Falha na consulta." }, { status: 502 });
    }

    const d = await res.json();
    return NextResponse.json({
      ok: true,
      data: {
        razaoSocial: d.razao_social ?? "",
        nomeFantasia: d.nome_fantasia ?? "",
        municipio: d.municipio ?? "",
        uf: d.uf ?? "",
        situacao: d.descricao_situacao_cadastral ?? "",
        logradouro: d.logradouro ?? "",
        numero: d.numero ?? "",
        bairro: d.bairro ?? "",
        cep: d.cep ?? "",
      },
    });
  } catch {
    return NextResponse.json({ ok: false, error: "Falha na consulta." }, { status: 502 });
  }
}
