import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="sticky top-0 bg-white flex justify-between items-center px-10 py-5 shadow-md z-50">
      <div className="text-2xl uppercase font-bold tracking-[0.3em]">
        Kamran Ali
      </div>
      <div className="flex gap-4 font-semibold">
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          activeClass="active-link"
          className="cursor-pointer hover:text-blue-500"
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          activeClass="active-link"
          className="cursor-pointer hover:text-blue-500"
        >
          About
        </Link>
        {/* Add other links similarly */}
      </div>
    </div>
  );
};

export default Navbar;
