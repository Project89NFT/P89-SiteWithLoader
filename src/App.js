import Home from "./components/Home/Home";
import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Mint from "./components/Mint/Mint";
import Header from "./components/Home/Header/Header";
import Marketplace from "./components/Marketplace/Marketplace";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mint" element={<Mint />} />
        <Route path="/marketplace" element={<Marketplace />} />
      </Routes>
    </>
  );
}

export default App;
