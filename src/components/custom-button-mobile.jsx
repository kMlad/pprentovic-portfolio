import React from "react";

const CustomButtonMobile = () => {
  return (
    <div
      style={{ height: "33px", width: "130px" }}
      className="flex md:hidden  justify-center items-center transition duration-200 hover:bg-powerPurple border-powerPurple border-2 cursor-pointer"
    >
      <p style={{ fontSize: "13px" }} className="font-bold text-white">
        Let's talk!
      </p>
    </div>
  );
};

export default CustomButtonMobile;
