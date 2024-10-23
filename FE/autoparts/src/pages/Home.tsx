import React from "react";
import Feature from "../components/common/Feature";
import Search from "../components/Search";
import Footer from "../components/Footer";
import Header from "../components/common/Header";
import { HOME_COVER_DATA } from "../constants";

const Home: React.FunctionComponent = () => {
  return (
    <div>
      <Header {...HOME_COVER_DATA} />
      <Feature />
      <Search />
      <footer id="footer" className="bg-black text-white py-10">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
