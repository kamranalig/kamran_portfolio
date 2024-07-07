import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Reviews = () => {
  const reviews = [
    {
      text: "Kamran Ali's expertise in frontend development is outstanding. His attention to detail and creativity are evident in every project.",
      author: "John Doe, CEO of Company",
    },
    {
      text: "Working with Kamran has been a pleasure. His ability to deliver high-quality backend solutions is impressive.",
      author: "Jane Smith, CTO of Another Company",
    },
    // Add more reviews as needed
  ];

  return (
    <div className="bg-gray-100 py-12" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-blue-500 mb-8 text-center">
          Client Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="review-card bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center"
            >
              <FaQuoteLeft className="text-blue-500 mb-4" size={24} />
              <p className="text-gray-700 text-center mb-4">{review.text}</p>
              <FaQuoteRight className="text-blue-500 mb-4" size={24} />
              <h5 className="text-xl font-semibold text-blue-500">
                {review.author}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
