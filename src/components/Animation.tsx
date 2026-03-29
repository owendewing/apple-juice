export default function AnimationVideo() {
  return (
    <div className="w-full h-[40vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      {" "}
      <video
        src="/videos/AJWNI-Animation.mp4"
        loop
        autoPlay
        playsInline
        muted
        preload="auto"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
