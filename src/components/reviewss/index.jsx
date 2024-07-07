import React from "react";
import { FaUserCircle } from "react-icons/fa";

const reviews = [
  {
    name: "John Doe",
    review:
      "Kamran did an excellent job on our project. His attention to detail and expertise in web development are top-notch.",
    designation: "CEO, Example Co.",
  },
  {
    name: "Jane Smith",
    review:
      "Working with Kamran was a pleasure. He delivered high-quality work on time and exceeded our expectations.",
    designation: "CTO, Tech Solutions",
  },
  {
    name: "Michael Brown",
    review:
      "Kamran's skills and knowledge in web development are impressive. He provided valuable insights and solutions.",
    designation: "Product Manager, Innovate Inc.",
  },
];

const Testimonials = () => {
  return (
    <div className="max-w-[1160px] mx-auto py-10 px-4" id="testimonials">
      <h3 className="text-3xl font-bold text-center mb-8 text-[#454360]">
        Client Reviews
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="relative bg-white shadow-md rounded-md overflow-hidden p-6 transform transition-transform duration-300 hover:scale-105"
          >
            <div className="flex items-center mb-4">
              <FaUserCircle className="text-6xl text-gray-400 mr-4" />
              <div>
                <h4 className="text-xl font-semibold text-[#454360]">
                  {review.name}
                </h4>
                <p className="text-sm text-gray-500">{review.designation}</p>
              </div>
            </div>
            <p className="text-gray-700">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
