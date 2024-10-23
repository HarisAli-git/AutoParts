import { useLocation } from "react-router-dom";
import { HOME_FEATURES_DATA, PARTS_FEATURES_DATA } from "../../constants";
import { featureItem } from "../../interfaces";
import React from "react";

const Feature: React.FC = () => {
  const location = useLocation();
  const isPartsPage = location.pathname === "parts";

  const FEATURES_DATA = isPartsPage ? PARTS_FEATURES_DATA : HOME_FEATURES_DATA;

  return (
    <div className={`bg-gray-300 ${isPartsPage ? "py-6" : "py-8"}`}>
      <div className="container mx-auto px-4">
        <div
          className={`grid grid-cols-1 md:grid-cols-${
            isPartsPage ? "4" : "3"
          } gap-8 text-center`}
        >
          {FEATURES_DATA.map((feature: featureItem, index: number) => (
            <div key={index} className="flex flex-col items-center">
              <feature.icon className="text-[#1b3b77] text-4xl mb-4" />
              <h3 className="font-bold text-xl">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
