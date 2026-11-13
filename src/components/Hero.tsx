import { ArrowRight } from "lucide-react";
import Button from "@/components/Button";
import { content } from "@/config/content";

/**
 * Composição visual original: uma "trajetória" ascendente de nós
 * conectados (movimento + construção), envolvida por arcos concêntricos
 * que sugerem expansão — sem clichês espaciais.
 */
function HeroGraphic() {
  return (
    <svg
      viewBox="0 0 560 560"
      fill="none"
      aria-hidden="true"
      className="mx-auto w-full max-w-[30rem] lg:max-w-none"
    >
      <defs>
        <linearGradient id="hero-trajectory" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#1769E0" />
          <stop offset="100%" stopColor="#48B8E8" />
        </linearGradient>
      </defs>

      {/* Arcos de expansão */}
      <g stroke="white" strokeOpacity="0.08">
        <circle cx="280" cy="300" r="200" />
        <circle cx="280" cy="300" r="252" />
      </g>
      <circle
        cx="280"
        cy="300"
        r="220"
        stroke="white"
        strokeOpacity="0.12"
        strokeDasharray="2 8"
      />

      {/* Órbita com ponto em movimento */}
      <g className="animate-orbit" style={{ transformOrigin: "280px 300px" }}>
        <circle cx="280" cy="80" r="4" fill="#48B8E8" />
      </g>

      {/* Trajetória ascendente */}
      <path
        d="M96 468 L150 396 L128 330 L204 268 L250 300 L330 214 L396 236 L470 130"
        stroke="url(#hero-trajectory)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.85"
      />

      {/* Nós da trajetória */}
      {[
        [96, 468],
        [150, 396],
        [128, 330],
        [204, 268],
        [250, 300],
        [330, 214],
        [396, 236],
      ].map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i === 6 ? 5 : 3.5}
          fill={i === 6 ? "#48B8E8" : "#10243A"}
          stroke="#48B8E8"
          strokeWidth="1.5"
        />
      ))}

      {/* Ponto "além" — anel pulsante no topo da trajetória */}
      <g className="animate-pulse-soft">
        <circle cx="470" cy="130" r="7" stroke="#48B8E8" strokeWidth="2" />
      </g>
      <circle cx="470" cy="130" r="3" fill="#48B8E8" />

      {/* Nós flutuantes */}
      <circle
        cx="470"
        cy="320"
        r="3"
        fill="#5C97EE"
        className="animate-float"
      />
      <circle
        cx="90"
        cy="140"
        r="4"
        fill="#74CBF0"
        className="animate-float-slow"
      />
      <circle
        cx="372"
        cy="84"
        r="2.5"
        fill="white"
        fillOpacity="0.5"
        className="animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Partículas ascendentes */}
      <circle
        cx="470"
        cy="430"
        r="2"
        fill="#48B8E8"
        className="animate-drift"
      />
      <circle
        cx="90"
        cy="330"
        r="2"
        fill="#5C97EE"
        className="animate-drift"
        style={{ animationDelay: "0.6s" }}
      />
    </svg>
  );
}

export default function Hero() {
  const { hero } = content;

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-navy-950 text-white"
    >
      {/* Brilhos de fundo sutis */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-brand-600/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-[26rem] w-[26rem] rounded-full bg-accent-400/10 blur-[110px]"
      />
      {/* Grade sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:64px_64px]"
      />

      <div className="container-x relative flex min-h-[100svh] items-center pb-20 pt-32 lg:pt-36">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          {/* Texto */}
          <div className="max-w-2xl">
            <p className="kicker animate-fade-up text-accent-400">
              {hero.kicker}
            </p>
            <h1
              className="mt-6 animate-fade-up font-display text-[2.65rem] font-semibold leading-[1.04] tracking-tight sm:text-6xl xl:text-7xl"
              style={{ animationDelay: "80ms" }}
            >
              We build{" "}
              <span className="bg-gradient-to-r from-accent-400 to-brand-400 bg-clip-text text-transparent">
                beyond
              </span>{" "}
              what exists.
            </h1>
            <p
              className="mt-7 max-w-xl animate-fade-up text-lg leading-relaxed text-white/70"
              style={{ animationDelay: "160ms" }}
            >
              {hero.subheadline}
            </p>
            <div
              className="mt-10 flex animate-fade-up flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "240ms" }}
            >
              <Button href="#sobre" variant="primary">
                {hero.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#contato" variant="outlineInverse">
                {hero.secondaryCta}
              </Button>
            </div>
          </div>

          {/* Composição visual */}
          <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
            <HeroGraphic />
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <a
        href="#manifesto"
        aria-label="Rolar para o manifesto"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-white/40 transition-colors hover:text-white/80 md:block"
      >
        <span className="block h-10 w-px bg-gradient-to-b from-white/60 to-transparent" />
      </a>
    </section>
  );
}
