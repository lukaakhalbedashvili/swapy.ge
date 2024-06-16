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
    return selectedTransactionType === btn ? "bg-main" : "bg-disabledBTN";
  };

  return (
    <div className="flex items-center mb-4 justify-between w-full">
      <button
        type="button"
        className={`w-[49%] p-3 rounded-lg ${getBtnColor(TransactionType.BUY)}`}
        onClick={() => onClickHandler(TransactionType.BUY)}
      >
        ყიდვა
      </button>

      <button
        type="button"
        className={`w-[49%] p-3 rounded-lg ${getBtnColor(
          TransactionType.SELL
        )}`}
        onClick={() => onClickHandler(TransactionType.SELL)}
      >
        გაყიდვა
      </button>
    </div>
  );
};

export default SwitchBetweenBtn;
