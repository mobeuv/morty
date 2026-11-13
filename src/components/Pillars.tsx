import {
  Boxes,
  Code2,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { content, type Pillar } from "@/config/content";

const icons: Record<string, LucideIcon> = {
  "01": Code2,
  "02": Sparkles,
  "03": Boxes,
  "04": TrendingUp,
};

function PillarCard({ pillar }: { pillar: Pillar }) {
  const Icon = icons[pillar.index] ?? Code2;
  return (
    <div className="group relative bg-white p-8 transition-colors duration-300 hover:bg-mist md:p-10">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brand-600 transition-transform duration-300 group-hover:scale-x-100"
      />
      <div className="flex items-center justify-between">
        <span className="font-mono text-sm font-medium text-brand-600">
          {pillar.index}
        </span>
        <Icon className="h-6 w-6 text-navy-900/30 transition-colors duration-300 group-hover:text-brand-600" />
      </div>
      <h3 className="mt-6 font-display text-xl font-semibold leading-tight text-navy-900 md:text-2xl">
        {pillar.title}
      </h3>
      <p className="mt-3 leading-relaxed text-muted">{pillar.description}</p>
    </div>
  );
}

export default function Pillars() {
  const { pillars } = content;

  return (
    <section id="o-que-fazemos" className="bg-white py-24 md:py-36">
      <div className="container-x">
        <div className="max-w-2xl">
          <Reveal>
            <p className="kicker text-brand-600">{pillars.kicker}</p>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl md:text-5xl">
              {pillars.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              {pillars.intro}
            </p>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-14">
          <div className="grid gap-px overflow-hidden rounded-2xl bg-navy-900/10 sm:grid-cols-2">
            {pillars.items.map((pillar) => (
              <PillarCard key={pillar.index} pillar={pillar} />
            ))}
          </div>
          <p className="mt-6 font-mono text-xs leading-relaxed tracking-wide text-faint">
            Pilares estratégicos — a direção que orienta a nossa construção, não
            um portfólio de serviços.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
