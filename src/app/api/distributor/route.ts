import { NextResponse } from "next/server";
import { distributorSchema } from "@/lib/schemas";

/**
 * Endpoint de interesse comercial / distribuidores.
 *
 * TODO (integração): encaminhar o lead para o CRM ou e-mail comercial.
 * Integração desacoplada e documentada — sem credenciais externas.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = distributorSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, errors: parsed.error.flatten().fieldErrors },
        { status: 422 },
      );
    }

    // eslint-disable-next-line no-console
    console.info("[distributor] novo interesse comercial:", {
      company: parsed.data.company,
      city: parsed.data.city,
      state: parsed.data.state,
      wantsExclusivity: parsed.data.wantsExclusivity,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
