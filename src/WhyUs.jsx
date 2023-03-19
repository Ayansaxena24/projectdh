import React, { useState } from "react";
import { GiHouse } from "react-icons/gi";
import { BsPersonPlusFill } from "react-icons/bs";
import { AiOutlineAim } from "react-icons/ai";

const WhyUs = () => {
  return (
    <>
      <div className="border border-gray-100 shadow-sm relative my-2 items-center flex flex-col pt-2 pb-8">
        <h1 className="font-bold text-3xl text-center py-16">Why Us</h1>
        <div className="space-y-14 sm:space-x-14 flex flex-col sm:flex-row inline-block justify-center items-center text-center pb-4 lg:pb-0 md:pb-2 px-2">
          <div className="flex flex-col space-y-2 items-center">
            <div className="rounded-full p-6 w-fit bg-orange-400 relative">
              {<AiOutlineAim className="absolute bottom-4 right-1 text-5xl" />}
            </div>
            <p className="font-bold pt-4">Aim</p>
            <p>
              it's our aim to create spaces where people and activities thrive
              where customers get utmost satisfaction.
            </p>
          </div>
          <div className="flex flex-col space-y-2 items-center align-top">
            <div className="rounded-full p-6 w-fit bg-orange-400 relative">
              {
                <BsPersonPlusFill className="absolute bottom-4 right-1 text-5xl" />
              }
            </div>
            <p className="font-bold pt-4">Team</p>
            <p>
              Our team is capable of handling all the projects from the initial
              concept in the actual completion throughout
            </p>
          </div>
          <div className="flex flex-col space-y-2 items-center align-top">
            <div className="rounded-full p-6 w-fit bg-orange-400 relative">
              {<GiHouse className="absolute bottom-4 right-1 text-5xl" />}
            </div>
            <p className="font-bold pt-3">Design</p>
            <p>
              Our firm strives to create design that inspires, approaching each
              project, regardless of the size and scale
            </p>
          </div>
        </div>
      </div>
      {/* <div className="grid justify-items-stretch fixed bottom-8 right-2 mb-1 tr"> */}

      {/* </div> */}
    </>
  );
};

export default WhyUs;
