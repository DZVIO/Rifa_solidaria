import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rifa Solidaria',
  description: 'Participa en nuestra gran rifa. Gran sorteo el 31 de mayo de 2026.',

  openGraph: {
    title: 'Rifa Solidaria',
    description: 'Participa en nuestra gran rifa. Gran sorteo el 31 de mayo de 2026.',
    images: [
      {
        url: 'https://rifadzvio.netlify.app/preview.png',
        width: 1200,
        height: 630,
        alt: 'Rifa Solidaria',
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
    <html lang="es">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-[#FF8C00] to-[#FFD700] animate-gradient text-slate-900`}>
        <main className="container mx-auto px-4 py-8 max-w-4xl min-h-screen flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
