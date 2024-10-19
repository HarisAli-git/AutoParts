import React from "react";
import { FaMoneyBillAlt, FaTruck, FaHandshake } from "react-icons/fa"; // Importing icons

const Feature: React.FC = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <FaMoneyBillAlt className="text-[#1b3b77] text-4xl mb-4" />
            <h3 className="font-bold text-xl">Competitive Prices</h3>
            <p className="text-gray-600">
              We have all the parts you need at the most competitive prices.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <FaTruck className="text-[#1b3b77] text-4xl mb-4" />
            <h3 className="font-bold text-xl">Fast Delivery</h3>
            <p className="text-gray-600">
              Get the parts and accessories you need when you need them.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <FaHandshake className="text-[#1b3b77] text-4xl mb-4" />
            <h3 className="font-bold text-xl">Buy With Confidence</h3>
            <p className="text-gray-600">
              Delivering reliable & trusted service since 2023.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
