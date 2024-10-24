import React from "react";
import Search from "../components/Search";
import Footer from "../components/Footer";
import { HOME_COVER_DATA, HOME_FEATURES_DATA } from "../constants";
import Header from "../components/common/Header";
import FeatureBar from "../components/common/FeatureBar";

const Home: React.FC = () => {
  return (
    <div>
      <Header {...HOME_COVER_DATA} />
      <FeatureBar data={HOME_FEATURES_DATA} isPartsPage={false} />
      <Search />
      <footer id="footer" className="bg-black text-white py-10">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
