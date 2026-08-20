import Section from './Section';
import FadeIn from './FadeIn';
import DragScroll from './DragScroll';
import { photos } from '@/lib/photos';

// Two rows, alternating, so the strip reads as a contact sheet rather than a
// single queue. Split at module scope — it never changes between renders.
const rowA = photos.filter((_, i) => i % 2 === 0);
const rowB = photos.filter((_, i) => i % 2 === 1);

function Row({ items }: { items: typeof photos }) {
  return (
    <div className="flex gap-3">
      {items.map((p) => (
        <figure
          key={p.src}
          className="relative h-44 shrink-0 overflow-hidden bg-mid sm:h-56 md:h-64"
          style={{ aspectRatio: `${p.w} / ${p.h}` }}
        >
          <img
            src={p.src}
            alt={p.alt}
            width={p.w}
            height={p.h}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="h-full w-full object-cover"
          />
        </figure>
      ))}
    </div>
  );
}

export default function Gallery() {
  return (
    <Section
      id="gallery"
      eyebrow="On the floor"
      heading="Where the work happens."
      lead="Galleries, camera positions and stages — the unglamorous side of a show that looks effortless on air."
    >
      <FadeIn>
        <DragScroll className="scrollbar-hide -mx-6 flex flex-col gap-3 overflow-x-auto px-6 sm:-mx-12 sm:px-12">
          <Row items={rowA} />
          <Row items={rowB} />
        </DragScroll>
      </FadeIn>
    </Section>
  );
}
