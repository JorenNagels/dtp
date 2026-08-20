import type { ReactNode } from 'react';
import FadeIn from './FadeIn';

type Props = {
  id?: string;
  eyebrow: string;
  heading: ReactNode;
  /** Sits under the heading, before the body. */
  lead?: ReactNode;
  className?: string;
  children: ReactNode;
};

/**
 * The section rhythm every block on the site follows: rule + eyebrow, display
 * heading, optional lead, content. Kept in one place so the vertical spacing
 * and type scale can't drift between sections.
 */
export default function Section({ id, eyebrow, heading, lead, className = '', children }: Props) {
  return (
    <section id={id} className={`scroll-mt-20 px-6 py-24 sm:px-12 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.22em] text-white/45">
            <span className="block h-px w-7 bg-white/45" />
            {eyebrow}
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-none tracking-[0.04em]">
            {heading}
          </h2>
          {lead ? <div className="mt-5 max-w-2xl text-white/60">{lead}</div> : null}
        </FadeIn>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}
