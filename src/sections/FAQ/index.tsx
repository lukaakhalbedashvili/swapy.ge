"use client";
import Buy from "@/components/Buy";
import CollapsibleFAQ from "@/components/CollapsibleFAQ";
import Sell from "@/components/Sell";
import SwitchBetweenBtn from "@/components/SwitchBetweenBtn";
import React, { useState } from "react";

export enum TransactionType {
  SELL = "sell",
  BUY = "buy",
}

const FAQ = () => {
  const [selectedTransactionType, setSelectedTransactionType] =
    useState<TransactionType>(TransactionType.SELL);
  const faqs = [
    {
      question: "რამდენ ხანში აისახება თანხა ანგარიშზე?",
      answer: "ტრანზაქციის დასრულების შემდეგ, 10 წუთის განმავლობაში.",
    },
    {
      question: "რამდენად უსაფრთხოა გადახდის პროცესი?",
      answer:
        "You can install Next.js using npm or yarn. Run `npm install next react react-dom` or `yarn add next react react-dom`.",
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

      <div className="bg-body rounded-lg p-2">
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
