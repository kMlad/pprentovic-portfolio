import React from "react";

import ProgressBar from "../progress-bar";

const AboutSlider = ({ skills, isActive }) => {
  return (
    <div
      className={`w-8/12 m-16 ${
        isActive ? "flex" : "hidden"
      } flex-col justify-center items-center`}
    >
      {skills.map((item, index) => {
        return (
          <div className={`w-full `}>
            <p className="text-white text-xl font-medium">{item.title}</p>
            <ProgressBar
              color={item.color}
              bgcolor={item.bgcolor}
              completed={item.value}
              key={`skill-${index}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default AboutSlider;
