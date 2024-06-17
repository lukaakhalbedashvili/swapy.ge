import Image from "next/image";
import Link from "next/link";
import React from "react";

const Team = () => {
  return (
    <section
      className="w-full  flex items-center flex-col px-2 pb-20"
      id="გუნდის წევრები"
    >
      <h1 className="w-full text-center flex justify-center  mb-10 ">
        გუნდის წევრები
      </h1>

      <Link
        href="https://www.linkedin.com/in/luka-akhalbedashvili-02620a199/"
        target="_blank"
        className="w-full"
      >
        <div className="relative w-full h-52">
          <Image
            src="/Luka.jpg"
            fill
            objectFit="contain"
            alt="ლუკა ახალბედასჰვილი"
            className="custom-rounded"
          />
        </div>

        <h2 className="text-secondary mt-4 text-center">ლუკა ახალბედაშვილი</h2>
      </Link>

      <Link
        href="https://www.linkedin.com/in/lasham/"
        target="_blank"
        className="w-full flex flex-col justify-center items-center mt-10"
      >
        <div className="relative w-full h-60">
          <Image
            src="/Lasha.jpeg"
            fill
            objectFit="contain"
            alt="ლაშა მარხვაიძე"
          />
        </div>

        <h2 className="text-secondary mt-4 text-center">ლაშა მარხვაიძე</h2>
      </Link>
    </section>
  );
};

export default Team;
