import { useState } from "react";
import "./App.css";
import BurgerMenu from "./components/burger-menu";
import Header from "./components/header";
import CustomButton from "./components/custom-button";
import HomePage from "./pages/Homepage";
import AboutMobile from "./pages/About-Mobile";
import AboutDesc from "./components/About/about-desc";
import AboutPage from "./pages/About";
import AboutSlider from "./components/About/about-slider";

function App() {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  const handleBurger = () => {
    setBurgerIsOpen(!burgerIsOpen);
  };

  return (
    <div className="App">
      <Header handleBurger={handleBurger} burgerIsOpen={burgerIsOpen} />
      <BurgerMenu burgerIsOpen={burgerIsOpen} key={1} />
      {/* <HomePage /> */}
      {/* <AboutMobile /> */}
      {/* <AboutDesc
        isActive={true}
        title={"Me as a person"}
        desc={
          "For my hobbies I would definitely choose basketball as a primary one and one that has also thought me some really key values and made me the person I am today. It showed me how to be a team player, always on time, how to be dedicated and believe that we grow through the hard times. Although my path went in another way I will always love the game and appreciate the lessons. I also love playing cards listening to music and going on adventures"
        }
        img={
          "https://raw.githubusercontent.com/kMlad/pprentovic-portfolio/master/src/assets/peki-basket.png"
        }
      /> */}
      <AboutPage />
      {/* <AboutSlider /> */}
    </div>
  );
}

export default App;
