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
import ProjectsPage from "./pages/Projects";
import Footer from "./components/footer";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import DigitalDesktop from "./assets/project-pages/digital-desktop.png";
import DigitalMobile from "./assets/project-pages/digital-mobile.png";
import IllustrationsDesktop from "./assets/project-pages/illustrations-desktop.png";
import IllustrationsMobile from "./assets/project-pages/illustrations-mobile.png";
import ItalianDesktop from "./assets/project-pages/italian-desktop.png";
import ItalianMobile from "./assets/project-pages/italian-mobile.png";
import LogoDesktop from "./assets/project-pages/logo-desktop.png";
import LogoMobile from "./assets/project-pages/logo-mobile.png";
import MarketingMapDesktop from "./assets/project-pages/marketing-map-desktop.png";
import MarketingMapMobile from "./assets/project-pages/marketing-map-mobile.png";

function App() {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  const handleBurger = () => {
    setBurgerIsOpen(!burgerIsOpen);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header handleBurger={handleBurger} burgerIsOpen={burgerIsOpen} />
        <BurgerMenu burgerIsOpen={burgerIsOpen} key={1} />
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/projects" exact>
            <ProjectsPage />
          </Route>
          <Route path="/digital-portfolio" exact>
            <div className="w-screen bg-white">
              <img
                src={DigitalDesktop}
                alt="404"
                className="w-full hidden md:block"
              />
              <img
                src={DigitalMobile}
                alt="404"
                className="w-full block md:hidden"
              />
            </div>
          </Route>
          <Route path="/italian-restaurant" exact>
            <div className="w-screen bg-white">
              <img
                src={ItalianDesktop}
                alt="404"
                className="w-full hidden md:block"
              />
              <img
                src={ItalianMobile}
                alt="404"
                className="w-full block md:hidden"
              />
            </div>
          </Route>
          <Route path="/marketing-map" exact>
            <div className="w-screen bg-white">
              <img
                src={MarketingMapDesktop}
                alt="404"
                className="w-full hidden md:block"
              />
              <img
                src={MarketingMapMobile}
                alt="404"
                className="w-full block md:hidden"
              />
            </div>
          </Route>
          <Route path="/illustrations" exact>
            <div className="w-screen bg-white">
              <img
                src={IllustrationsDesktop}
                alt="404"
                className="w-full hidden md:block"
              />
              <img
                src={IllustrationsMobile}
                alt="404"
                className="w-full block md:hidden"
              />
            </div>
          </Route>
          <Route path="/logos" exact>
            <div className="w-screen bg-white">
              <img
                src={LogoDesktop}
                alt="404"
                className="w-full hidden md:block"
              />
              <img
                src={LogoMobile}
                alt="404"
                className="w-full block md:hidden"
              />
            </div>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
