export default function LifeNoIce() {
  return (
    <div className="min-h-screen bg-[#F1F1F0] text-black  ">
      <div
        className="h-[60vh] bg-cover bg-[center_30%] md:bg-[center_20%] lg:bg-[center_20%] flex items-end"
        style={{ backgroundImage: "url('/images/libwni.jpeg')" }}
      >
        <div className=" w-full p-12">
          <h1 className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-secondary drop-shadow-[0_10px_30px_rgba(0,0,0,0.95)]">
            LIFE IS BETTER WITH NO ICE
          </h1>
        </div>
      </div>
      <div className="px-12 pt-10 pb-20">
        <p className="text-lg text-black mb-10 leading-relaxed font-secondary uppercase">
          "Life Is Better With No Ice" is an inspiring documentary that follows
          a filmmaker’s journey creating an award-winning short film starring
          her brother with special needs, proving that authentic inclusion on
          and off set is not only possible, but transformative. Blending
          personal storytelling with insights from Joey Travolta and Inclusion
          Films, the film reveals how giving people with special needs the
          opportunity to portray their own experiences and work on set brings a
          depth, honesty, and humanity to cinema that Hollywood can't fake.
          Thoughtful inclusion ultimately leads to richer stories and stronger
          storytellers.
        </p>

        <div className="space-y-3 text-black">
          <p className="font-third">
            <span className="font-main text-black">Directed By:</span> Jillian
            Caforio
          </p>

          <p className="font-third">
            <span className="font-main text-black">Starring:</span> Calvin
            Caforio, Jillian Caforio, Joey Travolta, Inclusion Films
          </p>

          <p className="font-third">
            <span className="font-main text-black">Produced By:</span> Jillian
            Caforio
          </p>

          <p className="font-third">
            <span className="font-main text-black">Release Date:</span> TBD
          </p>

          <p className="font-third">
            <span className="font-main text-black">Rating:</span> Not Rated
          </p>
        </div>
      </div>
    </div>
  );
}
