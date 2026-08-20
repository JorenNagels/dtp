/**
 * Every production credit, transcribed from the founders' combined portfolio.
 *
 * Data is authored as one `ProductionSeed` per production, with the phases it
 * covered listed inline — that mirrors how the source list actually reads and
 * removes the venue/client repetition of a flat credit list. `credits` below
 * flattens the seeds; `src/lib/derive.ts` regroups them for display.
 *
 * ---------------------------------------------------------------------------
 * UNRESOLVED — awaiting confirmation, excluded from the site via `unresolved`
 * ---------------------------------------------------------------------------
 * 1. Collision on the Coast, Fight Night: source says 29 February 2025, which
 *    does not exist (2025 is not a leap year). Press conference is 26 Feb and
 *    weigh-in 28 Feb, so this is most likely 1 March 2025.
 * 2. Sudden Impact, York Hall, 11 Oct 2025: client is Warren Boxing Management
 *    in Chris's list but Top Tier in Elliot's.
 * 3. Don't Blink, 9 May 2026: Elliot's role reads "Watchalong Operations
 *    Guarantee" — unclear whether "Guarantee" is part of the role, a separate
 *    client, or a stray word. Recorded as "Watchalong Operations" for now.
 * 4. Magnificent 7 (Co-op Live, Nov 2025 → Mar 2026) is unnumbered in the
 *    source, following Magnificent 7 II (Jul 2024) and III (launch Nov 2024).
 *    Left unnumbered — confirm whether it should be IV.
 */

export type Via =
  'Dream Team Productions' | 'Braincup Media' | 'SpaceTime Strategies' | 'Loadscreen';

export type Discipline = 'Boxing' | 'MMA & Muay Thai' | 'Esports';

/** A phase within a fight week, or — for esports — the title/format covered. */
export type Phase = {
  name: string;
  date: string;
  /** Set only for multi-day phases (conventions, festivals). */
  dateEnd?: string;
  /** Excluded from the rendered site; see the UNRESOLVED block above. */
  unresolved?: string;
};

export type ProductionSeed = {
  event: string;
  venue: string;
  city: string;
  country: string;
  client: string;
  phases: Phase[];
  via?: Via;
  discipline?: Discipline;
  /** Elliot's gallery role on this production, where recorded. */
  role?: string;
  /** Post-production/turnaround partner credited alongside the client. */
  partner?: string;
  unresolved?: string;
};

/** The canonical fight-week sequence, in running order. */
export const FIGHT_WEEK: readonly string[] = [
  'Launch Press Conference',
  'Re-Launch Press Conference',
  'Grand Arrivals',
  'Open Workout',
  'Press Conference',
  'Weigh In',
  'Fight Night',
];

// ---------------------------------------------------------------------------
// Billed directly to Dream Team Productions
// ---------------------------------------------------------------------------

const dreamTeam: ProductionSeed[] = [
  {
    event: 'Red Bull Kumite Qualifier',
    venue: 'Palazzo Brancaccio',
    city: 'Rome',
    country: 'Italy',
    client: 'Red Bull',
    via: 'Dream Team Productions',
    discipline: 'Esports',
    role: 'Producer, Project Manager',
    phases: [{ name: 'Street Fighter 6', date: '2024-03-09' }],
  },
  {
    event: 'EGX Arena',
    venue: 'Excel Centre',
    city: 'London',
    country: 'UK',
    client: 'ReedPop',
    via: 'Dream Team Productions',
    discipline: 'Esports',
    role: 'Producer, Project Manager',
    phases: [{ name: 'Street Fighter 6 & Tekken 7', date: '2023-10-13', dateEnd: '2023-10-15' }],
  },
];

// ---------------------------------------------------------------------------
// Loadscreen
// ---------------------------------------------------------------------------

const loadscreen: ProductionSeed[] = [
  {
    event: 'Games of the Future 2025',
    venue: 'ADNEC',
    city: 'Abu Dhabi',
    country: 'UAE',
    client: 'Games of the Future',
    via: 'Loadscreen',
    discipline: 'Esports',
    phases: [{ name: 'Just Dance & HADO', date: '2025-12-18', dateEnd: '2025-12-23' }],
  },
  {
    event: 'Riftbound Regional Qualifier',
    venue: 'Connecticut Convention Center',
    city: 'Connecticut',
    country: 'USA',
    client: 'Atomic',
    partner: 'VTR',
    via: 'Loadscreen',
    discipline: 'Esports',
    phases: [{ name: 'Riftbound TCG', date: '2026-06-17', dateEnd: '2026-06-21' }],
  },
];

// ---------------------------------------------------------------------------
// SpaceTime Strategies — the PAX Arena run for ReedPop
// ---------------------------------------------------------------------------

const spaceTime: ProductionSeed[] = [
  {
    event: 'PAX West 2022',
    venue: 'Seattle Convention Center',
    city: 'Seattle, Washington',
    country: 'USA',
    client: 'ReedPop',
    via: 'SpaceTime Strategies',
    discipline: 'Esports',
    role: 'Production Assistant',
    phases: [{ name: 'PAX Arena', date: '2022-09-02', dateEnd: '2022-09-05' }],
  },
  {
    event: 'PAX East 2023',
    venue: 'Boston Convention Center',
    city: 'Boston, Massachusetts',
    country: 'USA',
    client: 'ReedPop',
    via: 'SpaceTime Strategies',
    discipline: 'Esports',
    role: 'Production Assistant',
    phases: [{ name: 'PAX Arena', date: '2023-03-23', dateEnd: '2023-03-26' }],
  },
  {
    event: 'PAX West 2023',
    venue: 'Seattle Convention Center',
    city: 'Seattle, Washington',
    country: 'USA',
    client: 'ReedPop',
    via: 'SpaceTime Strategies',
    discipline: 'Esports',
    role: 'Production Assistant',
    phases: [{ name: 'PAX Arena', date: '2023-09-01', dateEnd: '2023-09-04' }],
  },
  {
    event: 'PAX East 2024',
    venue: 'Boston Convention Center',
    city: 'Boston, Massachusetts',
    country: 'USA',
    client: 'ReedPop',
    via: 'SpaceTime Strategies',
    discipline: 'Esports',
    role: 'Assistant Producer',
    phases: [{ name: 'PAX Arena', date: '2024-03-21', dateEnd: '2024-03-24' }],
  },
  {
    event: 'PAX West 2024',
    venue: 'Seattle Convention Center',
    city: 'Seattle, Washington',
    country: 'USA',
    client: 'ReedPop',
    via: 'SpaceTime Strategies',
    discipline: 'Esports',
    role: 'Assistant Producer',
    phases: [{ name: 'PAX Arena', date: '2024-08-30', dateEnd: '2024-09-02' }],
  },
  {
    event: 'PAX East 2025',
    venue: 'Boston Convention Center',
    city: 'Boston, Massachusetts',
    country: 'USA',
    client: 'ReedPop',
    via: 'SpaceTime Strategies',
    discipline: 'Esports',
    role: 'Assistant Producer',
    phases: [{ name: 'PAX Arena', date: '2025-05-08', dateEnd: '2025-05-11' }],
  },
  {
    event: 'PAX West 2025',
    venue: 'Seattle Convention Center',
    city: 'Seattle, Washington',
    country: 'USA',
    client: 'ReedPop',
    via: 'SpaceTime Strategies',
    discipline: 'Esports',
    role: 'Assistant Producer',
    phases: [{ name: 'PAX Arena', date: '2025-08-29', dateEnd: '2025-09-01' }],
  },
  {
    event: 'PAX East 2026',
    venue: 'Boston Convention Center',
    city: 'Boston, Massachusetts',
    country: 'USA',
    client: 'ReedPop',
    via: 'SpaceTime Strategies',
    discipline: 'Esports',
    role: 'Assistant Producer',
    phases: [{ name: 'PAX Arena', date: '2026-05-26', dateEnd: '2026-05-29' }],
  },
  {
    event: 'PAX West 2026',
    venue: 'Seattle Convention Center',
    city: 'Seattle, Washington',
    country: 'USA',
    client: 'ReedPop',
    via: 'SpaceTime Strategies',
    discipline: 'Esports',
    role: 'Assistant Producer',
    phases: [{ name: 'PAX Arena', date: '2026-09-04', dateEnd: '2026-09-07' }],
  },
];

// ---------------------------------------------------------------------------
// Braincup Media — 175+ events; the productions below are the recorded ones
// ---------------------------------------------------------------------------

// Shorthand, local to this file, so the seed list below reads close to the
// source portfolio rather than burying it in repeated venue/client literals.
const p = (name: string, date: string, dateEnd?: string): Phase =>
  dateEnd ? { name, date, dateEnd } : { name, date };

const LPC = 'Launch Press Conference';
const RPC = 'Re-Launch Press Conference';
const GA = 'Grand Arrivals';
const OW = 'Open Workout';
const PC = 'Press Conference';
const WI = 'Weigh In';
const FN = 'Fight Night';

const QP = 'Queensberry Promotions';
const RS = 'Riyadh Season';
const WBM = 'Warren Boxing Management';
const TT = 'Top Tier';
const BN = 'BoxNation';
const GE = 'Guild Esports';

type Place = { venue: string; city: string; country: string };
const uk = (venue: string, city: string): Place => ({ venue, city, country: 'UK' });

const V = {
  yorkHall: uk('York Hall', 'London'),
  o2: uk('O2 Arena', 'London'),
  wembleyStadium: uk('Wembley Stadium', 'London'),
  wembleyArena: uk('Wembley Arena', 'London'),
  oldBillingsgate: uk('Old Billingsgate', 'London'),
  guildHQ: uk('Guild HQ', 'London'),
  guildHall: uk('Guild Hall', 'London'),
  piccadilly: uk('Piccadilly Lights', 'London'),
  woolwich: uk('Woolwich Works', 'London'),
  coopLive: uk('Co-op Live Arena', 'Manchester'),
  resortsWorld: uk('Resorts World Arena', 'Birmingham'),
  msBank: uk('M&S Bank Arena', 'Liverpool'),
  liverpoolOlympia: uk('The Liverpool Olympia', 'Liverpool'),
  knowsley: uk('Knowsley Leisure and Culture Park', 'Liverpool'),
  liverpool: uk('', 'Liverpool'),
  ovoHydro: uk('Ovo Hydro Arena', 'Glasgow'),
  motorpoint: uk('Motorpoint Arena', 'Nottingham'),
  rushcliffe: uk('Rushcliffe Arena', 'Nottingham'),
  bic: uk('BIC', 'Bournemouth'),
  ecoPower: uk('Eco Power Stadium', 'Doncaster'),
  portmanRoad: uk('Portman Road Stadium', 'Ipswich'),
  brentwoodLeisure: uk('Brentwood Leisure Centre', 'Brentwood'),
  brentwoodCentre: uk('Brentwood Centre', 'Essex'),
  vertuMotors: uk('Vertu Motors Arena', 'Newcastle'),
  forge: uk('FORGE Warehouse', 'Sheffield'),
  sseBelfast: uk('SSE Arena', 'Belfast'),
  planetIce: uk('Planet Ice', 'Altrincham'),
  valliantLive: uk('Valliant Live', 'Derby'),
  connexinLive: uk('Connexin Live', 'Hull'),
  stMarys: uk("St Mary's Stadium", 'Southampton'),
  ballin: uk("Ballin' Nightclub", 'Maidstone'),
  williamsHQ: uk('Atlassian Williams HQ', 'Grove'),
  kingdomArena: { venue: 'Kingdom Arena', city: 'Riyadh', country: 'Saudi Arabia' },
  lusail: { venue: 'Lusail Multipurpose Hall', city: 'Doha', country: 'Qatar' },
  khalifa: { venue: 'Khalifa Sports City', city: 'Isa Town', country: 'Bahrain' },
  oberhausen: { venue: 'Rudolf Weber-Arena', city: 'Oberhausen', country: 'Germany' },
  dublin: { venue: '3Arena', city: 'Dublin', country: 'Ireland' },
  paris: { venue: 'Adidas Arena', city: 'Paris', country: 'France' },
  gibraltar: { venue: 'Europa Sports Complex', city: 'Gibraltar', country: 'Gibraltar' },
} satisfies Record<string, Place>;

const braincup: ProductionSeed[] = [
  // ----- 2024 -----
  {
    event: 'Back 2 Business',
    ...V.knowsley,
    client: WBM,
    partner: 'VTR',
    phases: [p(FN, '2024-04-24')],
  },
  { event: '5v5', ...V.kingdomArena, client: RS, phases: [p(FN, '2024-06-01')] },
  {
    event: 'Magnificent 7 II',
    ...V.resortsWorld,
    client: QP,
    phases: [p(PC, '2024-07-18'), p(WI, '2024-07-19'), p(FN, '2024-07-20')],
  },
  {
    event: 'Joyce vs Chisora',
    ...V.o2,
    client: QP,
    phases: [p(PC, '2024-07-25'), p(WI, '2024-07-26'), p(FN, '2024-07-27')],
  },
  {
    event: 'Sky Sports Masterclass',
    ...V.guildHQ,
    client: GE,
    discipline: 'Esports',
    phases: [p('EAFC & Crash Team Racing', '2024-08-14')],
  },
  {
    event: 'Bentley vs Osaze',
    ...V.yorkHall,
    client: QP,
    phases: [p(PC, '2024-08-15'), p(WI, '2024-08-16'), p(FN, '2024-08-17')],
  },
  {
    event: 'Ball vs Rios',
    ...V.liverpool,
    client: QP,
    phases: [p(LPC, '2024-08-21'), p(PC, '2024-10-03'), p(WI, '2024-10-04'), p(FN, '2024-10-05')],
  },
  {
    event: 'Noakes vs Ceglia',
    ...V.yorkHall,
    client: QP,
    phases: [p(PC, '2024-09-04'), p(WI, '2024-09-05'), p(FN, '2024-09-06')],
  },
  { event: 'Diligent', ...V.brentwoodLeisure, client: TT, phases: [p(FN, '2024-09-07')] },
  {
    event: 'MF & DAZN: X Series 18',
    ...V.vertuMotors,
    client: 'Misfits',
    phases: [p(OW, '2024-09-11')],
  },
  {
    event: 'Riyadh Season Card — Wembley Edition',
    ...V.wembleyStadium,
    client: RS,
    phases: [
      p(GA, '2024-09-17'),
      p(OW, '2024-09-18'),
      p(PC, '2024-09-19'),
      p(WI, '2024-09-20'),
      p(FN, '2024-09-20'),
    ],
  },
  {
    event: 'IV Crown Showdown',
    ...V.oldBillingsgate,
    client: RS,
    phases: [p(LPC, '2024-09-25')],
  },
  { event: 'Nowhere to Hide', ...V.forge, client: 'GBM', phases: [p(WI, '2024-09-26')] },
  {
    event: 'Davies vs Masoud',
    ...V.resortsWorld,
    client: QP,
    phases: [p(LPC, '2024-10-01'), p(PC, '2024-10-31'), p(WI, '2024-11-01'), p(FN, '2024-11-02')],
  },
  {
    event: 'IV Crown Showdown',
    ...V.kingdomArena,
    client: RS,
    phases: [
      p(GA, '2024-10-08'),
      p(OW, '2024-10-09'),
      p(PC, '2024-10-10'),
      p(WI, '2024-10-11'),
      p(FN, '2024-10-12'),
    ],
  },
  {
    event: 'Gilley vs McGann',
    ...V.yorkHall,
    client: QP,
    phases: [p(WI, '2024-10-17'), p(FN, '2024-10-18')],
  },
  { event: 'Usyk vs Fury 2', ...V.guildHall, client: RS, phases: [p(LPC, '2024-10-23')] },
  {
    event: "Women's Football Eseries",
    ...V.guildHQ,
    client: GE,
    discipline: 'Esports',
    phases: [p('EAFC', '2024-10-26')],
  },
  {
    event: 'Magnificent 7 III',
    ...V.wembleyArena,
    client: QP,
    phases: [p(LPC, '2024-11-07')],
  },
  { event: 'Uddin vs Hussain', ...V.yorkHall, client: BN, phases: [p(FN, '2024-11-08')] },
  {
    event: 'Latino Night',
    ...V.kingdomArena,
    client: RS,
    phases: [
      p(GA, '2024-11-12'),
      p(OW, '2024-11-13'),
      p(PC, '2024-11-14'),
      p(WI, '2024-11-15'),
      p(FN, '2024-11-16'),
    ],
  },
  {
    event: 'Talk Squad',
    ...V.guildHQ,
    client: GE,
    discipline: 'Esports',
    role: 'Vision Mixer',
    phases: [p('EAFC', '2024-11-19')],
  },
  { event: 'GB Fight Series 30', ...V.yorkHall, client: BN, phases: [p(FN, '2024-11-23')] },
  {
    event: 'MF & DAZN X Series 19',
    ...V.lusail,
    client: 'DAZN',
    phases: [p(PC, '2024-11-25'), p(OW, '2024-11-26'), p(WI, '2024-11-27')],
  },
  {
    event: 'Chisora vs Walin',
    ...V.coopLive,
    client: QP,
    phases: [
      p(LPC, '2024-11-28'),
      p(OW, '2025-02-05'),
      p(PC, '2025-02-06'),
      p(WI, '2025-02-07'),
      p(FN, '2025-02-08'),
    ],
  },
  { event: 'Seasons Beatings', ...V.rushcliffe, client: BN, phases: [p(FN, '2024-12-06')] },
  {
    event: 'The Statement 2',
    ...V.brentwoodLeisure,
    client: TT,
    phases: [p(FN, '2024-12-07')],
  },
  {
    event: 'BRAVE CF 92',
    ...V.khalifa,
    client: 'BRAVE',
    discipline: 'MMA & Muay Thai',
    phases: [p(FN, '2024-12-15')],
  },
  {
    event: 'Reignited: Usyk vs Fury 2',
    ...V.kingdomArena,
    client: 'DAZN',
    phases: [
      p(GA, '2024-12-17'),
      p(OW, '2024-12-18'),
      p(PC, '2024-12-19'),
      p(WI, '2024-12-20'),
      p(FN, '2024-12-21'),
    ],
  },

  // ----- 2025 -----
  { event: 'Young Guns', ...V.yorkHall, client: BN, phases: [p(FN, '2025-01-11')] },
  {
    event: 'The Last Crescendo: Beterbiev vs Bivol 2',
    ...V.oldBillingsgate,
    client: RS,
    phases: [p(LPC, '2025-01-13')],
  },
  {
    event: 'Point of Pride',
    ...V.sseBelfast,
    client: 'Matchroom',
    phases: [p(LPC, '2025-01-15')],
  },
  { event: 'Flawless', ...V.brentwoodLeisure, client: TT, phases: [p(FN, '2025-02-09')] },
  { event: 'DAZN QB Launch', ...V.coopLive, client: 'DAZN', phases: [p(LPC, '2025-02-10')] },
  { event: 'The Hurt Game', ...V.motorpoint, client: 'DAZN', phases: [p(LPC, '2025-02-14')] },
  {
    event: 'The Last Crescendo: Beterbiev vs Bivol 2',
    ...V.kingdomArena,
    client: RS,
    phases: [
      p(GA, '2025-02-18'),
      p(OW, '2025-02-19'),
      p(PC, '2025-02-20'),
      p(WI, '2025-02-21'),
      p(FN, '2025-02-22'),
    ],
  },
  {
    event: 'Collision on the Coast',
    ...V.bic,
    client: QP,
    phases: [
      p(PC, '2025-02-26'),
      p(WI, '2025-02-28'),
      {
        name: FN,
        date: '2025-02-29',
        unresolved: '29 February 2025 does not exist; likely 1 March 2025',
      },
    ],
  },
  {
    event: 'Harper vs. Zimmermann',
    ...V.ecoPower,
    client: 'GBM',
    phases: [p(LPC, '2025-03-03')],
  },
  {
    event: 'Land of the Brave',
    ...V.ovoHydro,
    client: QP,
    phases: [p(LPC, '2025-03-05'), p(PC, '2025-05-22'), p(WI, '2025-05-23'), p(FN, '2025-05-24')],
  },
  {
    event: "A Hard Day's Night",
    ...V.msBank,
    client: QP,
    phases: [p(PC, '2025-03-13'), p(WI, '2025-03-14'), p(FN, '2025-03-15')],
  },
  {
    event: 'Gibraltar Series',
    ...V.gibraltar,
    client: WBM,
    role: 'Replay Operator',
    phases: [p(FN, '2025-03-29')],
  },
  {
    event: 'Heavy Impact',
    ...V.coopLive,
    client: QP,
    phases: [p(PC, '2025-04-03'), p(WI, '2025-04-04'), p(FN, '2025-04-05')],
  },
  {
    event: 'Running Towards Adversity',
    ...V.portmanRoad,
    client: QP,
    phases: [
      p(LPC, '2025-04-07'),
      p(RPC, '2025-05-14'),
      p(PC, '2025-06-05'),
      p(WI, '2025-06-06'),
      p(FN, '2025-06-07'),
    ],
  },
  { event: 'Made in Stone', ...V.ballin, client: WBM, phases: [p(FN, '2025-04-17')] },
  {
    event: 'Fatal Fury: KSI vs Speed',
    ...V.piccadilly,
    client: RS,
    role: 'Stage Tech',
    phases: [p('Live Promo', '2025-04-25')],
  },
  {
    event: 'Fatal Fury: Canelo vs Scull',
    ...V.kingdomArena,
    client: 'DAZN',
    phases: [
      p(GA, '2025-04-29'),
      p(OW, '2025-04-30'),
      p(PC, '2025-05-01'),
      p(WI, '2025-05-02'),
      p(FN, '2025-05-03'),
    ],
  },
  {
    event: 'The Hurt Game',
    ...V.motorpoint,
    client: QP,
    phases: [p(PC, '2025-05-08'), p(WI, '2025-05-09'), p(FN, '2025-05-10')],
  },
  { event: 'Resurgence', ...V.yorkHall, client: WBM, phases: [p(FN, '2025-05-17')] },
  { event: 'Now Or Never', ...V.yorkHall, client: WBM, phases: [p(FN, '2025-06-13')] },
  {
    event: 'Coppa Feel',
    ...V.guildHQ,
    client: GE,
    discipline: 'Esports',
    role: 'E2',
    phases: [p('EAFC', '2025-07-09')],
  },
  {
    event: 'Lights Out',
    ...V.liverpoolOlympia,
    client: WBM,
    role: 'Replay Operator',
    phases: [p(FN, '2025-07-11')],
  },
  {
    event: 'Undisputed: Usyk vs Dubois 2',
    ...V.wembleyStadium,
    client: QP,
    phases: [p(FN, '2025-07-19')],
  },
  {
    event: 'Pier Pressure',
    ...V.bic,
    client: QP,
    phases: [p(PC, '2025-07-24'), p(WI, '2025-07-25'), p(FN, '2025-07-26')],
  },
  {
    event: 'The Next King of Scotland',
    ...V.ovoHydro,
    client: QP,
    phases: [p(LPC, '2025-08-05'), p(PC, '2025-10-02'), p(WI, '2025-10-03'), p(FN, '2025-10-04')],
  },
  {
    event: 'Lights Out',
    ...V.coopLive,
    client: QP,
    phases: [p(LPC, '2025-08-20'), p(PC, '2025-10-30'), p(WI, '2025-10-31'), p(FN, '2025-11-01')],
  },
  {
    event: 'Make or Break',
    ...V.planetIce,
    client: QP,
    phases: [p(PC, '2025-08-21'), p(WI, '2025-08-22'), p(FN, '2025-08-22')],
  },
  {
    event: 'Sudden Impact',
    ...V.yorkHall,
    client: WBM,
    role: 'Replay Operator',
    unresolved: 'Client conflict: Warren Boxing Management vs Top Tier',
    phases: [p(FN, '2025-10-11')],
  },
  {
    event: 'All or Nothing',
    ...V.o2,
    client: QP,
    phases: [p(OW, '2025-10-22'), p(PC, '2025-10-23'), p(WI, '2025-10-24'), p(FN, '2025-10-25')],
  },
  {
    event: 'Magnificent 7',
    ...V.coopLive,
    client: QP,
    phases: [p(LPC, '2025-11-17'), p(PC, '2026-03-26'), p(WI, '2026-03-27'), p(FN, '2026-03-27')],
  },
  {
    event: 'Atlassian Williams Esports',
    ...V.williamsHQ,
    client: 'Atlassian Williams',
    discipline: 'Esports',
    phases: [p('F1 2025', '2025-12-06')],
  },
  {
    event: 'Creator Series Finals',
    ...V.williamsHQ,
    client: 'Atlassian Williams',
    discipline: 'Esports',
    phases: [p('F1 2025', '2025-12-13')],
  },

  // ----- 2026 -----
  {
    event: 'The Homecoming',
    ...V.oberhausen,
    client: 'DAZN',
    phases: [p(PC, '2026-01-08'), p(WI, '2026-01-09'), p(FN, '2026-01-10')],
  },
  {
    event: "St. Patrick's Day",
    ...V.dublin,
    client: QP,
    phases: [p(LPC, '2026-01-13'), p(PC, '2026-03-12'), p(WI, '2026-03-13'), p(FN, '2026-03-14')],
  },
  {
    event: 'Collide',
    ...V.yorkHall,
    client: WBM,
    role: 'Replay Operator',
    phases: [p(FN, '2026-01-31')],
  },
  {
    event: 'A Tall Order',
    ...V.msBank,
    client: QP,
    phases: [p(PC, '2026-02-05'), p(WI, '2026-02-06'), p(FN, '2026-02-07')],
  },
  { event: 'Le Double', ...V.paris, client: QP, phases: [p(LPC, '2026-02-26')] },
  {
    event: 'Under the Lights',
    ...V.valliantLive,
    client: QP,
    phases: [p(WI, '2026-02-27'), p(FN, '2026-02-28')],
  },
  {
    event: 'Score II Settle',
    ...V.ovoHydro,
    client: QP,
    phases: [p(LPC, '2026-03-04'), p(PC, '2026-04-15'), p(WI, '2026-04-16'), p(FN, '2026-04-17')],
  },
  {
    event: 'Alfie Pearse vs Superlek',
    ...V.woolwich,
    client: 'WSS',
    discipline: 'MMA & Muay Thai',
    role: 'Replay Operator',
    phases: [p(FN, '2026-03-14')],
  },
  {
    event: 'Battle on the Humber',
    ...V.connexinLive,
    client: '3156 Boxing',
    phases: [p(FN, '2026-03-21')],
  },
  {
    event: 'Dave vs Goliath',
    ...V.ecoPower,
    client: QP,
    phases: [p(LPC, '2026-03-31'), p(PC, '2026-05-14'), p(WI, '2026-05-15'), p(FN, '2026-05-16')],
  },
  { event: 'Marching In', ...V.stMarys, client: QP, phases: [p(LPC, '2026-04-22')] },
  {
    event: 'Pivotal',
    ...V.yorkHall,
    client: TT,
    role: 'Replay Operator',
    phases: [p(FN, '2026-05-03')],
  },
  {
    event: "Don't Blink",
    ...V.coopLive,
    client: 'DAZN',
    role: 'Watchalong Operations',
    phases: [p(OW, '2026-05-06'), p(PC, '2026-05-07'), p(FN, '2026-05-09')],
  },
  {
    event: 'Hull Back On Top',
    ...V.connexinLive,
    client: '3156 Boxing',
    phases: [p(FN, '2026-05-30')],
  },
  { event: 'No Turning Back', ...V.dublin, client: QP, phases: [p(LPC, '2026-06-02')] },
  {
    event: '8IGHT STRIKES S1E1',
    ...V.woolwich,
    client: '8IGHT STRIKES',
    discipline: 'MMA & Muay Thai',
    role: 'Replay Operator',
    phases: [p(FN, '2026-06-13')],
  },
  {
    event: 'Persistence',
    ...V.brentwoodCentre,
    client: TT,
    role: 'Replay Operator',
    phases: [p(FN, '2026-07-12')],
  },
];

export const productionSeeds: ProductionSeed[] = [
  ...dreamTeam,
  ...braincup.map((s) => ({ via: 'Braincup Media' as Via, ...s })),
  ...loadscreen,
  ...spaceTime,
];
