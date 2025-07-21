// app/layout.jsx
import './globals.css';
import { Manrope, Oswald } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
});

export const metadata = {
  title: 'My App',
  description: 'Using Google Fonts with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${oswald.variable}`}>
      <body className="font-[var(--font-manrope)]">{children}</body>
    </html>
  );
}
