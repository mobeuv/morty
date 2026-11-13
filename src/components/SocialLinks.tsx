import { ArrowUpRight } from "lucide-react";
import { socials } from "@/config/site";
import { cn } from "@/lib/utils";

type SocialLinksProps = {
  className?: string;
  /** Texto exibido quando ainda não há redes sociais configuradas. */
  emptyLabel?: string;
};

/**
 * Redes sociais como links textuais (os ícones de marca não fazem parte do
 * conjunto Lucide). Preencha a lista em `src/config/site.ts`.
 */
export default function SocialLinks({ className, emptyLabel }: SocialLinksProps) {
  if (socials.length === 0) {
    if (!emptyLabel) return null;
    return (
      <p className={cn("text-sm text-current/60", className)}>{emptyLabel}</p>
    );
  }

  return (
    <ul className={cn("flex flex-wrap items-center gap-3", className)}>
      {socials.map((social) => (
        <li key={social.id}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-full border border-current/20 px-4 py-2 text-sm font-medium text-current transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-600 hover:text-brand-600"
          >
            {social.label}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </li>
      ))}
    </ul>
  );
}
