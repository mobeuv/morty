/**
 * Conteúdo institucional do site (pt-BR).
 *
 * Estrutura preparada para internacionalização: para adicionar uma versão
 * em inglês, crie `content.en.ts` com a mesma forma e selecione o locale
 * em um futuro `src/config/i18n.ts`.
 */

export type Pillar = {
  index: string;
  title: string;
  description: string;
};

export const content = {
  hero: {
    kicker: "MOBEUV — Mobility Beyond the Universe",
    headline: "We build beyond what exists.",
    subheadline:
      "Desenvolvemos tecnologia e soluções inteligentes para transformar ideias em negócios, superar limites e construir o que vem a seguir.",
    primaryCta: "Conheça a MOBEUV",
    secondaryCta: "Entre em contato",
  },

  manifesto: {
    kicker: "Manifesto",
    title: "O futuro não é algo que esperamos. É algo que construímos.",
    paragraphs: [
      "Acreditamos que a evolução acontece quando questionamos o que existe e temos coragem de construir algo melhor.",
      "A tecnologia é nosso instrumento. A inovação é nosso caminho. O impacto que geramos é o que dá sentido à nossa trajetória.",
      "Não construímos apenas para o agora. Pensamos no que podemos criar hoje e no que continuará existindo amanhã.",
    ],
    closing: "Somos MOBEUV. Mobility Beyond the Universe.",
  },

  about: {
    kicker: "Sobre nós",
    title: "Uma visão que vai além da tecnologia.",
    paragraphs: [
      "A MOBEUV é uma empresa de tecnologia orientada à criação, desenvolvimento e evolução de soluções digitais.",
      "Nossa atuação parte de um princípio simples: identificar problemas reais, compreender oportunidades e transformar ideias em produtos e negócios.",
      "Acreditamos em tecnologia que gera valor concreto, em decisões orientadas por inteligência e em empresas construídas para evoluir continuamente.",
      "Nossa ambição é criar soluções relevantes, explorar novas possibilidades e construir um legado de inovação.",
    ],
    principles: [
      { title: "Movimento", description: "Nunca permanecer limitado ao que já existe." },
      { title: "Evolução", description: "Melhorar continuamente, aprender e inovar." },
      { title: "Construção", description: "Transformar ideias em soluções concretas." },
      { title: "Visão", description: "Pensar além do presente e enxergar o futuro." },
      { title: "Legado", description: "Construir algo duradouro, capaz de atravessar gerações." },
    ],
  },

  pillars: {
    kicker: "O que fazemos",
    title: "Quatro pilares para construir o que vem a seguir.",
    intro:
      "Nossa direção estratégica se apoia em quatro frentes que se complementam — da engenharia à criação de novos negócios.",
    items: [
      {
        index: "01",
        title: "Technology & Engineering",
        description:
          "Desenvolvimento de software, arquitetura de sistemas, plataformas digitais e soluções tecnológicas escaláveis.",
      },
      {
        index: "02",
        title: "Artificial Intelligence",
        description:
          "Aplicação de inteligência artificial para automatizar processos, ampliar capacidades e transformar operações empresariais.",
      },
      {
        index: "03",
        title: "Digital Products",
        description:
          "Criação e desenvolvimento de produtos digitais com foco em problemas reais, experiência do usuário e modelos de negócio sustentáveis.",
      },
      {
        index: "04",
        title: "Innovation & Ventures",
        description:
          "Exploração de oportunidades, desenvolvimento de novos negócios e construção de soluções para mercados em transformação.",
      },
    ] as Pillar[],
  },

  vision: {
    kicker: "Nossa visão",
    title: "Built today. Beyond tomorrow.",
    paragraphs: [
      "Enxergamos a MOBEUV como uma empresa em constante evolução.",
      "Queremos construir produtos, desenvolver negócios e explorar oportunidades que ultrapassem fronteiras e gerações.",
      "Acreditamos que o verdadeiro sucesso não está apenas no que construímos, mas também naquilo que deixamos para quem vem depois.",
    ],
  },

  contact: {
    kicker: "Contato",
    title: "Let's build what comes next.",
    description: "Tem uma ideia, um desafio ou uma oportunidade? Vamos conversar.",
    form: {
      name: "Nome",
      namePlaceholder: "Seu nome completo",
      email: "E-mail",
      emailPlaceholder: "voce@empresa.com",
      company: "Empresa",
      companyPlaceholder: "Nome da empresa (opcional)",
      message: "Mensagem",
      messagePlaceholder: "Conte um pouco sobre o seu projeto ou desafio…",
      submit: "Enviar mensagem",
      sending: "Abrindo seu cliente de e-mail…",
      sent: "Seu cliente de e-mail será aberto para concluir o envio.",
      errorRequired: "Este campo é obrigatório.",
      errorEmail: "Informe um e-mail válido.",
      notConfigured:
        "O formulário ainda não está conectado a um e-mail de destino. Configure NEXT_PUBLIC_CONTACT_EMAIL.",
    },
  },

  footer: {
    closing: "Beyond the limits. Beyond generations.",
    linksTitle: "Institucional",
    contactTitle: "Contato",
    socialTitle: "Redes sociais",
    socialEmpty: "Redes sociais em breve.",
    privacy: "Política de privacidade",
    llms: "Guia para LLMs",
    rights: "Todos os direitos reservados.",
  },
} as const;
