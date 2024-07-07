import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Kamran Ali</h2>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>
          <ul className="flex flex-wrap space-y-4 md:space-y-0 md:space-x-8">
            <li className="flex items-center">
              <FaPhoneAlt className="text-blue-500 mr-2" />
              <span>+123 456 7890</span>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="text-blue-500 mr-2" />
              <span>email@example.com</span>
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="text-blue-500 mr-2" />
              <span>123 Street, City, Country</span>
            </li>
          </ul>
        </div>
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Kamran Ali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
