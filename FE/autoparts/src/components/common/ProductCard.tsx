import React from "react";
import { productCardProps } from "../../interfaces";

const EngineCard: React.FC<productCardProps> = ({ product }) => {
  return (
    <div className="bg-white border rounded-lg shadow-lg flex flex-col items-center p-4">
      <img
        src={product.image_url}
        alt={product.name}
        className="w-full h-40 object-contain mb-4"
      />
      <h3 className="text-gray-800 font-bold text-lg">{product.name}</h3>
    </div>
  );
};

export default EngineCard;
