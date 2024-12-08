import Image from "next/image";
import Link from "next/link";
import React from "react";

const Team = () => {
  return (
    <section
      className="w-full  flex items-center flex-col pb-20"
      id="გუნდის წევრები"
    >
      <h2 className="w-full text-center flex justify-center mb-10 lg:mb-0">
        გუნდის წევრები
      </h2>

      <div className="lg:flex lg:items-start  justify-around  lg:mt-10 w-full">
        <Link
          href="https://www.linkedin.com/in/luka-akhalbedashvili-02620a199/"
          target="_blank"
          className="flex flex-col justify-center items-center"
        >
          <div className="relative w-52 h-52">
            <Image
              src="/akhalbeda.png"
              fill
              className="object-cover"
              alt="ლუკა ახალბედაშვილი"
            />
          </div>

          <h3 className="text-white mt-4 text-center">ლუკა ახალბედაშვილი</h3>
        </Link>

        <Link
          href="https://www.linkedin.com/in/lasham/"
          target="_blank"
          className="flex flex-col justify-center items-center mt-[20%] lg:mt-0"
        >
          <div className="relative w-52 h-52">
            <Image
              src="/Lasha.jpeg"
              fill
              className="object-cover"
              alt="ლაშა მარხვაიძე"
            />
          </div>

          <h3 className="text-white mt-4 text-center">ლაშა მარხვაიძე</h3>
        </Link>
      </div>
    </section>
  );
};

export default Team;
