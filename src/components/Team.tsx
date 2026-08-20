import Section from './Section';
import FadeIn from './FadeIn';
import { team } from '@/lib/data';
import { founders } from '@/lib/photos';

export default function Team() {
  return (
    <Section
      id="team"
      eyebrow="Who we are"
      heading="Two founders, one gallery."
      lead="Dream Team Productions was founded by two operators who met on the floor and kept getting asked back."
    >
      <div className="grid gap-px border border-hairline bg-white/[0.08] md:grid-cols-[0.8fr_1fr]">
        <FadeIn className="bg-black">
          <img
            src={founders.src}
            srcSet={`${founders.srcSmall} 620w, ${founders.src} 1000w`}
            sizes="(min-width: 768px) 44vw, 100vw"
            alt={founders.alt}
            width={founders.w}
            height={founders.h}
            className="h-full w-full object-cover md:min-h-[26rem]"
          />
        </FadeIn>

        <div className="grid gap-px bg-white/[0.08]">
          {team.map((member) => (
            <FadeIn key={member.name} className="bg-black p-8">
              <p className="text-[0.64rem] uppercase tracking-[0.18em] text-white/40">
                {member.role}
              </p>
              <h3 className="mt-3 font-display text-[1.9rem] leading-none tracking-[0.05em]">
                {member.name}
              </h3>
              <p className="mt-4 text-[0.9rem] leading-relaxed text-white/60">{member.bio}</p>
              {member.link ? (
                <a
                  href={member.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block border-b border-hairline pb-0.5 text-[0.78rem] transition-colors hover:border-white"
                >
                  {member.link.label} ↗
                </a>
              ) : null}
            </FadeIn>
          ))}
        </div>
      </div>

      <FadeIn>
        <p className="mt-4 text-[0.7rem] uppercase tracking-[0.14em] text-white/30">
          Elliot Barham (left) and Chris Sunderland (right)
        </p>
      </FadeIn>
    </Section>
  );
}
