import React from "react";
import bgpic from "../assets/home-pic.webp";
const Home: React.FunctionComponent = () => {
  return (
    <div
      className="h-[75vh] bg-cover bg-center relative" // Adjust the height and remove padding-top for better centering
      style={{
        backgroundImage: `url(${bgpic})`,
      }}
    >
      {/* Content centered within the background */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        <p className="text-[#1b3b77] font-bold mb-4">Welcome to Our Website</p>
        <h1 className="text-[#0f1c35] text-5xl font-bold mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-[#1b3b77] font-semibold text-center">
          Elevate your drive with the perfect accessories, turning every journey
          into an unforgettable adventure. Upgrade your style, enhance your
          performance, and let your personality shine on the road ahead.
        </p>
        <button className="bg-[#0f1c35] text-white font-bold py-2 px-6 rounded-md hover:bg-[#1b3b77] transition duration-300 mt-4">
          CALL US AT: 1-866-616-0833
        </button>
      </div>
    </div>
  );
};

export default Home;
