import './globals.css';
import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';

export const metadata: Metadata = {
  title: 'AAC Pro | Comunicação Alternativa',
  description: 'Plataforma full stack para comunicação alternativa e aumentativa.',
  manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main className="container-shell py-6">{children}</main>
      </body>
    </html>
  );
}
