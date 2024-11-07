import VideoPlayer from "@/components/video-player";
import Image from "next/image";

export default function Kontact() {
  return (
    <div className="text-center md:text-left lg:text-left">
      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center bg-cover bg-center pl-10 pr-10 pb-20"
        style={{ background: "linear-gradient(#202C59, #2844AD, #f0c175)" }}
      >
        <div className="flex flex-col md:flex-row lg:flex-row gap-10 w-full max-w-6xl mx-auto">
          <div className="flex-1 text-white flex flex-col justify-center items-center md:items-start lg:items-start">
            <div className="flex items-end mb-4">
              <h1 className="text-6xl font-bold gradient-text">Kontact</h1>
            </div>
            <h2 className="text-3xl mb-6">
              Your Ultimate Contact Management App
            </h2>
            <p className="text-xl mb-6">
              Send mass texts effortlessly, sort your contacts by date added,
              and create contact groups for better organization and peace of
              mind.
            </p>
            <a
              href="https://apps.apple.com/us/app/kontact-ultimate-contacts-app/id1604297067"
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
              src="/kontact/first-photo.png"
              alt="Kontact screenshot"
              width={600}
              height={800}
            />
          </div>
        </div>
      </section>

      {/* Feature One - Better Contacts App */}
      <section
        className="p-10 bg-base-200 text-center min-h-screen bg-cover bg-center pl-10 pr-10 pt-20 pb-20"
        // style={{ background: "linear-gradient(  #f0c175,#E4E4E4)" }}
        style={{ background: "linear-gradient(  #f0c175,#2844AD, #202C59)" }}
      >
        <h1 className="text-5xl font-bold mb-10">A Better Contacts App</h1>
        <div className="flex flex-col-reverse md:grid lg:grid grid-cols-2 grid-cols-2 gap-10">
          <div className="flex justify-center">
            <VideoPlayer featureNumber={1} />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-3xl font-bold mb-4">
              More Organization. More Functionality.
            </h3>
            <br />
            <p className="text-lg">
              Sort your contacts by date added. Filter your contact list with
              contact groups. Connect directly to WhatsApp conversations with
              your contacts.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Two - Send Message */}
      <section
        className="py-20 bg-base-200 text-center pl-10 pr-10"
        // style={{ background: "linear-gradient(#E4E4E4, #2844AD)" }}
        style={{ background: "linear-gradient(#202C59, #2844AD, #f0c175)" }}
      >
        <h1 className="text-5xl font-bold mb-10">Send Mass Texts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-10">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-3xl font-bold mb-4">Mass Outreach With Ease</h3>
            <br />
            <p className="text-lg">
              Texting multiple people has never been so easy. Save yourself
              hours of tedious copying and pasting. Improve your outreach
              efficiency and ability to connect with others.
            </p>
          </div>
          <div className="flex justify-center">
            <VideoPlayer featureNumber={2} />
          </div>
        </div>
      </section>

      {/* Feature Three - Tags */}
      <section
        className="py-20 bg-base-200 text-center pl-10 pr-10 pt-20 pb-20"
        // style={{ background: "linear-gradient( #2844AD, #E4E4E4)" }}
        style={{ background: "linear-gradient(  #f0c175,#2844AD, #202C59)" }}
      >
        <h1 className="text-5xl font-bold mb-10">Organize Your Contacts</h1>
        <div className="flex flex-col-reverse md:grid lg:grid grid-cols-2 grid-cols-2 gap-10">
          <div className="flex justify-center">
            <VideoPlayer featureNumber={3} />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-3xl font-bold mb-4">
              Give yourself mental clarity.
            </h3>
            <br />
            <p className="text-lg">
              Quickly find the contacts you care about. Easily send a text
              message to all contacts with a specific Tag or combination of
              Tags.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Four - Templates */}
      <section
        className="py-20 bg-base-200 text-center pl-10 pr-10 pt-20 pb-20"
        // style={{ background: "linear-gradient(#E4E4E4, #f0c175)" }}
        style={{ background: "linear-gradient(#202C59, #2844AD, #f0c175)" }}
      >
        <h1 className="text-5xl font-bold mb-10">Message Templating</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-3xl font-bold mb-4">Pre-Write Your Messages</h3>
            <br />
            <p className="text-lg">
              Store frequently used message templates for quick access.
              Auto-fill contact details for a personalized touch.
            </p>
          </div>
          <div className="flex justify-center">
            <VideoPlayer featureNumber={4} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-20 bg-base-200 text-center"
        style={{
          // background: "linear-gradient(  #f0c175, black)",
          background: "linear-gradient(  #f0c175,#2844AD,  black)",
        }}
      >
        <h1 className="text-5xl font-bold mb-10">Choose Kontact</h1>
        <div className="flex justify-center">
          <a
            href="https://apps.apple.com/us/app/kontact-ultimate-contacts-app/id1604297067"
            target="_blank"
          >
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
