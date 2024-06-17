import React, { useEffect } from "react";
import Input from "../Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { getPaymentLinkAction } from "@/server-actions";
import { PaymentMethods } from "@/server-actions/server_actions_types";

const Sell = () => {
  const plusPointRate = 450;

  const BOG_RATE = 400;

  const router = useRouter();

  const validationSchema = Yup.object().shape({
    plusPointsToSell: Yup.number()
      .typeError("")
      .required("სავალდებულოა")
      .min(plusPointRate, `მინიმალური რაოდენობა ${plusPointRate} ქულაა`),

    receivedMoney: Yup.number().typeError("").required("სავალდებულოა"),
  });

  const formik = useFormik({
    initialValues: {
      plusPointsToSell: undefined,
      receivedMoney: undefined,
    },
    validationSchema,
    onSubmit: async ({ plusPointsToSell }) => {
      const result = (
        Math.floor((plusPointsToSell! / BOG_RATE) * 100) / 100
      ).toFixed(2);

      const response = await getPaymentLinkAction({
        paymentMethod: PaymentMethods.bog_loyalty,
        requiredLariAmount: (plusPointsToSell! / BOG_RATE).toFixed(2),
      });

      console.log(response.data._links.redirect.href);

      // router.push(response.data._links.redirect.href);
      console.log(plusPointsToSell! / BOG_RATE, result);
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
    <form onSubmit={handleSubmit} className="mt-6">
      <Input
        placeholder="გასაყიდი პლუს ქულების რაოდენობა"
        type="number"
        value={values.plusPointsToSell}
        name="plusPointsToSell"
        onBlurHandler={handleBlur}
        onChange={(e) => {
          const receivedMoney = Number(e.target.value) / plusPointRate;
          setFieldValue("receivedMoney", receivedMoney.toFixed(2));
          return handleChange(e);
        }}
        errorMessage={touched.plusPointsToSell && errors.plusPointsToSell}
        permanentText={
          touched.plusPointsToSell && values.plusPointsToSell ? "PLUS ქულა" : ""
        }
      />

      <Input
        permanentText={values.receivedMoney ? "₾" : ""}
        placeholder="ღირებულება ლარში"
        type="number"
        value={values.receivedMoney}
        name="receivedMoney"
        onBlurHandler={(e) => {
          setFieldValue("receivedMoney", Number(e.target.value).toFixed(2));
          return handleBlur(e);
        }}
        onChange={(e) => {
          const plusPointsToSell = Number(e.target.value) * plusPointRate;
          setFieldValue("plusPointsToSell", Math.round(plusPointsToSell));
          return handleChange(e);
        }}
        errorMessage={touched.receivedMoney && errors.receivedMoney}
      />

      <p className="text-smallSecondaryTxt">
        {plusPointRate} Plus ქულა = 1.00 ₾
      </p>

      {values.receivedMoney && (
        <p className=" mt-4 text-white">
          ანგარიშზე დაგერიცხებათ {values.receivedMoney} ₾
        </p>
      )}

      <div>
        <button className={`p-6 bg-main w-full rounded-lg mt-10`} type="submit">
          {`გადახდა ( ${
            values.plusPointsToSell ? values.plusPointsToSell : 0
          } PLUS ქულა )`}
        </button>
      </div>
    </form>
  );
};

export default Sell;
