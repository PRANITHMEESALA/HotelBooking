import React from "react";
import Carousel from "react-elastic-carousel";
import {BrowserRouter} from 'react-router-dom'
import Overhead from './Overhead'
import Recommeded from './Recommended'
import './style.css';
import International from '../SearchSection/International'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const topcities =[
  {
      id: "1",
      name: "Mumbai",
      image:"https://pix6.agoda.net/geo/city/16850/1_16850_02.jpg?s=345x345&ar=1x1",
       accomadations:"5541"
  },
  {
      id: "2",
      name: "Delhi",
      image:"https://pix6.agoda.net/geo/city/14552/1_14552_02.jpg?s=345x345&ar=1x1",
      accomadations:"5444"
  },
  {
      id: "3",
      name: "Goa",
      image:"https://pix6.agoda.net/geo/city/11304/1_11304_02.jpg?s=345x345&ar=1x1",
      accomadations:"455"
  },
  {
    id: "4",
    name: "Chennai",
    image:"https://pix6.agoda.net/geo/city/17269/1_17269_02.jpg?s=345x345&ar=1x1",
    accomadations:"5544"
},
{
  id: "5",
  name: "Hyderabad",
  image:"https://pix6.agoda.net/geo/city/8801/1_8801_02.jpg?s=345x345&ar=1x1",
  accomadations:"554"
},
{
  id: "6",
  name: "Kolkata",
  image:"https://pix6.agoda.net/geo/city/6241/1_6241_02.jpg?s=345x345&ar=1x1",
  accomadations:"555"
},
{
  id: "7",
  name: "Jaipur",
  image:"https://pix6.agoda.net/geo/city/8845/1_8845_02.jpg?s=345x345&ar=1x1",
  accomadations:"556"
},
{
  id: "8",
  name: "Andamon",
  image:"https://pix6.agoda.net/geo/city/9216/1_9216_02.jpg?s=345x345&ar=1x1",
  accomadations:"799"
},
{
  id: "9",
  name: "Bangalore",
  image:"https://pix6.agoda.net/geo/city/4923/1_4923_02.jpg?s=345x345&ar=1x1",
  accomadations:"1125"
},
]


function BodySection() {
  return (
    <>
      
      <div  className="">
        <Carousel breakPoints={breakPoints}>

        {topcities.map(item=>  <div  key={item.id}>
          <img className="imgstyles" src={item.image}/>
                                <h2>{item.name}</h2>
                                <span>Accomadations  {item.accomadations}</span>
        </div>
         
          
          )}
          
         
        </Carousel>
      </div>  <br/><br/>
    <h1>Explore more travel vacation rentals</h1>
      <div className="d-flex flex-row justify-content-around">
           <div className="Boxes">
             <img src="https://cdn6.agoda.net/images/accommodation/other-property-types/entire-apartment.jpg" alt="imga" height="80" width="200"/>
             <h3>Apartments</h3>
           <span>156,786 properties</span>     
           </div>
           <div className="Boxes">

              <img src="https://cdn6.agoda.net/images/accommodation/other-property-types/entire-house.jpg" alt="imga" height="80" width="200"/>
              <h3>Vacation Rentals</h3>
              <span>517,703 properties</span>
                
            </div>

              <div className="Boxes">

              <img src="https://cdn6.agoda.net/images/accommodation/other-property-types/entire-villa.jpg" alt="imga" height="120" width="200"/>
              <h3>Private Villas</h3>
              <span>181,167 properties</span>
                
              </div>



              <div className="Boxes">

              <img src="https://cdn6.agoda.net/images/accommodation/other-property-types/entire-bungalow.jpg" alt="imga" height="80" width="200"/>
              <h3>Bungalows</h3>
              <span>8,801 properties</span>
                
              </div>
          
      </div>  <br/><br/>

   

         <div style={{height:'800px'}}> 
            <BrowserRouter>
                <div>
                  <Recommeded/>
                </div>
            </BrowserRouter>
         </div>  
            <div id="part7">
              <Overhead/>
            </div>
          <International/>
    </>
  );
}
export default BodySection;