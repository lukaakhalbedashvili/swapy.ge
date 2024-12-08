import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <section
      className="pt-[10%] w-full  flex items-center flex-col pb-20 lg:pt-10"
      id="კონტაქტი"
    >
      <h2 className="w-full text-center flex justify-center  mb-10 ">
        კონტაქტი
      </h2>

      <div className="bg-body rounded-lg p-2 text-center flex flex-col w-full py-5 text-gray-400">
        <Link
          href="https://www.facebook.com/profile.php?id=61561361720819"
          target="_blank"
          className="p-4"
        >
          facebook
        </Link>

        <Link href="tel:+995 598 58 70 01" className="p-4">
          +995 598 58 70 01
        </Link>

        <Link
          href="mailto:lukaakhalbedashvili@gmail.com"
          target="_blank"
          className="p-4"
        >
          lukaakhalbedashvili@gmail.com
        </Link>
      </div>
    </section>
  );
};

export default Contact;
