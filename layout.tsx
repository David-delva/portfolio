import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'David GOMA MBA - Portfolio | Développeur & Étudiant en Génie Informatique',
  description: 'Portfolio professionnel de David GOMA MBA, étudiant passionné en DTS Génie Informatique spécialisé en développement web, cybersécurité et intelligence artificielle.',
  keywords: 'David GOMA MBA, développeur, génie informatique, cybersécurité, développement web, React, Python, JavaScript, Libreville, Gabon',
  authors: [{ name: 'David GOMA MBA' }],
  creator: 'David GOMA MBA',
  openGraph: {
    title: 'David GOMA MBA - Portfolio Professionnel',
    description: 'Étudiant passionné en génie informatique et développement logiciel',
    url: 'https://davidgomamba.com',
    siteName: 'David GOMA MBA Portfolio',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'David GOMA MBA - Portfolio',
    description: 'Développeur passionné et étudiant en génie informatique',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#3B82F6" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}