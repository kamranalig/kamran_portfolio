import React from "react";
import { FaPhone, FaAddressCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="py-14 bg-[#00AEFF]">
        <div className="flex justify-between max-w-[1160px] mx-auto">
          <div className=" flex flex-col justify-center items-center gap-3">
            <FaPhone className=" text-3xl" />
            <h4 className=" font-bold">Phone</h4>
            <p>+92 309 5543952</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <FaAddressCard className=" text-3xl" />
            <h4 className=" font-bold">Address</h4>
            <p>Muslim Town Mor Wahdat Road Lahore</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <MdEmail className=" text-3xl" />
            <h4 className=" font-bold">Email</h4>
            <p>km775.ali@gmail.com</p>
          </div>
        </div>
      </div>
      <div className=" max-w-[1160px] mx-auto">
        <p className=" py-4 text-center tracking-widest ">
          Portfolio Developed By <b>Kamran Ali</b>.
        </p>
      </div>
    </>
  );
};

export default Footer;
