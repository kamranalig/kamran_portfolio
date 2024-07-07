import React from "react";
import { FaMobileAlt, FaCode, FaDesktop } from "react-icons/fa";

const Services = () => {
  return (
    <div className="bg-gray-100 py-12" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-blue-500 mb-2">Services</h2>
          <p className="text-lg text-gray-700">
            Discover what I can do for you.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={<FaMobileAlt className="text-4xl text-blue-500" />}
            title="Responsive Design"
            description="Create responsive and mobile-first websites that adapt to all screen sizes."
          />
          <ServiceCard
            icon={<FaCode className="text-4xl text-blue-500" />}
            title="Frontend Development"
            description="Build interactive and user-friendly interfaces using modern frontend technologies."
          />
          <ServiceCard
            icon={<FaDesktop className="text-4xl text-blue-500" />}
            title="UI/UX Design"
            description="Design intuitive and appealing user interfaces for better user experience."
          />
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-blue-500">{title}</h3>
    <p className="text-base text-gray-700">{description}</p>
  </div>
);

export default Services;
