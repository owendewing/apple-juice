import { useState } from "react";

export default function Sizzle() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Background Video Section */}
      <div className="relative bg-black flex items-center justify-center h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        <video
          src="/videos/LIFE_Trailer.mp4"
          loop
          autoPlay
          playsInline
          muted
          preload="auto"
          className="w-full h-full object-cover"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Play Button */}
        <button
          onClick={() => setOpen(true)}
          className="absolute z-10 border border-white text-white px-6 py-3 text-sm tracking-wide hover:bg-white hover:text-black transition cursor-pointer rounded-2xl"
        >
          Play Upcoming Documentary Trailer
        </button>
      </div>

      {/* Fullscreen Trailer Modal */}
      {open && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-8 text-white text-lg hover:opacity-70 cursor-pointer"
          >
            Close
          </button>

          <video
            src="/videos/LIFE_Trailer.mp4"
            controls
            autoPlay
            className="w-[90vw] h-[90vh] object-contain"
          />
        </div>
      )}
    </>
  );
}
