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
    <div
      className="header-container h-[80vh] flex flex-col justify-center items-center relative"
      id="home"
    >
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
      <div className="flex gap-8 mt-5 z-10">
        <a href="https://github.com/kamranalig" target="_blank">
          <FaGithub size={30} className="text-gray-700 hover:text-gray-900" />
        </a>
        <a
          href="https://www.linkedin.com/in/kamran-ali-2318b0207/"
          target="_blank"
        >
          <FaLinkedin size={30} className="text-gray-700 hover:text-gray-900" />
        </a>
        <a
          href="https://wa.me/+923095543952"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={30} className="text-gray-700 hover:text-gray-900" />
        </a>
        <a
          href="https://instagram.com/kamranali3573"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram
            size={30}
            className="text-gray-700 hover:text-gray-900"
          />
        </a>
        <FaTwitter size={30} className="text-gray-700 hover:text-gray-900" />
        <a
          href="https://www.facebook.com/profile.php?id=100081274886195&mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={30} className="text-gray-700 hover:text-gray-900" />
        </a>
      </div>
    </div>
  );
};

export default Header;
