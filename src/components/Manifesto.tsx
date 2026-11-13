import Reveal from "@/components/Reveal";
import { content } from "@/config/content";

export default function Manifesto() {
  const { manifesto } = content;

  return (
    <section id="manifesto" className="relative overflow-hidden bg-white py-24 md:py-36">
      {/* Marca d'água tipográfica */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 right-0 select-none font-display text-[22rem] font-bold leading-none text-mist md:text-[28rem]"
      >
        M
      </div>

      <div className="container-x relative">
        <Reveal>
          <p className="kicker text-brand-600">{manifesto.kicker}</p>
          <h2 className="mt-6 max-w-4xl font-display text-3xl font-semibold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl md:text-5xl">
            {manifesto.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-2 md:gap-16">
          <Reveal className="space-y-6">
            <p className="text-lg leading-relaxed text-muted">
              {manifesto.paragraphs[0]}
            </p>
            <p className="text-lg leading-relaxed text-muted">
              {manifesto.paragraphs[1]}
            </p>
          </Reveal>

          <Reveal delay={120} className="space-y-6">
            <p className="text-lg leading-relaxed text-muted">
              {manifesto.paragraphs[2]}
            </p>
            <div className="border-l-2 border-brand-600 pl-6">
              <p className="font-display text-xl font-semibold leading-snug text-navy-900 md:text-2xl">
                {manifesto.closing}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
