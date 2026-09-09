import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas";

/**
 * Endpoint de contato geral.
 *
 * TODO (integração): encaminhar o lead para o destino real — e-mail (SMTP/
 * Resend), CRM (HubSpot, RD Station, Pipedrive), webhook ou Supabase.
 * A integração foi mantida desacoplada: por enquanto apenas valida e registra.
 * Nenhuma credencial externa é configurada aqui.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, errors: parsed.error.flatten().fieldErrors },
        { status: 422 },
      );
    }

    // eslint-disable-next-line no-console
    console.info("[contact] novo lead recebido:", {
      name: parsed.data.name,
      email: parsed.data.email,
      subject: parsed.data.subject,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
