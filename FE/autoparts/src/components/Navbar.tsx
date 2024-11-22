import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/logo.png";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 50) {
      setIsScrolled(true); // Change this threshold (e.g., 50px)
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-10 shadow-md transition-colors duration-300 ${isScrolled ? "bg-[#0f1c35]" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-24 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo} // Replace with your logo path
            alt="Logo"
            className="h-8" // Adjust the height as needed
          />
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8 font-bold">
          <Link
            to="/"
            className={`transition duration-300 ${!isScrolled ? "text-[#0f1c35]" : "text-white"
              } hover:text-[#1b3b77]`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`transition duration-300 ${!isScrolled ? "text-[#0f1c35]" : "text-white"
              } hover:text-[#1b3b77]`}
          >
            About
          </Link>
          <Link
            to="/parts"
            className={`transition duration-300 ${!isScrolled ? "text-[#0f1c35]" : "text-white"
              } hover:text-[#1b3b77]`}
          >
            Parts
          </Link>
          <ScrollLink
            to="footer"
            smooth={true}
            duration={500}
            className={`cursor-pointer transition duration-300 ${!isScrolled ? "text-[#0f1c35]" : "text-white"
              } hover:text-[#1b3b77]`}
          >
            Contact
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
