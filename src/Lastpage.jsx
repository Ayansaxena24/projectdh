import React from "react";
import Map from "./Map";

export default function LastPage()
{
    return (
        <div className="mb-4 rounded-md">
            {/* <p className="border-black border-2 rounded-md text-center">Map Component</p> */}
            <Map />
            <div className="grid grid-cols-1 sm:flex sm:flex-row w-[40%] md:w-[70%] justify-between mb-4 pb-4 sm:pt-2 sm:mt-4 scale-75 sm:scale-100 sm:gap-2">
                <div>
                    <div className="flex flex-col gap-1">
                        <p className="font-bold text-sm">USEFUL LINKS</p>
                        <p className="hover:text-orange-500 text-sm">PRIVACY POLICY</p>
                        <p className="hover:text-orange-500 text-sm">SERVICES</p>
                        <p className="hover:text-orange-500 text-sm">WHY US</p>
                        <p className="hover:text-orange-500 text-sm">VIDEOS</p>
                        <p className="hover:text-orange-500 text-sm">CONTACT US</p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col gap-1 sm:mt-6">
                        <p className="hover:text-orange-500 text-sm">HOME </p>
                        <p className="hover:text-orange-500 text-sm">ABOUT US</p>
                        <p className="hover:text-orange-500 text-sm">GALLERY</p>
                        <p className="hover:text-orange-500 text-sm">TESTIMONIALS</p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col gap-1 mt-4 sm:mt-0">
                        <p className="font-bold text-sm">CONTACT </p>
                        <p>Plot No 79, Behind Sodala Thana,</p>
                        <p>Shiv Path, Ram Nagar,</p>
                        <p> Sodala, Jaipur,</p>
                        <p>  302019, Rajasthan</p>
                        <p className="hover:text-orange-500">+91-8890079787</p>
                        <p className="hover:text-orange-500">archimaya83@gmail,com</p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col mt-4 sm:mt-0">
                        <p className="font-bold text-sm">CONNECT</p>
                        <p className="font-bold text-xl mt-8 hover:bg-orange-500 text-white rounded-full text-center py-1 px-2 absolute bg-black">Jd</p>
                    </div>
                </div>
            </div>
            <div className="pt-2 pb-2">
                <p>© Copyrights 2023 - 2024.Sthapana.All Rights Reserved.</p>
            </div>
        </div>
    );
}