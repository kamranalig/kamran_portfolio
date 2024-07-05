import React from "react";

const About = () => {
  return (
    <div className="max-w-[1160px] mx-auto py-16 px-4" id="about">
      <h2 className="text-4xl font-bold text-center mb-12 text-black">
        About Me
      </h2>
      <div className="flex flex-col lg:flex-row w-full gap-2 justify-center items-center">
        <div className="w-full lg:w-1/2 text-center lg:text-right mb-8 lg:mb-0">
          <img
            src="./kamran.png"
            alt="Kamran Ali"
            className="w-[350px] mx-auto lg:ml-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="inline-block bg-red-500 rounded text-white px-4 py-1 shadow-md mb-4 text-lg font-semibold">
            Hello
          </div>
          <p className="text-3xl font-bold mb-4 text-blue-500">
            I'm Kamran Ali
          </p>
          <p className="text-xl font-medium mb-4 text-gray-700">
            Full Stack Web Developer
          </p>
          <hr className="mb-4" />
          <p className="text-lg text-gray-700 leading-relaxed">
            Highly motivated Full Stack Developer with 1.5 years of experience
            in developing user-friendly websites and web applications. Skilled
            in JavaScript, React.js, and Next.js design, with a solid
            understanding of back-end development. Proficient in creating clean,
            efficient, and maintainable code. Collaborative team player with
            excellent attention to detail. Continuously learning and adapting to
            new technologies and industry trends.
          </p>
          <a
            href="./Kamran_Ali_5.pdf"
            download
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-600 transition-colors duration-300 float-right"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
