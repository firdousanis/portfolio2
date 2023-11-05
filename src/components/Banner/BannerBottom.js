import React from "react";
import { MdLocalShipping } from "react-icons/md";
import { CgRedo } from "react-icons/cg";

const BannerBottom = () => {
  const iconSize = { fontSize: 40 };
  return (
    <div className="w-full bg-primeColor border-b-[1px] py-4 border-b-gray-200 px-4">
      <div className="max-w-container mx-auto h-20 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <span style={iconSize} className="font-bold font-titleFont w-10 text-center text-white">2</span>
          <p className="font-bold text-white text-base">Years Product Warranty </p>
        </div>
        <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <span style={iconSize} className="text-white text-xl text-center w-10 ml-1">
            <MdLocalShipping />
          </span>
          <p className="font-bold text-white text-base">Free shipping</p>
        </div>
        <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <span style={iconSize} className="text-white text-2xl text-center w-10">
            <CgRedo />
          </span>
          <p className="font-bold text-white text-base">Return policy in 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
