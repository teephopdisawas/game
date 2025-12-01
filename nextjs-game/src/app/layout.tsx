import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { GameProvider } from "@/lib/GameContext";

export const metadata: Metadata = {
  title: "Valdaren: Echoes of Ellidra",
  description: "A mystical visual novel where language shapes reality. Wake with no memory in a frost-bound land where ancient glyphs respond to your touch.",
  keywords: ["visual novel", "RPG", "fantasy", "language magic", "interactive fiction"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-serif antialiased bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 min-h-screen">
        <GameProvider>
          <Navigation />
          <main className="pt-16">
            {children}
          </main>
        </GameProvider>
      </body>
    </html>
  );
}
