import { useState } from "react";

export default function About() {
  const [showBio, setShowBio] = useState(false);
  const [showNikkiBio, setShowNikkiBio] = useState(false);
  const [showSethBio, setShowSethBio] = useState(false);
  const [showSamBio, setShowSamBio] = useState(false);
  const [showOwenBio, setShowOwenBio] = useState(false);

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
        <h2 className="text-4xl mb-12 font-main">The Team</h2>

        <div className="flex justify-center gap-12 flex-wrap">
          {/* Jillian */}
          <div className="flex flex-col items-center">
            <img
              src="/images/Jillian.jpeg"
              alt="Jillian Caforio"
              className="w-70 h-90 object-cover object-top rounded-lg mb-6"
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

          {/* Nicole */}
          <div className="flex flex-col items-center">
            <img
              src="/images/nikki.JPEG"
              alt="Nicole Dwyer"
              className="w-70 h-90 object-cover rounded-lg mb-6"
            />

            <h3 className="text-2xl font-main">Nicole Dwyer</h3>

            <p className="text-gray-400 mb-6 font-main">
              Head of Post Production
            </p>

            <button
              onClick={() => setShowNikkiBio(true)}
              className="-my-2 hover:text-gray-400 transition cursor-pointer font-secondary uppercase"
            >
              Read Bio
            </button>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/Owen.png"
              alt="Owen Dewing"
              className="w-70 h-90 object-cover rounded-lg mb-6"
            />

            <h3 className="text-2xl font-main">Owen Dewing</h3>

            <p className="text-gray-400 mb-6 font-main">Web Developer</p>

            <button
              onClick={() => setShowOwenBio(true)}
              className="-my-2 hover:text-gray-400 transition cursor-pointer font-secondary uppercase"
            >
              Read Bio
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 pb-24">
        <h2 className="text-4xl mb-12 font-main">Collaborators</h2>

        <div className="flex justify-center gap-12 flex-wrap">
          {/* Seth */}
          <div className="flex flex-col items-center">
            <img
              src="/images/Seth.JPG"
              alt="Seth Bakke"
              className="w-70 h-90 object-cover object-top rounded-lg mb-6"
            />

            <h3 className="text-2xl font-main">Seth Bakke</h3>

            <p className="text-gray-400 mb-6 font-main">Writer/Director</p>

            <button
              onClick={() => setShowSethBio(true)}
              className="-my-2 hover:text-gray-400 transition cursor-pointer font-secondary uppercase"
            >
              Read Bio
            </button>
          </div>

          {/* Sam */}
          <div className="flex flex-col items-center">
            <img
              src="/images/Sam.jpeg"
              alt="Sam Jenson"
              className="w-70 h-90 object-cover rounded-lg mb-6"
            />

            <h3 className="text-2xl font-main">Sam Jenson</h3>

            <p className="text-gray-400 mb-6 font-main">Writer/Director</p>

            <button
              onClick={() => setShowSamBio(true)}
              className="-my-2 hover:text-gray-400 transition cursor-pointer font-secondary uppercase"
            >
              Read Bio
            </button>
          </div>
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
      {showNikkiBio && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-8 z-50">
          <div className="relative bg-white max-w-3xl p-10 overflow-y-auto max-h-[80vh]">
            <button
              onClick={() => setShowNikkiBio(false)}
              className="absolute top-6 right-6 text-2xl text-gray-400 hover:text-black cursor-pointer"
            >
              ×
            </button>
            <h3 className="text-3xl mb-6 text-black font-main">Nicole Dwyer</h3>

            <div className="space-y-4 text-black leading-relaxed text-secondary">
              <p className="font-third">
                Nicole Dwyer is the Head of Post Production at AJWNI
                Entertainment, where she oversees post-production workflows from
                ingest through final delivery while ensuring every project meets
                the highest creative and technical standards.
              </p>

              <p className="font-third">
                A passionate editor at heart, Nicole believes the edit is where
                stories truly come to life, combining creative intuition with a
                deep understanding of the technical processes that drive modern
                post production. Her experience spans narrative films,
                documentaries, sports media, trailers, and digital content, with
                expertise in media management and story shaping. Having worked
                across productions at Tennis Channel, Paramount, and numerous
                independent films, she brings both creative vision and
                operational precision to every project.
              </p>

              <p className="font-third">
                Nicole is dedicated to building efficient post-production
                pipelines that empower filmmakers to focus on storytelling while
                delivering polished, impactful content from first cut to final
                master.
              </p>
            </div>
          </div>
        </div>
      )}
      {showOwenBio && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-8 z-50">
          <div className="relative bg-white max-w-3xl p-10 overflow-y-auto max-h-[80vh]">
            <button
              onClick={() => setShowOwenBio(false)}
              className="absolute top-6 right-6 text-2xl text-gray-400 hover:text-black cursor-pointer"
            >
              ×
            </button>
            <h3 className="text-3xl mb-6 text-black font-main">Owen Dewing</h3>

            <div className="space-y-4 text-black leading-relaxed text-secondary">
              <p className="font-third">
                Owen Dewing is the Web Developer at AJWNI Entertainment, where
                he is in charge of designing and developing AJWNI.com, creating
                a digital experience that reflects the company's commitment to
                authentic storytelling and inclusion.
              </p>

              <p className="font-third">
                A graduate of Loyola Marymount University with both a Bachelor's
                and Master's degree in Computer Science, Owen combines a strong
                technical foundation with a lifelong appreciation for the arts.
                His background spans full-stack web development, software
                engineering, data science, and user experience, with experience
                building applications using modern web technologies such as
                React, JavaScript, and CSS.
              </p>

              <p className="font-third">
                While Owen enjoys solving complex technical challenges, he has
                always been drawn to the intersection of technology and
                creativity. Whether building websites, producing music, or
                editing digital media, he is passionate about using technology
                as a medium for expression and human connection. At AJWNI
                Entertainment, Owen is proud to help bring that to life by
                building a website that reflects the organization's vision and
                celebrates authentic voices.
              </p>
            </div>
          </div>
        </div>
      )}
      {showSethBio && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-8 z-50">
          <div className="relative bg-white max-w-3xl p-10 overflow-y-auto max-h-[80vh]">
            <button
              onClick={() => setShowSethBio(false)}
              className="absolute top-6 right-6 text-2xl text-gray-400 hover:text-black cursor-pointer"
            >
              ×
            </button>
            <h3 className="text-3xl mb-6 text-black font-main">Seth Bakke</h3>

            <div className="space-y-4 text-black leading-relaxed text-secondary">
              <p className="font-third">
                Seth Bakke is a Los Angeles based filmmaker who is fascinated by
                the sanctity of life in its most ordinary moments. These
                seemingly small details become his entry points into story,
                where he strives to transform the ordinary into extraordinary.
              </p>

              <p className="font-third">
                Seth left the Northern California cattle ranch he grew up on to
                pursue a career in Hollywood, where he is currently assisting
                producer Jerry Bruckheimer (Top Gun: Maverick, Pirates of the
                Caribbean, F1: The Movie).
              </p>

              <p className="font-third">
                Assistant by day and writer/director by night, Seth is
                developing a style that blends natural dialogue with symbolic
                imagery, striving to pull viewers closer rather than hold them
                at a distance. He draws inspiration from his family, his
                experience of adventure at home and abroad, and from the use of
                parables to impact culture, revealing the meaning of stories
                gently and allowing his audience to see themselves reflected by
                the characters on screen. 
              </p>

              <p className="font-third">
                Seth’s work has been selected at notable festivals such as the
                Los Angeles International Short Film Festival, as well as
                awarded Best New Filmmaker at the Hollywood Boulevard Film
                Festival.
              </p>
            </div>
          </div>
        </div>
      )}
      {showSamBio && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-8 z-50">
          <div className="relative bg-white max-w-3xl p-10 overflow-y-auto max-h-[80vh]">
            <button
              onClick={() => setShowSamBio(false)}
              className="absolute top-6 right-6 text-2xl text-gray-400 hover:text-black cursor-pointer"
            >
              ×
            </button>
            <h3 className="text-3xl mb-6 text-black font-main">Sam Jenson</h3>

            <div className="space-y-4 text-black leading-relaxed text-secondary">
              <p className="font-third">
                Sam Jenson is an independent filmmaker drawn to characters who
                are quietly working to hold onto themselves inside systems
                bigger than they are, families, institutions, the past. His work
                favors emotional honesty over spectacle, and he’s more
                interested in the small, specific moments that reveal who
                someone really is than in plot for plot’s sake.
              </p>

              <p className="font-third">
                He writes real characters with real problems. Sam has written
                ten feature screenplays and collaborated with a member of the
                Writers Guild of America on a spec script. In 2025, he wrote,
                directed, and produced his first feature, Reminiscing, an
                intimate drama about a brother and sister piecing through their
                shared past, and the memories that hold them together and apart.
              </p>

              <p className="font-third">
                His short films have screened at the Independent Shorts Awards,
                the Los Angeles Life Off Festival, and the San Francisco
                Arthouse Short Festival, with one screening selling out its
                200-seat venue, a small but telling sign that audiences are
                connecting with the stories he’s telling.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
