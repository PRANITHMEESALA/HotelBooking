import React from 'react'
import Carousel from "react-elastic-carousel";
import '../Body/style.css'
export default function International() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ]; 
const internationls =[
    {
        id: "1",
        name: "Kuala Lumper ",
        image:"https://pix6.agoda.net/geo/city/14524/1_14524_02.jpg?s=345x345&ar=1x1",
         accomadations:"5541"
    },
    {
        id: "2",
        name: "Dubai",
        image:"https://pix6.agoda.net/geo/city/2994/1_2994_02.jpg?s=345x345&ar=1x1",
        accomadations:"5444"
    },
    {
        id: "3",
        name: "Tokyo",
        image:"https://pix6.agoda.net/geo/city/5085/1_5085_02.jpg?s=345x345&ar=1x1",
        accomadations:"455"
    },
    {
      id: "4",
      name: "Hong Kong",
      image:"https://pix6.agoda.net/geo/city/16808/1_16808_02.jpg?s=345x345&ar=1x1",
      accomadations:"5544"
  },
  {
    id: "5",
    name: "Las Vegas",
    image:"https://pix6.agoda.net/geo/city/17072/1_17072_02.jpg?s=345x345&ar=1x1",
    accomadations:"554"
  },
  {
    id: "6",
    name: "Singapore",
    image:"https://pix6.agoda.net/geo/city/4064/1_4064_02.jpg?s=345x345&ar=1x1",
    accomadations:"555"
  },
  {
    id: "7",
    name: "Penang",
    image:"https://pix6.agoda.net/geo/city/16087/1_16087_02.jpg?s=345x345&ar=1x1",
    accomadations:"556"
  },
  {
    id: "8",
    name: "Johor Bahru",
    image:"https://pix6.agoda.net/geo/city/1808/1_1808_02.jpg?s=345x345&ar=1x1",
    accomadations:"799"
  },
  {
    id: "9",
    name: "BangKok",
    image:"https://pix6.agoda.net/geo/city/9395/1_9395_02.jpg?s=345x345&ar=1x1",
    accomadations:"1125"
  },
  ]
    return (
        <div>  <br/>
            <h2>   Popular destinations outside India</h2> <br/>
              <Carousel breakPoints={breakPoints}>

                {internationls.map(item=>  <div  key={item.id}>
                  <img className="imgstyles" src={item.image}/>
                                        <h2>{item.name}</h2>
                                        <span>Accomadations  {item.accomadations}</span>
                </div>
                
                  
                  )}
                  
                
                </Carousel>
        </div>
    )
}
