import React from 'react';

const Header = () => {

  const scrollToHome = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  const scrollToServices = () =>{
    window.scrollTo({
      top: 670, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  const scrollToAboutUs = () =>{
    window.scrollTo({
      top: 1900, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  const scrollToWhyUs = () =>{
    window.scrollTo({
      top: 2520, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  const scrollToGallery = () =>{
    window.scrollTo({
      top: 3000, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  const scrollToVideos = () =>{
    window.scrollTo({
      top: 3520, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  const scrollToTestimonials = () =>{
    window.scrollTo({
      top: 4000, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  const scrollToContactUs = () =>{
    window.scrollTo({
      top: 4550, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };


  return (
    <header className="flex flex-row justify-between items-center py-4 h-[15%] md:flex-wrap mb-4 sticky top-0 right-3 left-3 bg-white z-10">
      <div className="flex items-center">
        <div className="max-w-4xl mx-auto">
        <div className='flex flex-row'>
        {/* <img src={S} alt="My Image" className=' bg-orange-500 text-white'/> */}
        <div className="w-20 h-20 bg-orange-500 relative rounded-md">
        <div className="absolute text-white top-5 left-8 text-2xl">S</div>
        </div>
        <p className='text-2xl ml-3 mt-5'> Sthapana </p>
        </div>
        
        </div >
      </div>
      <div className="sm:flex sm:items-center sm:gap-4 sm:pr-10 sm:mr-5 sm:pl-3 md:flex md:items-center md:gap-3 lg:gap-3 md:pr-10 md:mr-5 md:pl-3 lg:flex lg:items-center lg:gap-4 lg:pr-10 lg:mr-5 lg:pl-3 pl-8">
        <button className='hover:bg-slate-100 p-2 rounded-md hover:-translate-y-1 ease-in duration-100 hover:text-orange-500' onClick={scrollToHome}>HOME</button>
        <button className='hover:bg-slate-100 p-2 rounded-md hover:-translate-y-1 ease-in duration-100 hover:text-orange-500' onClick={scrollToServices}>SERVICES</button>
        <button className='hover:bg-slate-100 p-2 rounded-md hover:-translate-y-1 ease-in duration-100 hover:text-orange-500' onClick={scrollToAboutUs}>ABOUT US</button>
        <button className='hover:bg-slate-100 p-2 rounded-md hover:-translate-y-1 ease-in duration-100 hover:text-orange-500' onClick={scrollToWhyUs}>WHY US</button>
        <button className='hover:bg-slate-100 p-2 rounded-md hover:-translate-y-1 ease-in duration-100 hover:text-orange-500' onClick={scrollToGallery}>GALLERY</button>
        <button className='hover:bg-slate-100 p-2 rounded-md hover:-translate-y-1 ease-in duration-100 hover:text-orange-500' onClick={scrollToVideos}>VIDEOS</button>
        <button className='hover:bg-slate-100 p-2 rounded-md hover:-translate-y-1 ease-in duration-100 hover:text-orange-500' onClick={scrollToTestimonials}>TESTIMONIALS</button>
        <button className='hover:bg-slate-100 p-2 rounded-md hover:-translate-y-1 ease-in duration-100 hover:text-orange-500' onClick={scrollToContactUs}>CONTACT US</button>
      </div>
    </header>
  );
};

export default Header;