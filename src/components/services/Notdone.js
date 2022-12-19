import React from 'react'
import { useTranslation } from "react-i18next";
import { Footer } from "./../footer/Footer";

export const Notdone = () => {
    const { t } = useTranslation();
  return (
    <>
      <h1
        style={{
          color: "#000",
          fontSize: 70,
          textAlign: "center",
          margin: "auto",
        }}
      >
        {t("dont have products")}
      </h1>
      <Footer/>
    </>
  )
}