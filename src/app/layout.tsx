import type { Metadata } from "next";

import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import localFont from "next/font/local";
const myFont = localFont({ src: "../../public/mark-geo.woff2" });

import { Analytics } from "@vercel/analytics/react";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";

export const metadata: Metadata = {
  title: "გადაცვალე PLUS ქულები ლარში",
  description:
    "გადაცვალე პლუს ქულები ლარში - გაეცანი: როგორ დააგროვო, გამოიყენო ან გადაცვალო პლუს ქულები ლარში ღირებულებაზე მეტ ფასად - Swapy, plus ქულების გაყიდვის უსაფრთხო გზა",
  keywords: [
    "plus qulebis gadacvla",
    "plus qulebis gayidva",
    "PLUS qulebis gayidva",
    "PLUS kulebis gayidva",
    "PLUS kulebis gadacvla",
    "plus qulebis yidva gayidva",
    "plus ქულების ყიდვა გაყიდვა",
    "პლუს ქულების გაყიდვა",
    "პლუს ქულების გადაცვლა",
    "ვიყიდი პლუს ქულებს",
  ],
  applicationName: "Swapy.ge",
  authors: [
    {
      name: "Luka Akhalbedashvili",
      url: "https://www.linkedin.com/in/luka-akhalbedashvili-02620a199/",
    },
    {
      name: "Lasha Markhvaidze",
      url: "https://www.linkedin.com/in/lasham/",
    },
  ],
  category: "ფინანსები",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Header />

        {children}

        <Footer />

        <Analytics />

        <GoogleAnalytics gaId="G-WWWW1XHYKH" />
      </body>
    </html>
  );
}
