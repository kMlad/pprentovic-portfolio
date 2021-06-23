import React, { useState, useEffect } from "react";
import JsonData from "../data/projects.json";
import ArrowNext from "../assets/arrow-next.svg";
import ArrowPrev from "../assets/arrow-prev.svg";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  const [currentPage, setCurrentPage] = useState("ux/ui");
  const [currentProject, setCurrentProject] = useState(0);
  const [l, setL] = useState(
    JsonData.filter((item) => item.type === currentPage).length
  );

  useEffect(() => {
    setL(JsonData.filter((item) => item.type === currentPage).length);
    setCurrentProject(0);
  }, [currentPage, l]);

  const handleChange = (index, direction) => {
    if (currentProject === 0 && direction === "-") {
      setCurrentProject(l - 1);
    } else if (currentProject === l - 1 && direction === "+") {
      setCurrentProject(0);
    } else setCurrentProject(index);
  };

  return (
    <div className="container flex mx-auto flex-col items-center md:pt-6">
      <h3 className="text-2xl text-white font-normal mb-16">Projects</h3>
      <div className="font-bold mb-16 text-white text-sm">
        <span
          onClick={() => setCurrentPage("graphic")}
          className={`${
            currentPage === "graphic"
              ? "opacity-100 border-b-4"
              : "opacity-50 border-b-2"
          } cursor-pointer`}
        >
          &nbsp;&nbsp;&nbsp;Graphic Design&nbsp;&nbsp;&nbsp;
        </span>
        <span
          onClick={() => setCurrentPage("ux/ui")}
          className={`${
            currentPage === "ux/ui"
              ? "opacity-100 border-b-4"
              : "opacity-50 border-b-2"
          } cursor-pointer`}
        >
          &nbsp;&nbsp;&nbsp;UX/UI Design&nbsp;&nbsp;&nbsp;
        </span>
      </div>
      {JsonData.filter((item) => item.type === currentPage).map(
        (item, index, arr) => {
          return (
            <div
              className={`w-screen relative ${
                index === currentProject ? "flex" : "hidden"
              } sm:w-full md:mb-16 py-40 border-4   flex-col justify-center items-center md:items-start ${
                item.type === "ux/ui" ? "md:pl-40" : "md:pl-72"
              }`}
              style={{
                backgroundColor: item.color1,
                borderColor: item.color2,
                height: "562px",
              }}
            >
              <div className="hidden md:flex flex-col absolute justify-center items-center right-0 h-full w-1/3 bg-white">
                <div className="w-7/12 h-72 flex justify-between items-start flex-col">
                  <p
                    style={{ color: item.color1 }}
                    className={` text-left text-sm font-normal`}
                  >
                    {item.role}
                  </p>
                  <p
                    style={{ color: item.color1 }}
                    className="text-left text-lg font-bold"
                  >
                    {item.desc}
                  </p>
                  <Link
                    to={item.slug}
                    style={{ color: item.color1, borderColor: item.color1 }}
                    className="hidden md:flex justify-center items-center text-sm mx-auto border-black border-2 rounded-full w-full h-10 bg-white"
                  >
                    View Project
                  </Link>
                </div>
              </div>
              <div className="flex absolute right-6 top-4 md:left-6 justify-self-start  justify-center items-center w-11 h-6 bg-black rounded-full text-white text-xs">
                <span>{index + 1}</span>/<span>{l}</span>
              </div>
              <div
                className={`flex flex-row absolute bottom-2 md:self-center ${
                  item.type === "ux/ui" ? "md:-ml-40" : "md:-ml-72"
                } md:-bottom-12 `}
              >
                {arr.map((item, index) => (
                  <div
                    onClick={() => setCurrentProject(index)}
                    className={`h-4 w-4 md:h-6 md:w-6 mx-2 cursor-pointer  rounded-full`}
                    style={{
                      backgroundColor: `${
                        index === currentProject
                          ? window.innerWidth < 768
                            ? "black"
                            : item.color1
                          : "white"
                      }`,
                    }}
                  ></div>
                ))}
              </div>
              <p
                className={`${
                  item.type === "graphic" ? "hidden" : ""
                } text-white mb-16 text-base md:self-stretch md:ml-32`}
              >
                {item.role}
              </p>
              <div>
                <img
                  src={ArrowPrev}
                  onClick={() => handleChange(currentProject - 1, "-")}
                  alt="go back"
                  className="h-4 cursor-pointer absolute left-4 md:-left-16 top-1/2 md:h-6"
                />
                <h3
                  className={`text-2xl md:text-4xl xxs:w-full  md:w-full leading-10 ${
                    item.type === "ux/ui" ? "xs:w-10/12 xs:mx-auto" : ""
                  }  md:mx-0 font-bold text-white mb-16 md:mb-0 text-center`}
                >
                  {item.mainTitle} <br />{" "}
                  <span
                    className={`hidden md:inline-block ${
                      item.type === "graphic" ? "md:hidden" : ""
                    } mt-8 text-center text-white font-normal`}
                  >
                    for {item.client}
                  </span>
                </h3>
                <Link
                  to={item.slug}
                  alt="view"
                  className="flex md:hidden justify-center items-center text-sm mx-auto absolute left-1/4 sm:left-1/3 border-black border-2 rounded-full w-1/2 sm:w-4/12 h-10 bg-white"
                >
                  View
                </Link>

                <img
                  src={ArrowNext}
                  onClick={() => handleChange(currentProject + 1, "+")}
                  alt="go forwards"
                  className={`h-4 md:h-6 absolute right-4 
                  top-1/2 md:-right-16 cursor-pointer`}
                />
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default ProjectsPage;
