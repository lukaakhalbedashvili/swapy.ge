import AboutUs from "@/sections/AboutUs";
import Contact from "@/sections/Contact";
import FAQ from "@/sections/FAQ";
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
      <header className="flex items-center w-full px-4 bg-header sticky top-0 z-10 py-3">
        <nav className="w-full">
          <ul className="flex items-center w-full">
            <li>
              <Image src="/swapy-logo.svg" width={40} height={40} alt="swapy" />
            </li>

            <li className="ml-4">
              <Link href="#გაცვალე">გაცვალე</Link>
            </li>

            <li className="ml-4">
              <Link href="#ჩვენს შესახებ">ჩვენს შესახებ</Link>
            </li>

            <li className="ml-4">
              <a href="#კონტაქტი">კონტაქტი</a>
            </li>
          </ul>
        </nav>
      </header>

      <Transactions />

      <FAQ />

      <AboutUs />

      <Team />

      <Contact />
    </main>
  );
}
