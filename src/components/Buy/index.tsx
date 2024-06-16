import React, { useEffect } from "react";
import Input from "../Input";
import { useFormik } from "formik";
import * as Yup from "yup";

const Buy = () => {
  const plusPointRate = 400;

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
      plusPointsToSell: "",
      requiredLari: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const { values, handleBlur, handleChange, touched, errors, setFieldValue } =
    formik;

  useEffect(() => {
    if (values?.plusPointsToSell) {
      const requiredLari = Number(values.plusPointsToSell) / plusPointRate;

      setFieldValue("requiredLari", requiredLari);
    }
  }, [values.plusPointsToSell, setFieldValue]);

  useEffect(() => {
    if (values?.requiredLari) {
      const plusPointsToSell = Number(values.requiredLari) * plusPointRate;

      setFieldValue("plusPointsToSell", plusPointsToSell);
    }
  }, [values.requiredLari, setFieldValue]);

  return (
    <form onSubmit={formik.handleSubmit} className="mt-6">
      <Input
        placeholder="მისაღები პლუს ქულების რაოდენობა"
        type="number"
        value={values.plusPointsToSell}
        name="plusPointsToSell"
        onBlurHandler={(e) => {
          setFieldValue("requiredLari", Number(values.requiredLari).toFixed(2));
          return handleBlur(e);
        }}
        onChange={handleChange}
        errorMessage={touched.plusPointsToSell && errors.plusPointsToSell}
        permanentText={values.plusPointsToSell ? "PLUS ქულა" : ""}
      />

      <Input
        permanentText={values.requiredLari ? "₾" : ""}
        placeholder="გასაცემი ლარი"
        type="number"
        value={values.requiredLari}
        name="requiredLari"
        onBlurHandler={(e) => {
          setFieldValue("requiredLari", parseFloat(e.target.value).toFixed(2));
          return handleBlur(e);
        }}
        onChange={handleChange}
        errorMessage={touched.requiredLari && errors.requiredLari}
      />

      <p className="text-smallSecondaryTxt">400 Plus ქულა = 1.00 ₾</p>

      <div>
        <button className="p-6 bg-main w-full rounded-lg mt-10">
          {`გადახდა ( ${Number(values.requiredLari).toFixed(2)} ₾ )`}
        </button>
      </div>
    </form>
  );
};

export default Buy;
