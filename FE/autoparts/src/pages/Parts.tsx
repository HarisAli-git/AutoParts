import React, { useEffect, useState } from "react";
import FeatureBar from "../components/common/FeatureBar";
import Search from "../components/Search";
import Footer from "../components/Footer";
import Header from "../components/common/Header";
import { PARTS_COVER_DATA, PARTS_FEATURES_DATA } from "../constants";
import ProductsGrid from "../components/ProductsGrid";
import { product } from "../types";
import toast from "react-hot-toast";
import { getProducts } from "../services";

const Parts: React.FC = () => {
  const [parts, setParts] = useState<product[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      if (response.data) {
        setParts(response.data);
      } else {
        toast.error("Some Error Occurred");
      }
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Header {...PARTS_COVER_DATA} />
      <FeatureBar data={PARTS_FEATURES_DATA} isPartsPage={true} />
      <Search />
      <ProductsGrid products={parts} />
      <footer id="footer" className="bg-black text-white py-10">
        <Footer />
      </footer>
    </div>
  );
};

export default Parts;
