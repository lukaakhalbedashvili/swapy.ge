import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mb-12">
      <nav className="flex flex-col lg:flex-row items-center">
        <ul className="flex flex-col lg:flex-row items-center text-base">
          <li className="mb-4 lg:mb-0 lg:mr-6">
            <Link href="#გაცვალე">პლუს ქულების გაყიდვა</Link>
          </li>
          <li className="mb-4 lg:mb-0 lg:mr-6">
            <Link href="#ჩვენს შესახებ">ჩვენს შესახებ</Link>
          </li>
          <li className="mb-4 lg:mb-0 lg:mr-6">
            <Link href="#კონტაქტი">კონტაქტი</Link>
          </li>
          <li className="mb-4 lg:mb-0 lg:mr-6">
            <Link href="#ხშირადდასმულიშეკითხვები">
              ხშირად დასმული შეკითხვები
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
