import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'ALP CareConnect — Luxury Local Support for Your Home & Family in Chennai',
  description:
    "Whether you're living abroad or away from Chennai, ALP CareConnect provides reliable local support for your home, property and loved ones. NRI Property Care, Non-Medical Elderly Care, Home Maintenance & Men's PG Accommodation.",
  keywords: [
    'ALP CareConnect',
    'NRI Property Care Chennai',
    'Elderly Care Support Chennai',
    'Home Maintenance Coordination Chennai',
    'Mens PG Accommodation Chennai',
    'Property Inspection Chennai',
    'Chennai Concierge Services',
    'Local Support for NRIs in Chennai',
  ],
  authors: [{ name: 'ALP CareConnect' }],
  openGraph: {
    title: 'ALP CareConnect — Luxury Local Support in Chennai',
    description:
      'Reliable local support for your home, property and loved ones in Chennai. Your Home. Your Family. Our Care.',
    url: 'https://alpcareconnect.com',
    siteName: 'ALP CareConnect',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ALP CareConnect — Your Home. Your Family. Our Care.',
    description:
      'Reliable local concierge, NRI property management, and non-medical elderly support in Chennai.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${manrope.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
