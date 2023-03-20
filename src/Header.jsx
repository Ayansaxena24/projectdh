import React from "react";
import { BiMenu } from "react-icons/bi";
import { ImMail3 } from "react-icons/im";
import { useState } from "react";

const Header = () => {
  const scrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  const scrollToServices = () => {
    window.scrollTo({
      top: 670,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  const scrollToAboutUs = () => {
    window.scrollTo({
      top: 1900,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  const scrollToWhyUs = () => {
    window.scrollTo({
      top: 2520,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  const scrollToGallery = () => {
    window.scrollTo({
      top: 3000,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  const scrollToVideos = () => {
    window.scrollTo({
      top: 3600,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  const scrollToTestimonials = () => {
    window.scrollTo({
      top: 4150,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  const scrollToContactUs = () => {
    window.scrollTo({
      top: 4600,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  const [open, setOpen] = useState(false);

  return (
    <header className="hidden sm:visible flex flex-col sm:flex sm:flex-row sm:justify-between items-start sm:items-center py-4 h-[15%] md:flex-row mb-4 sticky top-0 sm:right-3 sm:left-3 bg-white z-10 lg:justify-items-end">
      <div className="flex">
        <div className="max-w-4xl mx-auto left-8 ml-4 sm:ml-16 lg:ml-24 mt-4">
          <div className="flex flex-row">
            {/* <img src={S} alt="My Image" className=' bg-orange-500 text-white'/> */}
            <div className="w-14 h-14 bg-orange-500 relative rounded-md items-center justify-center flex">
              <div className="absolute text-white text-2xl">S</div>
            </div>
            <p className="text-2xl ml-3 mt-3 items-center"> Sthapana </p>
          </div>
        </div>
      </div>
      <button
        onClick={() => setOpen(!open)}
        className="text-3xl absolute right-8 top-6 cursor-pointer sm:hidden"
      >
        <BiMenu />
      </button>
      <div className={`flex flex-col mt-4 absolute sm:static sm:z-auto sm:w-auto items-start sm:grid sm:grid-cols-3 sm:gap-4 sm:pr-10 sm:mr-5 sm:pl-3 md:flex md:flex-row md:items-center md:gap-3 md:pr-10 md:mr-5 md:pl-3 lg:flex lg:items-center lg:gap-4 lg:pr-10 lg:mr-5 lg:pl-3 lg:gap-3 pl-1 transition-all duration-500 bg-white ease-in ${open ? 'left-0 top-[-40px] h-screen gap-4 z:200':'left-[-490px] top-[-490px]'} z-[-1] w-full`}>
        <button
          className="hover:bg-slate-100 p-2 rounded-md hover:-translate-y-1 ease-in duration-100 hover:text-orange-500"
          onClick={scrollToHome}
        >
          HOME
        </button>
        <button
          className="hover:bg-slate-100 p-2 rounded-md hover:-translate-y-1 ease-in duration-100 hover:text-orange-500"
          onClick={scrollToServices}
        >
          SERVICES
        </button>
        <button
          className="hover:bg-slate-100 p-2 rounded-md hover:-translate-y-1 ease-in duration-100 hover:text-orange-500"
          onClick={scrollToAboutUs}
        >
          ABOUT US
        </button>
        <button
          className="hover:bg-slate-100 p-2 rounded-md hover:-translate-y-1 ease-in duration-100 hover:text-orange-500"
          onClick={scrollToWhyUs}
        >
          WHY US
        </button>
        <button
          className="hover:bg-slate-100 p-2 rounded-md hover:-translate-y-1 ease-in duration-100 hover:text-orange-500"
          onClick={scrollToGallery}
        >
          GALLERY
        </button>
        <button
          className="hover:bg-slate-100 p-2 rounded-md hover:-translate-y-1 ease-in duration-100 hover:text-orange-500"
          onClick={scrollToVideos}
        >
          VIDEOS
        </button>
        <button
          className="hover:bg-slate-100 p-2 rounded-md hover:-translate-y-1 ease-in duration-100 hover:text-orange-500"
          onClick={scrollToTestimonials}
        >
          TESTIMONIALS
        </button>
        <button
          className="hover:bg-slate-100 p-2 rounded-md hover:-translate-y-1 ease-in duration-100 hover:text-orange-500"
          onClick={scrollToContactUs}
        >
          CONTACT US
        </button>
      </div>
    </header>
  );
};

export default Header;
