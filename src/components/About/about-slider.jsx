import React from "react";
import Boicki from "../../assets/drveni-boicki.png";

import ProgressBar from "../progress-bar";

const AboutSlider = ({ skills, isActive, title = null }) => {
  return (
    <div
      style={{ height: "440px" }}
      className={`w-8/12 md:w-full ${
        isActive ? "flex" : "hidden"
      } flex-row  items-center justify-between`}
    >
      <div
        className={` flex-col justify-center w-full md:w-5/12 items-center md:items-start md:justify-between`}
      >
        <h3 className="hidden mb-14 md:block text-powerPurple text-4xl">
          {title}
        </h3>
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
      <img src={Boicki} alt="boicki" className="hidden md:inline-block" />
    </div>
  );
};

export default AboutSlider;
