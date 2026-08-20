import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import WorkArchive from '@/components/WorkArchive';
import { attribution, site } from '@/lib/data';
import { filterOptions, formatRange, placeOf, productions, stats } from '@/lib/derive';

export const metadata: Metadata = {
  title: 'Full credit list',
  description: `Every recorded production by the ${site.name} team — ${stats.productions} productions across ${stats.venues} venues and ${stats.countries} countries.`,
  alternates: { canonical: '/work' },
};

export default function WorkPage() {
  // Dates and places are formatted here, at build time, so the client bundle
  // ships neither the month table nor the formatting logic.
  const labels = Object.fromEntries(
    productions.map((p) => [
      p.id,
      { when: formatRange(p.dateStart, p.dateEnd), place: placeOf(p) },
    ]),
  );

  return (
    <>
      <Nav />
      <main className="px-6 pb-24 pt-36 sm:px-12">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.22em] text-white/45">
              <span className="block h-px w-7 bg-white/45" />
              The full list
            </p>
            <h1 className="mt-5 font-display text-[clamp(2.6rem,7vw,5rem)] leading-none tracking-[0.03em]">
              Every production
            </h1>
            <p className="mt-6 max-w-2xl text-white/60">
              {stats.productions} productions and {stats.credits} individual call sheets across{' '}
              {stats.venues} venues, {stats.countries} countries and {stats.clients} clients. Fight
              weeks are grouped, with every phase we covered listed.
            </p>
            <p className="mt-4 max-w-2xl text-[0.78rem] leading-relaxed text-muted">
              {attribution}
            </p>
            <Link
              href="/"
              className="mt-7 inline-block border-b border-hairline pb-0.5 text-[0.78rem] transition-colors hover:border-white"
            >
              ← Back to the overview
            </Link>
          </FadeIn>

          <div className="mt-14">
            <WorkArchive productions={productions} options={filterOptions} labels={labels} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
