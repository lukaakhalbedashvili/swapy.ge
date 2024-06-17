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
      question: "რამდენად უსაფრთხოა გადახდის პროცესი?",
      answer: `გადახდის პროცესი ხორციელდება ბანკის მიერ, ჩვენ არ გვაქვს წვდომა თქვენს მიერ შეყვანილ მონაცემებზე.
      <br/>
      ყოველი ახალი ტრანზაქციის დროს ბანკი გიგზავნით ვერიფიკაციის კოდს, რომლის გარეშეც გადახდა შეუძლებელია.`,
    },
    {
      question: "სად დამერიცხება თანხა?",
      answer:
        "ტრანზაქციის წარმატებით დასრულების შემთხვევაში თანხა დაგერიცხებათ იმავე ანგარიშზე საიდანაც PLUS ქულებით გადაიხადეთ",
    },
  ];

  return (
    <section
      className="mt-[30%] w-full  flex items-center flex-col px-2"
      id="ხშირად დასმული შეკითხვები"
    >
      <h1 className="w-full text-center flex justify-center  mb-10 ">
        ხშირად დასმული შეკითხვები
      </h1>

      <div className="bg-body rounded-lg p-2 text-gray-400">
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
