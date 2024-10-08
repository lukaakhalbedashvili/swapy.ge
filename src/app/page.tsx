import AreWeScammers from "@/components/AreWeScammers";
import AboutUs from "@/sections/AboutUs";
import Contact from "@/sections/Contact";
import FAQ from "@/sections/FAQ";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Team from "@/sections/Team";
import Transactions from "@/sections/Transactions";
import Image from "next/image";
import Link from "next/link";

{
  /* <button className="m-4 font-light text-sm">გაცვლა</button>
<button className="m-4 font-light whitespace-nowrap text-sm">
  ჩვენს შესახებ
</button>
<button className="m-4 font-light text-sm">კონტაქტი</button> */
}
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background text-white">
      <Header />

      <Transactions />

      <FAQ />

      <AboutUs />

      <Team />

      <AreWeScammers />

      <Contact />

      <Footer />
    </main>
  );
}
