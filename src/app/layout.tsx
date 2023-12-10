import type { Metadata } from 'next';
// Fonts (here expample two fonts)
import { Inter, Roboto_Flex } from 'next/font/google';
// Global CSS
import './globals.css';
// ======= Components =======
// Navbar
import NavbarDropdown from '@/components/navbar/NavbarDropdown';

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
  title: 'Next.js Tailwind Starter',
  description: 'Next.js Tailwind Starter',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto_flex.variable}`}>
        <NavbarDropdown />
        {children}
      </body>
    </html>
  );
}
