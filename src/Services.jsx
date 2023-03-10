import React, { useState } from "react";
import test1 from "./test1.jpeg";
import a1 from "./a1.jpeg";
import a2 from "./a2.jpeg";
import a3 from "./a3.jpeg";
import a4 from "./a4.jpeg";
import a5 from "./a5.jpeg";
import a6 from "./a6.jpeg";
import a7 from "./a7.jpeg";
import a8 from "./a8.jpg";
import a9 from "./a9.jpg";
import a10 from "./a10.jpg";

const Services = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="border border-gray-100 shadow-sm relative my-2 items-center h-fit w-full flex flex-col">
        <h1 className="font-bold text-3xl text-center py-16">Services</h1>
        <divabc className="flex flex-col">
          <divbc className="flex flex-col md:flex-row gap-6 justify-between items-center w-fit max-w-8xl mx-2 px-2">
            <div className="flex flex-col space-y-2 items-center hover:shadow-xl px-3 my-3 pb-3 rounded-md sm:w-[100%] w-[70%] pt-4">
              <div>
                <img
                  src={a1}
                  alt="test1"
                  className="flex flex-wrap justify-center rounded-xl pt-0 "
                />
              </div>
              <p className="font-bold pt-4 text-center">
                3D Interior Designers
              </p>
              <p className="text-center">
                Being one of the leading organizations, we provide 3D interior
                designing services our clients demands.
              </p>
              <div className="flex justify-center w-fit pt-4">
                <button
                  className="rounded-3xl bg-orange-500 text-white text-sm lg:px-3 lg:py-2 hover:bg-orange-400 hover:scale-110 ease-in duration-100 sm:px-3 md:px-2 md:py-1 px-2 py-2"
                  type="submit"
                >
                  Enquire Now
                </button>
              </div>
            </div>
            <div className="flex flex-col space-y-2 items-center hover:shadow-xl px-3 my-3 pb-3 rounded-md sm:w-[100%] w-[70%] pt-4">
              <div>
                <img
                  src={a2}
                  alt="test1"
                  className="flex flex-wrap justify-center rounded-xl pt-0 "
                />
              </div>
              <p className="font-bold pt-4 text-center">
                Architects For Building
              </p>
              <p className="text-center">
                Get the consultation & render the responsibility to the best
                Architects for designing stout buildings.
              </p>
              <div className="flex justify-center w-fit pt-4">
                <button
                  className="rounded-3xl bg-orange-500 text-white text-sm lg:px-3 lg:py-2 hover:bg-orange-400 hover:scale-110 ease-in duration-100 sm:px-3 md:px-2 md:py-1 px-2 py-2"
                  type="submit"
                >
                  Enquire Now
                </button>
              </div>
            </div>
            <div className="flex flex-col space-y-2 items-center hover:shadow-xl px-3 my-3 pb-3 rounded-md sm:w-[100%] w-[70%] pt-4 align-top h-[95%]">
              <div>
                <img
                  src={a3}
                  alt="test1"
                  className="flex flex-wrap justify-center rounded-xl pt-0 "
                />
              </div>
              <p className="font-bold pt-5 text-center">
                Architects For Office
              </p>
              <p className="text-center">
                Get your office designed in an impeccable way, contact us for
                the best architecture for your office.
              </p>
              <div className="flex justify-center w-fit pt-11">
                <button
                  className="rounded-3xl bg-orange-500 text-white text-sm lg:px-3 lg:py-2 hover:bg-orange-400 hover:scale-110 ease-in duration-100 sm:px-3 md:px-2 md:py-1 px-2 py-2"
                  type="submit"
                >
                  Enquire Now
                </button>
              </div>
            </div>
            <div className="flex flex-col space-y-2 items-center hover:shadow-xl px-3 my-3 pb-3 rounded-md sm:w-[100%] w-[70%] pt-4">
              <div>
                <img
                  src={a4}
                  alt="test1"
                  className="flex flex-wrap justify-center rounded-xl pt-0 "
                />
              </div>
              <p className="font-bold pt-4 text-center">
                Architects For Residential
              </p>
              <p className="text-center">
                Our company has a set of architects that design excellent
                residential spaces, giving it a beautiful touch.
              </p>
              <div className="flex justify-center w-fit pt-4">
                <button
                  className="rounded-3xl bg-orange-500 text-white text-sm lg:px-3 lg:py-2 hover:bg-orange-400 hover:scale-110 ease-in duration-100 sm:px-3 md:px-2 md:py-1 px-2 py-2 mb-1"
                  type="submit"
                >
                  Enquire Now
                </button>
              </div>
            </div>
            <div className="flex flex-col space-y-2 items-center hover:shadow-xl px-3 my-3 pb-3 rounded-md sm:w-[100%] w-[70%] pt-4">
              <div>
                <img
                  src={a5}
                  alt="test1"
                  className="flex flex-wrap justify-center rounded-xl pt-0 "
                />
              </div>
              <p className="font-bold pt-4 text-center">
                Commercial Architects
              </p>
              <p className="text-center">
                Get architects for designing and laying out the commercial space
                be it business centers, factories, & much more.
              </p>
              <div className="flex justify-center w-fit pt-4">
                <button
                  className="rounded-3xl bg-orange-500 text-white text-sm lg:px-3 lg:py-2 hover:bg-orange-400 hover:scale-110 ease-in duration-100 sm:px-3 md:px-2 md:py-1 px-2 py-2"
                  type="submit"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </divbc>
          <divbc className="flex flex-col md:flex-row gap-6 justify-between items-center w-fit max-w-8xl mx-2 px-2">
            <div className="flex flex-col space-y-2 items-center hover:shadow-xl px-3 my-3 pb-3 rounded-md sm:w-[100%] w-[70%] pt-4">
              <div>
                <img
                  src={a6}
                  alt="test1"
                  className="flex flex-wrap justify-center rounded-xl pt-0 "
                />
              </div>
              <p className="font-bold pt-4 text-center">
                Interior Designers For Office
              </p>
              <p className="text-center">
              We provide interior designing services for offices to our esteemed 
              clientle. Contact us to know more.
              </p>
              <div className="flex justify-center w-fit pt-4">
                <button
                  className="rounded-3xl bg-orange-500 text-white text-sm lg:px-3 lg:py-2 hover:bg-orange-400 hover:scale-110 ease-in duration-100 sm:px-3 md:px-2 md:py-1 px-2 py-2"
                  type="submit"
                >
                  Enquire Now
                </button>
              </div>
            </div>
            <div className="flex flex-col space-y-2 items-center hover:shadow-xl px-3 my-3 pb-3 rounded-md sm:w-[100%] w-[70%] pt-4">
              <div>
                <img
                  src={a7}
                  alt="test1"
                  className="flex flex-wrap justify-center rounded-xl pt-0 "
                />
              </div>
              <p className="font-bold pt-4 text-center">
                Residence Interior Designers
              </p>
              <p className="text-center">
              We are professionals interior designers offering best designs 
              for residence at an affordable price.
              </p>
              <div className="flex justify-center w-fit pt-4">
                <button
                  className="rounded-3xl bg-orange-500 text-white text-sm lg:px-3 lg:py-2 hover:bg-orange-400 hover:scale-110 ease-in duration-100 sm:px-3 md:px-2 md:py-1 px-2 py-2"
                  type="submit"
                >
                  Enquire Now
                </button>
              </div>
            </div>
            <div className="flex flex-col space-y-2 items-center hover:shadow-xl px-3 my-3 pb-3 rounded-md sm:w-[100%] w-[70%] pt-4 align-top h-[95%]">
              <div>
                <img
                  src={a8}
                  alt="test1"
                  className="flex flex-wrap justify-center rounded-xl pt-0 "
                />
              </div>
              <p className="font-bold pt-5 text-center">
                Residential
              </p>
              <p className="text-center">
              We provide you with a variety of beautifully customised 
              residences on our very own website.
              </p>
              <div className="flex justify-center w-fit pt-11">
                <button
                  className="rounded-3xl bg-orange-500 text-white text-sm lg:px-3 lg:py-2 hover:bg-orange-400 hover:scale-110 ease-in duration-100 sm:px-3 md:px-2 md:py-1 px-2 py-2"
                  type="submit"
                >
                  Enquire Now
                </button>
              </div>
            </div>
            <div className="flex flex-col space-y-2 items-center hover:shadow-xl px-3 my-3 pb-3 rounded-md sm:w-[100%] w-[70%] pt-4">
              <div>
                <img
                  src={a9}
                  alt="test1"
                  className="flex flex-wrap justify-center rounded-xl pt-0 "
                />
              </div>
              <p className="font-bold pt-4 text-center">
                Commercial
              </p>
              <p className="text-center">
              We add an element of awe to your commercial or recreational 
              space without much ado.
              </p>
              <div className="flex justify-center w-fit pt-4">
                <button
                  className="rounded-3xl bg-orange-500 text-white text-sm lg:px-3 lg:py-2 hover:bg-orange-400 hover:scale-110 ease-in duration-100 sm:px-3 md:px-2 md:py-1 px-2 py-2 mb-1"
                  type="submit"
                >
                  Enquire Now
                </button>
              </div>
            </div>
            <div className="flex flex-col space-y-2 items-center hover:shadow-xl px-3 my-3 pb-3 rounded-md sm:w-[100%] w-[70%] pt-4">
              <div>
                <img
                  src={a10}
                  alt="test1"
                  className="flex flex-wrap justify-center rounded-xl pt-0 "
                />
              </div>
              <p className="font-bold pt-4 text-center">
                Retail
              </p>
              <p className="text-center">
              Whether it's a big shopping mall or small retail outlet, 
              we do it all in stipulated time period.
              </p>
              <div className="flex justify-center w-fit pt-4">
                <button
                  className="rounded-3xl bg-orange-500 text-white text-sm lg:px-3 lg:py-2 hover:bg-orange-400 hover:scale-110 ease-in duration-100 sm:px-3 md:px-2 md:py-1 px-2 py-2"
                  type="submit"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </divbc>
        </divabc>
      </div>
    </>
  );
};

export default Services;
