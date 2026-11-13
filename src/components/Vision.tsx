import Reveal from "@/components/Reveal";
import { content } from "@/config/content";

/**
 * Representação abstrata de trajetória, crescimento e continuidade:
 * linhas ascendentes em camadas — gerações construídas umas sobre as
 * outras — que seguem para além do limite do quadro.
 */
function VisionGraphic() {
  return (
    <svg
      viewBox="0 0 520 340"
      fill="none"
      aria-hidden="true"
      className="w-full"
    >
      <defs>
        <linearGradient id="vision-line" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#1769E0" />
          <stop offset="100%" stopColor="#48B8E8" />
        </linearGradient>
      </defs>

      {/* Linha de base — o presente */}
      <line
        x1="20"
        y1="272"
        x2="500"
        y2="272"
        stroke="white"
        strokeOpacity="0.12"
        strokeDasharray="2 8"
      />

      {/* Camadas ascendentes — gerações */}
      <path
        d="M20 240 C120 232 180 200 260 176 S420 120 500 96"
        stroke="white"
        strokeOpacity="0.14"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 208 C120 198 180 168 260 142 S420 84 500 58"
        stroke="#5C97EE"
        strokeOpacity="0.35"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 176 C120 164 180 134 260 108 S420 48 500 20"
        stroke="url(#vision-line)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Nós de progresso na trajetória principal */}
      {[
        [120, 164],
        [260, 108],
        [420, 48],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="#10243A" stroke="#48B8E8" strokeWidth="2" />
      ))}

      {/* Ponto "além" — anel no topo */}
      <g className="animate-pulse-soft">
        <circle cx="500" cy="20" r="8" stroke="#48B8E8" strokeWidth="2" />
      </g>
      <circle cx="500" cy="20" r="3" fill="#48B8E8" />
    </svg>
  );
}

export default function Vision() {
  const { vision } = content;

  return (
    <section
      id="visao"
      className="relative overflow-hidden bg-navy-950 py-24 text-white md:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-brand-600/15 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[24rem] w-[24rem] rounded-full bg-accent-400/10 blur-[110px]"
      />

      <div className="container-x relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <p className="kicker text-accent-400">{vision.kicker}</p>
              <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
                {vision.title}
              </h2>
            </Reveal>
            <Reveal delay={100} className="mt-8 space-y-5">
              {vision.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-lg leading-relaxed text-white/70">
                  {paragraph}
                </p>
              ))}
            </Reveal>
          </div>

          <Reveal delay={160}>
            <VisionGraphic />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
