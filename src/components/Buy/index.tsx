import React from "react";
import Input from "../Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { sendToBack } from "@/server-actions";
import { useRouter } from "next/navigation";

const Buy = () => {
  const plusPointRate = 400;

  const router = useRouter();

  const validationSchema = Yup.object().shape({
    plusPointsToSell: Yup.number()
      .typeError("")
      .required("სავალდებულოა")
      .min(400, "მინიმალური რაოდენობა 400 ქულაა"),

    requiredLari: Yup.number()
      .typeError("")
      .required("სავალდებულოა")
      .min(1, "მინიმალური რაოდენობა 1 ლარია"),
  });

  const formik = useFormik({
    initialValues: {
      plusPointsToSell: undefined,
      requiredLari: undefined,
    },
    validationSchema,
    onSubmit: async ({ requiredLari }) => {
      const response = await sendToBack(requiredLari!);
      router.push(response.data._links.redirect.href);
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
  } = formik;

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <Input
        placeholder="მისაღები პლუს ქულების რაოდენობა"
        type="number"
        value={values.plusPointsToSell}
        name="plusPointsToSell"
        onBlurHandler={handleBlur}
        onChange={(e) => {
          const requiredLari = Number(e.target.value) / plusPointRate;
          setFieldValue("requiredLari", requiredLari.toFixed(2));
          return handleChange(e);
        }}
        errorMessage={errors.plusPointsToSell}
        permanentText={
          touched.plusPointsToSell && values.plusPointsToSell ? "PLUS ქულა" : ""
        }
      />

      <Input
        permanentText={values.requiredLari ? "₾" : ""}
        placeholder="გასაცემი ლარი"
        type="number"
        value={values.requiredLari}
        name="requiredLari"
        onBlurHandler={(e) => {
          setFieldValue("requiredLari", Number(e.target.value).toFixed(2));
          return handleBlur(e);
        }}
        onChange={(e) => {
          const plusPointsToSell = Number(e.target.value) * plusPointRate;
          setFieldValue("plusPointsToSell", Math.round(plusPointsToSell));
          return handleChange(e);
        }}
        errorMessage={touched.requiredLari && errors.requiredLari}
      />

      <p className="text-smallSecondaryTxt">400 Plus ქულა = 1.00 ₾</p>

      <div>
        <button className={`p-6 bg-main w-full rounded-lg mt-10`} type="submit">
          {`გადახდა ( ${values.requiredLari ? values.requiredLari : 0} ₾ )`}
        </button>
      </div>
    </form>
  );
};

export default Buy;
