import React from "react";
import Header from "./Header";
import ContactUs from "./ContactUs";
import WhyUs from "./WhyUs";
import Services from "./Services";
import Gallery from "./Gallery";
import StartImage from "./StartImage";
import BasicHeader from "./BasicHeader";
import AboutUs from "./AboutUs";
import Scroll from "./Scroll";
import LastPage from "./Lastpage";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import Videos from "./Videos";
import TemporaryDrawer from "./Sidebar";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

const App = () => {
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;


return (
  <div className="w-auto">
  <div className=" px-8 relative flex flex-col gap-1">
    {/* <TemporaryDrawer /> */}
    <BasicHeader />
    <Header />
    <StartImage />
    <Services />
    <AboutUs />
    <WhyUs />
    <Gallery />
    <Videos />
    <Testimonials />
    <Scroll className="fixed right-7 bottom-7 md:right-7 md:bottom-7 sm:right-7 sm:bottom-7 lg:right-12 lg:bottom-9 z-10"/>
    <ContactUs />
    <LastPage />
    <div>
      <button
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        className="rounded-full p-1 bg-orange-500 text-white hover:bg-orange-300 text-xl fixed right-7 bottom-7 md:right-7 md:bottom-7 sm:right-7 sm:bottom-7 lg:right-16 lg:bottom-9 z-10 scale-150"
      >
        {<TfiHeadphoneAlt />}
      </button>
      <Popover
      className="ml-11"
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorReference="anchorEl"
  // anchorPosition={{ top: 230, left: 650 }}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left',
  }}
  transformOrigin={{
    vertical: 'bottom',
    horizontal: 'right',
  }}
      >
        <Typography sx={{ mr: 4 }}>
          <div className="flex flex-row align-center items-center justify-center bg-orange-400 rounded-md">
            <div className="scale-150">
            <TfiHeadphoneAlt className="mx-6 scale-150 text-white"/>
            </div>
            <div className="flex flex-col bg-white pl-4 pr-4 py-4 space-y-4">
              <div className="space-y-2">
                <p className="font-semibold text-xl">Contact Us</p>
                <p>+91-8890079787</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-xl">Mail Us</p>
                <p>archimaya83@gmail.com</p>
              </div>
            </div>
          </div>
        </Typography>
      </Popover>
    </div>
    {/* <div className="rounded-full p-1 bg-orange-500 text-white hover:bg-orange-300 text-xl fixed right-7 bottom-7 md:right-7 md:bottom-7 sm:right-7 sm:bottom-7 lg:right-12 lg:bottom-9 z-10 scale-150">
            {<TfiHeadphoneAlt />}
          </div> */}
  </div>
  <Footer />
  </div>
)
}

export default App