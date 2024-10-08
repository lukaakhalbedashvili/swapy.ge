import React, { useEffect } from "react";
import Input from "../Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { getPaymentLinkAction } from "@/server-actions";
import { PaymentMethods } from "@/server-actions/server_actions_types";
import CountUp from "react-countup";

const Buy = () => {
  const myRate = 1.6;
  const bogRate = 400;
  const minBuyTransaction = 4000;
  const maxBuyTransaction = 40000;

  const router = useRouter();

  const validationSchema = Yup.object().shape({
    plusPointsBuy: Yup.number()
      .typeError("")
      .required("სავალდებულოა")
      .min(minBuyTransaction, `მინიმალური რაოდენობა ${minBuyTransaction} ქულაა`)
      .max(
        maxBuyTransaction,
        `ტრანზაქციის მაქსიმალური რაოდენობა ${maxBuyTransaction} ქულაა`
      ),

    requiredLariAmount: Yup.number()
      .typeError("")
      .required("სავალდებულოა")
      .min(16, "მინიმალური რაოდენობა 16 ლარია")
      .max(160, "მინიმალური რაოდენობა 160 ლარია"),
  });

  const formik = useFormik({
    initialValues: {
      plusPointsBuy: undefined,
      requiredLariAmount: undefined,
    },
    validationSchema,
    onSubmit: async ({ requiredLariAmount }) => {
      // const response = await getPaymentLinkAction({
      //   requiredLariAmount: requiredLariAmount!,
      //   paymentMethod: PaymentMethods.card,
      // });
      // router.push(response._links.redirect.href);
    },
  });

  const {
    values,
    handleBlur,
    handleChange,
    touched,
    errors,
    setFieldValue,
    handleSubmit,
    validateForm,
  } = formik;

  useEffect(() => {
    validateForm();
  }, [values, validateForm]);

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 flex flex-col justify-between"
    >
      <div className="flex flex-col w-full items-center justify-center">
        <p className="text-sm my-5">ხელმისაწვდომი პლუს ქულების რაოდენობა</p>

        <h3 className="text-2xl ">
          <CountUp end={370051} />
        </h3>
      </div>

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
        errorMessage={touched.plusPointsBuy && errors.plusPointsBuy}
        permanentText={values.plusPointsBuy ? "PLUS ქულა" : ""}
      />

      <Input
        permanentText={values.requiredLariAmount ? "₾" : ""}
        placeholder="ღირებულება ლარში"
        type="number"
        value={values.requiredLariAmount}
        name="requiredLariAmount"
        onBlurHandler={(e) => {
          setFieldValue(
            "requiredLariAmount",
            Number(e.target.value).toFixed(2)
          );
          return handleBlur(e);
        }}
        onChange={(e) => {
          const plusPointsBuy = Number(e.target.value) * (1 / myRate) * bogRate;

          setFieldValue("plusPointsBuy", Math.round(plusPointsBuy));
          return handleChange(e);
        }}
        errorMessage={touched.requiredLariAmount && errors.requiredLariAmount}
      />

      <div className="flex flex-col items-center w-full justify-center">
        <p className="text-smallSecondaryTxt">
          {bogRate} Plus ქულა = {myRate.toFixed(2)} ₾
        </p>
        {/* <p className="text-smallSecondaryTxt">{bogRate} Plus ქულა = 1.00 ₾</p> */}

        {values.plusPointsBuy && (
          <p className=" mt-4 text-white">
            ანგარიშზე დაგერიცხებათ {values.plusPointsBuy} PLUS ქულა
          </p>
        )}
      </div>

      <button className={`p-6 bg-main w-full rounded-lg mt-10`} type="submit">
        {`გადახდა ( ${
          values.requiredLariAmount ? values.requiredLariAmount : 0
        } ₾ )`}
      </button>
    </form>
  );
};

export default Buy;
