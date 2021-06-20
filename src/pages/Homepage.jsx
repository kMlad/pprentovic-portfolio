import React, { useState } from "react";
import CustomButton from "../components/custom-button";
import AboutMobile from "./About-Mobile";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between md:w-6/12 md:mx-auto items-center py-10">
        <div className="flex flex-col justify-between items-center">
          <p className="font-extralight text-3xl text-white">
            Hello I am Petar
          </p>
          <p className="font-extrabold text-6xl text-white text-center my-5">
            UX/UI & <br /> Graphic <br /> Designer
          </p>
          <p className="text-sm text-white font-extralight mb-9">
            I like to solve problems and create designs
          </p>
          <CustomButton />
        </div>
        <div
          className="mt-9 bg-spike-mobile bg-center bg-cover bg-no-repeat"
          style={{ height: "291px", width: "291px" }}
        ></div>
      </div>
      <div className="md:hidden">
        <AboutMobile />
      </div>
    </>
  );
};

export default HomePage;
