export default function TwelfthMan() {
  return (
    <div className="min-h-screen bg-[#F1F1F0] text-white">
      <div
        className="h-[60vh] bg-cover bg-[center_12%] sm:bg-[center_18%] md:bg-[center_14%] lg:bg-[center_14%] flex items-end"
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
          Inspired by a true story, Miles, a teenager with intellectual
          disabilities and a deep passion for football, gets an unlikely
          opportunity to become his high school team's manager. As he struggles
          to overcome his fears and earn his place among the players, his
          determination and infectious personality help forge an extraordinary
          bond with a team chasing a state championship.
        </p>
        <div className="space-y-3 text-black ">
          <p className="font-third">
            <span className="font-main">Directed By:</span> Jillian Caforio
          </p>

          <p className="font-third">
            <span className="font-main">Written By:</span> Jillian Caforio
          </p>

          <p className="font-third">
            <span className="font-main">Producer:</span> Jillian Caforio
          </p>
        </div>
      </div>
    </div>
  );
}
