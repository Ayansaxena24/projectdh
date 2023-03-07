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
import SimpleMap from "./Map";
import TemporaryDrawer from "./Sidebar";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const App = () => {
return (
  <div>
  <div className=" px-16 relative flex flex-col gap-1">
    {/* <TemporaryDrawer /> */}
    <BasicHeader />
    <Header />
    <StartImage />
    <Services />
    <AboutUs />
    <WhyUs />
    <Gallery />
    <Testimonials />
    <Scroll className="fixed right-7 bottom-7 md:right-7 md:bottom-7 sm:right-7 sm:bottom-7 lg:right-12 lg:bottom-9 z-10"/>
    <ContactUs />
    <LastPage />
    <div className="rounded-full p-1 bg-orange-500 text-white hover:bg-orange-300 text-xl fixed right-7 bottom-7 md:right-7 md:bottom-7 sm:right-7 sm:bottom-7 lg:right-12 lg:bottom-9 z-10">
            {<TfiHeadphoneAlt />}
          </div>
  </div>
  <Footer />
  </div>
)
}

export default App