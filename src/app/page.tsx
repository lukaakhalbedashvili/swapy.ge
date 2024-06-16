import Input from "@/components/Input";
import SwitchBetweenBtn from "@/components/SwitchBetweenBtn";
import Transactions from "@/sections/Transactions";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background text-white">
      <header className="flex items-center w-full px-4 bg-header">
        <button className="m-4 font-light text-sm">გაცვლა</button>
        <button className="m-4 font-light whitespace-nowrap text-sm">
          ჩვენს შესახებ
        </button>
        <button className="m-4 font-light text-sm">კონტაქტი</button>
      </header>

      <Transactions />
    </main>
  );
}
