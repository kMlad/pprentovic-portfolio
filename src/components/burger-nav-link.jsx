import React from "react";

const BurgerNavLink = ({ content, position }) => {
  return (
    <div className="bnav-link">
      {position === "first" ? (
        <hr className="border border-powerPurple w-full" />
      ) : null}
      <p className="my-10 text-center text-white text-xl font-light transition duration-300 hover:text-powerPurple cursor-pointer">
        {content}
      </p>
      <hr className="border border-powerPurple w-full" />
    </div>
  );
};

export default BurgerNavLink;
