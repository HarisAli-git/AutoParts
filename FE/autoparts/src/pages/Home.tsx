import React from "react";
import bgpic from "../assets/home-pic.webp";

const Home: React.FunctionComponent = () => {
  return (
    <div
      className="h-1/2 bg-cover bg-center pt-[70vh]" // Add padding at the top to avoid overlapping the navbar
      style={{
        backgroundImage: `url(${bgpic})`,
      }}
    >
      {/* Content above the background image */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <h1 className="text-[#000a1c] text-4xl font-bold">
          Welcome to Our Website
        </h1>
      </div>
    </div>
  );
};

export default Home;
