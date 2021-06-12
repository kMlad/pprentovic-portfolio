import React from "react";

const NavLink = ({ content, position, mobile }) => {
  return (
    <li
      className={`text-white text-xl font-light 
        ${
          position === "first"
            ? "mr-10 lg:mr-14"
            : position === "last"
            ? "ml-10 lg:ml-14"
            : "mx-10 lg:mx-14"
        } 
        transition duration-300 hover:text-powerPurple border-0 hover:border-b hover:border-powerPurple cursor-pointer`}
    >
      {content}
    </li>
  );
};

export default NavLink;
