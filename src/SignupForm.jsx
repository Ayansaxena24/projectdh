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
  const [activeState, setActiveState] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
    setActiveState(0);
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
      <Dialog
        open={open}
        onClose={handleClose}
        transitionDuration={700}
        TransitionComponent={Slide}
      >
        <div className="flex flex-row h-[500px]">
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

          {activeState === 0 ? (
            <div className="flex flex-col justify-between">
              <DialogContent className="flex flex-col justify-between items-end w-[140%] text-gray-400">
                <button
                  onClick={handleClose}
                  className="hover:text-white hover:bg-red-600 rounded-md hover:rounded-md transition ease-in-out duration-300"
                  >
                  <AiOutlineClose />
                </button>
                  <button></button>
              </DialogContent>
              <DialogContent className="space-y-6 w-[140%]">
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
              </DialogContent>
              <DialogContent />
              <DialogContent className="flex flex-col space-y-4 w-[140%]">
                <button onClick={() => setActiveState(activeState + 1)} className="px-2 py-1 bg-orange-500 rounded-sm text-white font-semibold shadow-md hover:bg-orange-400 transition ease-in-out duration-300">
                  Continue
                </button>
                <div className="flex justify-center">
                  <button className="transition ease-in-out duration-500 right-0 bottom-2 text-blue-400 hover:bg-gray-100 px-1">
                    Existing User? Log In
                  </button>
                </div>
              </DialogContent>
              <DialogContent />
            </div>
          ) : 
          
          
          activeState === 1 ? (
            <div className="flex flex-col justify-between">
 <DialogContent className="flex flex-col justify-between items-end w-[140%] text-gray-400">
                <button
                  onClick={handleClose}
                  className="hover:text-white hover:bg-red-600 rounded-md hover:rounded-md transition ease-in-out duration-300"
                  >
                  <AiOutlineClose />
                </button>
                  <button></button>
              </DialogContent>
              <DialogContent className="space-y-6 w-[140%] mt-2">
                <div className="relative">
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
                <button onClick={() => setActiveState(activeState - 1)} className="absolute transition ease-in-out duration-300 right-0 bottom-2 text-blue-400 hover:bg-gray-100 px-1">
                  Change ?
                </button>
                </div>
                
                <div className="relative">
                <TextField
                  // autoFocus
                  margin="dense"
                  id="name"
                  label="OTP Sent to Mobile"
                  type="tel"
                  fullWidth
                  variant="standard"
                  required={true}
                  minlength={100000000}
                  maxlength={9999999999}
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                />
                <button className="absolute transition ease-in-out duration-300 right-0 bottom-2 text-blue-400 hover:bg-gray-100 px-1">
                Resend ?
                </button>
              </div>
              </DialogContent>
              <DialogContent className="flex flex-col space-y-4 w-[140%] mb-3">
                <button onClick={() => setActiveState(activeState + 1)} className="px-2 py-1 bg-orange-500 rounded-sm text-white font-semibold shadow-md hover:bg-orange-400 transition ease-in-out duration-300">
                  Continue
                </button>
                <div className="flex justify-center">
                  <button className="transition ease-in-out duration-500 right-0 bottom-2 text-blue-400 hover:bg-gray-100 px-1">
                    Existing User? Log In
                  </button>
                </div>
              </DialogContent>
              <DialogContent className="mb-2" />
            </div>
          ) : 
          
            <div className="flex flex-col justify-between w-[60%]">
              <DialogContent className="flex justify-end w-[94%] text-gray-400">
                <button
                  onClick={handleClose}
                  className="hover:text-white hover:bg-red-600 rounded-md hover:rounded-md transition ease-in-out duration-300"
                >
                  <AiOutlineClose />
                </button>
              </DialogContent>
              <DialogContent className="space-y-6 w-[94%]">
                <TextField
                  // autoFocus
                  margin="dense"
                  id="name"
                  label="NAME"
                  type="tel"
                  fullWidth
                  variant="standard"
                  required={true}
                  minlength={100000000}
                  maxlength={9999999999}
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                />
                
                <TextField
                  // autoFocus
                  margin="dense"
                  id="email"
                  label="EMAIL (OPTIONAL)"
                  type="email"
                  fullWidth
                  variant="standard"
                />
                
                <TextField
                  // autoFocus
                  margin="dense"
                  id="name"
                  label="SET PASSWORD"
                  type="tel"
                  fullWidth
                  variant="standard"
                  required={true}
                  
                />
                
                <TextField
                  // autoFocus
                  margin="dense"
                  id="name"
                  label="CONFIRM PASSWORD"
                  type="tel"
                  fullWidth
                  variant="standard"
                  required={true}
                  minlength={100000000}
                  maxlength={9999999999}
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                />

              </DialogContent>
              <DialogContent className="flex flex-col space-y-4 w-[95%]">
                <button onClick={handleClose} className="px-2 py-1 bg-orange-500 rounded-sm text-white font-semibold shadow-md hover:bg-orange-400 transition ease-in-out duration-300">
                  Done
                </button>
              </DialogContent>
              <DialogContent className="mb-2" />
            </div>
          }
          {/* <div className="absolute flex flex-row justify-center">
            <button onClick={() => setActiveState(activeState - 1)}>
              Prev
            </button>
            <button onClick={() => setActiveState(activeState + 1)}>
              Next
            </button>
          </div> */}
        </div>
      </Dialog>
    </div>
  );
}
