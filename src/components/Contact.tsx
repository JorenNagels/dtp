import FadeIn from './FadeIn';
import { site } from '@/lib/data';

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-white px-6 py-24 text-black sm:px-12">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2">
        <FadeIn>
          <p className="flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.22em] text-black/50">
            <span className="block h-px w-7 bg-black/50" />
            Get in touch
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-none tracking-[0.04em]">
            Tell us about
            <br />
            the show.
          </h2>
        </FadeIn>
        <FadeIn className="sm:pt-16">
          <p className="max-w-md text-black/70">
            Fight week, tournament stage or studio format — send over the dates and the venue and
            we&rsquo;ll tell you what it takes to put it on air.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-7 inline-block border-b-2 border-black pb-1 font-display text-[clamp(1.3rem,3vw,1.9rem)] tracking-[0.04em] transition-opacity hover:opacity-60"
          >
            {site.email}
          </a>
          <p className="mt-7 text-[0.78rem] uppercase tracking-[0.16em] text-black/50">
            {site.location}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
