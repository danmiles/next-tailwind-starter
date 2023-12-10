import type { Metadata } from 'next';
// Fonts (here expample two fonts)
import { Inter, Roboto_Flex } from 'next/font/google';
// Global CSS
import './globals.css';
// ======= Components =======
// Navbar
import Navbar from '@/components/navbar/navbar-not-dropdown/Navbar';

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ['latin'],
  variable: '--inter-font',
  display: 'swap',
});

const roboto_flex = Roboto_Flex({
  weight: ["400", "500", "600", "700"],
  subsets: ['latin'],
  variable: '--roboto-flex-font',
  display: 'swap',
});


export const metadata: Metadata = {
  title: 'Next.js 14- TailwindCSS Starter Template',
  description: 'Next.js 14- TailwindCSS Starter Template',
  openGraph: {
    title: 'Next.js 14- TailwindCSS Starter Template',
    description:
      'Next.js 14- TailwindCSS Starter Template open graph descriptions for social media',
    images: [
      {
        url: '/images/og-meta-img.jpg',
        width: 1280,
        height: 720,
      },
    ],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto_flex.variable}`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
