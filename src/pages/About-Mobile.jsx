import React, { useState, useEffect } from "react";
import AboutBtn from "../components/About/about-btn";
import AboutDesc from "../components/About/about-desc";
import AboutSlider from "../components/About/about-slider";
import JsonData from "../data/about.json";

const AboutMobile = () => {
  const [currentContent, setCurrentContent] = useState(0);

  useEffect(() => {
    const next = (currentContent + 1) % JsonData.length;
    if (currentContent >= JsonData.length) {
      setCurrentContent(0);
    }
  }, [currentContent]);

  const handleChange = (index) => {
    setCurrentContent(index);
  };

  return (
    <div className="flex flex-col items-center my-20">
      <p className="text-white font-normal text-2xl">About me</p>

      <div className="flex flex-col container mx-auto py-6 items-center justify-between">
        {JsonData.map((item, index) => {
          return (
            <>
              <AboutBtn
                handleChange={handleChange}
                cta={item.title}
                isActive={currentContent === index}
                key={index}
                index={index}
              />
              {item.type === "paragraph" ? (
                <AboutDesc
                  desc={item.desc}
                  isActive={currentContent === index}
                  key={index}
                />
              ) : (
                <AboutSlider />
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default AboutMobile;
