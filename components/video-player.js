"use client";

const VideoPlayer = ({ featureNumber }) => {
  return (
    <div className="relative w-64 bg-black rounded-[2rem] p-2 shadow-lg">
      <div
        className="absolute top-3 left-1/2 transform -translate-x-1/2 bg-black rounded-full z-10"
        style={{ width: "33.33%", height: "4.5%" }}
      ></div>
      <div className="relative bg-black rounded-[1.5rem] overflow-hidden flex items-end justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onError={(e) => {
            console.error("Error loading video", e);
          }}
          style={{ width: "auto", height: "95%" }}
        >
          <source src={`feature-${featureNumber}-new.mp4`} type={"video/mp4"} />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoPlayer;
