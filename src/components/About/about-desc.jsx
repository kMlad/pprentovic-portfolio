import React from "react";

const AboutDesc = ({ desc, isActive }) => {
  return (
    <div
      className={`${
        isActive ? "" : "hidden"
      } bg-circle-triangle py-16 bg-center bg-cover bg-no-repeat flex flex-col justify-between items-center`}
    >
      <p className="text-white w-8/12 text-center text-base font-light leading-8">
        {desc}
      </p>
    </div>
  );
};

export default AboutDesc;
