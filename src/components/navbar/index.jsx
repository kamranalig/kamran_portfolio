import React from "react";

const Navbar = () => {
  return (
    <div className=" bg-white flex justify-between items-center px-10 py-5">
      <div className=" text-2xl uppercase font-bold tracking-[0.3em]">
        Kamran Ali
      </div>
      <div className=" flex gap-4 font-semibold">
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Services</h4>
        <h4>Experience</h4>
        <h4>Work</h4>
        <h4>Contact</h4>
      </div>
    </div>
  );
};

export default Navbar;
