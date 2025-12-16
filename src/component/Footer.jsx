import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaCoffee } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#3e2723] text-[#f5f3ef] pt-12 pb-6 px-4 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand section */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold flex items-center justify-center md:justify-start gap-2 mb-2 text-white">
            <FaCoffee className="text-amber-400 text-3xl" />
            Espresso Emporium
          </h2>
          <p className="text-sm text-gray-300 max-w-xs">
            Sip, savor, and relax — we brew with passion and serve with love.
            Experience the perfect cup every time.
          </p>
        </div>

        {/* Navigation links */}
        <div className="flex flex-col md:flex-row items-center gap-6 text-gray-200 text-sm">
          <a href="#" className="hover:text-amber-400 transition-colors">Home</a>
          <a href="#" className="hover:text-amber-400 transition-colors">Menu</a>
          <a href="#" className="hover:text-amber-400 transition-colors">About</a>
          <a href="#" className="hover:text-amber-400 transition-colors">Contact</a>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-amber-400 transition-colors">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-amber-400 transition-colors">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-amber-400 transition-colors">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-[#6d4c41] mt-8 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Espresso Emporium — All Rights Reserved.
      </div>
    </footer>
        </div>
    );
};

export default Footer;