import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ background: "linear-gradient(black, black,#709cf3)" }}
      >
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4">TechSweet</h1>
          <p className="text-2xl mb-6">Innovating for a better future.</p>
        </div>
      </section>

      <section
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ background: "linear-gradient(#709cf3, #bea5cf)" }}
      >
        <div className="text-center text-white p-8">
          <h2 className="text-6xl font-bold mb-4">Our Priorities</h2>
          <br />
          <br />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-3xl font-bold  mb-4">The Customer</h3>
              <p className=" mt-2">
                We prioritize our customers’ feedback and take pride in letting
                it guide the features of our products.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-3xl font-bold  mb-4">Security</h3>
              <p className=" mt-2">
                We go above and beyond to make sure that our customers can
                always feel safe when using our products.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-3xl font-bold  mb-4">Positivity</h3>
              <p className=" mt-2">
                TechSweet seeks to deliver products that enhance others’ lives
                and allow them to strengthen relationships within their
                communities.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-3xl font-bold  mb-4">Humanity</h3>
              <p className=" mt-2">
                We vow to keep the human side of business at the forefront of
                our culture as we grow over the long term.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-3xl font-bold  mb-4">Simplicity</h3>
              <p className=" mt-2">
                We keep our products simple and usable, even as our projects
                grow in complexity.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-3xl font-bold  mb-4">Responsiveness</h3>
              <p className=" mt-2">
                We maintain a close distance to our customers and are easy to
                reach at all times.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ background: "linear-gradient(#bea5cf,#DBDBDB )" }}
      >
        <div className="text-center text-white p-8">
          <h2 className="text-6xl font-bold mb-4">Our Work</h2>
          <br />
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center">
              <div className="logo">
                <Image
                  src={"/logo-equ8.png"}
                  alt="equ8 logo"
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="text-3xl font-bold mt-4">equ8</h3>
              <p className="text-xl mt-2">The Best Daily Math Puzzle Game</p>
              <p className="mt-2 stone-300" style={{ color: "#cfcfcf" }}>
                Create equations. Earn points. Level up!
              </p>
              <a
                href="/equ8"
                className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                See More
              </a>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center">
              <div className="logo">
                <Image
                  src={"/logo-kontact.png"}
                  alt="Kontact logo"
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="text-3xl font-bold mt-4">Kontact</h3>
              <p className="text-xl mt-2">The Ultimate Contacts App</p>
              <p className="mt-2 stone-300" style={{ color: "#cfcfcf" }}>
                Send mass texts effortlessly, sort your contacts by date added,
                and create contact groups for better organization and peace of
                mind.
              </p>
              <a
                href="/kontact"
                className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                See More
              </a>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center">
              <div className="logo">
                <Image
                  src={"/logo-codercomplete.png"}
                  alt="CoderComplete logo"
                  width={77}
                  height={77}
                />
              </div>
              <h3 className="text-3xl font-bold mt-4">CoderComplete</h3>
              <p className="text-xl mt-2">World-Class Coding Education</p>
              <p className="mt-2 stone-300" style={{ color: "#cfcfcf" }}>
                Receive 1-on-1 support throughout a streamlined learning
                approach to getting your first coding job.
              </p>
              <a
                href="https://www.codercomplete.com"
                className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
                target="_blank"
              >
                See More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ background: "linear-gradient( #DBDBDB, black)" }}
      >
        <div className="text-center text-white p-8">
          <h2 className="text-6xl font-bold mb-4">Let&#39;s Work Together</h2>
          <p className="text-xl">
            We are interested in partnering with others equally adamant about
            innovating for a better world.
          </p>
          <br />
          <a href="/contact" className="btn">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
