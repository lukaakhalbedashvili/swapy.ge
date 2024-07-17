import Image from "next/image";
import Link from "next/link";
import React from "react";

const AreWeScammers = () => {
  return (
    <section
      className="pt-[10%] lg:pt-[4%] w-full  flex items-center flex-col px-2 pb-20 lg:w-1/2 lg:text-center"
      id="სკამერები ვართ?"
    >
      <h1 className="w-full text-center flex justify-center  mb-10 ">
        სკამერები ვართ?
      </h1>

      <div className="bg-body rounded-lg p-2 lg:p-10 text-gray-400 text-center">
        swapy / სვაპი{" "}
        <span className="text-main">
          საქართველოში რეგისტრირებული, გადასახადის გადამხდელი, (შპს)ა
        </span>
        , საინდენტიფიკაციო კოდით <span className="text-main">424619292</span>.
        <br />
        <br />
        იხილეთ განცხადება სამეწარმეო რეესტრიდან კომპანიის მეწილეების და ყველა
        სხვა დეტალის შესახებ:
        <br />
        <br />
        {/* <a
          href="https://www.my.gov.ge/ka-ge/services/6/service/179"
          className="text-main"
          target="_blank"
        >
          https://shorturl.at/1toyH
        </a> */}
        {/* <br /> */}
        <a
          href="https://bs.napr.gov.ge/GetBlob?pid=400&bid=boVlyOwlsX3qmYsntmLmFKnbwz02C0qvu28pYeGe9BL[q50yuVTK0RLtKgztILrj"
          className="text-main"
          target="_blank"
        >
          https://shorturl.at/4Nfrn
        </a>
        <br />
        <br />
        თაღლითური გზით ფულის გამოძალვა კი, საქართველოს კანონმდებლოთ დასჯადი
        ქმედებაა.
        <br />
        <br />
        თუ ვერ მიიღეთ გაცვლილი ქულების შესაბამისი თანხა,{" "}
        <span className="text-main">დარეკეთ პოლიციაში</span>, 112 და გადაეცით
        ჩვენი მონაცემები .
        <br />
        <br />
        არ ყოფილა და არც იქნება არასდროს რომ, გაცვლილი პლუს ქულების შესაბამისი
        თანხა არ დარიცხოდა ჩვენს რომელიმე მომხმარებელს.
        <br />
        <br />
        თუ კვლავ გაქვთ შეკითხვები ჩვენი ავთენტურობის შესახებ , მოგვწერეთ ან
        დაგვირეკეთ.
      </div>
    </section>
  );
};

export default AreWeScammers;