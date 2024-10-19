// Navbar.tsx

import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-transparent fixed top-0 left-0 right-0 z-10 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/path/to/your/logo.png" // Replace with your logo path
            alt="Logo"
            className="h-8" // Adjust the height as needed
          />
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link
            to="/"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
