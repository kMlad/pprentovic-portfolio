import React, { useEffect } from "react";

const AboutDesc = ({ desc, isActive, img, title = null }) => {
  return (
    <>
      <div
        className={`outer ${
          isActive ? "" : "hidden"
        } flex flex-col md:flex-row md:items-start justify-center`}
      >
        <div className="text-and-nav flex items-start justify-start flex-col">
          <h3 className="hidden md:block text-4xl text-powerPurple font-medium">
            {title}
          </h3>
          <div
            style={{ height: "400px" }}
            className={`
          bg-circle-triangle py-16 bg-center bg-cover bg-no-repeat flex flex-col justify-between items-center md:items-start`}
          >
            <p className="text-white w-10/12 text-center md:text-left text-base font-light leading-8">
              {desc}
            </p>
          </div>
        </div>
        <img
          src={img}
          alt="placeholder"
          className="h-80 w-72 mx-auto md:mx-0"
        />
      </div>
    </>
  );
};

export default AboutDesc;
