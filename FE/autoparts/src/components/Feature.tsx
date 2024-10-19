import React from "react";
import { FEATURES } from "../constants";
import { FaMoneyBillAlt, FaTruck, FaHandshake } from "react-icons/fa"; // Importing icons

const Feature: React.FC = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <FaMoneyBillAlt className="text-[#1b3b77] text-4xl mb-4" />
            <h3 className="font-bold text-xl">{FEATURES.competitive_prices}</h3>
            <p className="text-gray-600">{FEATURES.competitive_prices_desc}</p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <FaTruck className="text-[#1b3b77] text-4xl mb-4" />
            <h3 className="font-bold text-xl">{FEATURES.fast_delivery}</h3>
            <p className="text-gray-600">{FEATURES.fast_delivery_desc}</p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <FaHandshake className="text-[#1b3b77] text-4xl mb-4" />
            <h3 className="font-bold text-xl">
              {FEATURES.buy_with_confidence}
            </h3>
            <p className="text-gray-600">{FEATURES.buy_with_confidence_desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
