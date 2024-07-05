import React from "react";

const Skills = () => {
  return (
    <div>
      <h3 className="text-3xl font-bold mb-8">Skills/Expertise</h3>
      <div className="flex justify-between bg-white shadow-lg p-10 rounded-lg">
        <div className="front">
          <h3 className=" text-xl font-bold mb-3 text-[#3B82F6]">Frontend</h3>
          <li className=" text-base p-1 font-medium">React.Js</li>
          <li className=" text-base p-1 font-medium">Next.Js</li>
          <li className=" text-base p-1 font-medium">JavaScript</li>
          <li className=" text-base p-1 font-medium">Typescript</li>
          <li className=" text-base p-1 font-medium">jQuery</li>
          <li className=" text-base p-1 font-medium">HTML5 | CSS 3</li>
          <li className=" text-base p-1 font-medium">Redux Toolkit</li>
          <li className=" text-base p-1 font-medium">SASS/SCSS</li>
          <li className=" text-base p-1 font-medium">Material UI</li>
          <li className=" text-base p-1 font-medium">Styled Components</li>
          <li className=" text-base p-1 font-medium">Tailwind CSS</li>
          <li className=" text-base p-1 font-medium">Bootstrap</li>
          <li className=" text-base p-1 font-medium">React Animations</li>
        </div>
        <div className="Backend">
          <h3 className=" text-xl font-bold mb-3 text-[#FF4C60]">Backend</h3>
          <li className=" text-base p-1 font-medium">Node.Js</li>
          <li className=" text-base p-1 font-medium">Express.Js</li>
          <li className=" text-base p-1 font-medium">Firebase</li>
          <li className=" text-base p-1 font-medium">Firestore</li>
          <li className=" text-base p-1 font-medium">Socket IO</li>
          <li className=" text-base p-1 font-medium">MongoDb | Mongoose</li>
          <li className=" text-base p-1 font-medium">MySQL</li>
        </div>
        <div className="Version Control">
          <h3 className=" text-xl font-bold mb-3 text-[#3B82F6]">
            Version Control
          </h3>
          <li className=" text-base p-1 font-medium">Git</li>
          <li className=" text-base p-1 font-medium">Github</li>
        </div>
        <div className="Management Tools">
          <h3 className=" text-xl font-bold mb-3 text-[#FF4C60]">
            Management Tools
          </h3>
          <li className=" text-base p-1 font-medium">Trello</li>
          <li className=" text-base p-1 font-medium">Slack</li>
        </div>
        <div className="CI/CD">
          <h3 className=" text-xl font-bold mb-3 text-[#3B82F6]">CI/CD</h3>
          <li className=" text-base p-1 font-medium">Netlify</li>
          <li className=" text-base p-1 font-medium">Firebase Hosting</li>
        </div>
      </div>
    </div>
  );
};

export default Skills;
