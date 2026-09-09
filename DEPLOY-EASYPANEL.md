# Deploy no EasyPanel — Lindóya Mineral

Site Next.js 15 (build **standalone**), publicado via **Docker** no EasyPanel.
Sobe primeiro com a **capa "Em breve"** e, na inauguração, vira o site completo
com uma troca de variável de ambiente.

---

## 1. Enviar o código para um Git remoto

O EasyPanel puxa de um repositório (GitHub/GitLab). O repositório local já está
pronto (commit inicial feito). Crie um repositório vazio no GitHub e rode:

```bash
cd lindoya-mineral
git remote add origin https://github.com/<sua-conta>/lindoya-mineral.git
git push -u origin main
```

---

## 2. Criar o App no EasyPanel

1. No seu projeto do EasyPanel: **+ Service → App**.
2. **Source:** GitHub/Git → selecione o repositório `lindoya-mineral`, branch `main`.
3. **Build:** método **Dockerfile** (o `Dockerfile` já está na raiz — o EasyPanel
   detecta automaticamente).
4. **Port / Proxy:** porta do container **3000** (o app escuta em `0.0.0.0:3000`).

---

## 3. Variáveis de ambiente (aba Environment do App)

Cole e ajuste:

```env
# CAPA "EM BREVE" — deixe true até a inauguração
COMING_SOON=true
# Troque por um token secreto (link interno p/ ver o site real durante a capa)
PREVIEW_TOKEN=troque-este-token

# Contato / SEO (já têm padrão no código; defina para produção)
NEXT_PUBLIC_SITE_URL=https://www.lindoyamineral.com.br
NEXT_PUBLIC_WHATSAPP_NUMBER=5519981790197
NEXT_PUBLIC_CONTACT_EMAIL=
```

> `COMING_SOON` e `PREVIEW_TOKEN` são lidos em **tempo de execução** — dá para
> mudar sem rebuild (basta reiniciar o app). As variáveis `NEXT_PUBLIC_*` são
> embutidas no **build**; se mudar alguma, faça **Deploy/Rebuild**. O código já
> tem padrões corretos, então mesmo sem defini-las o site funciona.

---

## 4. Domínio

Na aba **Domains** do App, adicione o domínio (ex.: `www.lindoyamineral.com.br`),
aponte o DNS conforme o EasyPanel indicar e ative o **SSL (Let's Encrypt)**.

---

## 5. Dia da inauguração — revelar o site

Basta trocar **uma** variável:

1. Environment → `COMING_SOON=false`.
2. **Restart** do app (não precisa rebuild).

Pronto: o site completo aparece para todos.

### Mostrar o site real ANTES (durante a capa)
Abra uma vez no navegador do evento:

```
https://SEU-DOMINIO/?preview=SEU_TOKEN
```

Isso grava um cookie e libera o site completo só naquele navegador.
Para voltar a ver a capa: `https://SEU-DOMINIO/?preview=off`.

---

## Observações
- Imagens: otimização via `sharp` (já incluído nas dependências).
- Formulários (contato, vendedor, distribuidor, acesso à área comercial) hoje
  **validam e registram no log** do servidor — para receber por e-mail/CRM,
  configurar o destino nas rotas `src/app/api/*` (integração desacoplada).
- Consulta de CNPJ usa a BrasilAPI (pública) — funciona em produção com internet.
