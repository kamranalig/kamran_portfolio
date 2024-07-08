import React from "react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Front-End Developer",
      company: "ScryptHub",
      location: "Lahore, Pakistan",
      date: "July 2023 - July 2024",
      description:
        "Worked extensively with React JS to create responsive web interfaces using React.js, Next.js and JavaScript, while handling API integration. Enhanced front-end skills and gained backend experience with Express, Node, and MongoDB. Collaborated with design teams to ensure seamless user experiences and implemented efficient, maintainable code.",
    },
    {
      id: 2,
      title: "MERN Internee",
      company: "Excellence Delivered (ExD) Pvt Ltd",
      location: "Lahore, Pakistan",
      date: "MAR  2023 - JUN  2023",
      description:
        "During my internship, I worked with React.js, Express, Node, and MongoDB, creating visually appealing and responsive web interfaces using React.js. This experience strengthened my front-end development skills and provided a solid foundation in React JS",
    },
    {
      id: 3,
      title: "Front-end Internee",
      company: "UNIAL SOLUTIONS (PVT LTD)",
      location: "Faisalabad, Pakistan",
      date: "SEP  2022 - NOV  2022",
      description:
        "During my internship at Unial Solution Pvt Ltd, I focused on React JS, enhancing my skills in building dynamic web applications with components, state management, and hooks. This experience significantly strengthened my front-end development abilities and provided a solid foundation in React JS. ",
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
