import { NextResponse } from "next/server";
import { vendorSchema } from "@/lib/schemas";

/**
 * Endpoint de interesse de vendedores/representantes (PF).
 *
 * Fase leve (sem banco): valida e registra o lead. Para produção, encaminhe
 * para e-mail/CRM/webhook — integração mantida desacoplada, sem credenciais.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = vendorSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, errors: parsed.error.flatten().fieldErrors },
        { status: 422 },
      );
    }

    // eslint-disable-next-line no-console
    console.info("[vendor] novo interesse de vendedor:", {
      name: parsed.data.name,
      city: parsed.data.city,
      state: parsed.data.state,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
