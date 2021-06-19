import { useState } from "react";
import "./App.css";
import BurgerMenu from "./components/burger-menu";
import Header from "./components/header";
import CustomButton from "./components/custom-button";
import HomePage from "./pages/Homepage-Mobile";

function App() {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  const handleBurger = () => {
    setBurgerIsOpen(!burgerIsOpen);
  };

  return (
    <div className="App">
      <Header handleBurger={handleBurger} burgerIsOpen={burgerIsOpen} />
      <BurgerMenu burgerIsOpen={burgerIsOpen} key={1} />
      <HomePage />
    </div>
  );
}

export default App;
