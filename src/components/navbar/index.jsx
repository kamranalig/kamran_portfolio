import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 bg-white flex justify-between items-center px-4 sm:px-10 py-3 sm:py-5 z-50">
      <div className="text-2xl uppercase font-bold tracking-[0.3em] text-blue-500">
        Kamran Ali
      </div>
      <div className="hidden sm:flex gap-4 font-semibold">
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          activeClass="active-link"
          className="cursor-pointer hover:text-blue-700"
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          activeClass="active-link"
          className="cursor-pointer hover:text-blue-700"
        >
          About
        </Link>
        <Link
          to="services"
          spy={true}
          smooth={true}
          duration={500}
          activeClass="active-link"
          className="cursor-pointer hover:text-blue-700"
        >
          Services
        </Link>
        <Link
          to="experience"
          spy={true}
          smooth={true}
          duration={500}
          activeClass="active-link"
          className="cursor-pointer hover:text-blue-700"
        >
          Experiences
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          activeClass="active-link"
          className="cursor-pointer hover:text-blue-700"
        >
          Projects
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          activeClass="active-link"
          className="cursor-pointer hover:text-blue-700"
        >
          Contact
        </Link>
      </div>
      {/* Mobile menu button */}
      <div className="sm:hidden">
        <button
          className="text-gray-800 hover:text-gray-900 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile menu items */}
      {isOpen && (
        <div className="sm:hidden absolute top-full left-0 right-0 bg-white shadow-md z-50 py-2">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active-link"
            className="block px-4 py-2 text-sm text-gray-800 hover:text-blue-700"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active-link"
            className="block px-4 py-2 text-sm text-gray-800 hover:text-blue-700"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active-link"
            className="block px-4 py-2 text-sm text-gray-800 hover:text-blue-700"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active-link"
            className="block px-4 py-2 text-sm text-gray-800 hover:text-blue-700"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active-link"
            className="block px-4 py-2 text-sm text-gray-800 hover:text-blue-700"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
