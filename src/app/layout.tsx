import type { Metadata } from "next";

import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";

import localFont from "next/font/local";

const myFont = localFont({ src: "../../public/mark-geo.woff2" });

import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "გადაცვალე PLUS ქულები ლარში",
  description: "გაცვალე პლუს ქულები ლარში",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        {children}
        <Analytics />

        <GoogleAnalytics gaId="G-WWWW1XHYKH" />
      </body>
    </html>
  );
}
