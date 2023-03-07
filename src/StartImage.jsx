import React, { useState } from "react";
import startimage from "./startimage.jpg";

const StartImage = () => {
  return (
    <div className="relative">
       <img 
           src={startimage} 
           alt="test1" 
           className="flex flex-wrap justify-center py-2">
       </img>
       <div className="absolute sm:right-10 sm:bottom-24 right-2 bottom-14 flex flex-col items-center lg:bottom-28 lg:right-30 lg:gap-4 gap-2 xl:bottom-52 xl:right-40 ">
       <p className="relative font-bold text-md sm:text-lg md:text-xl text-sm lg:text-3xl">Trusted and Efficient Architects</p>
       <button
           className="rounded-3xl bg-orange-500 text-white text-sm hover:bg-orange-400 hover:scale-90 sm:hover:scale-90 md:hover:scale-90 ease-in duration-150 sm:px-3 md:px-4 md:py-2 px-3 py-1 scale-75 lg:scale-90 lg:px-4 lg:py-2 lg:hover:scale-100"
           type="submit"
       > Enquire Now
       </button>
       </div>
    </div>
  );
};

export default StartImage;