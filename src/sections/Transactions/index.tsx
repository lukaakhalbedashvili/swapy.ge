"use client";
import AuthForm from "@/components/AuthForm";
import Buy from "@/components/Buy";
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

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-background">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
      </div>
    );
  }

  return (
    <Suspense>
      <section
        className="w-full bg-background text-white pt-[12%]"
        id="გაცვალე"
      >
        <SwitchBetweenBtn
          onClickHandler={(type) => setSelectedTransactionType(type)}
          selectedTransactionType={selectedTransactionType}
        />

        <div className="bg-body rounded-lg p-2 lg:p-5 relative lg:pb-10 mt-10">
          {selectedTransactionType === TransactionType.BUY && user && <Buy />}
          {selectedTransactionType === TransactionType.BUY && !user && (
            <AuthForm />
          )}
          {selectedTransactionType === TransactionType.SELL && <Sell />}
        </div>
      </section>
    </Suspense>
  );
};

export default Transactions;
