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
    useState<TransactionType>(TransactionType.BUY);

  return (
    <section className="mt-10 w-full">
      <h2 className="w-full text-center flex justify-center  mb-10">
        ქულების ყიდვა / გაყიდვა
      </h2>

      <div className="bg-body rounded-lg p-2 mx-1">
        <SwitchBetweenBtn
          onClickHandler={(type) => setSelectedTransactionType(type)}
          selectedTransactionType={selectedTransactionType}
        />

        {selectedTransactionType === TransactionType.BUY ? <Buy /> : <Sell />}
      </div>
    </section>
  );
};

export default Transactions;
