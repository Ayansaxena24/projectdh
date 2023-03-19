import React, { useState } from "react";
import startimage from "./startimage.jpg";
import EnquireForm from "./EnquireForm";

const StartImage = () => {
  return (
    <div className="relative w-full">
       <img 
           src={startimage} 
           alt="test1" 
           className="flex flex-wrap justify-center py-2">
       </img>
       <div className="absolute sm:right-10 sm:bottom-24 right-2 bottom-14 flex flex-col items-center lg:bottom-28 lg:right-30 lg:gap-4 gap-2 xl:bottom-52 xl:right-40 ">
       <p className="relative font-bold text-md sm:text-lg md:text-xl text-sm lg:text-3xl">Trusted and Efficient Architects</p>
       <EnquireForm />
       </div>
    </div>
  );
};

export default StartImage;