import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen bg-background flex flex-col justify-center items-center">
      <div className="bg-[#44302E] p-5 rounded-full w-fit">
        <Image
          src="close-circle-outline.svg"
          width={30}
          height={30}
          alt="close"
        />
      </div>

      <h1 className="text-error mt-[8%] lg:mt-4">ოპერაცია ვერ შესრულდა</h1>

      <Link href={"/"} className="mt-[10%] text-main lg:mt-12">
        თავიდან ცადეთ
      </Link>
    </div>
  );
};

export default page;
