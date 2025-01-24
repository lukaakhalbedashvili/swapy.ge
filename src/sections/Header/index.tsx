import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => (
  <header className="flex items-center w-full px-4 bg-header text-white sticky top-0 z-10 py-3 lg:px-10">
    <nav className="w-full items-center flex">
      <ul className="flex items-center w-full ">
        <li className="cursor-pointer h-10 w-10 relative">
          <Link href="/">
            <Image src="/logo-alt.svg" fill alt="swapy" />
          </Link>
        </li>

        <li className="ml-4 lg:ml-10 lg:inline">
          <Link href="/#გაცვალე">ქულების გადაცვლა</Link>
        </li>

        <li className="ml-4 lg:ml-10 text-nowrap hidden lg:inline">
          <Link href="/#ჩვენს შესახებ">ჩვენს შესახებ</Link>
        </li>

        <li className="ml-4 lg:ml-10 hidden lg:inline">
          <a href="/#კონტაქტი">კონტაქტი</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
