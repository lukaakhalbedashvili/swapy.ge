import Transactions from "@/sections/Transactions";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "პლუს ქულები ლარში",
  description:
    "პლუს ქულები ლარში - აღმოაჩინეთ, თუ როგორ შეგიძლიათ გამოიყენოთ და გადაცვალოთ Plus ქულები საქართველოს ბანკის მობაილ ბანკის აპლიკაციით.",
};

const Page = () => {
  return (
    <main className="flex flex-col items-center  w-full px-4 lg:px-[25%] py-10 bg-background">
      <section className="text-white w-full text-center py-8 rounded-lg mb-10 flex flex-col items-center">
        <h2 className="text-xl font-bold">
          PLUS ქულების გამოყენების გზამკვლევი
        </h2>

        <p className="mt-6 text-md leading-relaxed">
          საქართველოს ბანკის ბარათებით გადახდისას დაგროვებული PLUS ქულები
          მრავალფეროვან შესაძლებლობებს გიქმნით. მათი გამოყენება შეგიძლიათ როგორც
          სასურველი ნივთების შესაძენად, ასევე ფულად სახსრებად გაცვლით. დამატებით
          ინფორმაციისთვის ეწვიეთ
          <a href="/" className="cursor-pointer text-main ml-1">
            swapy.ge
          </a>
        </p>
      </section>

      <Transactions title="Plus ქულები ლარში" />

      <section className="text-gray-400 w-full p-6 rounded-lg shadow-md mb-8 bg-body text-sm mt-8">
        <h2 className="text-xl font-semibold mb-4">PLUS ქულების ღირებულება</h2>

        <div className="space-y-4">
          <p>PLUS ქულების გაანგარიშება მარტივია:</p>

          <ul className="list-disc list-inside space-y-2">
            <li>400 PLUS ქულა = 1 ლარი (სტანდარტული გაცვლა)</li>
            <li>4000 PLUS ქულა = 10 ლარი</li>
            <li>
              <a href="/" className="cursor-pointer text-main">
                Swapy
              </a>
              -ზე 400 PLUS ქულა = 1.1 ლარი (გაზრდილი ღირებულება)
            </li>
          </ul>

          <p className="text-xs italic">*გაცვლის კურსი შეიძლება შეიცვალოს</p>
        </div>
      </section>

      <section className="text-gray-400 w-full p-6 rounded-lg shadow-md mb-8 bg-body text-sm">
        <h2 className="text-xl font-semibold mb-4">
          PLUS ქულების გაცვლის პროცესი
        </h2>

        <div className="space-y-4">
          <p>გაცვლის პროცესი საქართველოს ბანკის მობაილ ბანკის აპლიკაციაში:</p>

          <ol className="list-decimal list-inside space-y-2">
            <li>გახსენით მობაილ ბანკის აპლიკაცია</li>
            <li>შედით PLUS სექციაში</li>
            <li>აირჩიეთ გადარიცხვის სექცია</li>
            <li>შეიყვანეთ მიმღების პირადი ნომერი: 08101039664</li>
            <li>მიუთითეთ გადასარიცხი PLUS ქულების რაოდენობა</li>
            <li>კომენტარის ველში მიუთითეთ სასურველი ანგარიშის ნომერი</li>
          </ol>

          <p className="text-xs">
            <b>ყურადღება:</b> TBC ბანკის ანგარიშზე თანხა მომდევნო დღეს აისახება.
            ტრანზაქციის დასრულების შემდეგ, თანხა დაახლოებით 10 წუთში იქნება
            ხელმისაწვდომი.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Page;
