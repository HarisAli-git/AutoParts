import React from "react";
import FeatureBar from "../components/common/FeatureBar";
import Search from "../components/Search";
import Footer from "../components/Footer";
import Header from "../components/common/Header";
import { PARTS_COVER_DATA, PARTS_FEATURES_DATA } from "../constants";

const Parts: React.FC = () => {
  return (
    <div>
      <Header {...PARTS_COVER_DATA} />
      <FeatureBar data={PARTS_FEATURES_DATA} isPartsPage={true} />
      <Search />
      <footer id="footer" className="bg-black text-white py-10">
        <Footer />
      </footer>
    </div>
  );
};

export default Parts;
