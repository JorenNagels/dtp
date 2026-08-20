import Link from 'next/link';
import Logo from './Logo';
import { site } from '@/lib/data';

const links = [
  { href: '/#capabilities', label: 'Capabilities' },
  { href: '/#work', label: 'Work' },
  { href: '/#clients', label: 'Clients' },
  { href: '/#team', label: 'Team' },
  { href: '/#contact', label: 'Contact' },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-hairline bg-black/60 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-12"
      >
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} — home`}>
          <Logo className="h-5 w-auto" />
          <span className="font-display text-[1.15rem] leading-none tracking-[0.14em]">
            {site.name}
          </span>
        </Link>
        <ul className="hidden items-center gap-7 text-[0.72rem] uppercase tracking-[0.18em] text-white/60 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="transition-colors hover:text-white">
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={site.talentUrl}
              className="transition-colors hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Talent ↗
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
