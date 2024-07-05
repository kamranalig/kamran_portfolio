import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md sticky top-0 z-50 flex justify-between items-center px-10 py-5">
      <div className="text-2xl uppercase font-bold tracking-widest text-black">
        Kamran Ali
      </div>
      <div className="flex gap-4 font-semibold text-black">
        <h4 className="hover:text-blue-500 cursor-pointer">Home</h4>
        <h4 className="hover:text-blue-500 cursor-pointer">About</h4>
        <h4 className="hover:text-blue-500 cursor-pointer">Services</h4>
        <h4 className="hover:text-blue-500 cursor-pointer">Experience</h4>
        <h4 className="hover:text-blue-500 cursor-pointer">Work</h4>
        <h4 className="hover:text-blue-500 cursor-pointer">Contact</h4>
      </div>
    </div>
  );
};

export default Navbar;
