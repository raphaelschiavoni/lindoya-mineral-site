# Lindóya Mineral — Website

Website oficial da **Lindóya Mineral**, água mineral natural da região de Águas
de Lindóia (SP). Site comercial e institucional voltado a três públicos:
**consumidores**, **empresas/vendedores** e **distribuidores**.

Construído com **Next.js 15 (App Router)**, **React 19**, **TypeScript**,
**Tailwind CSS**, **Framer Motion** e **Lucide Icons**.

---

## 🚀 Instalação e execução

Pré-requisitos: **Node.js 18.18+** (recomendado 20+) e **npm**.

```bash
npm install        # instala as dependências
npm run dev        # ambiente de desenvolvimento  -> http://localhost:3000
npm run lint       # checagem de lint
npm run build      # build de produção
npm run start      # sobe o build de produção
```

1. Copie `.env.example` para `.env.local` e preencha os valores.
2. Rode `npm run dev` e acesse `http://localhost:3000`.

---

## 🔧 Variáveis de ambiente

Veja `.env.example`. As principais:

| Variável | Descrição |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL pública (SEO, sitemap, schema.org) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp comercial (só dígitos, ex.: `5519999999999`) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | E-mail de contato exibido no site |
| `NEXT_PUBLIC_COMMERCIAL_PASSWORD` | Senha simples da Área Comercial (opcional) |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager (opcional) |
| `NEXT_PUBLIC_MAPS_API_KEY` | Chave de mapa para integração futura |

> O **botão flutuante do WhatsApp** só aparece quando
> `NEXT_PUBLIC_WHATSAPP_NUMBER` estiver preenchido — assim evita links quebrados.

---

## ✏️ Como editar o conteúdo

Todo o conteúdo estratégico fica centralizado em arquivos de dados/configuração,
sem precisar mexer nos componentes.

### Contatos e dados da empresa
`src/config/company.ts` — nome, razão social, CNPJ, endereço, telefone,
WhatsApp, e-mail e Instagram. Campos vazios são tratados como *placeholder* e
**não aparecem** quebrados no site.

### Textos gerais e SEO
`src/config/site.ts` — nome, tagline, descrição e palavras-chave.

### Produtos
`src/data/products.ts` — array `products`. Cada item segue o tipo `Product`:

```ts
{
  id, slug, name, category: "premium" | "pet" | "returnable",
  volume, sparkling, image, gallery, shortDescription, description,
  recommendedFor, specifications, featured, available
}
```

- Adicione a imagem em `public/images/` e referencie o caminho em `image`.
- `featured: true` faz o produto aparecer na home.
- `available: false` exibe o selo “Em breve”.
- Produtos sem imagem (`image: ""`) mostram um bloco reservado elegante.

### Pontos de venda (Onde encontrar)
`src/data/stores.ts` — array `stores` (dados **mockados/demonstrativos**).
Substitua pelos pontos reais. A arquitetura está pronta para integração futura
com API/banco de dados e mapa (Google Maps/Mapbox via `NEXT_PUBLIC_MAPS_API_KEY`).

### Área comercial (materiais)
`src/data/commercial-materials.ts` — catálogo, tabelas, fotos, logotipos, etc.

### História, FAQs e Home
`src/data/history.ts`, `src/data/faqs.ts`, `src/data/homepage.ts`.

### Navegação
`src/data/navigation.ts` — menus do header e do footer.

---

## 📨 Integração dos formulários

Os formulários (contato e distribuidores) validam com **Zod + React Hook Form**
e enviam para rotas de API internas:

- `src/app/api/contact/route.ts`
- `src/app/api/distributor/route.ts`

Hoje elas apenas **validam e registram** o lead (a integração foi mantida
desacoplada). Para conectar a um destino real, edite essas rotas e envie os
dados para: e-mail (Resend/SMTP), CRM (HubSpot, RD Station, Pipedrive),
webhook ou Supabase — usando as variáveis de ambiente correspondentes.

---

## 📊 Analytics

Camada de eventos centralizada em `src/lib/analytics.ts`, pronta para o
**Google Tag Manager** (`window.dataLayer`). Eventos disparados: `click_whatsapp`,
`click_become_distributor`, `submit_distributor_form`, `submit_contact_form`,
`search_store`, `download_commercial_material`, entre outros.

---

## 🗂 Estrutura

```
src/
├── app/                # rotas (App Router), layout, sitemap, robots, API
│   ├── produtos/[slug] # página individual do produto
│   └── api/            # endpoints de formulário
├── components/
│   ├── layout/         # Header, MobileMenu, Footer
│   ├── ui/             # Button, SectionHeading, GoldDivider, FAQ, etc.
│   ├── home/           # HeroSection, AudienceCard, HistoryTimeline
│   ├── product/        # ProductCard, ProductGrid
│   ├── forms/          # ContactForm, DistributorForm, Field, feedback
│   ├── stores/         # StoreLocator, StoreCard
│   ├── commercial/     # Área comercial e materiais
│   └── whatsapp/       # Botão flutuante com menu por público
├── config/             # site.ts, company.ts
├── data/               # products, stores, history, faqs, navigation, etc.
└── lib/                # utils, whatsapp, analytics, schemas (zod)
public/
├── images/             # imagens oficiais da marca
└── documents/          # manual de marca (PDF)
```

---

## 🎨 Identidade visual

- **Cores** (CSS variables em `src/app/globals.css`): azul-marinho `#16233f`,
  dourado `#b89558`, prata/off-white, e vinho `#9e2828` **apenas** para “com gás”.
- **Tipografia**: `Cormorant Garamond` (títulos, serifada) e `Archivo` (textos),
  carregadas via `next/font`.
- Ornamentos discretos (gota-folha, divisórias douradas, losango central)
  inspirados nos rótulos.

---

## ✅ Pontos que exigem validação da empresa

Marcados com `TODO`/avisos no código e na interface — **não foram inventados**:

- Dados institucionais (CNPJ, endereço, telefone, e-mail).
- Composição química e especificações técnicas dos produtos.
- Certificações, laudos e licenças (página Qualidade).
- Pontos de venda reais (Onde encontrar).
- Textos legais (Política de Privacidade e Termos de Uso).
- Datas/marcos da linha do tempo histórica.
