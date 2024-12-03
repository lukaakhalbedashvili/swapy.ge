import React, { useEffect, useState } from "react";
import Input from "../Input";
import { useFormik } from "formik";

const Sell = () => {
  const BOG_RATE = 400;

  const formik = useFormik({
    initialValues: {
      plusPointsToSell: "",
      receivedMoney: "",
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
    handleSubmit,
    validateForm,
  } = formik;

  useEffect(() => {
    validateForm();
  }, [values, validateForm]);

  return (
    <form onSubmit={handleSubmit} className="mt-6" autoComplete="off">
      <h3 className="text-main">კალკულატორი</h3>

      <Input
        placeholder="გასაყიდი პლუს ქულების რაოდენობა"
        type="number"
        value={values.plusPointsToSell}
        name="plusPointsToSell"
        onBlurHandler={handleBlur}
        onChange={(e) => {
          const receivedMoney = (Number(e.target.value) * 1.1) / BOG_RATE;
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
          const plusPointsToSell = (Number(e.target.value) / 1.1) * BOG_RATE;

          setFieldValue("plusPointsToSell", Math.round(plusPointsToSell));
          return handleChange(e);
        }}
        errorMessage={touched.receivedMoney && errors.receivedMoney}
      />

      <p className="text-smallSecondaryTxt">400 Plus ქულა = 1.10 ₾</p>

      <p
        className={`mb-10 mt-7  text-white lg:mb-0 ${
          values.receivedMoney ? "visible" : "invisible"
        }`}
      >
        {`დაგერიცხებათ ${values.receivedMoney} ₾`}
      </p>
    </form>
  );
};

export default Sell;
