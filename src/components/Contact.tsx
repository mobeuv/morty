import { Mail } from "lucide-react";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";
import { site } from "@/config/site";
import { content } from "@/config/content";

export default function Contact() {
  const { contact, footer } = content;

  return (
    <section id="contato" className="bg-mist py-24 md:py-36">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="kicker text-brand-600">{contact.kicker}</p>
              <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-navy-900 sm:text-4xl md:text-5xl">
                {contact.title}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                {contact.description}
              </p>
            </Reveal>

            <Reveal delay={100} className="mt-10 space-y-8">
              <div>
                <p className="kicker text-faint">E-mail institucional</p>
                {site.email ? (
                  <a
                    href={`mailto:${site.email}`}
                    className="group mt-3 inline-flex items-center gap-2.5 font-display text-lg font-semibold text-navy-900 transition-colors hover:text-brand-600"
                  >
                    <Mail className="h-5 w-5 text-brand-600" />
                    {site.email}
                  </a>
                ) : (
                  <p className="mt-3 text-muted">Em breve.</p>
                )}
              </div>

              <div>
                <p className="kicker text-faint">{footer.socialTitle}</p>
                <SocialLinks className="mt-3" emptyLabel={footer.socialEmpty} />
              </div>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <div className="rounded-3xl border border-navy-900/10 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(16,36,58,0.25)] sm:p-8 md:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
