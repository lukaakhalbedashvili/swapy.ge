import React, { useEffect } from "react";
import Input from "../Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { getPaymentLinkAction } from "@/server-actions";
import { PaymentMethods } from "@/server-actions/server_actions_types";

const Buy = () => {
  const plusPointRate = 350;

  const router = useRouter();

  const validationSchema = Yup.object().shape({
    plusPointsBuy: Yup.number()
      .typeError("")
      .required("სავალდებულოა")
      .min(plusPointRate, `მინიმალური რაოდენობა ${plusPointRate} ქულაა`),

    requiredLariAmount: Yup.number()
      .typeError("")
      .required("სავალდებულოა")
      .min(1, "მინიმალური რაოდენობა 1 ლარია"),
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
    <form onSubmit={handleSubmit} className="mt-6">
      <Input
        placeholder="შესაძენი პლუს ქულების რაოდენობა"
        type="number"
        value={values.plusPointsBuy}
        name="plusPointsBuy"
        onBlurHandler={handleBlur}
        onChange={(e) => {
          const requiredLariAmount = Number(e.target.value) / plusPointRate;
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
          const plusPointsBuy = Number(e.target.value) * plusPointRate;
          setFieldValue("plusPointsBuy", Math.round(plusPointsBuy));
          return handleChange(e);
        }}
        errorMessage={touched.requiredLariAmount && errors.requiredLariAmount}
      />

      <p className="text-smallSecondaryTxt">
        {plusPointRate} Plus ქულა = 1.00 ₾
      </p>

      {values.plusPointsBuy && (
        <p className=" mt-4 text-white">
          ანგარიშზე დაგერიცხებათ {values.plusPointsBuy} PLUS ქულა
        </p>
      )}

      <div>
        <button className={`p-6 bg-main w-full rounded-lg mt-10`} type="submit">
          {`გადახდა ( ${
            values.requiredLariAmount ? values.requiredLariAmount : 0
          } ₾ )`}
        </button>
      </div>
    </form>
  );
};

export default Buy;
