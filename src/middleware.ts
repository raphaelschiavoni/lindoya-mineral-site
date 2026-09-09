import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Modo "Em breve" (capa até a inauguração).
 *
 * Ligue definindo a variável de ambiente COMING_SOON=true. Enquanto ligado,
 * TODA visita cai na capa `/em-breve`. Acesso interno (ver o site completo):
 * abra `?preview=<PREVIEW_TOKEN>` uma vez — grava um cookie e libera o site
 * naquele navegador. Para sair do preview: `?preview=off`.
 * No dia do lançamento, defina COMING_SOON=false (ou remova) e o site inteiro
 * volta a aparecer para todos.
 */
const COMING_SOON = process.env.COMING_SOON === "true";
const PREVIEW_TOKEN = process.env.PREVIEW_TOKEN || "lindoya";
const PREVIEW_COOKIE = "lindoya-preview";
const COVER_PATH = "/em-breve";

export function middleware(req: NextRequest) {
  if (!COMING_SOON) return NextResponse.next();

  const { pathname, searchParams } = req.nextUrl;
  const preview = searchParams.get("preview");

  // Sair do preview
  if (preview === "off") {
    const url = req.nextUrl.clone();
    url.searchParams.delete("preview");
    const res = NextResponse.redirect(url);
    res.cookies.delete(PREVIEW_COOKIE);
    return res;
  }

  // Entrar no preview (link interno)
  if (preview && preview === PREVIEW_TOKEN) {
    const url = req.nextUrl.clone();
    url.searchParams.delete("preview");
    const res = NextResponse.redirect(url);
    res.cookies.set(PREVIEW_COOKIE, "1", {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });
    return res;
  }

  // Já está em preview → mostra o site normal
  if (req.cookies.get(PREVIEW_COOKIE)) return NextResponse.next();

  // A própria capa passa direto
  if (pathname === COVER_PATH) return NextResponse.next();

  // Todo o resto é reescrito para a capa (URL permanece)
  const url = req.nextUrl.clone();
  url.pathname = COVER_PATH;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    // Tudo, exceto assets internos, API e arquivos estáticos
    "/((?!_next/|api/|images/|videos/|documents/|favicon.ico|icon.svg|robots.txt|sitemap.xml).*)",
  ],
};
