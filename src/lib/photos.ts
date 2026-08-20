/**
 * Gallery manifest. Files are produced by `scripts/prepare-images.sh` from the
 * originals in `img/` — full colour, capped at 700px tall.
 *
 * `w`/`h` are the real encoded dimensions and are required: they drive each
 * tile's aspect-ratio so the filmstrip reserves its space before the images
 * load. If you re-run the script at a different height, update them.
 *
 * Alt text describes the craft on show. Events are only named where the branding
 * is legible in frame and matches a real credit in `credits.ts` — don't attach a
 * client's name to a photo that can't be tied to them.
 */
export type Photo = { src: string; w: number; h: number; alt: string };

export const founders = {
  src: '/images/founders.webp',
  srcSmall: '/images/founders-620.webp',
  w: 1000,
  h: 703,
  alt: 'Elliot Barham and Chris Sunderland, the founders of Dream Team Productions',
};

export const photos: Photo[] = [
  {
    src: '/images/work/camera-monitor.webp',
    w: 527,
    h: 700,
    alt: 'Camera monitor framing a fighter, arena screens behind — Pivotal at York Hall',
  },
  {
    src: '/images/work/mixer-wide.webp',
    w: 930,
    h: 700,
    alt: 'Vision mixer and multiviewer wall during a live show',
  },
  {
    src: '/images/work/boxnation-gallery.webp',
    w: 368,
    h: 700,
    alt: 'The gallery mid-show on a BoxNation broadcast',
  },
  {
    src: '/images/work/gallery-arena.webp',
    w: 933,
    h: 700,
    alt: 'Operating from a gallery position with the arena lit behind',
  },
  {
    src: '/images/work/gallery-crew.webp',
    w: 525,
    h: 700,
    alt: 'Crew in the gallery on a fight night',
  },
  {
    src: '/images/work/vision-mixer.webp',
    w: 1024,
    h: 683,
    alt: 'Cutting a live show on the vision mixer',
  },
  {
    src: '/images/work/boxnation-desk.webp',
    w: 640,
    h: 640,
    alt: 'Working the desk on a BoxNation broadcast',
  },
  {
    src: '/images/work/camera-operator.webp',
    w: 1024,
    h: 683,
    alt: 'Camera operator shooting a live segment',
  },
  {
    src: '/images/work/stage-lineup.webp',
    w: 1244,
    h: 700,
    alt: 'Competitors on stage at Games of the Future, ADNEC Abu Dhabi',
  },
  {
    src: '/images/work/group-on-stage.webp',
    w: 1053,
    h: 700,
    alt: 'Crew and competitors on stage once the show has wrapped',
  },
  {
    src: '/images/work/stage-showcase.webp',
    w: 394,
    h: 700,
    alt: 'On-stage showcase segment under house lights',
  },
  {
    src: '/images/work/stage-interview.webp',
    w: 700,
    h: 700,
    alt: 'Interview segment on a convention stage',
  },
  {
    src: '/images/work/stage-panel.webp',
    w: 1024,
    h: 577,
    alt: 'Panel set on a convention stage',
  },
];
