import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { AiOutlineCloseCircle } from "react-icons/ai";
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

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="border border-gray-100 shadow-sm relative my-2 items-center justify-center h-fit w-full flex flex-col">
        <h1 className="font-bold text-3xl text-center py-16">Services</h1>
        <div className="grid grid-cols-2 md:grid-cols-5 grid-rows-5 md:grid-rows-2 items-center justify-center px-2 pb-8">
          {/* <divbc className="flex flex-col md:flex-row gap-6 justify-between items-center w-fit max-w-8xl mx-2 px-2"> */}
          <div
            onClick={handleClickOpen}
            className="flex flex-col space-y-2 items-center hover:shadow-xl px-3 my-3 pb-3 rounded-md sm:w-[100%] w-[70%] pt-4 h-[100%]"
          >
            <div className="align-top">
              <div>
                <img
                  src={a1}
                  alt="test1"
                  className="flex flex-wrap justify-center rounded-xl pt-0 "
                />
              </div>
              <p className="font-bold pt-3 text-center">
                3D Interior Designers
              </p>
              <p className="text-center">
                Being one of the leading organizations, we provide 3D interior
                designing services our clients demands.
              </p>
            </div>
            <div className="flex w-fit items-end h-full pb-2">
              <button
                className="rounded-3xl bg-orange-500 text-white text-sm lg:px-3 lg:py-2 hover:bg-orange-400 hover:scale-110 ease-in duration-200 sm:px-3 md:px-2 md:py-1 px-2 py-2"
                type="submit"
              >
                Enquire Now
              </button>
            </div>
          </div>
          <div onClick={handleClickOpen} className="flex flex-col space-y-2 items-center hover:shadow-xl px-3 my-3 pb-3 rounded-md sm:w-[100%] w-[70%] pt-4 h-[100%]">
            <div className="align-top">
              <div>
                <img
                  src={a2}
                  alt="test1"
                  className="flex flex-wrap justify-center rounded-xl pt-0 "
                />
              </div>
              <p className="font-bold pt-3 text-center">
                Architects For Building
              </p>
              <p className="text-center">
                Get the consultation & render the responsibility to the best
                Architects for designing stout buildings.
              </p>
            </div>
            <div className="flex w-fit items-end h-full pb-2">
              <button
                className="rounded-3xl bg-orange-500 text-white text-sm lg:px-3 lg:py-2 hover:bg-orange-400 hover:scale-110 ease-in duration-200 sm:px-3 md:px-2 md:py-1 px-2 py-2"
                type="submit"
              >
                Enquire Now
              </button>
            </div>
          </div>
          <div onClick={handleClickOpen} className="flex flex-col space-y-2 items-center hover:shadow-xl px-3 my-3 pb-3 rounded-md sm:w-[100%] w-[70%] pt-4 h-[100%]">
            <div className="align-top">
              <div>
                <img
                  src={a3}
                  alt="test1"
                  className="flex flex-wrap justify-center rounded-xl pt-0 "
                />
              </div>
              <p className="font-bold pt-3 text-center">
                Architects For Office
              </p>
              <p className="text-center">
                Get your office designed in an impeccable way, contact us for
                the best architecture for your office.
              </p>
            </div>
            <div className="flex w-fit items-end h-full pb-2">
              <button
                className="rounded-3xl bg-orange-500 text-white text-sm lg:px-3 lg:py-2 hover:bg-orange-400 hover:scale-110 ease-in duration-200 sm:px-3 md:px-2 md:py-1 px-2 py-2"
                type="submit"
              >
                Enquire Now
              </button>
            </div>
          </div>
          <div onClick={handleClickOpen} className="flex flex-col space-y-2 items-center hover:shadow-xl px-3 my-3 pb-3 rounded-md sm:w-[100%] w-[70%] pt-4 h-[100%]">
            <div className="align-top">
              <div>
                <img
                  src={a4}
                  alt="test1"
                  className="flex flex-wrap justify-center rounded-xl pt-0 "
                />
              </div>
              <p className="font-bold pt-3 text-center">
                Architects For Residential
              </p>
              <p className="text-center">
                Our company has a set of architects that design excellent
                residential spaces, giving it a beautiful touch.
              </p>
            </div>
            <div className="flex w-fit items-end h-full pb-2">
              <button
                className="rounded-3xl bg-orange-500 text-white text-sm lg:px-3 lg:py-2 hover:bg-orange-400 hover:scale-110 ease-in duration-200 sm:px-3 md:px-2 md:py-1 px-2 py-2 mb-1"
                type="submit"
              >
                Enquire Now
              </button>
            </div>
          </div>
          <div onClick={handleClickOpen} className="flex flex-col space-y-2 items-center hover:shadow-xl px-3 my-3 pb-3 rounded-md sm:w-[100%] w-[70%] pt-4 h-[100%]">
            <div className="align-top">
              <div>
                <img
                  src={a5}
                  alt="test1"
                  className="flex flex-wrap justify-center rounded-xl pt-0 "
                />
              </div>
              <p className="font-bold pt-3 text-center">
                Commercial Architects
              </p>
              <p className="text-center">
                Get architects for designing and laying out the commercial space
                be it business centers, factories, & much more.
              </p>
            </div>
            <div className="flex w-fit items-end h-full pb-2">
              <button
                className="rounded-3xl bg-orange-500 text-white text-sm lg:px-3 lg:py-2 hover:bg-orange-400 hover:scale-110 ease-in duration-200 sm:px-3 md:px-2 md:py-1 px-2 py-2"
                type="submit"
              >
                Enquire Now
              </button>
            </div>
          </div>
          {/* </divbc> */}
          {/* <divbc className="flex flex-col md:flex-row gap-6 justify-between items-center w-fit max-w-8xl mx-2 px-2"> */}
          <div onClick={handleClickOpen} className="flex flex-col space-y-2 items-center hover:shadow-xl px-3 my-3 pb-3 rounded-md  sm:w-[100%] w-[70%] pt-4 h-[100%]">
            <div className="align-top">
              <div>
                <img
                  src={a6}
                  alt="test1"
                  className="flex flex-wrap justify-center rounded-xl pt-0 "
                />
              </div>
              <p className="font-bold pt-3 text-center">
                Interior Designers For Office
              </p>
              <p className="text-center">
                We provide interior designing services for offices to our
                esteemed clientle. Contact us to know more.
              </p>
            </div>
            <div className="flex w-fit items-end h-full pb-2">
              <button
                className="rounded-3xl bg-orange-500 text-white text-sm lg:px-3 lg:py-2 hover:bg-orange-400 hover:scale-110 ease-in duration-200 sm:px-3 md:px-2 md:py-1 px-2 py-2"
                type="submit"
              >
                Enquire Now
              </button>
            </div>
          </div>
          <div onClick={handleClickOpen} className="flex flex-col space-y-2 items-center hover:shadow-xl px-3 my-3 pb-3 rounded-md  sm:w-[100%] w-[70%] pt-4 h-[100%]">
            <div className="align-top">
              <div>
                <img
                  src={a7}
                  alt="test1"
                  className="flex flex-wrap justify-center rounded-xl pt-0 "
                />
              </div>
              <p className="font-bold pt-3 text-center">
                Residence Interior Designers
              </p>
              <p className="text-center">
                We are professionals interior designers offering best designs
                for residence at an affordable price.
              </p>
            </div>
            <div className="flex w-fit items-end h-full pb-2">
              <button
                className="rounded-3xl bg-orange-500 text-white text-sm lg:px-3 lg:py-2 hover:bg-orange-400 hover:scale-110 ease-in duration-200 sm:px-3 md:px-2 md:py-1 px-2 py-2"
                type="submit"
              >
                Enquire Now
              </button>
            </div>
          </div>
          <div onClick={handleClickOpen} className="flex flex-col space-y-2 items-center hover:shadow-xl px-3 my-3 pb-3 rounded-md sm:w-[100%] w-[70%] pt-4 h-[100%]">
            <div className="align-top">
              <div>
                <img
                  src={a8}
                  alt="test1"
                  className="flex flex-wrap justify-center rounded-xl pt-0 "
                />
              </div>
              <p className="font-bold pt-3 text-center">Residential</p>
              <p className="text-center">
                We provide you with a variety of beautifully customised
                residences on our very own website.
              </p>
            </div>
            <div className="flex w-fit items-end h-full pb-2">
              <button
                className="rounded-3xl bg-orange-500 text-white text-sm lg:px-3 lg:py-2 hover:bg-orange-400 hover:scale-110 ease-in duration-200 sm:px-3 md:px-2 md:py-1 px-2 py-2"
                type="submit"
              >
                Enquire Now
              </button>
            </div>
          </div>
          <div onClick={handleClickOpen} className="flex flex-col space-y-2 items-center hover:shadow-xl px-3 my-3 pb-3 rounded-md sm:w-[100%] w-[70%] pt-4 h-[100%]">
            <div className="align-top">
              <div>
                <img
                  src={a9}
                  alt="test1"
                  className="flex flex-wrap justify-center rounded-xl pt-0 "
                />
              </div>
              <p className="font-bold pt-3 text-center">Commercial</p>
              <p className="text-center">
                We add an element of awe to your commercial or recreational
                space without much ado.
              </p>
            </div>
            <div className="flex w-fit items-end h-full pb-2">
              <button
                className="rounded-3xl bg-orange-500 text-white text-sm lg:px-3 lg:py-2 hover:bg-orange-400 hover:scale-110 ease-in duration-200 sm:px-3 md:px-2 md:py-1 px-2 p-2 mb-1 bottom-4"
                type="submit"
              >
                Enquire Now
              </button>
            </div>
          </div>
          <div onClick={handleClickOpen} className="flex flex-col space-y-2 items-center hover:shadow-xl px-3 my-3 pb-3 rounded-md sm:w-[100%] w-[70%] pt-4 h-[100%]">
            <div className="align-top">
              <div>
                <img
                  src={a10}
                  alt="test1"
                  className="flex flex-wrap justify-center rounded-xl pt-0 "
                />
              </div>
              <p className="font-bold pt-3 text-center">Retail</p>
              <p className="text-center">
                Whether it's a big shopping mall or small retail outlet, we do
                it all in stipulated time period.
              </p>
            </div>
            <div className="flex w-fit items-end h-full pb-2">
              <button
                className="rounded-3xl bg-orange-500 text-white text-sm lg:px-3 lg:py-2 hover:bg-orange-400 hover:scale-110 ease-in duration-200 sm:px-3 md:px-2 md:py-1 px-2 py-2"
                type="submit"
              >
                Enquire Now
              </button>
            </div>
          </div>
          {/* </divbc> */}
        </div>
      </div>

      {/* form */}
      <div>
        <div onClick={handleClickOpen}>
          {/* <button
          className="rounded-3xl bg-orange-500 text-white text-sm lg:px-3 lg:py-2 hover:bg-orange-400 hover:scale-110 ease-in duration-100 sm:px-3 md:px-2 md:py-1 px-2 py-2"
          type="submit"
        >
          Enquire Now
        </button> */}
        </div>
        <Dialog open={open} onClose={handleClose} transitionDuration={1000} >
        {/* <div className='flex justify-end relative'><Button onClick={handleClose}>X</Button></div> */}
        <div className="flex flex-row justify-between">
          <div className="pl-6"></div>
          <DialogTitle className="flex text-center ">Send Enquiry</DialogTitle>
          <div className="pt-5 pr-5 scale-150">
            <AiOutlineCloseCircle
              className="text-red-500"
              onClick={handleClose}
            />
          </div>
        </div>
          <DialogContent>
            <DialogContentText className="flex items-center justify-center">
              Write to us for any business enquiries
            </DialogContentText>
            <TextField
              // autoFocus
              margin="dense"
              id="name"
              label="Enter Name"
              type="text"
              fullWidth
              variant="outlined"
              required={true}
            />
            <TextField
              // autoFocus
              margin="dense"
              id="name"
              label="Enter Mobile"
              type="tel"
              fullWidth
              variant="outlined"
              required={true}
              minlength={100000000}
              maxlength={9999999999}
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            />
            <TextField
              // autoFocus
              margin="dense"
              id="name"
              label="Enter Email"
              type="email"
              fullWidth
              variant="outlined"
              required={true}
            />
            <TextField
              // autoFocus
              margin="dense"
              id="name"
              label="Message"
              type="text"
              fullWidth
              variant="outlined"
              required={true}
              rows={4}
              maxlength={10}
            />
          </DialogContent>
          <div className="flex justify-center mb-8 items-center mt-2">
            <button
              className="rounded-3xl bg-orange-500 text-white md:px-64 px-44 sm:px-64 py-2 hover:bg-orange-400 hover:scale-100 ease-in duration-100"
              type="submit"
            >
              Submit
            </button>
          </div>
        </Dialog>
      </div>
    </>
  );
};

export default Services;
