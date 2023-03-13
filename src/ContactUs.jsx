import React, { useState } from "react";
import { ImLocation } from "react-icons/im";
import { ImMail3 } from "react-icons/im";
import { IoCall } from "react-icons/io5";
import { HiClock } from "react-icons/hi2";
import { TfiHeadphoneAlt } from "react-icons/tfi";
// import {Logo, Button, Div, Heading, Text, Form, Input, SubmitButton, FooterLogo} from './styles';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    message: "",
  });

  const { name, email, contactNo, message } = formData;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // submit data here
  };

  return (
    <>
      <div className="border border-gray-100 shadow-sm relative my-2 items-center h-[80%] flex flex-col pb-16">
        <h1 className="font-bold text-3xl text-center py-16">Contact Us</h1>
        <div className="flex flex-col sm:flex-row gap-6 justify-between items-center w-full max-w-5xl mx-auto">
          <div className="px-6 space-y-4">
            <div className="flex flex-row space-x-4">
              <div className="rounded-full h-max p-3 bg-orange-400 relative">
                {<ImLocation className="absolute bottom-2 right-1 text-xl" />}
              </div>
              {/* <div className="mr-6 rounded-full scale-150 h-[20%] pb-1 pr-1 pl-0 absolute mt-8 ml-2"></div> */}
              <div>
                <h1 className="font-bold text-md">Our Office Address</h1>
                <p>Plot No 79,Behind Sodala Thana,Shiv Path</p>
                <p>,Ram Nagar,Sodala,Jaipur,Rajasthan 302019</p>
              </div>
            </div>
            <div className="flex flex-row space-x-4 ">
              {/* <div className="mr-6 rounded-full scale-75 h-max py-1.5 px-4 bg-orange-400 text-orange-400">.</div> */}
              <div className="flex flex-row space-x-2 rounded-full h-max p-3 bg-orange-400 relative">
                {<ImMail3 className="absolute bottom-2 right-1 text-xl" />}
              </div>
              <div>
                <h1 className="font-bold text-md">General Enquiries</h1>
                <p>archimaya83@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-row space-x-4 ">
              {/* <div className="mr-6 rounded-full scale-75 h-max py-1.5 px-4 bg-orange-400 text-orange-400">.</div> */}
              <div className="rounded-full h-max p-3 bg-orange-400 relative">
                {<IoCall className="absolute bottom-2 right-1 text-xl" />}
              </div>
              <div>
                <h1 className="font-bold text-md">Call Us</h1>
                <p>+91-8890079787</p>
              </div>
            </div>
            <div className="flex flex-row space-x-4 ">
              {/* <div className="mr-6 rounded-full scale-75 h-max py-1.5 px-4 bg-orange-400 text-orange-400">.</div> */}
              <div className="rounded-full h-max p-3 bg-orange-400 relative">
                {<HiClock className="absolute bottom-2 right-1 text-xl" />}
              </div>
              <div>
                <h1 className="font-bold text-md">Our Timing</h1>
                <p>Mon - Sat : 10:00 AM - 07:00 PM / 12:00 AM - 12:00 AM</p>
                <p>Sun : Closed / 12:00 AM - 12:00 AM</p>
              </div>
            </div>
          </div>
          <form
            className="text-center flex flex-col justify-center items-center space-y-4 p-2 w-full px-6 sm:pr-2 sm:pl-0 sm:w-96  "
            onSubmit={handleSubmit}
          >
            {/* <div className="flex flex-col gap-4 justify-center items-center"> */}
            <input
              className="p-2 border-gray-400 border rounded-md w-full"
              type="text"
              name="name"
              placeholder="YOUR NAME"
              value={name}
              onChange={handleChange}
            />
            <input
              className="p-2 border-gray-400 border rounded-md w-full"
              type="email"
              name="email"
              placeholder="YOUR EMAIL"
              value={email}
              onChange={handleChange}
            />
            <input
              className="p-2 border-gray-400 border rounded-md w-full"
              type="text"
              name="contactNo"
              placeholder="YOUR CONTACT NUMBER"
              value={contactNo}
              onChange={handleChange}
            />
            <input
              className="p-2 border-gray-400 border rounded-md w-full"
              type="text"
              name="message"
              placeholder="YOUR MESSAGE"
              value={message}
              onChange={handleChange}
            />
            {/* </div> */}
            <div className="flex justify-center w-fit">
              <button
                className="rounded-3xl bg-orange-500 text-white px-6 py-2 hover:bg-orange-400 hover:scale-110 ease-in duration-100"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        {/* <div className="grid justify-items-stretch fixed bottom-8 right-2 mb-1 tr"> */}
          {/* <div className="rounded-full p-1 bg-orange-500 text-white hover:bg-orange-300 text-xl absolute right-4 bottom-4 z-10">
            {<TfiHeadphoneAlt />}
          </div> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default ContactUs;
