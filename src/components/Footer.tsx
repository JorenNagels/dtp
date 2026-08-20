import Link from 'next/link';
import Logo from './Logo';
import { attribution, site } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-hairline px-6 py-14 sm:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} — home`}>
            <Logo className="h-5 w-auto" />
            <span className="font-display text-[1.15rem] leading-none tracking-[0.14em]">
              {site.name}
            </span>
          </Link>
          <p className="mt-4 max-w-md text-[0.78rem] leading-relaxed text-muted">{attribution}</p>
        </div>
        <div className="flex flex-col gap-2 text-[0.78rem] text-muted sm:items-end">
          <Link href="/work" className="transition-colors hover:text-white">
            Full credit list
          </Link>
          <a
            href={site.talentUrl}
            className="transition-colors hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Talent portfolio ↗
          </a>
          <a href={`mailto:${site.email}`} className="transition-colors hover:text-white">
            {site.email}
          </a>
          <p className="mt-2">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
