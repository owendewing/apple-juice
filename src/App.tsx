import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import FilmTV from "./pages/FilmTV";
import LifeNoIce from "./pages/Lifenoice";
import TwelfthMan from "./pages/TwelfthMan";
import About from "./pages/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/film-tv" element={<FilmTV />} />
        <Route path="/film-tv/lifeisbetterwithnoice" element={<LifeNoIce />} />
        <Route path="/film-tv/twelfthman" element={<TwelfthMan />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}
