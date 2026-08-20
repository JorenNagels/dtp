import Link from 'next/link';
import Logo from '@/components/Logo';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <Logo className="h-12 w-auto text-white/80" />
      <p className="mt-10 text-[0.68rem] uppercase tracking-[0.22em] text-white/45">Error 404</p>
      <h1 className="mt-4 font-display text-[clamp(2.4rem,7vw,4.5rem)] leading-none tracking-[0.03em]">
        Off air
      </h1>
      <p className="mt-5 max-w-sm text-white/60">
        That page isn&rsquo;t here. The work is, though.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="bg-white px-7 py-3 text-[0.72rem] uppercase tracking-[0.18em] text-black transition-opacity hover:opacity-80"
        >
          Home
        </Link>
        <Link
          href="/work"
          className="border border-hairline px-7 py-3 text-[0.72rem] uppercase tracking-[0.18em] transition-colors hover:border-white/60"
        >
          Full credit list
        </Link>
      </div>
    </main>
  );
}
