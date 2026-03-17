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
    <div className="relative w-full h-screen bg-black flex items-center justify-center">
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
      <div className="absolute bottom-30 left-30 z-10 max-w-xl">
        <h1 className="font-secondary text-white text-5xl md:text-7xl tracking-wide text-left drop-shadow-[0_10px_30px_rgba(0,0,0,0.95)]">
          INCLUSION WITH INTENTION
        </h1>
      </div>
    </div>
  );
}
