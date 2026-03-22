import { Link } from "react-router-dom";

export default function FilmTV() {
  return (
    <div className="min-h-screen bg-[#F1F1F0] text-white px-12 pt-32 pb-20">
      <h1 className="text-5xl mb-16 text-black font-main">Our Slate</h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Life Is Better With No Ice */}
        <Link
          to="/film-tv/lifeisbetterwithnoice"
          className="group block overflow-hidden rounded-lg"
        >
          <div className="relative">
            {/* Image */}
            <img
              src="/images/libwni.jpeg"
              alt="Life Is Better With No Ice"
              className="w-full h-105 object-cover transform transition duration-500 group-hover:scale-110"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition duration-500"></div>

            {/* Title */}
            <div className="absolute bottom-6 left-6 text-2xl font-semibold">
              Life Is Better With No Ice
            </div>

            {/* Status tab */}
            <div className="absolute top-4 left-4 bg-white text-black text-xs px-3 py-1 rounded-full">
              Post-Production
            </div>
          </div>
        </Link>

        {/* The 12th Man */}
        <Link
          to="/film-tv/twelfthman"
          className="group block overflow-hidden rounded-lg"
        >
          <div className="relative">
            <img
              src="/images/TwelfthMan.jpg"
              alt="The 12th Man"
              className="w-full h-105 object-cover transform transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition duration-500"></div>

            <div className="absolute bottom-6 left-6 text-2xl font-semibold">
              The 12th Man
            </div>

            <div className="absolute top-4 left-4 bg-white text-black text-xs px-3 py-1 rounded-full">
              Development
            </div>
          </div>
        </Link>
        <Link
          to="/film-tv/bentriver"
          className="group block overflow-hidden rounded-lg"
        >
          <div className="relative">
            <img
              src="/images/BentRiver.jpeg"
              alt="Bent River"
              className="w-full h-105 object-cover transform transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition duration-500"></div>

            <div className="absolute bottom-6 left-6 text-2xl font-semibold">
              Bent River
            </div>

            <div className="absolute top-4 left-4 bg-white text-black text-xs px-3 py-1 rounded-full">
              Development
            </div>
          </div>
        </Link>
        <Link
          to="/film-tv/degrees"
          className="group block overflow-hidden rounded-lg"
        >
          <div className="relative">
            <img
              src="/images/Degrees.JPG"
              alt="Degrees"
              className="w-full h-105 object-cover transform transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition duration-500"></div>

            <div className="absolute bottom-6 left-6 text-2xl font-semibold">
              Degrees
            </div>

            <div className="absolute top-4 left-4 bg-white text-black text-xs px-3 py-1 rounded-full">
              Development
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
