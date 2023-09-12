import React from "react";
import shoe from "../img/show.jpg";

const Body = () => {
  return (
    <>
      <div className="md:flex justify-center px-[5%] py-[1%]">
        <div className="md:w-[45%] w-[95%]">
          <div className="mt-[1rem] font-poppins font-extrabold md:text-[4rem] text-[4.25rem] leading-none p-1">
            YOUR FEET DESERVE THE BEST
          </div>
          <div className="font-poppins mt-[1rem] md:text-[0.8rem] leading-tight text-[0.8rem] p-1 w-[70%] ml-2">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </div>
          <div className="flex justify-between mt-[1rem]">
            <button className="bg-red-600 text-white ml-3 px-2 py-1 font-poppins">
              Shop Now
            </button>
          </div>
        </div>
        <div className="md:w-[48%]">
          <img src={shoe} alt="" />
        </div>
      </div>
    </>
  );
};

export default Body;
