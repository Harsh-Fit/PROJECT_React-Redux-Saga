import NavBar from "./Components/NavBar";
import Card from "./Components/Cards";
import Basket from "./Components/Basket";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
