import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Tablatura",
  description: "A tablature project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={inter.className} lang="pt-BR">
      <body className="w-screen h-screen bg-zinc-900 text-zinc-50 antialiased">
        {children}
      </body>
    </html>
  );
}
