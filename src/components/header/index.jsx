import React from "react";
import Typewriter from "typewriter-effect";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-900 text-white"
      id="home"
    >
      <div className="text-center px-6 py-12 md:py-24">
        <img
          src="./me1.png"
          alt="Kamran Ali"
          className="w-32 h-32 md:w-48 md:h-48 rounded-full shadow-lg mx-auto mb-6"
        />
        <h1 className="text-3xl md:text-5xl font-bold mb-3">Kamran Ali</h1>
        <h2 className="text-xl md:text-3xl font-semibold mb-6">
          <Typewriter
            options={{
              strings: [
                "Frontend Developer",
                "Backend Developer",
                "Full Stack Developer",
                "UI/UX Designer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <div className="flex justify-center gap-4 mb-6">
          <a
            href="https://github.com/kamranalig"
            target="_blank"
            className="text-gray-300 hover:text-blue-200 transition-colors duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/kamran-ali-2318b0207/"
            target="_blank"
            className="text-gray-300 hover:text-blue-200 transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://wa.me/+923095543952"
            target="_blank"
            className="text-gray-300 hover:text-blue-200 transition-colors duration-300"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="https://instagram.com/kamranali3573"
            target="_blank"
            className="text-gray-300 hover:text-blue-200 transition-colors duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100081274886195&mibextid=ZbWKwL"
            target="_blank"
            className="text-gray-300 hover:text-blue-200 transition-colors duration-300"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-blue-200 transition-colors duration-300"
          >
            <FaTwitter size={24} />
          </a>
        </div>
        <a href="#contact">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300">
            Hire Me
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
