import React from "react";
import background from "./background.png";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from '@mui/material'


const Testimonials = () => {
    {
        var items = [
            {
                name: "Neha Mishra #1",
                description: "Decent architecture designs. Appreciate their professional approach towards work."
            },
            {
                name: "Random Name #2",
                description: "Hello World!"
            }
        ]
    }

    return (
        <div className="">
            <img src={background} /> 
            <Carousel>
                {
                    items.map((item,i)=> <Item key={i} item={item} />)
                }
            </Carousel>
        </div>


    );
}

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

export default Testimonials