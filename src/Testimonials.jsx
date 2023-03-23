import React from "react";
import background from "./background.png";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
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

  const carouselStyle = {
    backgroundColor: "#F0F0F0", // change background color of the carousel
  };
  const items = [
    {
      name: "Neha Mishra",
      description:
        "Decent architecture designs. Appreciate their professional approach towards work.",
    },
    {
      name: "Dubash Pal",
      description:
        "Highly recommended this firm to one and all. Their architectural team is extremely professional.",
    },
    {
      name: "Pankaj Sharma",
      description:
        "Great architects found here. They understand the needs of the client.",
    },
  ];

  // // Add duplicates of the first two items at the end of the array
  // items.push(items[0], items[1]);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
      <img src={background} className="h-50 w-3/4 sm:w-1/2 relative" />
      <Carousel
        className="w-full absolute sm:right-20 scale-75 md:scale-90 md:top-10 grid h-[70%] bg-transparent"
        style={carouselStyle}
        backgroundColor="none"
        animation="slide"
        stopAutoPlayOnHover="true"
        duration={400}
        slides={3}
        interval={4000}
        fullHeightHover={false}
        navButtonsAlwaysVisible={true}
        visibleSlides={2}
        navButtonWrapperProps={navButtonWrapperProps}
        navButtonsProps={{
          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
          style: {
            backgroundColor: "white",
            color: "black",
            border: "1px solid white",
            boxShadow: "1px 1px 1px 1px gray",
            borderRadius: 20,
          },
        }}
        navButtonsWrapperProps={{
          // Move the buttons to the bottom. Unsetting top here to override default style.
          style: {
            bottom: "36px",
            margin: "0px",
            top: "unset",
          },
        }}
      >
        {items.map((item, i) => {
          // check if there are two more items to display
          if (i + 2 <= items.length) {
            return (
              <TwoItems
                className="grid grid-cols-2 h-[20%]"
                key={i}
                item={items[i]}
                item2={items[i + 1]}
                navButtonWrapperProps={navButtonWrapperProps}
              />
            );
          }
          // if there is only one item left to display
          return (
            <TwoItems
              className="grid grid-cols-2 h-full"
              key={i}
              item={items[i]}
              item2={items[0]}
              navButtonWrapperProps={navButtonWrapperProps}
            />
          );
        })}
      </Carousel>
    </div>
  );
};

function TwoItems(props) {
  return (
    <div className="grid grid-cols-2 gap-0 scale-90 lg:scale-100 bg-transparent sm:pl-10 pl-4 h-full">
      <Item
        item={props.item}
        navButtonWrapperProps={props.navButtonWrapperProps}
      />
      <Item
        item={props.item2}
        navButtonWrapperProps={props.navButtonWrapperProps}
      />
    </div>
  );
}

function Item(props) {
  return (
    <Paper
      className="flex flex-col gap-4 text-sm py-4 px-4 h-[100%] w-[90%]"
      navButtonWrapperProps={props.navButtonWrapperProps}
    >
      <div className="flex flex-row gap-3">
        <div className="rounded-full p-3 bg-orange-400 relative left-2 scale-75">
          {<ImQuotesLeft className="absolute bottom-3 right-1 text-xl" />}
        </div>
        <h2 className="font-bold left-2">{props.item.name}</h2>
      </div>
      <p className="flex flex-wrap text-start pl-2 text-xs pb-4">{props.item.description}</p>
    </Paper>
  );
}

export default Testimonials;
