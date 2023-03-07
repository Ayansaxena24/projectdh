import React from "react";
import Map from "./Map";

export default function LastPage()
{
    return (
        <div className="mb-4 rounded-md">
            {/* <p className="border-black border-2 rounded-md text-center">Map Component</p> */}
            <Map />
            <div className="flex flex-row w-[80%] justify-between mb-4 pb-4 pt-2 mt-4 scale-75 sm:scale-100 gap-2 sm:gap-2">
                <div>
                    <div className="flex flex-col gap-1">
                        <p className="font-bold text-sm">USEFUL LINKS</p>
                        <p className="hover:text-orange-500 text-sm">PRIVACY POLICY</p>
                        <p className="hover:text-orange-500 text-sm">SERVICES</p>
                        <p className="hover:text-orange-500 text-sm">WHY US</p>
                        <p className="hover:text-orange-500 text-sm">VIDEOS</p>
                        <p className="hover:text-orange-500 text-sm">MORE</p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col gap-1 mt-6">
                        <p className="hover:text-orange-500 text-sm">HOME </p>
                        <p className="hover:text-orange-500 text-sm">ABOUT US</p>
                        <p className="hover:text-orange-500 text-sm">GALLERY</p>
                        <p className="hover:text-orange-500 text-sm">TESTIMONIALS</p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col gap-1">
                        <p className="font-bold text-sm">CONTACT </p>
                        <p>Plot No 79, Behind Sodala Thana, Shiv</p>
                        <p>Path, Ram Nagar, Sodala, Jaipur</p>
                        <p>302019, Rajasthan</p>
                        <p className="hover:text-orange-500">+91-8890079787</p>
                        <p className="hover:text-orange-500">archimaya83@gmail,com</p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col">
                        <p className="font-bold">CONNECT</p>
                        <p className="font-extrabold text-xl hover:text-orange-500 text-white rounded-full text-center mt-2 bg-black">JD</p>
                    </div>
                </div>
            </div>
            <div className="pt-2 pb-2">
                <p>© Copyrights 2023 - 2024.Sthapana.All Rights Reserved.</p>
            </div>
        </div>
    );
}