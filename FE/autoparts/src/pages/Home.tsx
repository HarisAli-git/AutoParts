import React from "react";
import bgpic from "../assets/home-pic.webp";
import { CONTACT, strings } from "../constants";
import Feature from "../components/Feature";
import Search from "../components/Search";

const Home: React.FunctionComponent = () => {
  return (
    <div>
      <div
        className="h-[75vh] bg-cover bg-center relative" // Adjust the height and remove padding-top for better centering
        style={{
          backgroundImage: `url(${bgpic})`,
          opacity: "85%",
        }}
      >
        {/* Content centered within the background */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
          <p className="text-[#1b3b77] font-bold mb-4">{strings.subtitle}</p>
          <h1 className="text-[#0f1c35] text-5xl font-bold mb-4">
            {strings.title}
          </h1>
          <p className="text-[#1b3b77] font-semibold text-center">
            {strings.description}
          </p>
          <button className="bg-[#0f1c35] text-white font-bold py-2 px-6 rounded-md hover:bg-[#1b3b77] transition duration-300 mt-4">
            {strings.call_us_at}: {CONTACT.PHONE_NUMBER}
          </button>
        </div>
      </div>
      <Feature />
      <Search />
    </div>
  );
};

export default Home;
