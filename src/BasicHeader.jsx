import React from "react";
import MediaQuery from "react-responsive";
import { ImMail3 } from "react-icons/im";
import { IoCall } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import { MdPermIdentity } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";

const BasicHeader = () => {
  return (
    <div>
      <MediaQuery maxWidth={412}>
        <div className="flex justify-between my-4 w-screen">
          <p>hamburger</p>
          <p className="font-bold">Sthapna</p>
          <div className="flex flex-row gap-4 pt-1 ml-">
            <FiShoppingCart />
            <IoCallOutline />
          </div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={413}>
        <div className="flex flex-row mt-2 justify-between flex-wrap">
          <div className="flex flex-row">
            <div className="flex flex-row gap-2 ml-4 sm:ml-16 lg:ml-24">
              <IoCall className="text-xl mt-2 hover:text-orange-500" />
              <ImMail3 className="text-xl mt-2 hover:text-orange-500" />
              <p className="font-extrabold text-2xl hover:text-orange-500">
                JD
              </p>
            </div>
            <div className="ml-6 flex flex-row hover:text-orange-500 text-gray-700">
              <IoCallOutline className="text-xl mt-2" />
              <p className="pl-2 mt-1">+91-8890073787</p>
            </div>
            <div className="ml-6 flex flex-row hover:text-orange-500 text-gray-700">
              <AiOutlineMail className="text-xl mt-2 " />
              <p className="pl-2 mt-1">archimaya83@gmail.com</p>
            </div>
          </div>
          <div className="justify-items-end flex gap-10 text-gray-700 mr-10">
            <div className="flex flex-row hover:text-orange-500">
              <SlLocationPin className="text-xl mt-2 " />
              <p className="pl-1 mt-1">Sodala</p>
            </div>
            <div className="flex flex-row mr-8 text-gray-700 hover:text-orange-500">
              <MdPermIdentity className="text-xl mt-2 " />
              <p className="pl-1 mt-1 text-gray-500 hover:text-orange-500">
                Login
              </p>
              <p className="pl-1 mt-1 text-gray-500">|</p>
              <p className="pl-1 mt-1 text-gray-500 hover:text-orange-500">
                Sign Up
              </p>
            </div>
          </div>
        </div>
      </MediaQuery>
    </div>
  );
};

export default BasicHeader;
