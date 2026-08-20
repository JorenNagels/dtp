import { productions, formatRange, placeOf } from './derive';
import type { Discipline } from './credits';

export const site = {
  name: 'Dream Team Productions',
  shortName: 'DTP',
  url: 'https://dreamteamproductions.co.uk',
  email: 'hello@dreamteamproductions.co.uk',
  talentUrl: 'https://elliot.dreamteamproductions.co.uk',
  tagline: 'Live broadcast · Live events',
  description:
    'Dream Team Productions is a UK broadcast team built for live combat sports and competitive gaming — full fight weeks, arena shows and tournament stages across 11 countries.',
  location: 'Based in the UK — working globally',
};

export const heroLead =
  'A UK broadcast team built for live combat sports and competitive gaming. Grand arrivals, open workouts, press conferences, weigh-ins, fight nights — and the tournament stages in between.';

/**
 * Most of the work below was delivered by our team while contracted to other
 * production companies. Stated plainly rather than glossed over.
 */
export const attribution =
  'Credits accrued by our team at Dream Team Productions, Braincup Media, SpaceTime Strategies and Loadscreen.';

export type Capability = { num: string; title: string; desc: string };

export const capabilities: Capability[] = [
  {
    num: '01',
    title: 'Fight week, end to end',
    desc: 'Grand arrivals, open workouts, press conferences, weigh-ins and fight night. We staff the whole week rather than parachuting in for the main event — which is why promoters hand us the full run.',
  },
  {
    num: '02',
    title: 'Broadcast & gallery operations',
    desc: 'Vision mixing, replay, stage tech and E2. Multi-camera galleries at Wembley, the O2, Co-op Live and Kingdom Arena, delivered to DAZN and broadcast partners on the night.',
  },
  {
    num: '03',
    title: 'Esports & competitive gaming',
    desc: 'Tournament stages, arena shows and studio formats — PAX Arena, EGX, Red Bull Kumite and Games of the Future. Show control, observers, replay and on-stage hosting.',
  },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  link?: { label: string; href: string };
};

export const team: TeamMember[] = [
  {
    name: 'Chris Sunderland',
    role: 'Co-founder',
    bio: '175+ events for Braincup Media, including for Queensberry Promotions, Riyadh Season, DAZN and Guild Esports. Runs the fight-week output — every rung from York Hall to Kingdom Arena.',
  },
  {
    name: 'Elliot Barham',
    role: 'Co-founder',
    bio: 'Producer and project manager on the esports side; gallery operator on the fight side — replay, vision mixing and stage tech. Nine editions of PAX Arena for ReedPop, plus Red Bull Kumite in Rome and EGX in London. Also works as an event host and presenter.',
    link: { label: 'Hosting portfolio', href: site.talentUrl },
  },
];

// --- marquee ----------------------------------------------------------------

export type MarqueeItem = {
  title: string;
  place: string;
  client: string;
  when: string;
  phases: string[];
  discipline: Discipline;
  /** Billed directly to Dream Team Productions rather than via a partner. */
  dtpBilled?: boolean;
};

/** Look a production up by name, disambiguating by venue where one ran at two. */
function pick(event: string, venue?: string): MarqueeItem {
  const found = productions.find((p) => p.event === event && (!venue || p.venue === venue));
  if (!found)
    throw new Error(`Marquee production not found: ${event}${venue ? ` @ ${venue}` : ''}`);
  return {
    title: found.event,
    place: placeOf(found),
    client: found.client,
    when: formatRange(found.dateStart, found.dateEnd),
    phases: found.phases.map((ph) => ph.name),
    discipline: found.discipline,
    dtpBilled: found.via === 'Dream Team Productions',
  };
}

/** The PAX run is nine separate productions; on the homepage it reads as one. */
const paxAggregate = (): MarqueeItem => {
  const pax = productions.filter((p) => p.event.startsWith('PAX '));
  const years = pax.map((p) => p.year);
  return {
    title: 'PAX Arena',
    place: 'Seattle & Boston Convention Centers, USA',
    client: 'ReedPop',
    when: `${Math.min(...years)}–${Math.max(...years)} · ${pax.length} editions`,
    phases: ['Competitive stage', 'Show control', 'Production management'],
    discipline: 'Esports',
  };
};

export const marquee: MarqueeItem[] = [
  pick('Reignited: Usyk vs Fury 2'),
  pick('Undisputed: Usyk vs Dubois 2'),
  pick('The Last Crescendo: Beterbiev vs Bivol 2', 'Kingdom Arena'),
  pick('Fatal Fury: Canelo vs Scull'),
  pick('Riyadh Season Card — Wembley Edition'),
  pick('IV Crown Showdown', 'Kingdom Arena'),
  paxAggregate(),
  pick('Red Bull Kumite Qualifier'),
  pick('EGX Arena'),
  pick('Games of the Future 2025'),
  pick('MF & DAZN X Series 19'),
  pick('Fatal Fury: KSI vs Speed'),
];
