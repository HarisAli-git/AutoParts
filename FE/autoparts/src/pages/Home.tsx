import React from "react";
import bgpic from "../assets/home-pic.webp";
import { CONTACT, strings } from "../constants";
import Feature from "../components/common/Feature";
import Search from "../components/Search";
import Footer from "../components/Footer";

const Home: React.FunctionComponent = () => {
  return (
    <div>
      <Feature />
      <Search />
      <footer id="footer" className="bg-black text-white py-10">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
