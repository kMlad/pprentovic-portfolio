import React, { useState } from "react";
import CustomButton from "../components/custom-button";
import AboutMobile from "./About-Mobile";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col justify-between items-center py-10">
        <p className="font-extralight text-3xl text-white">Hello I am Petar</p>
        <p className="font-extrabold text-6xl text-white text-center my-5">
          UX/UI & <br /> Graphic <br /> Designer
        </p>
        <p className="text-sm text-white font-extralight mb-9">
          I like to solve problems and create designs
        </p>
        <CustomButton />
        <div
          className="mt-9 bg-spike-mobile bg-center bg-cover bg-no-repeat"
          style={{ height: "291px", width: "291px" }}
        ></div>
      </div>

      <AboutMobile />
    </>
  );
};

export default HomePage;
