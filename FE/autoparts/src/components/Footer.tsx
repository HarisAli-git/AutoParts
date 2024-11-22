import React from "react";
import logo from "../assets/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Left Section */}
          <div>
            <img
              src={logo}
              alt="Prota Auto Parts"
              className="mb-4 mx-auto md:mx-0"
            />
            <h4 className="text-lg font-semibold">JAM1 Automative</h4>
            <p>Keep You Movin' and Groovin'</p>
            <p className="mt-4">
              Contact us now to get the best auto parts and accessories.
            </p>
          </div>

          {/* Middle Section */}
          <div>
            <h4 className="text-lg font-semibold">Need Help?</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="tel:(866) 616-0833"
                  className="text-purple-400 flex items-center justify-center md:justify-start"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10l9 9m0 0l9-9m-9 9V4"
                    />
                  </svg>
                  (772) 940-3265
                </a>
              </li>
              <li>
                <a
                  href="mailto:care@protaauto.parts"
                  className="text-purple-400 flex items-center justify-center md:justify-start"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 5l-4 4-4-4m4 4V4m0 16v-7m0 0l-4 4 4-4m0 0l4 4-4-4z"
                    />
                  </svg>
                  105 hilton dr, fort pierce, FL, 34946
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div>
            <h4 className="text-lg font-semibold">Customer Service</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-400">
                  Privacy and Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400">
                  Terms And Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center text-sm mt-10 text-gray-500">
          <p>Buy Best Used & New Parts For Your Cars and Trucks</p>
          <p>Copyright 2024 © protaauto.parts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
