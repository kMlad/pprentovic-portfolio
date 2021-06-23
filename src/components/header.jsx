import pplogo from "../assets/pp-logo.png";
import {
  BrowserRouter,
  Link,
  withRouter,
  Route,
  Router,
} from "react-router-dom";

const Header = ({ handleBurger, burgerIsOpen }) => {
  return (
    <div className="header w-10/12 md:w-9/12  flex py-8 flex-row container mx-auto justify-between items-center">
      {/* <BrowserRouter> */}
      <Link to="/home">
        <img
          src={pplogo}
          alt="pplogo"
          className="transform h-12 md:h-20 duration-300 hover:scale-110 cursor-pointer"
        ></img>
      </Link>
      <nav>
        <ul className="hidden flex-row justify-center items-center md:flex">
          <li
            className={`text-white text-xl font-light mr-10 lg:mr-14 transition duration-300 hover:text-powerPurple border-0 hover:border-b hover:border-powerPurple cursor-pointer`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`text-white text-xl font-light mr-10 lg:mr-14 transition duration-300 hover:text-powerPurple border-0 hover:border-b hover:border-powerPurple cursor-pointer`}
          >
            <Link to="/about">About</Link>
          </li>
          <li
            className={`text-white text-xl font-light mr-10 lg:mr-14 transition duration-300 hover:text-powerPurple border-0 hover:border-b hover:border-powerPurple cursor-pointer`}
          >
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
        <div
          className={`${burgerIsOpen ? "bg-x-icon" : "bg-burger-icon"} 
          bg-center block md:hidden bg-cover h-6 w-6 z-50 relative cursor-pointer transform hover:scale-125 duration-300`}
          onClick={handleBurger}
        ></div>
      </nav>
      {/* </BrowserRouter> */}
      {/* <BrowserRouter>
        <Link to="/about">asd</Link>
      </BrowserRouter> */}
    </div>
  );
};

export default Header;
