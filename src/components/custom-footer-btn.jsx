import React from "react";

const CustomFooterButton = ({ hide }) => {
  return (
    <div
      className={` ${
        hide ? "hidden" : "flex"
      } md:flex justify-center items-center py-3 px-12 w-max transition duration-200 hover:bg-powerPurple border-powerPurple border-2 cursor-pointer`}
    >
      <p className="font-bold text-2xl text-white">Let's talk!</p>
    </div>
  );
};

export default CustomFooterButton;
