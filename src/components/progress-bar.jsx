import React from "react";

const ProgressBar = ({ color, bgcolor, completed }) => {
  return (
    <div
      className={`h-5 w-full rounded-full mb-16`}
      style={{ backgroundColor: bgcolor }}
    >
      <div
        className={`h-full rounded-full`}
        style={{ width: `${completed}%`, backgroundColor: color }}
      >
        {/* <span>{`${completed}%`}</span> */}
      </div>
    </div>
  );
};

export default ProgressBar;
