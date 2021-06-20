import React from "react";

const AboutBtn = ({ cta, isActive, handleChange, index, length }) => {
  return (
    <div
      onClick={() => handleChange(index)}
      className={`${
        isActive
          ? "border-white bg-powerPurple "
          : "bg-black border-powerPurple transition duration-100 hover:bg-powerPurple hover:text-white"
      }  text-white ${
        index === 0 ? "mb-9" : index === length - 1 ? "mt-9" : "my-9"
      } cursor-pointer text-xl flex items-center justify-center rounded-full  border `}
      style={{ height: "72px", width: "257px" }}
    >
      {cta}
    </div>
  );
};

export default AboutBtn;
