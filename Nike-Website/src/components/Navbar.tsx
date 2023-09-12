import React from "react";
import logo from "../img/Nike.png";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center p-[10px]">
        <div className="flex justify-center w-[20%]">
          <img className="h-[2.5rem]" src={logo} alt="" />
        </div>
        <div className="md:text-xs text-[7px] font-poppins flex justify-between gap-4 items-center w-[40%] md:w-[30%]">
            <a href="" className="block">HOME</a>
            <a href="" className="block">LOCATION</a>
            <a href="" className="block">ABOUT</a>
            <a href="" className="block">CONTACT</a>
        </div>
        <div className="flex justify-center w-[20%]"><button className="px-3 py-[0.5rem] text-[12px] bg-red-700 text-white">Login</button></div>
      </div>
    </>
  );
};

export default Navbar;
