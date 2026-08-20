import Link from 'next/link';
import Section from './Section';
import FadeIn from './FadeIn';
import { attribution, marquee } from '@/lib/data';
import { stats } from '@/lib/derive';

export default function Work() {
  return (
    <Section
      id="work"
      eyebrow="Selected work"
      heading="Rooms we've filled."
      lead={`Twelve of ${stats.productions} productions. Fight weeks are shown with every phase we covered.`}
    >
      <div className="grid gap-px border border-hairline bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
        {marquee.map((m) => (
          <FadeIn key={`${m.title}-${m.when}`} className="flex flex-col bg-black p-7">
            <div className="flex items-start justify-between gap-4">
              <p className="text-[0.64rem] uppercase tracking-[0.18em] text-white/40">
                {m.discipline}
              </p>
              {m.dtpBilled ? (
                <p className="shrink-0 border border-hairline px-2 py-0.5 text-[0.58rem] uppercase tracking-[0.14em] text-white/50">
                  DTP billed
                </p>
              ) : null}
            </div>

            <h3 className="mt-4 font-display text-[1.45rem] leading-tight tracking-[0.04em]">
              {m.title}
            </h3>

            <p className="mt-3 text-[0.85rem] leading-relaxed text-white/55">{m.place}</p>
            <p className="mb-6 mt-1 text-[0.85rem] text-white/40">
              {m.client} · {m.when}
            </p>

            <ul className="mt-auto flex flex-wrap gap-1.5 border-t border-hairline pt-5 text-[0.62rem] uppercase tracking-[0.12em] text-white/45">
              {m.phases.map((phase) => (
                <li key={phase} className="border border-hairline px-2 py-1">
                  {phase}
                </li>
              ))}
            </ul>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <p className="max-w-xl text-[0.78rem] leading-relaxed text-muted">{attribution}</p>
        <Link
          href="/work"
          className="shrink-0 border border-hairline px-7 py-3 text-[0.72rem] uppercase tracking-[0.18em] transition-colors hover:border-white/60"
        >
          All {stats.productions} productions →
        </Link>
      </FadeIn>
    </Section>
  );
}
