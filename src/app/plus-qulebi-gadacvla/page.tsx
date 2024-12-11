import Transactions from "@/sections/Transactions";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Plus ქულები გადაცვლა",
  description:
    "Plus ქულები გადაცვლა - გაიგეთ, როგორ შეგიძლიათ პლუს ქულების გადაცვლა საქართველოს ბანკის მობაილ ბანკის აპლიკაციით. მიიღეთ მეტი ინფორმაცია Swapy-ზე.",
};

const Page = () => {
  return (
    <main className="flex flex-col items-center  w-full px-4 lg:px-[25%] py-10 bg-background">
      <section className="text-white w-full text-center py-8 rounded-lg mb-10 flex flex-col items-center">
        <h2 className="text-xl font-bold">PLUS ქულები გადაცვლა</h2>

        <p className="mt-6 text-md leading-relaxed">
          საქართველოს ბანკის ბარათებით გადახდისას, პარტნიორ მაღაზიებში PLUS
          ქულები გერიცხებათ. შეგიძლიათ გამოიყენოთ დაგროვებული ქულები სასურველი
          ნივთების შესაძენად მრავალფეროვანი კატალოგიდან ან გადაცვალოთ ლარში
          სვაპიზე. მეტი ინფორმაციისთვის ეწვიეთ -
          <a href="/" className="cursor-pointer text-main ml-1">
            swapy.ge
          </a>
        </p>
      </section>

      <Transactions title="Plus ქულები გადაცვლა" />

      <section className="text-gray-400 w-full p-6 rounded-lg shadow-md mb-8 bg-body text-sm mt-8">
        <h2 className="text-xl font-semibold mb-4">
          როგორ გავიგოთ PLUS ქულების ღირებულება
        </h2>

        <p className="mb-4">400 PLUS ქულა 1 ლარს შეესაბამება. მაგალითად:</p>

        <ul className="list-disc list-inside  space-y-2 mb-4">
          <li>400 PLUS ქულა = 1 ლარი</li>
          <li>4000 PLUS ქულა = 10 ლარი</li>
          <li>
            <a href="/" className="cursor-pointer text-main mr-1">
              Swapy
            </a>
            - ზე 400 PLUS ქულა = 1.1 ლარია
          </li>
        </ul>
      </section>

      <section className="text-gray-400 w-full p-6 rounded-lg shadow-md mb-8 bg-body text-sm">
        <h2 className="text-xl font-semibold mb-4">
          როგორ ხდება PLUS ქულების გაცვლა Swapy-ზე
        </h2>

        <p className="leading-loose mb-4">
          პლუს ქულების გაყიდვა/გადაცვლა იწყება საქართველოს ბანკის მობაილ ბანკის
          აპლიკაციის გახსნით. შემდეგ, თქვენ უნდა დააჭიროთ PLUS სექციას, შემდეგ
          გახსნათ შესაბამისი გადარიცხვის სექცია. პირველ ველში უნდა ჩაწეროთ
          მიმღები პირის პირად ნომერი: 08101039664. მეორე ველში ავტომატურად
          იწერება მიმღების ინიციალები, მესამე ველში კი უნდა ჩაწეროთ გადასარიცხი
          <b>პლუს ქულების</b> რაოდენობა. კომენტარის ველში მიუთითეთ ანგარიშის
          ნომერი, რომელზეც გსურთ თანხის გადმორიცხვა. თუ TBC ბანკის ანგარიშზე
          იბარებთ თანხას, მაშინ თანხა შემდეგ დღეს აისახება. ტრანზაქციის
          დასრულების შემდეგ, თანხა 10 წუთის განმავლობაში აისახება თქვენს
          ანგარიშზე.
        </p>
      </section>
    </main>
  );
};

export default Page;
