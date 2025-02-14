import { TransactionType } from "@/server-actions/server_actions_types";
import { useRouter } from "next/navigation";
import React from "react";

interface ISwitchBetweenBtn {
  onClickHandler: (type: TransactionType) => void;
  selectedTransactionType: TransactionType;
}

const SwitchBetweenBtn = ({
  onClickHandler,
  selectedTransactionType,
}: ISwitchBetweenBtn) => {
  const router = useRouter();
  const getBtnColor = (btn: TransactionType) => {
    return selectedTransactionType === btn ? "bg-secondary" : "bg-disabledBTN";
  };

  return (
    <div className="flex items-center justify-between w-full">
      <button
        type="button"
        className={`w-[49%] p-2 rounded-lg ${getBtnColor(
          TransactionType.SELL
        )}`}
        onClick={() => {
          router.push("/?tab=sell");
          onClickHandler(TransactionType.SELL);
        }}
      >
        გაყიდვა
      </button>

      <button
        type="button"
        className={`w-[49%] p-2 rounded-lg ${getBtnColor(TransactionType.BUY)}`}
        onClick={() => {
          router.push("/?tab=buy");
          onClickHandler(TransactionType.BUY);
        }}
      >
        ყიდვა
      </button>
    </div>
  );
};

export default SwitchBetweenBtn;
