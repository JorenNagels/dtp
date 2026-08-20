import type { Metadata } from 'next';
import { Bebas_Neue, DM_Sans } from 'next/font/google';
import { site } from '@/lib/data';
import './globals.css';

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const dmSans = DM_Sans({
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const title = `${site.name} — Live Event & Broadcast Production`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s — ${site.name}` },
  description: site.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: site.name,
    title,
    description: site.description,
    locale: 'en_GB',
  },
  twitter: { card: 'summary_large_image', title, description: site.description },
};

const organisation = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  url: site.url,
  email: site.email,
  description: site.description,
  logo: `${site.url}/logo.svg`,
  address: { '@type': 'PostalAddress', addressCountry: 'GB' },
  founder: [
    { '@type': 'Person', name: 'Elliot Barham' },
    { '@type': 'Person', name: 'Chris Sunderland' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${bebas.variable} ${dmSans.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          // Static, build-time JSON from a local literal — no user input involved.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisation) }}
        />
      </body>
    </html>
  );
}
