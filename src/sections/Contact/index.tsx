import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <section
      className="pt-[10%] w-full  flex items-center flex-col px-2 pb-20 "
      id="კონტაქტი"
    >
      <h1 className="w-full text-center flex justify-center  mb-10 ">
        კონტაქტი
      </h1>

      <div className="bg-body rounded-lg p-2 text-center flex flex-col w-full py-5">
        <Link
          href="https://www.facebook.com/profile.php?id=61561361720819"
          target="_blank"
          className="p-4"
        >
          facebook
        </Link>

        <Link href="tel:+995 595 20 62 09" className="p-4">
          +995 595 20 62 09
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
