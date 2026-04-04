import { useState } from "react";

export default function About() {
  const [showBio, setShowBio] = useState(false);

  return (
    <div className="bg-white text-black min-h-screen">
      <div
        className="h-[60vh] bg-cover bg-center flex items-end"
        style={{ backgroundImage: "url('/images/AppleJuiceStill.jpeg')" }}
      >
        <div className=" w-full p-12">
          <h1 className="text-white text-6xl font-secondary drop-shadow-[0_10px_30px_rgba(0,0,0,0.95)]">
            ABOUT
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-20 text-lg leading-relaxed space-y-6 text-black font-secondary">
        <p className="font-third">
          AJWNI Entertainment is a next-generation entertainment company focused
          on producing and supporting film, television, and digital projects
          that authentically represent the special needs community.
        </p>

        <p className="font-third">
          The company grew out of the award-winning short film "Apple Juice with
          No Ice" and continues to expand through original productions, talent
          advocacy, and strategic partnerships across the industry. With a deep
          commitment to thoughtful inclusion, AJWNI Entertainment sits at the
          intersection of meaningful impact and compelling storytelling.
        </p>

        <p className="font-third">
          We collaborate with filmmakers, studios, brands, and talent to develop
          emotionally grounded, commercially viable stories that reflect the
          full spectrum of human experience. From proof-of-concept shorts to
          feature films and documentaries, our work centers heart, honesty, and
          authentic inclusion on both sides of the camera.
        </p>

        <p className="font-third">
          Whether we are producing original content, consulting on inclusive
          crewing/casting, or providing dedicated on-set support, our goal is
          the same: elevate storytelling while expanding who gets to be seen,
          heard, and valued in the entertainment industry.
        </p>

        <p className="text-white font-semibold">
          Because when inclusion is intentional, stories don’t just reach
          audiences, they move them.
        </p>
      </div>

      {/* LEADERSHIP */}
      <div className="max-w-6xl mx-auto px-8 pb-24">
        <h2 className="text-4xl mb-12 font-main">Leadership</h2>

        <div className="flex flex-col items-center">
          <img
            src="/images/Jillian.jpeg"
            alt="Jillian Caforio"
            className="w-70 h-90 object-cover rounded-lg mb-6"
          />

          <h3 className="text-2xl font-main">Jillian Caforio</h3>

          <p className="text-gray-400 mb-6 font-main">President & CEO</p>

          <button
            onClick={() => setShowBio(true)}
            className="-my-2 hover:text-gray-400 transition cursor-pointer font-secondary uppercase"
          >
            Read Bio
          </button>
        </div>
      </div>

      {/* BOARD OF TRUSTEES */}
      {/* <div className="max-w-6xl mx-auto px-8 pb-32">
        <h2 className="text-4xl mb-12 font-main">Board of Trustees</h2>

        <div className="grid md:grid-cols-3 gap-12">

          <div className="text-center">
            <div className="w-48 h-48 bg-neutral-800 mx-auto mb-4"></div>
            <p className="text-lg font-main">Board Member Name</p>

            <button className="text-sm text-black hover:text-gray-400 mt-2 cursor-pointer font-secondary uppercase">
              Read Bio
            </button>
          </div>

          <div className="text-center">
            <div className="w-48 h-48 bg-neutral-800 mx-auto mb-4"></div>
            <p className="text-lg font-main">Board Member Name</p>

            <button className="text-sm text-black hover:text-gray-400 mt-2 cursor-pointer font-secondary uppercase">
              Read Bio
            </button>
          </div>

          <div className="text-center">
            <div className="w-48 h-48 bg-neutral-800 mx-auto mb-4"></div>
            <p className="text-lg font-main">Board Member Name</p>

            <button className="text-sm text-black hover:text-gray-400 mt-2 cursor-pointer font-secondary uppercase">
              Read Bio
            </button>
          </div>
        </div>
      </div> */}

      {/* BIO MODAL */}
      {showBio && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-8 z-50">
          <div className="relative bg-white max-w-3xl p-10 overflow-y-auto max-h-[80vh]">
            <button
              onClick={() => setShowBio(false)}
              className="absolute top-6 right-6 text-2xl text-gray-400 hover:text-black cursor-pointer"
            >
              ×
            </button>
            <h3 className="text-3xl mb-6 text-black font-main">
              Jillian Caforio
            </h3>

            <div className="space-y-4 text-black leading-relaxed text-secondary">
              <p className="font-third">
                Jillian Caforio is a filmmaker whose work is shaped by empathy,
                authenticity, and a lifelong commitment to inclusive
                storytelling.
              </p>

              <p className="font-third">
                Her love for storytelling began on stage at a young age,
                performing in roles such as Annie in Annie and Young Terk in
                Tarzan. Now based in Los Angeles and having trained at Baron
                Brown Studio, she has carried that same sense of wonder and
                humanity to the screen.
              </p>

              <p className="font-third">
                Inspired by her brother, Calvin, who has special needs, Jillian
                creates films that are grounded in lived experience and
                challenge the industry to make inclusion a thoughtful choice
                rather than a checklist item.
              </p>

              <p className="font-third">
                Jillian graduated from Loyola Marymount University with a double
                major in Marketing and Film, TV, and Media Studies.
              </p>

              <p className="font-third">
                Her short film directorial debut, Apple Juice with No Ice,
                premiered at the 17th Annual Lady Filmmakers Film Festival.
              </p>

              <p className="font-third">
                Her upcoming documentary, "Life Is Better with No Ice", explores
                the power of authentic inclusion within the entertainment
                industry.
              </p>
              <div className="pt-6">
                <a
                  href="https://jilliancaforio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-black text-white px-6 py-3 rounded-full font-main  text-sm tracking-wide hover:bg-gray-800 transition"
                >
                  Visit Personal Website
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
