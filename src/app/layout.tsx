import type { Metadata } from 'next';
import { Urbanist, Outfit } from 'next/font/google';
import './globals.css';

const urbanistSans = Urbanist({
  variable: '--font-urbanist-sans',
  subsets: ['latin'],
});

const outfitSans = Outfit({
  variable: '--font-outfit-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title:
    'Permata Laundry Tasikmalaya | Cuci Lipat, Setrika, dan Antar-Jemput Gratis',
  description:
    'Permata Laundry di cipedes - Tasikmalaya, layanan laundry cepat, bersih, dan wangi. Cuci lipat, cuci setrika, dry clean, dan laundry rumah tangga. Gratis antar-jemput ke rumah Anda!',
  keywords:
    'laundry Cipedes, laundry Tasikmalaya, jasa cuci setrika, dry clean Tasikmalaya, laundry rumah tangga, antar jemput laundry, cuci lipat cepat, Permata Laundry',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${urbanistSans.variable} ${outfitSans.variable} to-background min-h-dvh bg-gradient-to-br from-white font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
