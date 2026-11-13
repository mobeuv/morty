import { cn } from "@/lib/utils";

type LogoProps = {
  /** Renderiza o nome "MOBEUV" ao lado do símbolo. */
  withWordmark?: boolean;
  className?: string;
  /** Classe extra para o texto do wordmark. */
  wordmarkClassName?: string;
};

/**
 * Símbolo original da MOBEUV: um "M" desenhado em traço contínuo,
 * com um anel destacado no topo direito — o "ponto além", que traduz
 * trajetória, movimento e o conceito de ir além dos limites.
 */
export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 32"
      fill="none"
      aria-hidden="true"
      className={cn("h-8 w-auto", className)}
    >
      <path
        d="M6 27 V9 L22 22 L38 9 V27"
        stroke="currentColor"
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="44"
        cy="3.5"
        r="3"
        className="text-accent-400"
        stroke="currentColor"
        strokeWidth="2.25"
      />
    </svg>
  );
}

export default function Logo({
  withWordmark = true,
  className,
  wordmarkClassName,
}: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Mark />
      {withWordmark && (
        <span
          className={cn(
            "font-display text-[1.05rem] font-bold uppercase leading-none tracking-[0.08em]",
            wordmarkClassName,
          )}
        >
          Mobeuv
        </span>
      )}
    </span>
  );
}
