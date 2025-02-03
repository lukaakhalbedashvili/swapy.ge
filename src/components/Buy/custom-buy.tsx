import React, { useState, useEffect } from "react";
import Input from "../Input";
import { useFormik } from "formik";
import CountUp from "react-countup";
import Image from "next/image";
import Alert from "../Alert";
import Dialog from "../Modal";
import { Slider2 } from "../Slider2";

const CustomBuy = () => {
  const myRate = 1.35;
  const bogRate = 400;
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      personalId: "",
      plusPointsBuy: undefined,
      requiredLariAmount: undefined,
    },
    onSubmit: async () => {},
  });

  const {
    values,
    handleBlur,
    handleChange,
    touched,
    errors,
    setFieldValue,
    validateForm,
  } = formik;

  useEffect(() => {
    validateForm();
  }, [values, validateForm]);

  const [isAlert, setIsAlert] = useState<boolean>();

  return (
    <>
      {isAlert && <Alert text="დაკოპირდა" onClose={() => setIsAlert(false)} />}

      <div className="flex flex-col w-full items-center justify-center mb-5 md:mb-10">
        <p className="my-5 text-sm">ხელმისაწვდომი პლუს ქულების რაოდენობა</p>

        <h3 className="text-2xl">
          <CountUp end={12284962} />
        </h3>
      </div>

      <div className="flex flex-col items-center w-full">
        <h2 className="leading-7 lg:leading-9 text-center">
          გადმორიცხე მინიმუმ <b className="text-main">100 ლარი</b> ანგარიშის
          ნომერზე :{" "}
        </h2>

        <div
          className="text-main whitespace-nowrap flex items-center justify-center cursor-pointer leading-7 lg:leading-9 text-center"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText("GE32BG0000000499497078");
              setIsAlert(true);
            } catch (err) {
              console.error("Failed to copy text: ", err);
            }
          }}
        >
          <a className="leading-7 lg:leading-9">GE32BG0000000499497078</a>

          <Image
            src={"copy-icon.svg"}
            alt="copy"
            width={15}
            height={15}
            className="inline mx-2 fill-main"
          />
        </div>

        <h2 className="leading-7 lg:leading-9 text-center">
          და მიიღე PLUS ქულები სანაცვლოდ, 5 წუთის განმავლობაში
        </h2>

        <p className="text-sm text-center textmain mt-5">
          გადმორიცხვისას დანიშნულების ველში უთითებთ მიმღებ{" "}
          <b className="text-main">პირად ნომერს</b> (პირად ნომერს, რომელზეც პლუს
          ქულები უნდა დაგერიცხოთ) წინააღმდეგ შემთხვევაში თანხა უკან
          დაგიბრუნდებათ.
        </p>

        <h3 className="text-main mt-8 mb-4">კალკულატორი</h3>

        <Input
          placeholder="შესაძენი პლუს ქულების რაოდენობა"
          type="number"
          value={values.plusPointsBuy}
          name="plusPointsBuy"
          onBlurHandler={handleBlur}
          onChange={(e) => {
            const requiredLariAmount =
              (Number(e.target.value) / bogRate) * myRate;
            setFieldValue("requiredLariAmount", requiredLariAmount.toFixed(2));
            return handleChange(e);
          }}
          wrapperClassName="w-full   mt-0"
          errorMessageClassName="text-sm"
          errorMessage={touched.plusPointsBuy && errors.plusPointsBuy}
          permanentText={values.plusPointsBuy ? "PLUS ქულა" : ""}
        />

        <Input
          permanentText={values.requiredLariAmount ? "₾" : ""}
          placeholder="ღირებულება ლარში"
          type="number"
          value={values.requiredLariAmount}
          name="requiredLariAmount"
          wrapperClassName="w-full mt-0"
          onBlurHandler={(e) => {
            setFieldValue(
              "requiredLariAmount",
              Number(e.target.value).toFixed(2)
            );
            return handleBlur(e);
          }}
          onChange={(e) => {
            const plusPointsBuy =
              Number(e.target.value) * (1 / myRate) * bogRate;

            setFieldValue("plusPointsBuy", Math.round(plusPointsBuy));
            return handleChange(e);
          }}
          errorMessageClassName="text-sm"
          errorMessage={touched.requiredLariAmount && errors.requiredLariAmount}
        />

        {values.plusPointsBuy && (
          <p className="mt-4 text-active text-sm  text-center mb-5">
            პირად ნომერზე დაგერიცხებათ
            <span className="font-bold"> {values.plusPointsBuy} </span> PLUS
            ქულა
          </p>
        )}

        <div className="flex flex-col items-center w-full justify-center mb-8">
          <p className="text-smallSecondaryTxt">
            {bogRate} Plus ქულა = {myRate.toFixed(2)} ₾
          </p>
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
      </div>

      <Dialog isOpen={isDialogOpen} handleClose={() => setIsDialogOpen(false)}>
        <Slider2 />
      </Dialog>
    </>
  );
};

export default CustomBuy;
