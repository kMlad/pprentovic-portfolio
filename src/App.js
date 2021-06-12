import { useState } from "react";
import "./App.css";
import BurgerMenu from "./components/burger-menu";
import Header from "./components/header";

function App() {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  const handleBurger = () => {
    setBurgerIsOpen(!burgerIsOpen);
  };

  return (
    <div className="App">
      <Header handleBurger={handleBurger} burgerIsOpen={burgerIsOpen} />
      <BurgerMenu burgerIsOpen={burgerIsOpen} key={1} />
    </div>
  );
}

export default App;
