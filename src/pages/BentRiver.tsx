export default function BentRiver() {
  return (
    <div className="min-h-screen bg-[#F1F1F0] text-white ">
      <div
        className="h-[60vh] bg-cover bg-[center_30%] md:bg-[center_20%] lg:bg-[center_20%] flex items-end"
        style={{ backgroundImage: "url('/images/BentRiver.jpeg')" }}
      >
        <div className=" w-full p-12">
          <h1 className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-secondary drop-shadow-[0_10px_30px_rgba(0,0,0,0.95)]">
            BENT RIVER
          </h1>
        </div>
      </div>
      <div className="px-12 pt-10 pb-20">
        <p className="text-lg text-black mb-10 leading-relaxed font-secondary uppercase">
          In the seemingly idyllic lakeside town of Bent River, three childhood
          friends - the police chief, a successful businessman, and the local
          minister - and their families, find themselves entangled in a web of
          crime and deception when a missing person's case threatens to unravel
          their deepest secrets and hidden pasts.
        </p>
        <div className="space-y-3 text-black ">
          <p className="font-third">
            <span className="font-main">Written By:</span> Jillian Caforio and
            Jonathan Caforio
          </p>
        </div>
      </div>
    </div>
  );
}
