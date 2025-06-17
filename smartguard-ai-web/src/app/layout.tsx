import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SmartGuard AI",
  description: "La tua sicurezza digitale intelligente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark-DEFAULT text-dark-DEFAULT dark:bg-dark-DEFAULT dark:text-dark-DEFAULT min-h-screen`}
      >
        <div className="dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
