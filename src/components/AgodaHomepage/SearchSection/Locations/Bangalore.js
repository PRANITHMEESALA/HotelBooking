import React from 'react'
import './Styles.css';
const Bangalore =[
    {
        id:1,
        name:"MitraBnK Entire 1BHK near forum mall kormanagala ",
        imgurl:"https://q-xx.bstatic.com/xdata/images/hotel/max500/271217616.jpg?k=678aa1c0ddf2a3cfa81d98efc65d6f3c731a5a874e3fc18d0f8e6d9744624d6a&o= ",
        location:"Gottigere, Bangalore ",
        price:"1,500 ",
    },
    {
        id:2,
        name:"Lilac Hotels Bangalore ",
        imgurl:"https://pix6.agoda.net/hotelImages/863617/-1/9562f41683c17edd608b56d8728c0b52.jpg ",
        location:"Jayanagar, Bangalore ",
        price:"2,315.12 ",
    },
    {
        id:3,
        name:"OYO 5964 near Manyata Tech Park ",
        imgurl:"https://pix6.agoda.net/hotelImages/135/1354380/1354380_16082012490045648928.jpg ",
        location:"Devanahalli, Bangalore ",
        price:"846.87 ",
    },
    {
        id:4,
        name:"Apollo Greens Apartment ",
        imgurl:"https://pix6.agoda.net/hotelImages/625010/-1/20d071eadf0ef3d5fe1ed0087003d441.jpg ",
        location:"Marathahalli, Bangalore ",
        price:"1,999.49 ",
    }
]

export default function BangaloreHotels() {
    return (
        <div>
                       <div  className="gridlayout">

{Bangalore.map(el=>{
      return(
           
        <div className="columns" key={el.id}>
           <img src={el.imgurl} alt=""/>
            <span> {el.name}</span> <br/>
            <span style={{color:'blue'}}>{el.location}</span> <br/>
              <span>Price per night as low as</span>
            <span style={{color:'red' ,fontSize:'12px'}}> INR{el.price}</span>
        </div>
      
    

      )
})}  
</div>
<button type="button" class=" btn btn-primary">Show more (Bangalore) Properties</button>

        </div>
    )
}
