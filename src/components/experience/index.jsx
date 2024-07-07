import React from "react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Developer Intern",
      company: "ABC Tech Solutions",
      location: "New York, NY",
      date: "June 2022 - August 2022",
      description:
        "Worked on front-end development projects using React.js and styled-components.",
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "XYZ Web Solutions",
      location: "Los Angeles, CA",
      date: "January 2021 - May 2022",
      description:
        "Designed and developed user interfaces for web applications using React.js, HTML, and CSS.",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "Tech Innovators",
      location: "San Francisco, CA",
      date: "June 2020 - December 2020",
      description:
        "Led a team to build scalable web applications using Node.js, Express.js, and MongoDB.",
    },
  ];

  return (
    <section id="experience" className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
        <h2 className="text-3xl font-bold text-blue-500 mb-8">Experience</h2>
        <div className="space-y-8">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="border-l-4 border-blue-500 pl-4"
            >
              <h3 className="text-xl font-semibold text-blue-500 mb-1">
                {experience.title}
              </h3>
              <p className="text-lg text-gray-700 mb-1">{experience.company}</p>
              <p className="text-sm text-gray-600 mb-1">{experience.date}</p>
              <p className="text-gray-700">{experience.description}</p>
              <p className="text-xs text-gray-600 mt-1">
                {experience.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
