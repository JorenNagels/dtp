import Section from './Section';
import FadeIn from './FadeIn';
import { team } from '@/lib/data';

export default function Team() {
  return (
    <Section
      id="team"
      eyebrow="Who we are"
      heading="Two founders, one gallery."
      lead="Dream Team Productions was founded by two operators who met on the floor and kept getting asked back."
    >
      <div className="grid gap-px border border-hairline bg-white/[0.08] sm:grid-cols-2">
        {team.map((member) => (
          <FadeIn key={member.name} className="bg-black p-8">
            <p className="text-[0.64rem] uppercase tracking-[0.18em] text-white/40">
              {member.role}
            </p>
            <h3 className="mt-3 font-display text-[1.9rem] leading-none tracking-[0.05em]">
              {member.name}
            </h3>
            <p className="mt-5 text-[0.9rem] leading-relaxed text-white/60">{member.bio}</p>
            {member.link ? (
              <a
                href={member.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block border-b border-hairline pb-0.5 text-[0.78rem] transition-colors hover:border-white"
              >
                {member.link.label} ↗
              </a>
            ) : null}
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
