import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-100 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-blue-500 mb-8 text-center">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            <p className="text-xl font-medium text-[#454360] mb-4">
              Feel free to drop us a line to contact us!
            </p>
            <p className="text-[#5E5C7F]">
              We are here to answer any questions you may have.
            </p>
          </div>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className="border-2 border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
                aria-label="Your Name"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john.doe@example.com"
                className="border-2 border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
                aria-label="Your Email"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="subject" className="text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Your Subject"
                className="border-2 border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
                aria-label="Subject"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="4"
                className="border-2 border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
                aria-label="Message"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-md py-3 px-6 hover:bg-blue-600 transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
