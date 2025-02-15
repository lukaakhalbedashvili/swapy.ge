import CustomBuy from "@/components/Buy/custom-buy";
import Sell from "@/components/Sell";
import React from "react";
import { TransactionType } from "@/server-actions/server_actions_types";
import Link from "next/link";

const Transactions = ({ tab }: { tab: TransactionType }) => {
  const getBtnColor = (btn: TransactionType) => {
    return tab === btn ? "bg-secondary" : "bg-disabledBTN";
  };

  return (
    <section
      className="w-full bg-background text-white pt-[12%] md:pt-[8%]"
      id="გაცვალე"
    >
      <div className="flex items-center justify-between w-full">
        <Link
          className={`w-[49%] p-2 flex items-center justify-center rounded-lg ${getBtnColor(
            TransactionType.SELL
          )}`}
          href="/"
          prefetch={true}
        >
          გაყიდვა
        </Link>

        <Link
          className={`w-[49%] p-2 flex items-center justify-center rounded-lg ${getBtnColor(
            TransactionType.BUY
          )}`}
          href="/buy"
          prefetch={true}
        >
          ყიდვა
        </Link>
      </div>

      <div className="bg-body rounded-lg p-2 lg:p-5 relative mt-10">
        {tab === TransactionType.BUY && <CustomBuy />}

        {tab === TransactionType.SELL && <Sell />}
      </div>
    </section>
  );
};

export default Transactions;
