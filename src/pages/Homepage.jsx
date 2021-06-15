import React from "react";
import CustomButton from "../components/custom-button";
import PekiSlikaMobile from "../assets/peki-mobile.png";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col justify-between items-center ">
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
      <div className="flex flex-col items-center mt-20">
        <p className="text-white font-normal text-2xl">About me</p>
        <img
          src={PekiSlikaMobile}
          alt="peki lepotanot"
          style={{ width: "173px", height: "208px", marginTop: "73px" }}
        />
        <div className="bg-circle-triangle py-16 bg-center bg-cover bg-no-repeat flex flex-col justify-between items-center">
          <p className="text-white w-8/12 text-center text-base font-light leading-8">
            Entrepreneurial and hardworking UX/UI Designer, looking for a design
            related opportunities. After completing an extensive graphic design
            program, found my new passion for UX/UI. What really fires me up is
            building great products and being engaged with people who want to
            unlock their potential.
          </p>
          <br />
          <p className="text-white w-8/12 text-center text-base font-light leading-8">
            I enjoy solving complex problems and turning them into simple and
            beautiful interface designs.
          </p>
          <br />

          <p className="text-white w-8/12 text-center text-base font-light leading-8">
            When I'm not designing you will find me going for long walks or
            shooting some hoops.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
