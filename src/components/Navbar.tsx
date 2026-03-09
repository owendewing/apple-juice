export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-100 text-white">
      <div className="w-full px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <img src="/images/whitelogo.png" alt="Logo" className="h-25 w-auto" />
        </div>

        {/* Navigation */}
        <div className="flex space-x-10 text-sm font-main">
          <a href="#film-tv" className="hover:text-gray-500 transition-colors">
            Film & TV
          </a>

          <a href="#about" className="hover:text-gray-500 transition-colors">
            About
          </a>

          <a href="#contact" className="hover:text-gray-500 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
