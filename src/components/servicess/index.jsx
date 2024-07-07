import React from "react";
import { FaCode, FaRegUser, FaServer } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { SlFire, SlBadge } from "react-icons/sl";
import { BiCoffee } from "react-icons/bi";

const services = [
  {
    icon: <FaCode size={40} className="text-blue-500 mb-4" />,
    title: "Frontend Development",
    description:
      "I create visually appealing and highly functional user interfaces, ensuring your site captivates users and performs seamlessly.",
  },
  {
    icon: <FaServer size={40} className="text-blue-500 mb-4" />,
    title: "Backend Development",
    description:
      "I create robust server-side solutions for secure data management and smooth functionality to support your online presence.",
  },
  {
    icon: <MdLanguage size={40} className="text-blue-500 mb-4" />,
    title: "MERN Stack Development",
    description:
      "Specializing in MERN stack development, I build efficient, scalable web applications using MongoDB, Express.js, React.js, and Node.js.",
  },
];

const Services = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-[1160px] mx-auto py-10 px-4 lg:px-0" id="services">
        <h3 className="text-3xl font-bold mb-8 text-center text-[#3B82F6]">
          My Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white shadow-md rounded-lg p-6 flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 text-center"
            >
              <div className="flex flex-col items-center">
                {service.icon}
                <h4 className="text-xl font-semibold mb-4">{service.title}</h4>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-4 py-8 max-w-[1160px] mx-auto">
        <div className="flex items-center gap-5">
          <SlFire className="text-4xl text-[#3B82F6]" />
          <div>
            <h4 className="text-3xl font-bold text-[#454360]">10+</h4>
            <p className="text-lg tracking-widest text-[#454360]">
              Projects completed
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <BiCoffee className="text-5xl text-[#3B82F6]" />
          <div>
            <h4 className="text-3xl font-bold text-[#454360]">950</h4>
            <p className="text-lg text-[#454360] tracking-widest">
              Cups of coffee
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <FaRegUser className="text-4xl text-[#3B82F6]" />
          <div>
            <h4 className="text-3xl font-bold text-[#454360]">7</h4>
            <p className="text-lg text-[#454360] tracking-widest">
              Satisfied clients
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <SlBadge className="text-4xl text-[#3B82F6]" />
          <div>
            <h4 className="text-3xl font-bold text-[#454360]">1500+</h4>
            <p className="text-lg text-[#454360] tracking-widest">
              Commits Pushed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
