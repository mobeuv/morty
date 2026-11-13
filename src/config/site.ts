/**
 * Identidade e dados institucionais da MOBEUV.
 *
 * Tudo que é "configurável" (e-mail, redes sociais, URLs) fica aqui,
 * em um único lugar, para facilitar a manutenção e a futura
 * internacionalização (i18n).
 */

export const site = {
  name: "MOBEUV",
  tagline: "Mobility Beyond the Universe",
  description:
    "Desenvolvemos tecnologia e soluções inteligentes para transformar ideias em negócios, superar limites e construir o que vem a seguir.",
  /**
   * URL pública completa do site (usada em SEO / Open Graph).
   * Em domínio próprio, use a raiz (ex.: "https://mobeuv.com").
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mobeuv.github.io/morty",
  /**
   * E-mail institucional. Usado no formulário de contato (fallback via
   * mailto:) e na seção de contato. Sobrescreva via NEXT_PUBLIC_CONTACT_EMAIL.
   */
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "app@mobeuv.com",
} as const;

export type Social = {
  /** Identificador curto (ex.: "linkedin", "github", "instagram"). */
  id: string;
  label: string;
  href: string;
};

/**
 * Redes sociais. Preencha apenas quando existirem perfis oficiais.
 * Exemplo:
 *   { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com/company/mobeuv" },
 */
export const socials: Social[] = [];

export const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "O que fazemos", href: "#o-que-fazemos" },
  { label: "Nossa visão", href: "#visao" },
  { label: "Contato", href: "#contato" },
] as const;
