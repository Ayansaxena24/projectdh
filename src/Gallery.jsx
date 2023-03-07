import React, { useState } from "react";
import { GiHouse } from "react-icons/gi";
import { BsPersonPlusFill } from "react-icons/bs";
import { AiOutlineAim } from "react-icons/ai";
import test1 from "./test1.jpeg";
// import test3 from "./test3.jpeg";

const Gallery = () => {
  return (
    <>
      <div className="border border-gray-100 shadow-sm relative my-2 items-center h-[100%] flex flex-col">
        <h1 className="font-bold text-3xl text-center py-16">Gallery</h1>
        <div className="flex space-x-2 sm:space-x-2 sm:px-2 md:space-x-2 md:px-3 flex-row-3 justify-items-stretch pb-4 lg:pb-0 md:pb-2 px-2">
          <div>
            <img src={test1} alt="test1" className="flex flex-wrap justify-center rounded-xl py-2"/>
          </div>
          <div>
            <img src={test1} alt="test3" className="flex flex-wrap justify-center rounded-xl py-2"/>
          </div>
          <div>
            <img src={test1} alt="test1" className="flex flex-wrap justify-center rounded-xl py-2"/>
          </div>
          <div>
            <img src={test1} alt="test1" className="flex flex-wrap justify-center rounded-xl py-2"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;

{/* <div className="border border-gray-100 shadow-sm relative my-2 items-center h-[40%] flex flex-col">
        <h1 className="font-bold text-3xl text-center py-16">Gallery</h1>
        <div className="space-x-4 flex flex-row-3 justify-center items-center text-center pb-4 lg:pb-0 md:pb-2 px-3">
          <div>
            <img src={test1} alt="test1" className="rounded-md"/>
          </div>
          <div>
            <img src={test1} alt="test1" className="rounded-md"/>
          </div>
          <div>
            <img src={test1} alt="test1" className="rounded-md"/>
          </div>
        </div>
        <div className="flex flex-col space-y-2 items-center align-top">
          
        </div>
        <div className="flex flex-col space-y-2 items-center align-top">
          
        </div>
      </div>
    </> */}
