import { getTransaction } from "@/server-actions";
import Image from "next/image";
import React from "react";

interface SuccessPropsI {
  params: { bogOrderId: string };
}

const page = async ({ params }: SuccessPropsI) => {
  const transaction = await getTransaction(params.bogOrderId);
  return (
    <div className="w-full h-screen bg-background flex flex-col justify-center items-center">
      <div className="bg-[#36930f] p-3 rounded-full w-fit">
        <Image src="/checked.svg" width={50} height={50} alt="success" />
      </div>

      <h1 className="text-success mt-5 text-lg text-center">
        გადახდილია, {Number(transaction?.lariAmountTheyReceive).toFixed(2)}₾
        ანგარიშზე 10 წუთის განმავლობაში დაგერიცხებათ
      </h1>

      <p className="text-main text-3xl mt-8 font-bold">50.0 ₾</p>
    </div>
  );
};

export default page;
