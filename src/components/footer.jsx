import React from "react";
import CustomButtonMobile from "./custom-button-mobile";
import fbIcon from "../assets/facebook.png";
import igIcon from "../assets/instagram.png";
import liIcon from "../assets/linkedin.png";
import emailIcon from "../assets/mail.png";
import CustomFooterButton from "./custom-footer-btn";
import PPLogo from "../assets/pp-logo.png";
import { BrowserRouter, Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" w-screen py-8  bg-black mx-auto px-7 md:px-32 flex flex-col justify-between items-center">
      <div className="w-full pb-4 text-sm md:text-2xl  flex flex-row justify-end items-center text-white font-medium pr-1 md:pr-5">
        Social Media
      </div>
      <div className="w-full flex flex-row justify-between items-center md:mb-10">
        <div className="hidden md:flex flex-col items-start justify-between">
          <Link
            to="/"
            className="text-white text-base cursor-pointer hover:text-powerPurple transition duration-200 mb-2"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white text-base cursor-pointer hover:text-powerPurple transition duration-200"
          >
            About me
          </Link>
          <Link
            to="/projects"
            className="text-white text-base cursor-pointer hover:text-powerPurple transition duration-200 mt-2"
          >
            Projects
          </Link>
        </div>
        <div className="md:ml-20">
          <CustomButtonMobile />
          <CustomFooterButton hide={true} />
        </div>
        <div className="flex flex-row justify-between items-center">
          <a href="https://www.facebook.com/petar.prentovic">
            <img
              src={fbIcon}
              alt="fb"
              className="w-6 h-6 md:h-10 md:w-10 mr-3 md:mr-8 hover:scale-110 transition transform duration-200"
            />
          </a>
          <a href="https://www.instagram.com/pprentovic/">
            <img
              src={igIcon}
              alt="ig"
              className="w-6 h-6 md:h-10 md:w-10 hover:scale-110 transition transform duration-200"
            />
          </a>
          <a href="https://www.linkedin.com/in/petar-prentovic-802b54201/">
            <img
              src={liIcon}
              alt="li"
              className="w-6 h-6 md:h-10 md:w-10 ml-3 md:ml-8 hover:scale-110 transition transform duration-200"
            />
          </a>
        </div>
      </div>
      <div className="w-full flex flex-row justify-between pt-6">
        <div className="flex flex-row items-center opacity-20">
          <img
            src={PPLogo}
            alt="pp"
            style={{ height: "55px" }}
            className="hidden md:block"
          />
          <div className="flex flex-col items-start justify-center pl-2">
            <p className="text-white font-black text-footerSmall md:text-base">
              PETAR PRENTOVIC
            </p>
            <p className="text-white text-footerSmall md:text-base">
              &copy; All rights reserved 2021
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <a
            className="text-white underline text-footerSmall md:text-base"
            href="mailto:prentovicp10@gmail.com"
          >
            prentovicp10@gmail.com
          </a>
          <img
            className="h-3 md:h-10 pl-2 md:pl-3"
            src={emailIcon}
            alt="mail"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
