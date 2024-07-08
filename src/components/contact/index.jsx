import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaSpinner } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@gmail\.com$/;
    return emailPattern.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Client-side validation
    let formErrors = {};

    if (!name) formErrors.name = "Name is required.";
    if (!email) formErrors.email = "Email is required.";
    else if (!validateEmail(email))
      formErrors.email = "Valid Gmail address is required.";
    if (!message) formErrors.message = "Please leave us a message.";

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        "service_i5no78z",
        "template_d7bxnne",
        form.current,
        "HT5TsPjU1ojgz37T8"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent");
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setErrors({});
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <div id="contact" className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-blue-500 mb-8">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col">
            <p className="text-xl font-medium text-[#454360] mb-4">
              Feel free to drop us a line to contact us!
            </p>
            <p className="text-[#5E5C7F]">
              We are here to answer any questions you may have.
            </p>
          </div>
          <form className="flex flex-col gap-4" ref={form} onSubmit={sendEmail}>
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="border-2 border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
                aria-label="Your Name"
                required
              />
              {errors.name && <div className="text-red-500">{errors.name}</div>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john.doe@example.com"
                className="border-2 border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
                aria-label="Your Email"
                required
              />
              {errors.email && (
                <div className="text-red-500">{errors.email}</div>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="subject" className="text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                rows="4"
                className="border-2 border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
                aria-label="Message"
                required
              />
              {errors.message && (
                <div className="text-red-500">{errors.message}</div>
              )}
            </div>
            <div className="text-center">
              <button
                type="submit"
                className={`bg-blue-500 text-white rounded-md py-3 px-6 transition-colors duration-300 ${
                  loading
                    ? "bg-gray-500 cursor-not-allowed"
                    : "hover:bg-blue-600"
                }`}
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <FaSpinner className="animate-spin h-5 w-5 mr-3" />
                    Sending...
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
