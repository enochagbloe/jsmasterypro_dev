import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local"

const inter = localFont({
  src: "/fonts/InterVF.ttf",
  variable: "--font-inter",
  preload: true,
  weight: "100 200 300 400 500 600 700 800 900",
});

const SpaceGrotesk = localFont({
  src: "/fonts/SpaceGroteskVF.ttf",
  preload: true,
  variable: "--font-space-grotesk",
  weight: "300 400 500 700",
});

export const metadata: Metadata = {
  title: "DevFlow",
  description: "A collaborative platform for developers to share knowledge, solve coding challenges, and connect. Get answers, share expertise, and grow your coding skills with a vibrant developer community.",
  
  icons:{
    icon: "/image/site-logo.svg",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${SpaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
