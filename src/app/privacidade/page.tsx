import type { Metadata } from "next";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: "Política de privacidade da MOBEUV.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-mist">
      <div className="container-x max-w-3xl py-24 md:py-32">
        <p className="kicker text-brand-600">Legal</p>
        <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy-900 md:text-5xl">
          Política de privacidade
        </h1>
        <p className="mt-4 text-sm text-faint">Última atualização: 2026</p>

        <div className="mt-10 space-y-8 text-muted">
          <div className="space-y-3">
            <h2 className="font-display text-xl font-semibold text-navy-900">
              1. Compromisso com a privacidade
            </h2>
            <p className="leading-relaxed">
              A {site.name} respeita a sua privacidade e trata os dados pessoais
              com responsabilidade e transparência, em conformidade com a
              legislação aplicável, incluindo a Lei Geral de Proteção de Dados
              (LGPD).
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-xl font-semibold text-navy-900">
              2. Dados coletados
            </h2>
            <p className="leading-relaxed">
              Quando você entra em contato pelo formulário do site, coletamos
              apenas as informações fornecidas voluntariamente: nome, e-mail,
              empresa e mensagem. Esses dados são utilizados exclusivamente
              para responder ao seu contato.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-xl font-semibold text-navy-900">
              3. Uso das informações
            </h2>
            <p className="leading-relaxed">
              As informações são usadas para atender às suas solicitações,
              melhorar a comunicação e, quando autorizado, enviar atualizações
              institucionais. Não vendemos nem compartilhamos seus dados com
              terceiros para fins de marketing.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-xl font-semibold text-navy-900">
              4. Seus direitos
            </h2>
            <p className="leading-relaxed">
              Você pode solicitar acesso, correção, portabilidade ou exclusão
              dos seus dados a qualquer momento, entrando em contato pelo
              e-mail institucional disponível neste site.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-xl font-semibold text-navy-900">
              5. Contato
            </h2>
            <p className="leading-relaxed">
              Para questões relacionadas à privacidade, entre em contato pelo
              e-mail {site.email}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
