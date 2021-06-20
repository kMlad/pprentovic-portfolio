import React, { useEffect, useState } from "react";
import JsonData from "../data/about.json";
import VertLine from "../assets/VertLine.svg";
import AboutBtn from "../components/About/about-btn";
import AboutDesc from "../components/About/about-desc";
import AboutSlider from "../components/About/about-slider";
import PrevNextBtns from "../components/About/prev-next-btns";

const AboutPage = () => {
  const [currentContent, setCurrentContent] = useState(0);

  useEffect(() => {
    const next = (currentContent + 1) % JsonData.length;
    const prev = (currentContent - 1) % JsonData.length;
    if (currentContent >= JsonData.length) {
      setCurrentContent(0);
    }
  }, [currentContent]);

  const handleChange = (index) => {
    setCurrentContent(index);
  };

  return (
    <>
      <div className="container py-10 flex flex-col md:flex-row items-center justify-start mx-auto">
        <div
          style={{ height: "500px" }}
          className="btns flex flex-col justify-between items-center"
        >
          {JsonData.map((item, index) => (
            <AboutBtn
              handleChange={handleChange}
              cta={item.title}
              isActive={currentContent === index}
              key={"btn" + index}
              index={index}
              length={JsonData.length}
            />
          ))}
        </div>
        <img src={VertLine} alt="lalala" className="mx-16" />
        <div className="desc w-full">
          {JsonData.map((item, index) => {
            return (
              <>
                {item.type === "paragraph" ? (
                  <AboutDesc
                    desc={item.desc}
                    isActive={currentContent === index}
                    key={"desc" + index}
                    img={item.img}
                    length={JsonData.length - 1}
                    title={item.title}
                    handleChange={handleChange}
                  />
                ) : (
                  <AboutSlider
                    skills={item.skills}
                    isActive={currentContent === index}
                    title={item.title}
                  />
                )}
                <PrevNextBtns
                  setCurrentContent={setCurrentContent}
                  currentContent={currentContent}
                  dataLength={JsonData.length}
                  isActive={currentContent === index}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AboutPage;
