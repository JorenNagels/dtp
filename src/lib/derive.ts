import {
  FIGHT_WEEK,
  productionSeeds,
  type Discipline,
  type Phase,
  type ProductionSeed,
  type Via,
} from './credits';

export type Production = {
  id: string;
  event: string;
  venue: string;
  city: string;
  country: string;
  client: string;
  partner?: string;
  via: Via;
  discipline: Discipline;
  role?: string;
  /** Phases actually covered, in running order, unresolved entries removed. */
  phases: Phase[];
  /** First and last day of work on this production. */
  dateStart: string;
  dateEnd: string;
  /** Year of the closing phase — the fight night, where there is one. */
  year: number;
  /** True when three or more fight-week phases were covered. */
  fullFightWeek: boolean;
};

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

/** Chronological, then by fight-week running order for same-day phases. */
const byPhaseOrder = (a: Phase, b: Phase) =>
  a.date.localeCompare(b.date) || FIGHT_WEEK.indexOf(a.name) - FIGHT_WEEK.indexOf(b.name);

function resolve(seed: ProductionSeed): Production | null {
  const phases = seed.phases.filter((ph) => !ph.unresolved).sort(byPhaseOrder);
  if (seed.unresolved || phases.length === 0) return null;

  const first = phases[0];
  const last = phases[phases.length - 1];
  const fightWeekPhases = phases.filter((ph) => FIGHT_WEEK.includes(ph.name));

  return {
    id: `${slug(seed.event)}-${slug(seed.venue || seed.city)}-${last.date}`,
    event: seed.event,
    venue: seed.venue,
    city: seed.city,
    country: seed.country,
    client: seed.client,
    partner: seed.partner,
    via: seed.via ?? 'Dream Team Productions',
    discipline: seed.discipline ?? 'Boxing',
    role: seed.role,
    phases,
    dateStart: first.date,
    dateEnd: last.dateEnd ?? last.date,
    year: Number(last.date.slice(0, 4)),
    fullFightWeek: fightWeekPhases.length >= 3,
  };
}

/** Every renderable production, most recent first. */
export const productions: Production[] = productionSeeds
  .map(resolve)
  .filter((p): p is Production => p !== null)
  .sort((a, b) => b.dateEnd.localeCompare(a.dateEnd) || a.event.localeCompare(b.event));

const unique = <T>(xs: T[]) => Array.from(new Set(xs));

export const stats = {
  productions: productions.length,
  credits: productions.reduce((n, p) => n + p.phases.length, 0),
  venues: unique(productions.map((p) => p.venue).filter(Boolean)).length,
  countries: unique(productions.map((p) => p.country)).length,
  clients: unique(productions.map((p) => p.client)).length,
};

export const filterOptions = {
  clients: unique(productions.map((p) => p.client)).sort((a, b) => a.localeCompare(b)),
  countries: unique(productions.map((p) => p.country)).sort((a, b) => a.localeCompare(b)),
  disciplines: unique(productions.map((p) => p.discipline)).sort((a, b) => a.localeCompare(b)),
};

/** Clients ordered by how much work we've done for them — drives the marquee. */
export const clientsByVolume: string[] = Object.entries(
  productions.reduce<Record<string, number>>((acc, p) => {
    acc[p.client] = (acc[p.client] ?? 0) + p.phases.length;
    return acc;
  }, {}),
)
  .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
  .map(([client]) => client);

export type YearGroup = { year: number; productions: Production[] };

export const productionsByYear: YearGroup[] = Object.entries(
  productions.reduce<Record<number, Production[]>>((acc, p) => {
    (acc[p.year] ??= []).push(p);
    return acc;
  }, {}),
)
  .map(([year, ps]) => ({ year: Number(year), productions: ps }))
  .sort((a, b) => b.year - a.year);

// --- formatting -------------------------------------------------------------

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/** Parsed as parts, not `new Date()`, so the build machine's zone can't shift a date. */
const parts = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  return { y, m: m - 1, d };
};

export function formatDate(iso: string): string {
  const { y, m, d } = parts(iso);
  return `${d} ${MONTHS[m]} ${y}`;
}

/** '17–21 December 2024', '30 August – 2 September 2024', '19 July 2025'. */
export function formatRange(startIso: string, endIso: string): string {
  if (startIso === endIso) return formatDate(startIso);
  const a = parts(startIso);
  const b = parts(endIso);
  if (a.y === b.y && a.m === b.m) return `${a.d}–${b.d} ${MONTHS[a.m]} ${a.y}`;
  if (a.y === b.y) return `${a.d} ${MONTHS[a.m]} – ${b.d} ${MONTHS[b.m]} ${a.y}`;
  return `${formatDate(startIso)} – ${formatDate(endIso)}`;
}

export const placeOf = (p: Production) => [p.venue, p.city, p.country].filter(Boolean).join(', ');
