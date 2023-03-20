import React, { useState } from "react";
import startimage from "./startimage.jpg";
import EnquireForm from "./EnquireForm";

const StartImage = () => {
  return (
    <div className="relative md:w-full justify-center flex w-[160%]">
    <div>
       <img 
           src={startimage} 
           alt="test1" 
           className="flex flex-wrap justify-center py-2 overflow:hidden w-[90%]">
       </img>
       </div>
       <div className="absolute top-6 left-12 flex flex-col items-center sm:right-60 sm:top-36 lg:bottom-20 lg:right-10 md:right-4 md:top-28 md:scale-100 lg:gap-4 gap-2 xl:items-center xl:justify-center xl:left-60 ">
       <p className="font-bold text-xl sm:text-2xl md:text-xl text-sm md:text-3xl lg:text-5xl">Trusted and Efficient Architects</p>
       <EnquireForm />
       </div>
    </div>
  );
};

export default StartImage;