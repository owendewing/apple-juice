import { useEffect, useState } from "react";

const images = [
  "/images/hero1.jpeg",
  "/images/hero3.jpeg",
  "/images/hero4.jpeg",
  "/images/hero5.jpeg",
  "/images/hero6.jpeg",
  "/images/hero7.jpeg",
  "/images/hero8.jpeg",
  "/images/hero9.jpeg",
  "/images/hero10.jpeg",
  "/images/hero11.jpeg",
  "/images/hero12.jpeg",
];

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[50vh] sm:h-[70vh] md:h-[85vh] lg:h-screen bg-black flex items-center justify-center">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 scale-105 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div
        className="absolute z-10 
  max-w-55 sm:max-w-xs md:max-w-lg lg:max-w-xl
  bottom-10 left-6 
  sm:bottom-16 sm:left-10 
  md:bottom-24 md:left-16 
  lg:bottom-30 lg:left-30"
      >
        <h1 className="font-secondary text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-wide text-left drop-shadow-[0_10px_30px_rgba(0,0,0,0.95)]">
          INCLUSION WITH INTENTION
        </h1>
      </div>
    </div>
  );
}
