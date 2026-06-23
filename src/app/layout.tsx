import "./globals.css";
import "./reset.css";

import type { Metadata } from "next";
import localFont from "next/font/local";
import { DelayedCursor } from "./components/DelayedCursor/DelayedCursor";

export const metadata: Metadata = {
  title: "Mannat Singh™",
  description: "Mannat Singh TM",
};

const font = localFont({
  src: [
    { path: "./fonts/Helvetica-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/Helvetica.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Helvetica-Oblique.ttf", weight: "400", style: "italic" },
    { path: "./fonts/Helvetica-Bold.ttf", weight: "700", style: "normal" },
    {
      path: "./fonts/Helvetica-BoldOblique.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-helvetica",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={font.className}>
      <head>
        <link
          rel="preconnect"
          href="https://res.cloudinary.com"
          crossOrigin=""
        />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      </head>
      <body>
        <DelayedCursor />
        {children}
      </body>
    </html>
  );
}
