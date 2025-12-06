// 🌟 Root Layout for Echoes of Ellidra - Next.js 15 Edition ✨
import type { Metadata, Viewport } from 'next';
import '../src/index.css';

export const metadata: Metadata = {
  title: 'Echoes of Ellidra 🔮✨',
  description: 'A Visual Novel where Language Shapes Reality. Explore Valdaren, master Ellidric glyphs, and choose your destiny.',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔮</text></svg>",
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f0f23',
};

// 🎯 This is the root layout - not a client component!
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
