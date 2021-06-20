import React, { useEffect } from "react";

const AboutDesc = ({
  desc,
  isActive,
  img,
  title = null,
  setCurrentContent = null,
  currentContent,
  dataLength = null,
}) => {
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
            className={`
          bg-circle-triangle py-16 bg-center bg-cover bg-no-repeat flex flex-col justify-between items-center md:items-start`}
          >
            <p className="text-white w-10/12 text-center md:text-left text-base font-light leading-8">
              {desc}
            </p>
          </div>
          <div className="btns hidden md:flex justify-start items-center">
            <div
              onClick={() => {
                currentContent === 0
                  ? setCurrentContent(dataLength - 1)
                  : setCurrentContent(currentContent - 1);
              }}
              className="bg-black border rounded-full cursor-pointer mr-4 border-powerPurple text-white text-base font-light flex justify-center items-center h-8 w-24"
            >
              prev
            </div>
            <div
              onClick={() => {
                setCurrentContent(currentContent + 1);
              }}
              className="bg-black border rounded-full cursor-pointer ml-4 border-powerPurple text-white text-base font-light flex justify-center items-center h-8 w-24"
            >
              next
            </div>
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
