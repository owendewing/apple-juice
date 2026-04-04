export default function TwelfthMan() {
  return (
    <div className="min-h-screen bg-[#F1F1F0] text-white">
      <div
        className="h-[60vh] bg-cover bg-[center_30%] md:bg-[center_20%] lg:bg-[center_20%] flex items-end"
        style={{ backgroundImage: "url('/images/TwelfthMan.jpg')" }}
      >
        <div className=" w-full p-12">
          <h1 className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-secondary drop-shadow-[0_10px_30px_rgba(0,0,0,0.95)]">
            THE 12TH MAN
          </h1>
        </div>
      </div>

      <div className=" px-12 pt-10 pb-20">
        <p className="text-lg text-black mb-10 leading-relaxed font-secondary uppercase">
          Inspired by a true story, a promising high school quarterback chasing
          a state title forms an unexpected friendship with Miles, a boy with
          special needs whose presence around the team reveals that the greatest
          victories aren’t found on the scoreboard. 
        </p>
        <div className="space-y-3 text-black ">
          <p className="font-third">
            <span className="font-main">Directed By:</span> Jillian Caforio
          </p>

          <p className="font-third">
            <span className="font-main">Written By:</span> Jillian Caforio and
            Sam Jenson
          </p>

          <p className="font-third">
            <span className="font-main">Producer:</span> Jillian Caforio
          </p>
        </div>
      </div>
    </div>
  );
}
