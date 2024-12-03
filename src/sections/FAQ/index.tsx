"use client";
import CollapsibleFAQ from "@/components/CollapsibleFAQ";
import React from "react";

export enum TransactionType {
  SELL = "sell",
  BUY = "buy",
}

const FAQ = () => {
  const faqs = [
    {
      question: "რამდენ ხანში აისახება თანხა ანგარიშზე?",
      answer: "ტრანზაქციის დასრულების შემდეგ, 10 წუთის განმავლობაში.",
    },
    {
      question: "როგორ ხდება პლუს <em>ქულების გაყიდვა</em>?",
      answer: `პლუს <em>ქულების გაყიდვა</em> / გადაცვლის ინსტრუქცია ზედა სექციაში შეგიძლიათ იხილოთ.`,
    },
    {
      question:
        "სად დამერიცხება <em>plus ქულების გაყიდვიდან</em> მიღებული თანხა?",
      answer:
        "ტრანზაქციის წარმატებით დასრულების შემთხვევაში თანხა დაგერიცხებათ თქვენ პირად ნომერზე არსებულ რომელიმე ანგარიშზე. თუ გსურთ თანხა კონკრეტულ ანგარიშზე დაირიცხოს, მიუთითეთ კომენტარის სახით <b>PLUS ქულების</b> გადმორიცხვისას",
    },
  ];

  return (
    <section
      className="mt-[30%] lg:mt-[10%] w-full  flex items-center flex-col py-16"
      id="ხშირადდასმულიშეკითხვები"
    >
      <h2 className="w-full text-center flex justify-center  mb-10 ">
        ხშირად დასმული შეკითხვები
      </h2>

      <div className="bg-body rounded-lg p-2 text-gray-400 lg:w-1/2">
        {faqs.map((faq, index) => (
          <CollapsibleFAQ
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
