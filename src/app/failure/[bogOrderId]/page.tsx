import { getTransaction } from "@/server-actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FailurePropsI {
  params: { bogOrderId: string };
}

const page = async ({ params }: FailurePropsI) => {
  const transaction = await getTransaction(params.bogOrderId);

  return (
    <div className="w-full h-screen bg-background flex flex-col justify-center items-center">
      <div className="bg-[#44302E] p-5 rounded-full w-fit">
        <Image
          src="/close-circle-outline.svg"
          width={30}
          height={30}
          alt="close"
        />
      </div>

      <h1 className="text-error text-center px-8 mt-[8%] lg:mt-4">{`ოპერაცია ვერ შესრულდა, გადასახდელი თანხა : ${Number(
        transaction?.paidPlusPointsInLari
      ).toFixed(2)} ₾`}</h1>

      <Link href={"/"} className="mt-[10%] text-main lg:mt-12">
        თავიდან ცადეთ
      </Link>
    </div>
  );
};

export default page;
