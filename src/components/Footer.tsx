import Link from "next/link";
import { Mail } from "lucide-react";
import Logo from "@/components/Logo";
import SocialLinks from "@/components/SocialLinks";
import { nav, site } from "@/config/site";
import { content } from "@/config/content";
import { withBasePath } from "@/lib/utils";

export default function Footer() {
  const { footer } = content;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Marca */}
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              {site.tagline}.
            </p>
          </div>

          {/* Links institucionais */}
          <nav aria-label="Links institucionais">
            <p className="kicker text-white/40">{footer.linksTitle}</p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato + redes */}
          <div>
            <p className="kicker text-white/40">{footer.contactTitle}</p>
            {site.email && (
              <a
                href={`mailto:${site.email}`}
                className="mt-4 inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-accent-400" />
                {site.email}
              </a>
            )}
            <p className="kicker mt-6 text-white/40">{footer.socialTitle}</p>
            <SocialLinks
              className="mt-3 text-white"
              emptyLabel={footer.socialEmpty}
            />
          </div>
        </div>

        {/* Fechamento */}
        <div className="mt-16 border-t border-white/10 pt-10">
          <p className="font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl">
            Beyond the limits.{" "}
            <span className="bg-gradient-to-r from-accent-400 to-brand-400 bg-clip-text text-transparent">
              Beyond generations.
            </span>
          </p>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {site.name}. {footer.rights}
            </p>
            <div className="flex items-center gap-5">
              <a
                href={withBasePath("/llms.md")}
                className="transition-colors hover:text-white"
              >
                {footer.llms}
              </a>
              <Link
                href="/privacidade"
                className="transition-colors hover:text-white"
              >
                {footer.privacy}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
