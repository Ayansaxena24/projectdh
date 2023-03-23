import React, { useState } from "react";
import { GiHouse } from "react-icons/gi";
import { BsPersonPlusFill } from "react-icons/bs";
import { AiOutlineAim } from "react-icons/ai";
import test1 from "./test1.jpeg";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
// import test3 from "./test3.jpeg";

const Gallery = () => {
  const options = {
    type: "slide",
    gap: "1rem",
    autoplay: true,
    pauseOnHover: true,
    resetProgress: false,
    height: "10rem",
  };

  return (
    <>
      <div className="border border-gray-100 shadow-sm relative my-2 items-center h-[100%] flex flex-col pb-12">
        <h1 className="font-bold text-3xl text-center py-16">Gallery</h1>
        <div className="md:hidden">
          <div className="wrapper rounded-md px-3">
            <Splide
              aria-label="My Favorite Images"
              options={{
                perPage: 1,
                height: "18rem",
                rewind: false,
                gap: "1rem",
                type: "slide",
                speed: 1000,
                width: 400,
                perMove: 1,
                arrows: true,
                pagination: true,
                drag: true,
                lazyLoad: false,
              }}
            >
              <SplideSlide>
                <img src={test1} alt="Image 1" />
              </SplideSlide>
              <SplideSlide>
                <img src={test1} alt="Image 2" />
              </SplideSlide>
              <SplideSlide>
                <img src={test1} alt="Image 2" />
              </SplideSlide>
              <SplideSlide>
                <img src={test1} alt="Image 2" />
              </SplideSlide>
            </Splide>
          </div>
        </div>
        <div className="grid grid-rows-2 md:grid-rows-1 md:grid-flow-col space-x-4 sm:space-x-2 sm:px-2 md:space-x-8 md:px-16 pb-4 lg:pb-0 md:pb-2 px-4 hidden md:flex">
          <div>
            <img
              src={test1}
              alt="test3"
              className="flex flex-wrap justify-center rounded-3xl md:py-2 scale-75 md:scale-100"
            />
          </div>
          <div>
            <img
              src={test1}
              alt="test3"
              className="flex flex-wrap justify-center rounded-3xl md:py-2 scale-75 md:scale-100"
            />
          </div>
          <div>
            <img
              src={test1}
              alt="test3"
              className="flex flex-wrap justify-center rounded-3xl md:py-2 scale-75 md:scale-100"
            />
          </div>
          <div>
            <img
              src={test1}
              alt="test3"
              className="flex flex-wrap justify-center rounded-3xl md:py-2 scale-75 md:scale-100"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;

{
  /* <div className="border border-gray-100 shadow-sm relative my-2 items-center h-[40%] flex flex-col">
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
    </> */
}
