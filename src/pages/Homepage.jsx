import React, { useState } from "react";
import CustomButton from "../components/custom-button";
import AboutMobile from "./About-Mobile";
import ProjectsPage from "./Projects";
import Spike from "../assets/homepage-item-big.png";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between md:w-8/12 md:mx-auto items-center py-10">
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
          className="mt-9 bg-spike-mobile bg-center bg-cover bg-no-repeat md:hidden"
          style={{ height: "291px", width: "291px" }}
        ></div>
        <img
          src={Spike}
          alt="spike"
          style={{ height: "536px" }}
          className="hidden md:block"
        />
      </div>
      <div className="md:hidden">
        <AboutMobile />
        <div className="md:hidden">
          <ProjectsPage />
        </div>
      </div>
    </>
  );
};

export default HomePage;
