import React from "react";
import MediaQuery from "react-responsive";
import background from "./background.png";
import aboutusfg from "./aboutusfg.png";

const AboutUs = () => {
  return (
    <div>
      <MediaQuery maxWidth={412}>
        <div className="relative border-gray-100 border-2 rounded-sm flex flex-col gap-2">
          <div className="flex justify-center items-start">
            <img
              src={background}
              alt="background"
              className="relative flex flex-wrap justify-center pt-2"
            />
            {/* <img
              src={aboutusfg}
              alt="about us"
              className="absolute inset-0 object-contain w-full h-full lg:w-1/2 pr-40 lg:pr-0 lg:pl-10 md:pr-60"
              style={{ left: "-30px", top: "10px" }} */}
            {/* /> */}
          </div>
          <div
            className="flex flex-col text-sm right-4 sm:right-2 sm:bottom-0 sm:top-20 sm:right-12 md:top-32 right-2 bottom-14 lg:right-32 lg:gap-4 lg:top-44 gap-2 xl:right-40 text-center xl:top-56 scale-75 top-4 justify-center"
          >
            <p className="relative font-bold text-md sm:text-2xl sm:left-6 md:text-2xl text-sm lg:text-4xl xl:text-4xl left-3 md:left-8 mb-4 lg:left-20 xl:pb-4">
              About Us
            </p>
            <p className="w-[100%] text-xs">
              We, Sthapna situated at Sodala, Jaipur, Rajasthan believe, good
              design is produced from careful study and research, combined with
              technical knowledge and artistic judgement. It is our aim to
              create spaces were people & activities thrive. Our team is capable
              in handling all the projects from the initial concept till the
              actual completion of the whole project.
            </p>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={413}>
        <div className="relative border-gray-100 border-2 rounded-sm">
          <img
            src={background}
            alt="background"
            className="relative flex flex-wrap justify-center pt-2"
          />
          <img
            src={aboutusfg}
            alt="about us"
            className="absolute inset-0 object-contain w-full h-full lg:w-1/2 pr-40 lg:pr-0 lg:pl-10 md:pr-60"
            style={{ left: "-30px", top: "10px" }}
          />
          <div
            className="absolute text-sm right-4 sm:right-2 sm:bottom-0 sm:top-20 sm:right-12 md:top-32 right-2 bottom-14 lg:right-32 lg:gap-4 lg:top-44 gap-2 xl:right-40 text-center xl:top-56 scale-75 top-4"
            style={{ left: "50%" }}
          >
            <p className="relative font-bold text-md sm:text-2xl sm:left-6 md:text-2xl text-sm lg:text-4xl xl:text-4xl left-3 md:left-8 mb-4 lg:left-20 xl:pb-4">
              About Us
            </p>
            <p className="w-[120%] lg:w-[130%] lg:text-lg md:text-lg xl:text-lg text-xs">
              We, Sthapna situated at Sodala, Jaipur, Rajasthan believe, good
              design is produced from careful study and research, combined with
              technical knowledge and artistic judgement. It is our aim to
              create spaces were people & activities thrive. Our team is capable
              in handling all the projects from the initial concept till the
              actual completion of the whole project.
            </p>
          </div>
        </div>
      </MediaQuery>
    </div>
  );
};

export default AboutUs;
