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
import { AiOutlineClose } from "react-icons/ai";
import { JoinRight } from "@mui/icons-material";
import { Slide } from "@mui/material";

export default function SignupForm() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleClickOpen}
        className="pl-1 mt-1 text-gray-500 hover:text-orange-500"
        type="submit"
      >
        {" "}
        Sign Up
      </button>
      <Dialog open={open} onClose={handleClose} transitionDuration={700} TransitionComponent={Slide}>
        <div className="flex flex-row">
          <div className="flex border-2 w-[40%]">
            <div className="flex flex-col justify-between items-center justify-center">
              <div></div>
              <div></div>
              <div className="flex items-center">
                <p className="p-8 bg-orange-500 rounded-full text-3xl text-white px-11">
                  S
                </p>
              </div>
              <div className="pl-8">
                <div className="space-y-3">
                  <p className="text-xl">Sign Up</p>
                  <hr className="border-1 w-[90%]" />
                  <p className="flex flex-wrap w-[80%]">
                    We do not share your personal details with anyone.
                  </p>
                </div>
              </div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <DialogContent className="flex justify-end w-[120%] text-gray-400">
                <button onClick={handleClose} className="hover:text-white hover:bg-red-600 rounded-md hover:rounded-md transition ease-in-out duration-300"><AiOutlineClose /></button>
            </DialogContent>
            <DialogContent className="space-y-6 w-[120%]">
              <TextField
                // autoFocus
                margin="dense"
                id="name"
                label="Mobile Number"
                type="tel"
                fullWidth
                variant="standard"
                required={true}
                minlength={100000000}
                maxlength={9999999999}
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              />
              <div className="relative">
                <TextField
                  // autoFocus
                  margin="dense"
                  id="password"
                  label="Password"
                  type="text"
                  fullWidth
                  variant="standard"
                  required={true}
                />
                <button className="absolute transition ease-in-out duration-300 right-0 bottom-2 text-blue-400 hover:bg-gray-100 px-1">
                  Forgot?
                </button>
              </div>
            </DialogContent>
            <DialogContent className="flex flex-col space-y-4 w-[120%]">
              <button className="px-2 py-1 bg-orange-500 rounded-sm text-white font-semibold shadow-md hover:bg-orange-400 transition ease-in-out duration-300">
                Log In
              </button>
              <div className="flex flex-row justify-between items-center">
                <hr className="border-1 w-[40%]" />
                <p>OR</p>
                <hr className="border-1 w-[40%]" />
              </div>
              <button className="px-2 py-1 bg-orange-500 rounded-sm text-white font-semibold shadow-md hover:bg-orange-400 transition ease-in-out duration-300">
                Login with OTP
              </button>
              <div className="flex justify-center">
                <button className="transition ease-in-out duration-500 right-0 bottom-2 text-blue-400 hover:bg-gray-100 px-1">
                  Don't have an account? Sign Up
                </button>
              </div>
            </DialogContent>
            <DialogContent className="mb-2"/>
          </div>
          
        </div>
      </Dialog>
    </div>
  );
}
