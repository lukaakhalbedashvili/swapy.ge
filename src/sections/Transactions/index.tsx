"use client";
import Buy from "@/components/Buy";
import Sell from "@/components/Sell";
import SwitchBetweenBtn from "@/components/SwitchBetweenBtn";
import React, { useState } from "react";

export enum TransactionType {
  SELL = "sell",
  BUY = "buy",
}

const Transactions = () => {
  const [selectedTransactionType, setSelectedTransactionType] =
    useState<TransactionType>(TransactionType.SELL);

  return (
    <section className="mt-[30%] w-full px-2" id="გაცვალე">
      <h1 className="w-full text-center flex justify-center  mb-10">
        მიიღე თანხა PLUS ქულების სანაცვლოდ
      </h1>

      <div className="bg-body rounded-lg p-2">
        {/* <SwitchBetweenBtn
          onClickHandler={(type) => setSelectedTransactionType(type)}
          selectedTransactionType={selectedTransactionType}
          /> */}

        {selectedTransactionType === TransactionType.BUY ? <Buy /> : <Sell />}
      </div>
    </section>
  );
};

export default Transactions;
