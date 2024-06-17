import AboutUs from "@/sections/AboutUs";
import Contact from "@/sections/Contact";
import FAQ from "@/sections/FAQ";
import Team from "@/sections/Team";
import Transactions from "@/sections/Transactions";
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
      <header className="flex items-center w-full px-4 bg-header sticky top-0 z-10">
        <nav className="w-full">
          <ul className="flex items-center w-full">
            <li className="p-3">
              <Link href="#გაცვალე">გაცვალე</Link>
            </li>

            <li className="p-3">
              <Link href="#ჩვენს შესახებ">ჩვენს შესახებ</Link>
            </li>

            <li className="p-3">
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
