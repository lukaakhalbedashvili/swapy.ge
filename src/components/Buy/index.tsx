import React, { useState, useEffect } from "react";
import Input from "../Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import CountUp from "react-countup";
import { getPaymentLinkAction } from "@/server-actions/payments";
import { useRouter } from "next/navigation";

const Buy = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const myRate = 1.4;
  const bogRate = 400;
  const minBuyTransaction = 4000;
  const maxBuyTransaction = 80000;

  const validationSchema = Yup.object().shape({
    personalId: Yup.string()
      .required("პირადი ნომერი სავალდებულოა")
      .length(11, "პირადი ნომერი უნდა შედგებოდეს 11 სიმბოლოსგან"),
    plusPointsBuy: Yup.number()
      .typeError("")
      .required("სავალდებულოა")
      .min(minBuyTransaction, `მინიმალური რაოდენობა ${minBuyTransaction} ქულაა`)
      .max(
        maxBuyTransaction,
        `მაქსიმალური რაოდენობა ${maxBuyTransaction} ქულაა`
      ),
    requiredLariAmount: Yup.number().typeError("").required("სავალდებულოა"),
  });

  const formik = useFormik({
    initialValues: {
      personalId: "",
      plusPointsBuy: undefined,
      requiredLariAmount: undefined,
    },
    validationSchema,
    onSubmit: async ({ requiredLariAmount, personalId }) => {
      setLoading(true);
      try {
        if (!requiredLariAmount) return;

        const response = await getPaymentLinkAction({
          amount: "1",
          // amount: requiredLariAmount,
          govId: personalId,
        });

        if (response._links.redirect.href) {
          router.push(response._links.redirect.href);
        }
      } catch (error) {
        console.error("Error fetching payment link:", error);
      }
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
        <p className="my-5">ხელმისაწვდომი პლუს ქულების რაოდენობა</p>

        <h3 className="text-2xl">
          <CountUp end={2284962} />
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
        errorMessageClassName="text-sm"
        errorMessage={touched.requiredLariAmount && errors.requiredLariAmount}
      />

      <Input
        placeholder="პირადი ნომერი"
        type="text"
        value={values.personalId}
        name="personalId"
        onBlurHandler={handleBlur}
        onChange={handleChange}
        errorMessageClassName="text-sm"
        errorMessage={touched.personalId && errors.personalId}
      />

      <div className="flex flex-col items-center w-full justify-center">
        <p className="text-smallSecondaryTxt">
          {bogRate} Plus ქულა = {myRate.toFixed(2)} ₾
        </p>

        {values.plusPointsBuy && values.personalId && !errors.personalId && (
          <p className="mt-4 text-smallSecondaryTxt text-sm  text-center">
            პირად ნომერზე
            <span className="text-white"> {values.personalId} </span>
            დაგერიცხებათ
            <span className="text-white"> {values.plusPointsBuy} </span> PLUS
            ქულა
          </p>
        )}
      </div>

      <button
        className={`p-6 bg-main w-full rounded-lg mt-10 flex justify-center items-center`}
        type="submit"
        disabled={loading}
      >
        {loading ? (
          <div className="animate-spin rounded-full h-6 w-6 border-t-4 border-b-4 border-white"></div>
        ) : (
          `გადახდა ( ${values.requiredLariAmount || 0} ₾ )`
        )}
      </button>
    </form>
  );
};

export default Buy;
