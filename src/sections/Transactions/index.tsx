"use client";
import CustomBuy from "@/components/Buy/custom-buy";
import Sell from "@/components/Sell";
import SwitchBetweenBtn from "@/components/SwitchBetweenBtn";
import React, { useState, useEffect, Suspense } from "react";

export enum TransactionType {
  SELL = "sell",
  BUY = "buy",
}

const Transactions = ({
  tab = TransactionType.SELL,
}: {
  title: string;
  tab: TransactionType;
}) => {
  const [selectedTransactionType, setSelectedTransactionType] =
    useState<TransactionType>(tab);

  return (
    <section
      className="w-full bg-background text-white pt-[12%] md:pt-[8%]"
      id="გაცვალე"
    >
      <SwitchBetweenBtn
        onClickHandler={(type) => setSelectedTransactionType(type)}
        selectedTransactionType={selectedTransactionType}
      />

      <div className="bg-body rounded-lg p-2 lg:p-5 relative mt-10">
        {selectedTransactionType === TransactionType.BUY && <CustomBuy />}
        {/* {selectedTransactionType === TransactionType.BUY && !user && (
          <AuthForm />
        )} */}
        {selectedTransactionType === TransactionType.SELL && <Sell />}
      </div>
    </section>
  );
};

export default Transactions;
