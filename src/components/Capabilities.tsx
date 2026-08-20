import Section from './Section';
import FadeIn from './FadeIn';
import { capabilities } from '@/lib/data';
import { FIGHT_WEEK } from '@/lib/credits';

/** The fight-week sequence, minus the two launch/re-launch variants. */
const week = FIGHT_WEEK.filter((p) => !p.includes('Launch'));

export default function Capabilities() {
  return (
    <Section
      id="capabilities"
      eyebrow="What we do"
      heading="Every day of fight week."
      lead="Most crews turn up for the main event. We run the whole build — and the tournament stages in between."
    >
      <FadeIn>
        <ol className="flex flex-wrap items-center gap-x-3 gap-y-2 border-y border-hairline py-5 text-[0.7rem] uppercase tracking-[0.16em] text-white/50">
          {week.map((phase, i) => (
            <li key={phase} className="flex items-center gap-3">
              {i > 0 ? (
                <span aria-hidden className="text-white/25">
                  →
                </span>
              ) : null}
              <span>{phase}</span>
            </li>
          ))}
        </ol>
      </FadeIn>

      <div className="mt-12 grid gap-px border border-hairline bg-white/[0.08] sm:grid-cols-3">
        {capabilities.map((c) => (
          <FadeIn key={c.num} className="group relative bg-black p-8">
            <span
              aria-hidden
              className="absolute right-6 top-5 font-display text-[3.5rem] leading-none text-white/[0.07]"
            >
              {c.num}
            </span>
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-white transition-transform duration-500 group-hover:scale-x-100"
            />
            {/* pr-16 keeps long titles clear of the ghosted number behind them. */}
            <h3 className="relative pr-16 font-display text-[1.5rem] leading-tight tracking-[0.06em]">
              {c.title}
            </h3>
            <p className="relative mt-4 text-[0.9rem] leading-relaxed text-white/60">{c.desc}</p>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
