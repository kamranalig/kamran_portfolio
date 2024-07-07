import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div id="contact" className="max-w-[1160px] mx-auto py-14 px-4">
      <h3 className="text-3xl font-bold tracking-widest text-[#454360] mb-8">
        Get in Touch
      </h3>
      <div className="flex flex-col md:flex-row gap-10 ">
        <div className="flex flex-col gap-3 w-full md:w-[35%] text-center md:text-left">
          <p className="text-[#454360] text-xl font-medium">
            Feel free to drop us a line to contact us!
          </p>
          <p className="text-[#5E5C7F]">
            We are here to answer any questions you may have.
          </p>
        </div>
        <form className="flex flex-col gap-4 w-full md:w-[65%]">
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              placeholder="Your Name"
              className="border-2 border-gray-300 rounded-md w-full md:w-1/2 p-3"
              aria-label="Your Name"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border-2 border-gray-300 rounded-md w-full md:w-1/2 p-3"
              aria-label="Your Email"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="border-2 border-gray-300 rounded-md w-full p-3"
            aria-label="Subject"
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="4"
            placeholder="Message"
            className="border-2 border-gray-300 rounded-md w-full p-3"
            aria-label="Message"
          />
          <div className=" text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md p-3 mt-4 hover:bg-blue-600 transition-colors duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
