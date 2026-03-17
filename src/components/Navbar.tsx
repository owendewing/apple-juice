import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <nav
      className={`absolute top-0 left-0 w-full z-50 ${
        isHome
          ? "text-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.9)]"
          : "text-black bg-[#F1F1F0]"
      }`}
    >
      <div className="w-full px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src={isHome ? "/images/whitelogo.png" : "/images/blacklogo.png"}
            alt="Logo"
            className="h-20 w-auto"
          />
        </Link>

        {/* Navigation */}
        <div className="flex space-x-10 text-m font-main">
          <Link to="/film-tv" className="hover:opacity-60 transition-colors">
            Film & TV
          </Link>

          <Link to="/about" className="hover:opacity-60 transition-colors">
            About
          </Link>

          <a href="#contact" className="hover:opacity-60 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
