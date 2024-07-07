import React from "react";

const Projects = () => {
  return (
    <div className="bg-gray-100 py-12" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-blue-500 mb-8 text-center">
          My Recent Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProjectCard
            image="./pro5.PNG"
            title="ScryptHub"
            description="In this project, I was responsible for designing and developing web pages using React.js and CSS. I focused on creating a responsive and visually appealing user interface to enhance the user experience."
          />
          <ProjectCard
            image="./pro4.PNG"
            title="Elra By | SF"
            description="In this project, I served as the lead developer, responsible for both designing and developing the application using React.js, Next.js, Node.js, Express.js, and MongoDB. I also utilized CSS frameworks like Tailwind CSS to enhance the visual appeal and responsiveness of the project."
          />
          <ProjectCard
            image="./pro3.PNG"
            title="Quran Academy"
            description="In this project, I took on the role of lead developer, utilizing Next.js for server-side rendering, Tailwind CSS for styling, and Firebase for backend services and form submission. My responsibilities included architecting the project, designing the user interface, and ensuring a seamless user experience."
          />
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ image, title, description }) => (
  <div className="relative bg-white shadow-md rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
    <img src={image} alt={title} className="w-full" />
    <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
      <h4 className="text-xl font-semibold mb-2 text-white">{title}</h4>
      <p className="text-gray-200 text-center px-4">{description}</p>
    </div>
  </div>
);

export default Projects;
