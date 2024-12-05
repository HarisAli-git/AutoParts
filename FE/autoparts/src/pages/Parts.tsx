import React, { useEffect, useState } from "react";
import FeatureBar from "../components/common/FeatureBar";
import Search from "../components/Search/Search";
import Footer from "../components/Footer";
import Header from "../components/common/Header";
import { PARTS_COVER_DATA, PARTS_FEATURES_DATA } from "../constants";
import ProductsGrid from "../components/ProductsGrid";
import { product } from "../types";
import toast from "react-hot-toast";
import { getProducts } from "../services";
import FilterBar from "../components/Search/FilterBar";

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

  const yearOptions = [
    { value: 2020, label: "2020" },
    { value: 2021, label: "2021" },
    { value: 2022, label: "2022" },
  ];

  const brandOptions = [
    { value: "toyota", label: "Toyota" },
    { value: "honda", label: "Honda" },
    { value: "ford", label: "Ford" },
  ];

  const modelOptions = [
    { value: "corolla", label: "Corolla" },
    { value: "civic", label: "Civic" },
    { value: "focus", label: "Focus" },
  ];

  const partOptions = [
    { value: "engine", label: "Engine" },
    { value: "transmission", label: "Transmission" },
    { value: "brakes", label: "Brakes" },
  ];

  const handleFilterChange = (filters: {
    year: string[];
    brand: string[];
    model: string[];
    part: string[];
  }) => {
    console.log("Active Filters:", filters);
  };

  return (
    <div>
      <Header {...PARTS_COVER_DATA} />
      <FeatureBar data={PARTS_FEATURES_DATA} isPartsPage={true} />
      <FilterBar
        yearOptions={yearOptions}
        brandOptions={brandOptions}
        modelOptions={modelOptions}
        partOptions={partOptions}
        onFilterChange={handleFilterChange} 
      />
      <Search />
      <ProductsGrid products={parts} />
      <footer id="footer" className="bg-black text-white py-10">
        <Footer />
      </footer>
    </div>
  );
};

export default Parts;
