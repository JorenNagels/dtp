import Section from './Section';
import FadeIn from './FadeIn';
import { clientsByVolume, stats } from '@/lib/derive';

export default function Clients() {
  // Duplicated so the marquee can translate -50% and loop seamlessly.
  const track = [...clientsByVolume, ...clientsByVolume];

  return (
    <Section
      id="clients"
      eyebrow="Who we do it for"
      heading="Promoters, broadcasters, publishers."
      lead={`${stats.clients} clients across boxing, MMA and competitive gaming — from world-title cards to convention stages.`}
    >
      <FadeIn className="carousel-mask overflow-hidden border-y border-hairline py-8">
        <ul className="flex w-max animate-scroll-brands gap-12">
          {track.map((client, i) => (
            <li
              key={`${client}-${i}`}
              aria-hidden={i >= clientsByVolume.length}
              className="whitespace-nowrap font-display text-[1.5rem] tracking-[0.08em] text-white/40 transition-colors hover:text-white"
            >
              {client}
            </li>
          ))}
        </ul>
      </FadeIn>
    </Section>
  );
}
