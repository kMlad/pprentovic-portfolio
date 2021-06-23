import React from "react";
import { Link } from "react-router-dom";

const BurgerNavLink = ({ content, position, slug }) => {
  return (
    <div className="bnav-link">
      {position === "first" ? (
        <hr className="border border-powerPurple w-full" />
      ) : null}
      <Link
        to={slug}
        className="my-10 block text-center text-white text-xl font-light transition duration-300 hover:text-powerPurple cursor-pointer"
      >
        {content}
      </Link>
      <hr className="border border-powerPurple w-full" />
    </div>
  );
};

export default BurgerNavLink;
