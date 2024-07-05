import React from "react";
import { Typewriter } from "react-simple-typewriter";
import ParticleBackground from "./ParticleBackground"; // Import the ParticleBackground component
import "./Header.css"; // Import the CSS file for additional styling if needed

const Header = () => {
  return (
    <div className="header-container h-screen flex flex-col justify-center items-center relative">
      <ParticleBackground /> {/* Add the ParticleBackground component */}
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
    </div>
  );
};

export default Header;
