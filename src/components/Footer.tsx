import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-6">
        {/* Logo */}
        <img
          src="/images/WhiteSmallLogo.png"
          alt="AJWNI Logo"
          className="h-30 w-auto"
        />

        {/* Navigation Links */}
        <div className="flex space-x-10 text-sm font-main">
          <Link to="/film-tv" className="hover:text-gray-400 transition-colors">
            Film & TV
          </Link>

          <Link to="/about" className="hover:text-gray-400 transition-colors">
            About
          </Link>

          <Link to="/contact" className="hover:text-gray-400 transition-colors">
            Contact
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} AJWNI Entertainment
        </p>
      </div>
    </footer>
  );
}
