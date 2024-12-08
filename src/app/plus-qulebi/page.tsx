import Transactions from "@/sections/Transactions";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "plus ქულები",
  description: "PLUS ქულები საქართველოს ბანკის ბარათებით",
};

const Page = () => {
  return (
    <main className="flex flex-col items-center  w-full lg:px-[25%] px-4 py-10 bg-background">
      <section className=" text-white w-full text-center py-8 rounded-lg mb-10  flex flex-col items-center">
        <h2 className="text-xl font-bold">
          PLUS ქულები საქართველოს ბანკის ბარათებით
        </h2>
        <p className="mt-6 text-md leading-relaxed">
          საქართველოს ბანკის ბარათებით გადახდისას, პარტნიორ მაღაზიებში PLUS
          ქულები გერიცხებათ. დაგროვებული ქულებით შეგიძლიათ შეიძინოთ სასურველი
          ნივთები მრავალფეროვანი კატალოგიდან ან გადაცვალოთ ლარში სვაპიზე, იხილეთ
          ბმული -
          <a href="/" className="cursor-pointer text-main ml-1">
            swapy.ge
          </a>
        </p>
      </section>

      <Transactions title="plus ქულები" />

      <section className="text-gray-400 w-full p-6 rounded-lg shadow-md mb-8 bg-body text-sm mt-8">
        <h2 className="text-xl font-semibold mb-4">
          როგორ გავიგოთ PLUS ქულების ღირებულება
        </h2>

        <p className="mb-4">400 PLUS ქულა 1 ლარს შეესაბამება. მაგალითად:</p>

        <ul className="list-disc list-inside  space-y-2 mb-4">
          <li>100 PLUS ქულა = 0.25 ლარი</li>
          <li>1000 PLUS ქულა = 2.5 ლარი</li>
          <li>
            <a href="/" className="cursor-pointer text-main mr-1">
              Swapy
            </a>
            - ზე 400 PLUS ქულა = 1.1 ლარია
          </li>
        </ul>

        <p className="leading-relaxed">
          თუ ნივთის ღირებულება 549 ლარია, მისი შესაძენად 219,600 PLUS ქულა
          დაგჭირდებათ. ბალანსზე არსებული ქულების შემოწმება შეგიძლიათ საქართველოს
          ბანკის მობილ ბანკის აპლიკაციაში.
        </p>
      </section>

      <section className="text-gray-400 w-full p-6 rounded-lg shadow-md mb-8 bg-body text-sm">
        <h2 className="text-xl font-semibold mb-4">სპეციალური შეთავაზებები</h2>

        <p className="text-gray-400 leading-relaxed mb-4">
          საქართველოს ბანკი PLUS ქულების აქციებს წელიწადში რამდენჯერმე მართავს.
          განსაკუთრებული დღეა PLUS ქულების დაბადების დღე, როდესაც ნივთების
          შეძენა შესაძლებელია ნახევარ ფასად. დამატებით, შესაძლებელია
          კომბინირებული გადახდა, რაც გაძლევთ ბალანსზე არსებული თანხით PLUS
          ქულების შევსების შესაძლებლობას.
        </p>

        <a href="/" className="cursor-pointer text-main">
          ასევე, თქვენ შეგიძლიათ გადაცვალოთ PLUS ქულები ლარში Swapy-ზე, სადაც
          ქულების გაცვლის ფასი უფრო მომგებიანია.
        </a>
      </section>

      <section className="text-gray-400 w-full p-6 rounded-lg shadow-md mb-8 bg-body text-sm">
        <h2 className="text-xl font-semibold mb-4">
          როგორ დავაგროვოთ PLUS ქულები
        </h2>
        <p className="text-gray-400 mb-4">
          ბარათის სტატუსის მიხედვით, საქართველოს ბანკის პარტნიორ მაღაზიებში
          ყოველი 1 ლარის ხარჯვისას თქვენ ერიცხებათ:
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
          <li>EXPRESS ბარათი: 1 PLUS ქულა</li>
          <li>CLASSIC ბარათი: 1.5 PLUS ქულა</li>
          <li>SILVER ბარათი: 1.75 PLUS ქულა</li>
          <li>GOLD ბარათი: 2 PLUS ქულა</li>
        </ul>
        <p className="text-gray-400 leading-relaxed">
          ქულების სწრაფად მოსაგროვებლად, რეკომენდებულია SILVER ან GOLD ბარათის
          გამოყენება.
        </p>
      </section>

      <section className="text-gray-400 w-full p-6 rounded-lg shadow-md mb-8 bg-body text-sm">
        <h2 className="text-xl font-semibold mb-4">
          როგორ დავხარჯოთ PLUS ქულები
        </h2>
        <p className="text-gray-400 mb-4">
          PLUS ქულების გამოყენება მარტივია. პირველ რიგში, შეამოწმეთ თქვენი
          ქულების ბალანსი. შემდეგ, კატალოგში მოძებნეთ სასურველი ნივთები და
          ისარგებლეთ კომბინირებული გადახდის ფუნქციით, თუ ქულები საკმარისი არ
          არის.
        </p>

        <a href="/" className="cursor-pointer text-main mt-4">
          ან, შეგიძლიათ გადაცვალოთ PLUS ქულები ლარში Swapy-ზე. 400 ქულა - 1.1
          ლარი.
        </a>
      </section>
    </main>
  );
};

export default Page;
