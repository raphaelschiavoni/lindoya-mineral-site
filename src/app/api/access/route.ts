import { NextResponse } from "next/server";
import { accessSchema } from "@/lib/schemas";

/**
 * Endpoint de cadastro para acesso à área comercial (downloads).
 *
 * Fase leve (sem banco): valida e registra o lead; a liberação do acesso é
 * feita no cliente (flag no navegador). Para produção com controle real de
 * quem baixa, migrar para auth + banco. Integração de e-mail/CRM: TODO.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = accessSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, errors: parsed.error.flatten().fieldErrors },
        { status: 422 },
      );
    }

    // eslint-disable-next-line no-console
    console.info("[access] novo cadastro p/ materiais:", {
      name: parsed.data.name,
      email: parsed.data.email,
      profile: parsed.data.profile,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
