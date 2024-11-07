import Image from "next/image";

export default function Equ8() {
  return (
    <div className="text-center md:text-left lg:text-left equ8-background">
      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center bg-cover bg-center pl-10 pr-10 pb-20"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.92)",
        }}
      >
        <div className="flex flex-col md:flex-row lg:flex-row gap-10 w-full max-w-6xl mx-auto">
          <div className="flex-1 text-white flex flex-col justify-center items-center md:items-start lg:items-start">
            <div className="flex items-end mb-4">
              <h1 className="text-7xl font-bold gradient-text-equ8">equ8</h1>
            </div>
            <h2 className="text-3xl mb-6 text-customGray">
              the best daily math puzzle game
            </h2>
            <p className="text-xl mb-6 text-customGray">
              make equations. earn points. level up!
            </p>
            <a
              href="https://apps.apple.com/us/app/id6670520670"
              target="_blank"
              className="mb-6"
            >
              <Image
                src="/app-store.svg"
                alt="Download on the App Store"
                width={200}
                height={40}
              />
            </a>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <Image
              src="/equ8/photo-1.png"
              alt="equ8 screenshot"
              width={300}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* Feature One - Better Contacts App */}
      <section
        className="p-10 bg-base-200 text-center min-h-screen bg-cover bg-center pl-10 pr-10 pt-20 pb-20"
        style={{
          background:
            "linear-gradient(rgba(255, 255, 255, 0.92), rgba(198, 167, 252, 0.92))",
        }}
      >
        <h1 className="text-5xl font-bold mb-10 text-customGray">gameplay</h1>
        <div className="flex flex-col-reverse md:grid lg:grid grid-cols-2 grid-cols-2 gap-10">
          <div className="flex justify-center">
            <Image
              src="/equ8/photo-2.png"
              alt="equ8 screenshot"
              width={300}
              height={400}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-3xl font-bold mb-4 text-customGray">
              use numbers and operators to make equations
            </h3>
            <br />
            <p className="text-lg text-customGray">
              Each day, equ8 gives you a fresh math puzzle to solve. Craft
              equations from a limited pool of numbers and operations to hit the
              target number. With no repeats allowed, it’s a challenge that
              keeps your mind sharp and your skills fresh.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Two - Send Message */}
      <section
        className="py-20 bg-base-200 text-center pl-10 pr-10"
        style={{
          background:
            "linear-gradient(rgba(198, 167, 252, 0.92),rgba(255, 255, 255, 0.92))",
        }}
      >
        <h1 className="text-5xl font-bold mb-10 text-customGray">
          ranking system
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-10">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-3xl font-bold mb-4 text-customGray">
              see where you stand and rise through the ranks.
            </h3>
            <br />
            <p className="text-lg text-customGray">
              Earn points as you solve puzzles and unlock new levels in your
              math journey. From novice to math genius, each rank reflects your
              growing mastery. Challenge yourself daily to climb higher and
              reach the top!
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/equ8/photo-3.png"
              alt="equ8 screenshot"
              width={300}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* Feature Three - Tags */}
      <section
        className="py-20 bg-base-200 text-center pl-10 pr-10 pt-20 pb-20"
        style={{
          background:
            "linear-gradient(rgba(255, 255, 255, 0.92),rgba(198, 167, 252, 0.92))",
        }}
      >
        <h1 className="text-5xl font-bold mb-10 text-customGray">
          become a math genius
        </h1>
        <div className="flex flex-col-reverse md:grid lg:grid grid-cols-2 grid-cols-2 gap-10">
          <div className="flex justify-center">
            <Image
              src="/equ8/photo-4.png"
              alt="equ8 screenshot"
              width={300}
              height={400}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-3xl font-bold mb-4 text-customGray">
              boost your brainpower
            </h3>
            <br />
            <p className="text-lg text-customGray">
              With equ8, you’re not just playing a game—you’re training your
              brain. Each equation you solve pushes you closer to math mastery,
              helping you develop faster, smarter thinking over time.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Four - Templates */}
      <section
        className="py-20 bg-base-200 text-center pl-10 pr-10 pt-20 pb-20"
        style={{
          background:
            "linear-gradient(rgba(198, 167, 252, 0.92),rgba(255, 255, 255, 0.92))",
        }}
      >
        <h1 className="text-5xl font-bold mb-10 text-customGray">
          share your score
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-3xl font-bold mb-4 text-customGray">
              challenge your friends
            </h3>
            <br />
            <p className="text-lg text-customGray">
              Hit a new high score? let your friends know! equ8 makes it easy to
              share your results and invite others to take on the same puzzle.
              who can rise to the challenge and become the ultimate math whiz?
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/equ8/photo-5.png"
              alt="equ8 screenshot"
              width={300}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-20 bg-base-200 text-center"
        style={{
          background:
            "linear-gradient(rgba(255, 255, 255, 0.92),rgba(198, 167, 252, 0.92))",
        }}
      >
        <h1 className="text-5xl font-bold mb-10 text-customGray">play equ8</h1>
        <div className="flex justify-center">
          <a href="https://apps.apple.com/us/app/id6670520670" target="_blank">
            <Image
              src="/app-store.svg"
              alt="Download on the App Store"
              width={200}
              height={40}
            />
          </a>
        </div>
      </section>
    </div>
  );
}
