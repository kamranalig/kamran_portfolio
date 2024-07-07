import React from "react";

const Projects = () => {
  return (
    <div className="max-w-[1160px] mx-auto px-4" id="projects">
      <h3 className="text-3xl font-bold mb-8 text-[#454360]">
        My Recent Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="relative bg-white shadow-md rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <img src="./pro5.PNG" alt="Project 1" className="w-full" />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <h4 className="text-xl font-semibold mb-2 text-white">ScryptHub</h4>
            <p className="text-gray-200 text-center px-4">
              In this project, I was responsible for designing and developing
              web pages using React.js and CSS. I focused on creating a
              responsive and visually appealing user interface to enhance the
              user experience.
            </p>
          </div>
        </div>
        <div className="relative bg-white shadow-md rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <img src="./pro4.PNG" alt="Project 2" className="w-full" />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <h4 className="text-xl font-semibold mb-2 text-white">
              Elra By | SF
            </h4>
            <p className="text-gray-200 text-center px-4">
              In this project, I served as the lead developer, responsible for
              both designing and developing the application using React.js,
              Next.js, Node.js, Express.js, and MongoDB. I also utilized CSS
              frameworks like Tailwind CSS to enhance the visual appeal and
              responsiveness of the project.
            </p>
          </div>
        </div>
        <div className="relative bg-white shadow-md rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <img src="./pro3.PNG" alt="Project 3" className="w-full" />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <h4 className="text-xl font-semibold mb-2 text-white">
              Quran Acadmy
            </h4>
            <p className="text-gray-200 text-center px-4">
              In this project, I took on the role of lead developer, utilizing
              Next.js for server-side rendering, Tailwind CSS for styling, and
              Firebase for backend services and form submission. My
              responsibilities included architecting the project, designing the
              user interface, and ensuring a seamless user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
