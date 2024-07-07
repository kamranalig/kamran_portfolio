import React from "react";

const Skills = () => {
  return (
    <div className="max-w-[1160px] mx-auto mt-8 px-4 lg:px-0">
      <h3 className="text-3xl md:text-4xl font-bold mb-6 text-blue-500">
        Skills/Expertise
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SkillGroup
          title="Frontend"
          color="#3B82F6"
          skills={[
            "React.js",
            "Next.js",
            "JavaScript",
            "TypeScript",
            "jQuery",
            "HTML5 | CSS 3",
            "Redux Toolkit",
            "SASS/SCSS",
            "Material UI",
            "Styled Components",
            "Tailwind CSS",
            "Bootstrap",
            "React Animations",
          ]}
        />
        <SkillGroup
          title="Backend"
          color="#FF4C60"
          skills={[
            "Node.js",
            "Express.js",
            "Firebase",
            "Firestore",
            "Socket IO",
            "MongoDB | Mongoose",
            "MySQL",
          ]}
        />
        <SkillGroup
          title="Version Control"
          color="#3B82F6"
          skills={["Git", "GitHub"]}
        />
        <SkillGroup
          title="Management Tools"
          color="#FF4C60"
          skills={["Trello", "Slack"]}
        />
        <SkillGroup
          title="CI/CD"
          color="#3B82F6"
          skills={["Netlify", "Firebase Hosting"]}
        />
      </div>
    </div>
  );
};

const SkillGroup = ({ title, color, skills }) => (
  <div className="bg-white shadow-lg rounded-lg p-6">
    <h3 className={`text-xl font-bold mb-3 text-${color}`}>{title}</h3>
    <ul className="list-disc pl-5">
      {skills.map((skill, index) => (
        <li key={index} className="text-base py-1 font-medium">
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default Skills;
