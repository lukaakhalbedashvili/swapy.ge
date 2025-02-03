"use client";
import AuthForm from "@/components/AuthForm";
import Buy from "@/components/Buy";
import CustomBuy from "@/components/Buy/custom-buy";
import Loading from "@/components/Loading";
import Sell from "@/components/Sell";
import SwitchBetweenBtn from "@/components/SwitchBetweenBtn";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { useSearchParams } from "next/navigation";
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

  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      user && setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading && tab === TransactionType.BUY) {
    return <Loading />;
  }

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
        {selectedTransactionType === TransactionType.BUY && user && (
          <CustomBuy />
        )}
        {selectedTransactionType === TransactionType.BUY && !user && (
          <AuthForm />
        )}
        {selectedTransactionType === TransactionType.SELL && <Sell />}
      </div>
    </section>
  );
};

export default Transactions;
