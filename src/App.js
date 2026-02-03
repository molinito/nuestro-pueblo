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
import AyerHoy from "./components/AyerHoy/AyerHoy";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TerminosCondiciones from "./components/TerminosCondiciones/TerminosCondiciones";
import Donacion from "./components/Donacion/Donacion";
import { Analytics } from "@vercel/analytics/react";
import Error404 from "./components/Error404/Error404";

const App = () => {
  return (
    
    <div className="App">
      <BrowserRouter>
      <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/lugares" element={<Lugares />} />
          <Route path="/lugares/:lugarId" element={<Lugares />} />
          <Route path="/acerca-de" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/costumbres" element={<Costumbres />} />
          <Route path="/costumbres/:costumbreId" element={<Costumbres />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/gastronomia" element={<Gastronomia />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/historia/:historiaId" element={<Historia />} />
          <Route path="/personajes" element={<Personajes />} />
          <Route path="/personajes/:personajeId" element={<Personajes />} />
          <Route path="/ayer-hoy" element={<AyerHoy />} />
          <Route path="/ayer-hoy/:ayerHoyId" element={<AyerHoy />} />
          <Route path="/terminos" element={<TerminosCondiciones />} />
          <Route path="/donacion" element={<Donacion />} />
          <Route path="*" element={<Error404 />} />
        </Routes>

        <Footer />
        <Analytics />
      </BrowserRouter>
    </div>
    
  );
};

export default App;
