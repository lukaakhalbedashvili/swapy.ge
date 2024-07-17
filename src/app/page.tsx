import AreWeScammers from "@/components/AreWeScammers";
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
      <header className="flex items-center w-full px-4 bg-header sticky top-0 z-10 py-3 lg:px-10">
        <nav className="w-full items-center flex">
          <ul className="flex items-center w-full ">
            <li className="cursor-pointer">
              <Link href="/">
                <Image
                  src="/swapy-logo-2.svg"
                  width={40}
                  height={40}
                  alt="swapy"
                />
              </Link>
            </li>

            <li className="ml-4 lg:ml-10">
              <Link href="#გაცვალე">გაცვალე</Link>
            </li>

            <li className="ml-4 lg:ml-10 text-nowrap hidden lg:visible">
              <Link href="#ჩვენს შესახებ">ჩვენს შესახებ</Link>
            </li>

            <li className="ml-4 lg:ml-10">
              <a href="#კონტაქტი">კონტაქტი</a>
            </li>

            <li className="ml-4 lg:ml-10 text-nowrap">
              <a href="#სკამერები ვართ?">სკამერები ვართ?</a>
            </li>
          </ul>
        </nav>
      </header>

      <Transactions />

      <FAQ />

      <AboutUs />

      <Team />

      <AreWeScammers />

      <Contact />
    </main>
  );
}
