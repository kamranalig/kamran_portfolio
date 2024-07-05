import React from "react";
import { Typewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

import "./Header.css";

const Header = () => {
  return (
    <div className="header-container h-[80vh] flex flex-col justify-center items-center relative">
      <div className="bg-white bg-opacity-80 p-10 rounded-lg text-center shadow-lg relative z-10">
        <h4 className="text-2xl font-bold pb-5 tracking-widest text-black">
          Welcome
        </h4>
        <h3 className="text-4xl sm:text-6xl font-semibold text-black">
          I'm a
          <span className="text-blue-500">
            <Typewriter
              words={[
                " Front-End Developer",
                " Backend Developer",
                " MERN Stack Developer",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h3>
      </div>
      <div className="flex gap-8 mt-5 z-50">
        <FaGithub size={30} className="text-gray-700 hover:text-gray-900" />
        <FaLinkedin size={30} className="text-gray-700 hover:text-gray-900" />
        <FaTwitter size={30} className="text-gray-700 hover:text-gray-900" />
        <FaWhatsapp size={30} className="text-gray-700 hover:text-gray-900" />
        <FaFacebook size={30} className="text-gray-700 hover:text-gray-900" />
        <FaInstagram size={30} className="text-gray-700 hover:text-gray-900" />
      </div>
    </div>
  );
};

export default Header;
