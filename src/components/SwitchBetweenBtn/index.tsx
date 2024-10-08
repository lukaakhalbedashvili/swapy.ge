import { TransactionType } from "@/sections/Transactions";
import React from "react";

interface ISwitchBetweenBtn {
  onClickHandler: (type: TransactionType) => void;
  selectedTransactionType: TransactionType;
}

const SwitchBetweenBtn = ({
  onClickHandler,
  selectedTransactionType,
}: ISwitchBetweenBtn) => {
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
        onClick={() => onClickHandler(TransactionType.SELL)}
      >
        გაყიდვა
      </button>

      <button
        type="button"
        className={`w-[49%] p-2 rounded-lg ${getBtnColor(TransactionType.BUY)}`}
        onClick={() => onClickHandler(TransactionType.BUY)}
      >
        ყიდვა
      </button>
    </div>
  );
};

export default SwitchBetweenBtn;
