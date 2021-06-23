import React from "react";

const CustomButton = ({ hide }) => {
  return (
    <div
      className={` ${
        hide ? "hidden" : "flex"
      } md:flex justify-center items-center py-5 px-20 w-max transition duration-200 hover:bg-powerPurple border-powerPurple border-2 cursor-pointer`}
    >
      <p className="font-bold text-2xl text-white">Let's talk!</p>
    </div>
  );
};

export default CustomButton;
