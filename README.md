# MOBEUV — Mobility Beyond the Universe

Site institucional da **MOBEUV**, uma empresa de tecnologia, inovação e
desenvolvimento de soluções digitais. Presença digital de uma marca com
ambição de longo prazo — construída para transmitir solidez, visão de futuro e
capacidade de execução.

> **We build beyond what exists.**

---

## Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) v4
- [Lucide Icons](https://lucide.dev)
- Fontes: Space Grotesk (display), Inter (texto), IBM Plex Mono (labels)

O site é distribuído como **export estático** (`output: "export"`), o que o
torna compatível com **GitHub Pages** e qualquer host de arquivos estáticos.

## Começando

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

### Scripts

| Comando          | Descrição                          |
| ---------------- | ---------------------------------- |
| `npm run dev`    | Servidor de desenvolvimento         |
| `npm run build`  | Gera o export estático em `out/`   |
| `npm run start`  | Serve o build localmente            |
| `npm run lint`   | ESLint                              |

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e ajuste os valores:

| Variável                     | Descrição                                                                 |
| ---------------------------- | ------------------------------------------------------------------------- |
| `NEXT_PUBLIC_BASE_PATH`      | Subdiretório do site. `/morty` no GitHub Pages; vazio em domínio próprio.  |
| `NEXT_PUBLIC_SITE_URL`       | URL pública completa (SEO / Open Graph / canonical).                       |
| `NEXT_PUBLIC_CONTACT_EMAIL`  | E-mail usado no formulário e na seção de contato.                          |

> **Importante:** o formulário de contato usa `mailto:` como caminho funcional
> para sites estáticos (abre o cliente de e-mail do usuário com a mensagem
> pré-preenchida). Ele **não** simula um envio bem-sucedido — se o e-mail não
> estiver configurado, o formulário exibe uma mensagem honesta em vez de um
> falso "enviado".

## Deploy no GitHub Pages

1. No repositório, acesse **Settings → Pages** e defina a fonte como
   **GitHub Actions**.
2. Faça push para a branch `main`. O workflow
   [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) faz o build e
   publica em `https://<owner>.github.io/<repo>/`.

O `basePath` e a URL do site são calculados automaticamente a partir do nome do
repositório no workflow. Para publicar em um **domínio próprio**
(ex.: `https://mobeuv.com`), configure o domínio no Pages e remova o
`NEXT_PUBLIC_BASE_PATH` (deixe vazio) e ajuste `NEXT_PUBLIC_SITE_URL`.

## Estrutura

```
src/
├── app/
│   ├── layout.tsx          # Fontes, metadados (SEO/OG), Header + Footer
│   ├── page.tsx            # Página inicial (monta as seções)
│   ├── privacidade/page.tsx# Política de privacidade
│   ├── icon.svg            # Favicon
│   ├── opengraph-image.tsx # Imagem Open Graph (gerada no build)
│   ├── robots.ts           # robots.txt
│   ├── sitemap.ts          # sitemap.xml
│   └── globals.css         # Design tokens (Tailwind v4) + animações
├── components/
│   ├── Header.tsx          # Navegação responsiva (menu mobile)
│   ├── Hero.tsx            # Abertura + composição visual original
│   ├── Manifesto.tsx
│   ├── About.tsx
│   ├── Pillars.tsx         # O que fazemos (4 pilares)
│   ├── Vision.tsx
│   ├── Contact.tsx         # Seção de contato
│   ├── ContactForm.tsx     # Formulário com validação (client)
│   ├── Footer.tsx
│   ├── Logo.tsx            # Símbolo + wordmark
│   ├── Reveal.tsx          # Animação de entrada ao rolar
│   └── Button.tsx
├── config/
│   ├── site.ts             # Identidade, e-mail, redes sociais, navegação
│   └── content.ts          # Conteúdo institucional (pt-BR)
└── lib/
    └── utils.ts            # Helpers (cn, withBasePath)
```

## Customização

- **Identidade / contato / redes sociais** — edite `src/config/site.ts`.
  As redes sociais ficam vazias por padrão (sem inventar perfis); preencha
  apenas quando existirem.
- **Conteúdo** — todo o texto institucional está em `src/config/content.ts`.
- **Identidade visual** — tokens de cor e tipografia em
  `src/app/globals.css` (bloco `@theme`).

## Internacionalização

O conteúdo está centralizado em `src/config/content.ts` e a identidade em
`src/config/site.ts`. Para adicionar uma versão em inglês, crie
`content.en.ts` (e `site.en.ts`, se necessário) com a mesma forma e selecione o
locale em um futuro `src/config/i18n.ts`.
