import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/logo-2.png";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-transparent fixed top-0 left-0 right-0 z-10 shadow-md">
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
            className="text-[#0f1c35] hover:text-[#1b3b77] transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-[#0f1c35] hover:text-[#1b3b77] transition duration-300"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-[#0f1c35] hover:text-[#1b3b77] transition duration-300"
          >
            Services
          </Link>
          <ScrollLink
            to="footer"
            smooth={true}
            duration={500}
            className="text-[#0f1c35] cursor-pointer hover:text-[#1b3b77] transition duration-300"
          >
            Contact
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
