import React, { useState, useEffect } from "react";
import BurgerNavLink from "./burger-nav-link";

const BurgerMenu = ({ burgerIsOpen }) => {
  const [openMenu] = useState(burgerIsOpen);
  const [navLinks] = useState([
    { content: "Home", position: "first" },
    { content: "About Me", position: "middle" },
    { content: "Projects", position: "last" },
  ]);
  useEffect(() => {
    console.log(burgerIsOpen);
  });
  return (
    <div
      className={`${
        openMenu ? "flex" : "hidden"
      } burger   z-40 top-0 right-0 h-screen w-7/12 bg-black  flex-col justify-center items-center`}
    >
      <div className="burger-inner flex container w-11/12 flex-col">
        {navLinks.map(({ content, position }, index) => (
          <BurgerNavLink content={content} position={position} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BurgerMenu;
