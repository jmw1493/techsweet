import Image from "next/image";

export default function Contact() {
  return (
    <div>
      <section
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}
      >
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-2xl mb-6">
            We&#39;re excited to connect with you.
          </p>
          <br />
          <p>
            Reach us at{" "}
            <a href="mailto:support@techsweet.io" className="underline">
              support@techsweet.io
            </a>
          </p>
          {/* <form className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Your Message"
                rows="4"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Send
              </button>
            </div>
          </form> */}
        </div>
      </section>
    </div>
  );
}
