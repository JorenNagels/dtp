import Link from 'next/link';
import Logo from './Logo';
import { heroLead, site } from '@/lib/data';
import { stats } from '@/lib/derive';

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden px-6 pb-20 pt-36 sm:px-12">
      <div className="hero-grid absolute inset-0 -z-10 opacity-[0.05]" aria-hidden />
      <div className="hero-vignette absolute inset-0 -z-10" aria-hidden />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-black to-transparent"
        aria-hidden
      />

      <div className="mx-auto w-full max-w-6xl">
        <Logo className="h-14 w-auto text-white/90 sm:h-20" />

        <p className="mt-10 flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.22em] text-white/45">
          <span className="block h-px w-7 bg-white/45" />
          {site.tagline}
        </p>

        <h1 className="mt-5 font-display text-[clamp(3rem,10vw,7.5rem)] leading-[0.88] tracking-[0.03em]">
          Dream Team
          <br />
          Productions
        </h1>

        <p className="mt-7 max-w-[34rem] text-white/65">{heroLead}</p>

        <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-[0.78rem] uppercase tracking-[0.16em] text-white/45">
          <div>
            <dt className="sr-only">Productions</dt>
            <dd>
              <span className="font-display text-[1.6rem] tracking-normal text-white">
                {stats.productions}
              </span>{' '}
              productions
            </dd>
          </div>
          <div>
            <dt className="sr-only">Venues</dt>
            <dd>
              <span className="font-display text-[1.6rem] tracking-normal text-white">
                {stats.venues}
              </span>{' '}
              venues
            </dd>
          </div>
          <div>
            <dt className="sr-only">Countries</dt>
            <dd>
              <span className="font-display text-[1.6rem] tracking-normal text-white">
                {stats.countries}
              </span>{' '}
              countries
            </dd>
          </div>
        </dl>

        <div className="mt-11 flex flex-wrap gap-4">
          <Link
            href="#work"
            className="bg-white px-7 py-3 text-[0.72rem] uppercase tracking-[0.18em] text-black transition-opacity hover:opacity-80"
          >
            See the work
          </Link>
          <Link
            href="#contact"
            className="border border-hairline px-7 py-3 text-[0.72rem] uppercase tracking-[0.18em] transition-colors hover:border-white/60"
          >
            Start a conversation
          </Link>
        </div>
      </div>
    </section>
  );
}
