import React, { useState, useEffect } from "react";
import BurgerNavLink from "./burger-nav-link";

const BurgerMenu = ({ burgerIsOpen }) => {
  const [navLinks, setNavLinks] = useState([
    { content: "Home", position: "first", slug: "/" },
    { content: "About Me", position: "middle", slug: "/about" },
    { content: "Projects", position: "last", slug: "/projects" },
  ]);

  return (
    <div
      className={`${
        burgerIsOpen ? "flex fixed" : "hidden"
      } burger  md:hidden bg-opacity-90  z-40 top-0 right-0 h-screen w-7/12 bg-black  flex-col justify-center items-center`}
    >
      <div className="burger-inner flex container w-9/12 flex-col">
        {navLinks.map(({ content, position, slug }, index) => (
          <BurgerNavLink
            content={content}
            position={position}
            key={index}
            slug={slug}
          />
        ))}
      </div>
    </div>
  );
};

export default BurgerMenu;
