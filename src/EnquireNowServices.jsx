import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TfiHeadphoneAlt } from "react-icons/tfi";

export default function EnquireNowServices() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div  onClick={handleClickOpen}>
        {/* <button
          className="rounded-3xl bg-orange-500 text-white text-sm lg:px-3 lg:py-2 hover:bg-orange-400 hover:scale-110 ease-in duration-100 sm:px-3 md:px-2 md:py-1 px-2 py-2"
          type="submit"
        >
          Enquire Now
        </button> */}
      </div>
      <Dialog open={open} onClose={handleClose} transitionDuration={1000}>
        {/* <div className='flex justify-end relative'><Button onClick={handleClose}>X</Button></div> */}
        <div className="flex flex-row justify-between">
          <div className="pl-4"></div>
          <DialogTitle className="flex text-center ">Send Enquiry</DialogTitle>
          <div className="pt-5 pr-2 scale-150">
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
            className="rounded-3xl bg-orange-500 text-white md:px-64 px-44 sm:px-64 py-2 hover:bg-orange-400 hover:scale-105 ease-in duration-100"
            type="submit"
          >
            Submit
          </button>
        </div>
      </Dialog>
    </div>
  );
}
