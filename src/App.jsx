import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/header.jsx";
import Footer from "./components/Footer/footer.jsx";
import Cards from "./components/Card/Cards.jsx";

// REACT ROUTER
import { Routes, Route, useLocation } from "react-router-dom";
import Aperitivo from "./components/Views/Aperitivo/Aperitivo.jsx";
import Cena from "./components/Views/Cena/Cena.jsx";
// REACT ROUTER

export default function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ? <Header /> : null}
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/aperitivo" element={<Aperitivo />} />
        <Route path="/Cena" element={<Cena />} />
      </Routes>
      <Footer />
    </>
  );
}
