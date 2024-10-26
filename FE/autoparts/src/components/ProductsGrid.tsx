import React from "react";
import EngineCard from "./common/ProductCard";
import { ProductsGridProps } from "../interfaces";

const ProductsGrid: React.FC<ProductsGridProps> = ({ products }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        ENGINES
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <EngineCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
