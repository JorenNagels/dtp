import FadeIn from './FadeIn';
import { site } from '@/lib/data';

export default function Contact() {
  return (
    // Previously a full-bleed white block. On an otherwise black page that was
    // the loudest thing on it, so the close now stays dark and gets its weight
    // from scale and space instead of from glare.
    <section
      id="contact"
      className="scroll-mt-20 border-t border-hairline bg-mid px-6 py-28 sm:px-12"
    >
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2">
        <FadeIn>
          <p className="flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.22em] text-white/45">
            <span className="block h-px w-7 bg-white/45" />
            Get in touch
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-none tracking-[0.04em]">
            Tell us about
            <br />
            the show.
          </h2>
        </FadeIn>
        <FadeIn className="sm:pt-16">
          <p className="max-w-md text-white/60">
            Fight week, tournament stage or studio format — send over the dates and the venue and
            we&rsquo;ll tell you what it takes to put it on air.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-8 inline-block border-b border-white/30 pb-1.5 font-display text-[clamp(1.3rem,3vw,2.1rem)] tracking-[0.04em] transition-colors hover:border-white"
          >
            {site.email}
          </a>
          <p className="mt-8 text-[0.78rem] uppercase tracking-[0.16em] text-white/40">
            {site.location}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
