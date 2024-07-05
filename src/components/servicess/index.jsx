import React from "react";
import { FaDesktop, FaServer, FaPaintBrush } from "react-icons/fa";
import "./Services.css";

const Services = () => {
  return (
    <div className="max-w-[1160px] mx-auto py-10" id="services">
      <h3 className="text-3xl font-bold mb-8 text-center">
        My Offered Services
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="service-card bg-white shadow-md rounded-lg p-6 flex flex-col justify-between">
          <div>
            <FaDesktop size={40} className="text-blue-500 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold mb-4 text-center">
              Frontend Development
            </h4>
            <p className="text-gray-700 text-center">
              Elevate your website's frontend with modern development
              techniques, delivering enhanced web application performance. As a
              skilled web developer specializing in JavaScript, React.js, and
              Next.js, I bring expertise in crafting dynamic and efficient user
              interfaces.
            </p>
          </div>
        </div>
        <div className="service-card bg-white shadow-md rounded-lg p-6 flex flex-col justify-between">
          <div>
            <FaServer size={40} className="text-blue-500 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold mb-4 text-center">
              Backend Development
            </h4>
            <p className="text-gray-700 text-center">
              Build robust server-side applications using Node.js, Express, and
              MongoDB. I focus on scalable solutions that ensure your backend
              infrastructure supports your business needs efficiently.
            </p>
          </div>
        </div>
        <div className="service-card bg-white shadow-md rounded-lg p-6 flex flex-col justify-between">
          <div>
            <FaPaintBrush size={40} className="text-blue-500 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold mb-4 text-center">
              UI/UX Design
            </h4>
            <p className="text-gray-700 text-center">
              Design intuitive and user-friendly interfaces that enhance user
              experience. From wireframing to prototyping, I create designs that
              blend aesthetics with functionality to achieve your business
              goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
