import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="pb-12 flex flex-col items-center bg-background text-white">
      <nav className="flex flex-col lg:flex-row items-center">
        <ul className="flex flex-col lg:flex-row items-center text-base">
          <li className="mb-4 lg:mb-0 lg:mr-6">
            <Link href="/plus-qulebi">პლუს ქულები</Link>
          </li>

          <li className="mb-4 lg:mb-0 lg:mr-6">
            <Link href="/plus-qulebi-gadacvla">პლუს ქულები გადაცვლა</Link>
          </li>

          <li className="mb-4 lg:mb-0 lg:mr-6">
            <Link href="/plus-qulebi-larshi">პლუს ქულები ლარში</Link>
          </li>

          <li className="mb-4 lg:mb-0 lg:mr-6">
            <Link href="/#კონტაქტი">კონტაქტი</Link>
          </li>

          <li className="mb-4 lg:mb-0 lg:mr-6">
            <Link href="/plus-partniorebi">Plus მაღაზიები</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
