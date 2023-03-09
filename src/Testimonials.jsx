import React from "react";
import background from "./background.png";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from '@mui/material';
import { ImQuotesLeft } from "react-icons/im";


const Testimonials = () => {
    const navButtonWrapperProps = {
        buttonWrapper: {
          position: "absolute",
          height: "100%",
          backgroundColor: "transparent",
          top: 0,
        },
        button: {
          margin: "0 20px", // adjust horizontal position of buttons
          position: "absolute",
          top: "50%", // adjust vertical position of buttons
          transform: "translateY(-50%)",
          backgroundColor: "white",
          color: "black",
          fontSize: "10px",
          transition: "200ms",
          cursor: "pointer",
          "&:hover": {
            opacity: "0.6 !important",
          },
        },
        // Applies to the "next" button wrapper
        next: {
          right: 0,
          top: 0, // move the button up to align with the top of the carousel
        },
        // Applies to the "prev" button wrapper
        prev: {
          left: 0,
          top: 0, // move the button up to align with the top of the carousel
        },
      };
      

    {
        var items = [
            {
                name: "Neha Mishra",
                description: "Decent architecture designs. Appreciate their professional approach towards work."
            },
            {
                name: "Dubash Pal",
                description: "Highly recommended this firm to one and all. Their architectural team is extremely professional."
            },
            {
                name: "Pankaj Sharma",
                description: "Great architects found here. They understand the needs of the client."
            }
        ]
    }

    return (
        <div className="flex flex-col sm:flex-row justify-center items-center">
            <img src={background} className="h-50 w-3/4 sm:w-1/2 relative"/> 
            <Carousel className="w-full absolute right-0"
            animation="slide"
            stopAutoPlayOnHover="true"
            duration={300}
            interval={4000}
            fullHeightHover={true}
            navButtonsAlwaysVisible={true}
            navButtonWrapperProps={navButtonWrapperProps}
            >
                {
                    items.map((item,i)=> <Item key={i} item={item} navButtonWrapperProps={navButtonWrapperProps}/>)
                }
            </Carousel>
        </div>


    );
}

function Item(props)
{
    return (
        <Paper className="flex flex-col gap-4 text-sm py-2 bg-transparent py-6" navButtonWrapperProps={props.navButtonWrapperProps}>
            <div className="flex flex-row gap-3">
              <div className="rounded-full p-3 bg-orange-400 relative left-2 scale-75">
                {<ImQuotesLeft className="absolute bottom-3 right-1 text-xl" />}
              </div>
              <h2 className="font-bold left-2">{props.item.name}</h2>
            </div>
            <p className="flex flex-wrap text-start pl-3">{props.item.description}</p>
        </Paper>
    )
}

export default Testimonials;