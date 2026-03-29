import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import FilmTV from "./pages/FilmTV";
import LifeNoIce from "./pages/Lifenoice";
import TwelfthMan from "./pages/TwelfthMan";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import BentRiver from "./pages/BentRiver";
import Degrees from "./pages/Degrees";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/film-tv" element={<FilmTV />} />
        <Route path="/film-tv/lifeisbetterwithnoice" element={<LifeNoIce />} />
        <Route path="/film-tv/twelfthman" element={<TwelfthMan />} />
        <Route path="/film-tv/bentriver" element={<BentRiver />} />
        <Route path="/film-tv/degrees" element={<Degrees />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}
