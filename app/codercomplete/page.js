import Image from "next/image";

export default function Company() {
  return (
    <div>
      <section
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}
      >
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4">CoderComplete</h1>
          {/* <p className="text-2xl mb-6">Learn more about our company.</p>
          <p className="text-xl mb-6">
            We are a team of passionate individuals who are dedicated to
            creating innovative solutions for the modern world.
          </p> */}
        </div>
      </section>
    </div>
  );
}
