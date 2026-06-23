export const dynamic = 'force-dynamic';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'KKP Employee Super App',
  description: 'Standalone Next.js export starter for the KKP employee super app.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
