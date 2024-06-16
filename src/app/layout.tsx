import type { Metadata } from "next";

import "./globals.css";

import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: "../../public/mark-geo.woff2" });

export const metadata: Metadata = {
  title: "swapy / სვაპი",
  description: "გაცვალე პლუს ქულები ლარში",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
