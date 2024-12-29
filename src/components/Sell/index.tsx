import Image from "next/image";
import React, { useState } from "react";
import Alert from "../Alert";
import Calculator from "../Calculator";
import Dialog from "../Modal";
import { Slider } from "../Slider";

const Sell = () => {
  const [isAlert, setIsAlert] = useState<boolean>();
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  return (
    <div className="text-center px-2 text  font-bold mt-10 ">
      <div className="absolute bottom-3 right-3 flex">
        <div className="relative flex justify-center items-center mr-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-ping bg-main"></div>
          <div className="w-2 h-2 bg-primary rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-main"></div>
        </div>

        <p className="text-xs">24/7 - ზე ხელმისაწვდომია</p>
      </div>

      <h2 className="leading-7 lg:leading-9">
        გადმორიცხე ნებისმიერი რაოდენობის <b>PLUS ქულა</b> პირად ნომერზე :{" "}
      </h2>

      {isAlert && <Alert text="დაკოპირდა" onClose={() => setIsAlert(false)} />}

      <div
        className="text-main whitespace-nowrap flex items-center justify-center cursor-pointer leading-7 lg:leading-9"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText("08101039664");
            setIsAlert(true);
          } catch (err) {
            console.error("Failed to copy text: ", err);
          }
        }}
      >
        <a className="leading-7 lg:leading-9">08101039664</a>

        <Image
          src={"copy-icon.svg"}
          alt="copy"
          width={15}
          height={15}
          className="inline mx-2 fill-main"
        />
      </div>

      <h2 className="leading-7 lg:leading-9">
        და მიიღე ღირებულების <a className="text-main">110%</a> ხუთი წუთის
        განმავლობაში
      </h2>

      <div className="mt-10">
        <Calculator />
      </div>

      <button
        className="absolute left-4 bottom-3 text-sm  flex items-center text-main cursor-pointer"
        onClick={() => setIsDialogOpen(true)}
      >
        <p>ინსტრუქცია</p>

        <Image
          src={"info-icon.svg"}
          alt="copy"
          width={15}
          height={15}
          className="inline mx-1 m-0"
        />
      </button>

      <Dialog isOpen={isDialogOpen} handleClose={() => setIsDialogOpen(false)}>
        <Slider />
      </Dialog>
    </div>
  );
};

export default Sell;
