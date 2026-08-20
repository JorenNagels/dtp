'use client';

import { useMemo, useState } from 'react';
import type { Production } from '@/lib/derive';

type Props = {
  productions: Production[];
  options: { clients: string[]; countries: string[]; disciplines: string[] };
  /** Pre-formatted server-side so the client bundle carries no date logic. */
  labels: Record<string, { when: string; place: string }>;
};

const ALL = 'All';

type FilterKey = 'client' | 'country' | 'discipline';

export default function WorkArchive({ productions, options, labels }: Props) {
  const [filters, setFilters] = useState<Record<FilterKey, string>>({
    client: ALL,
    country: ALL,
    discipline: ALL,
  });

  const filtered = useMemo(
    () =>
      productions.filter(
        (p) =>
          (filters.client === ALL || p.client === filters.client) &&
          (filters.country === ALL || p.country === filters.country) &&
          (filters.discipline === ALL || p.discipline === filters.discipline),
      ),
    [productions, filters],
  );

  const years = useMemo(() => {
    const groups = new Map<number, Production[]>();
    for (const p of filtered) {
      const list = groups.get(p.year);
      if (list) list.push(p);
      else groups.set(p.year, [p]);
    }
    return [...groups.entries()].sort((a, b) => b[0] - a[0]);
  }, [filtered]);

  const active = Object.values(filters).some((v) => v !== ALL);

  return (
    <>
      <div className="space-y-5 border-y border-hairline py-7">
        {(
          [
            ['discipline', 'Discipline', options.disciplines],
            ['country', 'Country', options.countries],
            ['client', 'Client', options.clients],
          ] as const
        ).map(([key, label, values]) => (
          <fieldset key={key} className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <legend className="sr-only">Filter by {label.toLowerCase()}</legend>
            <span
              aria-hidden
              className="w-20 shrink-0 text-[0.62rem] uppercase tracking-[0.18em] text-white/35"
            >
              {label}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[ALL, ...values].map((value) => {
                const selected = filters[key] === value;
                return (
                  <button
                    key={value}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setFilters((f) => ({ ...f, [key]: value }))}
                    className={`border px-2.5 py-1 text-[0.66rem] uppercase tracking-[0.1em] transition-colors ${
                      selected
                        ? 'border-white bg-white text-black'
                        : 'border-hairline text-white/55 hover:border-white/50 hover:text-white'
                    }`}
                  >
                    {value}
                  </button>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>

      <p
        aria-live="polite"
        className="mt-7 text-[0.78rem] uppercase tracking-[0.16em] text-white/45"
      >
        {filtered.length} {filtered.length === 1 ? 'production' : 'productions'}
        {active ? (
          <button
            type="button"
            onClick={() => setFilters({ client: ALL, country: ALL, discipline: ALL })}
            className="ml-4 border-b border-hairline pb-0.5 normal-case tracking-normal transition-colors hover:border-white hover:text-white"
          >
            Clear filters
          </button>
        ) : null}
      </p>

      {years.length === 0 ? (
        <p className="mt-16 text-white/50">No productions match those filters.</p>
      ) : (
        <div className="mt-12 space-y-16">
          {years.map(([year, items]) => (
            <section key={year} aria-labelledby={`year-${year}`}>
              <div className="flex items-baseline gap-5 border-b border-hairline pb-3">
                <h2
                  id={`year-${year}`}
                  className="font-display text-[2.2rem] leading-none tracking-[0.04em]"
                >
                  {year}
                </h2>
                <span className="text-[0.68rem] uppercase tracking-[0.18em] text-white/35">
                  {items.length} {items.length === 1 ? 'production' : 'productions'}
                </span>
              </div>

              <ul>
                {items.map((p) => (
                  <li
                    key={p.id}
                    className="grid gap-x-8 gap-y-2 border-b border-hairline py-6 sm:grid-cols-[1fr_1fr] lg:grid-cols-[1.2fr_1fr_1fr]"
                  >
                    <div>
                      <h3 className="font-display text-[1.25rem] leading-tight tracking-[0.04em]">
                        {p.event}
                      </h3>
                      <p className="mt-1 text-[0.8rem] text-white/45">{labels[p.id].when}</p>
                    </div>

                    <p className="text-[0.85rem] leading-relaxed text-white/60">
                      {labels[p.id].place}
                    </p>

                    <div>
                      <p className="text-[0.85rem] text-white/60">
                        {p.client}
                        {p.partner ? <span className="text-white/35"> · {p.partner}</span> : null}
                      </p>
                      <ul className="mt-2 flex flex-wrap gap-1.5 text-[0.6rem] uppercase tracking-[0.12em] text-white/40">
                        {p.phases.map((phase) => (
                          <li key={phase.name} className="border border-hairline px-1.5 py-0.5">
                            {phase.name}
                          </li>
                        ))}
                      </ul>
                      {p.role ? (
                        <p className="mt-2 text-[0.7rem] uppercase tracking-[0.12em] text-white/30">
                          Role: {p.role}
                        </p>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </>
  );
}
