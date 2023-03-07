import React from 'react';

const Header = () => {
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
        <button className='hover:bg-slate-100 p-2 rounded-md hover:-translate-y-1 ease-in duration-100 hover:text-orange-500'>HOME</button>
        <button className='hover:bg-slate-100 p-2 rounded-md hover:-translate-y-1 ease-in duration-100 hover:text-orange-500'>SERVICES</button>
        <button className='hover:bg-slate-100 p-2 rounded-md hover:-translate-y-1 ease-in duration-100 hover:text-orange-500'>ABOUT US</button>
        <button className='hover:bg-slate-100 p-2 rounded-md hover:-translate-y-1 ease-in duration-100 hover:text-orange-500'>WHY US</button>
        <button className='hover:bg-slate-100 p-2 rounded-md hover:-translate-y-1 ease-in duration-100 hover:text-orange-500'>GALLERY</button>
        <button className='hover:bg-slate-100 p-2 rounded-md hover:-translate-y-1 ease-in duration-100 hover:text-orange-500'>VIDEOS</button>
        <button className='hover:bg-slate-100 p-2 rounded-md hover:-translate-y-1 ease-in duration-100 hover:text-orange-500'>TESTIMONIALS</button>
        <button className='hover:bg-slate-100 p-2 rounded-md hover:-translate-y-1 ease-in duration-100 hover:text-orange-500'>CONTACT US</button>
      </div>
    </header>
  );
};

export default Header;