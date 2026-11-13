import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "inverse" | "outlineInverse";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
} & Omit<ComponentProps<"a">, "href" | "children" | "className">;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium text-sm transition-all duration-300 select-none whitespace-nowrap px-6 h-12 focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white shadow-[0_10px_30px_-12px_rgba(23,105,224,0.9)] hover:bg-brand-500 hover:shadow-[0_14px_36px_-12px_rgba(23,105,224,0.95)] hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "border border-navy-900/15 text-navy-900 hover:border-navy-900/40 hover:bg-navy-900/5",
  ghost:
    "text-navy-900 hover:text-brand-600",
  inverse:
    "bg-white text-navy-900 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)] hover:bg-mist hover:-translate-y-0.5 active:translate-y-0",
  outlineInverse:
    "border border-white/25 text-white hover:border-white/60 hover:bg-white/10",
};

/**
 * Botão/âncora reutilizável. Por padrão renderiza um <a>; para links
 * externos passe `external` (adiciona target/rel adequados).
 */
export default function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
  ...rest
}: ButtonProps) {
  return (
    <a
      href={href}
      className={cn(base, variants[variant], className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
