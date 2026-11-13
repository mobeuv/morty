import Reveal from "@/components/Reveal";
import { content } from "@/config/content";

export default function About() {
  const { about } = content;

  return (
    <section id="sobre" className="bg-mist py-24 md:py-36">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="kicker text-brand-600">{about.kicker}</p>
              <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl md:text-5xl">
                {about.title}
              </h2>
            </Reveal>
            <Reveal delay={100} className="mt-8 space-y-5">
              {about.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-lg leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </Reveal>
          </div>

          <Reveal delay={140} className="lg:pt-2">
            <p className="kicker text-faint">Nossos princípios</p>
            <ul className="mt-6">
              {about.principles.map((principle, i) => (
                <li
                  key={principle.title}
                  className="flex gap-6 border-t border-navy-900/10 py-6 first:border-t-0 first:pt-0"
                >
                  <span className="mt-1 font-mono text-sm font-medium text-brand-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-navy-900">
                      {principle.title}
                    </h3>
                    <p className="mt-1.5 leading-relaxed text-muted">
                      {principle.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
