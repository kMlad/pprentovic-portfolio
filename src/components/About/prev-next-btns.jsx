import React from "react";

const PrevNextBtns = ({
  setCurrentContent,
  currentContent,
  dataLength,
  isActive,
}) => {
  return (
    <div
      className={`btns hidden  justify-start items-center ${
        isActive ? "md:flex" : "hidden"
      }`}
    >
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
  );
};

export default PrevNextBtns;
