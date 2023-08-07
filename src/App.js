import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/Inicio/Inicio";
import Lugares from "../src/components/Lugares/Lugares";
import Acerca from "../src/components/Acerca/Acerca";
import Contacto from "./components/Contacto/Contacto";
import Costumbres from "./components/Costumbres/Costumbres";
import Eventos from "./components/Eventos/Eventos";
import Gastronomia from "./components/Gastronomia/Gastronomia";
import Historia from "./components/Historia/Historia";
import Personajes from "./components/Personajes/Personajes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/lugares" element={<Lugares />} />
          <Route path="/acerca-de" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/costumbres" element={<Costumbres />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/gastronomia" element={<Gastronomia />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/personajes" element={<Personajes />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  );
};

export default App;
