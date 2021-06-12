import React, { useState } from "react";
import NavLink from "./nav-link";
import pplogo from "../assets/pp-logo.png";

const Header = ({ handleBurger, burgerIsOpen }) => {
  const [navLinks] = useState([
    { content: "Home", position: "left" },
    { content: "About Me", position: "middle" },
    { content: "Projects", position: "right" },
  ]);

  return (
    <div className="header w-10/12 md:w-9/12  flex py-8 flex-row container mx-auto justify-between items-center">
      <img
        src={pplogo}
        alt="pplogo"
        style={{ height: "72px" }}
        className="transform duration-300 hover:scale-110 cursor-pointer"
      ></img>
      <nav>
        <ul className="hidden flex-row justify-center items-center md:flex">
          {navLinks.map(({ content, position }, index) => (
            <NavLink content={content} position={position} key={index} />
          ))}
        </ul>
        <div
          className={`${burgerIsOpen ? "bg-x-icon" : "bg-burger-icon"} 
          bg-center block md:hidden bg-cover h-8 w-8 z-50 relative cursor-pointer transform hover:scale-125 duration-300`}
          onClick={handleBurger}
        ></div>
      </nav>
    </div>
  );
};

export default Header;
