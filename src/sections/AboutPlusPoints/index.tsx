import React from "react";

const AboutPlusPoints = () => {
  return (
    <section
      className="pt-[20%] lg:pt-[10%] w-full flex items-center flex-col pb-20 lg:text-center"
      id="plus ქულების შესახებ"
    >
      <h2 className="w-full text-center flex justify-center mb-10">
        საქართველოს ბანკის PLUS ქულების ლოიალობის პროგრამა
      </h2>

      <div className="bg-body rounded-lg p-2 lg:p-10 text-gray-400 text-center w-full">
        <h3 className="text-white font-semibold mb-10 mt-10">
          რა არის Plus ქულები?
        </h3>
        <ul className="list-disc pl-6 text-center">
          <li>
            Plus ქულები არის ლოიალობის ქულები, რომლებსაც მომხმარებლები აგროვებენ
            საქართველოს ბანკის ბარათებით ტრანზაქციების შესრულებით ან სხვა
            საბანკო სერვისებით სარგებლობისას. ეს ქულები შეიძლება დაგროვდეს და
            გამოყენებული იყოს სხვადასხვა პროდუქტის, სერვისის და ექსკლუზიური
            შეთავაზებების მისაღებად.
          </li>
        </ul>

        <h3 className="text-white font-semibold mb-10 mt-20">
          როგორ დავაგროვოთ Plus ქულები?
        </h3>
        <ul className="list-disc pl-6 text-center">
          <li className="mb-3">
            ბარათით გადახდა: Plus ქულები გროვდება საქართველოს ბანკის ბარათით
            ადგილობრივ და საერთაშორისო მაღაზიებში გადახდაზე.
          </li>
          <li className="mb-3">
            ონლაინ შესყიდვები: ონლაინ შოპინგით შესრულებული ტრანზაქციებისთვისაც
            შეგიძლიათ ქულების მიღება.
          </li>
          <li className="mb-3">
            საბანკო სერვისები: გარკვეული საბანკო სერვისებით სარგებლობისას ბანკი
            დამატებით ქულებს გაწვდით.
          </li>
          <li className="mb-3">
            პარტნიორი კომპანიები: Plus ქულების მიღება შესაძლებელია ბანკის
            პარტნიორ ორგანიზაციებთან თანამშრომლობისას.
          </li>
        </ul>

        <h2 className="text-white font-semibold mb-10 mt-20">
          როგორ გამოვიყენოთ Plus ქულები?
        </h2>
        <ul className="list-disc pl-6 text-center">
          <li className="mb-3">
            <a href="/" className="cursor-pointer text-main">
              შეგიძლიათ პლუს ქულები გადაცვალოთ ლარში
              {" swapy.ge "}
            </a>
            - ზე ღირებულებაზე მეტ ფასად.
          </li>
          <li className="mb-3">
            მაღაზიები და სერვისები: ქულების გამოყენება შესაძლებელია ბანკის
            პარტნიორი მაღაზიებისა და სერვისების ქსელში.
          </li>
          <li className="mb-3">
            ფასდაკლებები: ქულების გამოყენებით შეგიძლიათ მიიღოთ სხვადასხვა
            პროდუქციაზე ფასდაკლება.
          </li>
          <li className="mb-3">
            საჩუქრები და შეთავაზებები: გარკვეული რაოდენობის ქულების დაგროვების
            შემდეგ, შეიძლება მიიღოთ სპეციალური საჩუქრები ან უნიკალური
            შეთავაზებები.
          </li>
          <li className="mb-3">
            ტურისტული სერვისები: ქულების დახარჯვა შესაძლებელია ტურისტული
            მომსახურებების მისაღებადაც.
          </li>
        </ul>

        <h2 className="text-white font-semibold mb-10 mt-20">
          როგორ შევამოწმოთ ქულების რაოდენობა?
        </h2>
        <ul className="list-disc pl-6 text-center">
          <li className="mb-3">
            საქართველოს ბანკის მობილბანკი: Plus ქულების შემოწმება შესაძლებელია
            საქართველოს ბანკის მობილბანკის აპლიკაციის მეშვეობით.
          </li>
          <li className="mb-3">
            ინტერნეტ ბანკი: ასევე, შესაძლებელია ქულების რაოდენობის ნახვა
            ინტერნეტ ბანკის პროფილში.
          </li>
          <li className="mb-3">
            ქოლცენტრი: ქულების შესახებ ინფორმაციის მიღება შესაძლებელია
            საქართველოს ბანკის ქოლცენტრში დარეკვით.
          </li>
        </ul>

        <h2 className="text-white font-semibold mb-10 mt-20">
          დამატებითი ინფორმაცია
        </h2>
        <ul className="list-disc pl-6 text-center mb-10">
          <li>
            პარტნიორები: პარტნიორი კომპანიების სია და დეტალები პერიოდულად
            განახლდება და შეგიძლიათ იხილოთ საქართველოს ბანკის ვებგვერდზე ან
            მობილბანკში.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutPlusPoints;
