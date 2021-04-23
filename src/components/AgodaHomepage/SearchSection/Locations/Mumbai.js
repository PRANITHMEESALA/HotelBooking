import React from 'react'
import './Styles.css';
const Mumbai =[
    {
        id:1,
        name:"CollarCamp’s Oberoi Apartments Luxurious 1BHK ",
        imgurl:"https://q-xx.bstatic.com/xdata/images/hotel/max500/279465946.jpg?k=7f3511b32edb1370694a257f7d367ec25c9662316228c62edd6cffb4219b488e&o= ",
        location:"Navi Mumbai, Mumbai ",
        price:"2,790 ",
    },
    {
        id:2,
        name:"Comfortable Living ",
        imgurl:"https://q-xx.bstatic.com/xdata/images/hotel/max500/133924203.jpg?k=f4f991395655e5323421748739733d27cb93bb05a197e7a8264457caec7c20ee&o= ",
        location:"Navi Mumbai, Mumbai ",
        price:"1,900 ",
    },
    {
        id:3,
        name:"Campistaan Karjat ",
        imgurl:"https://pix6.agoda.net/hotelImages/863/8634991/8634991_19070819200077965005.jpg ",
        location:"Shedung, Mumbai ",
        price:"3,475.12 ",
    },
    {
        id:4,
        name:"Mumbai House Luxury Apartment ",
        imgurl:"https://q-xx.bstatic.com/xdata/images/hotel/max500/219893190.jpg?k=5111a5e5d70abfc5c29e08d9ca553e12fbe29c52f3a1fb558e45f049e04fc5b3&o= ",
        location:"Vile Parle, Mumbai ",
        price:"2,500 ",
    },
    {
        id:5,
        name:"AVIRAHI HOTEL ",
        imgurl:"https://q-xx.bstatic.com/xdata/images/hotel/max500/241621890.jpg?k=09bd540055988c71b10c4a82ce9f41f4800125c038601460959e6b948f5a16b0&o= ",
        location:"Borivali, Mumbai ",
        price:"2,178 ",
    } ]
export default function MumbaiHotels() {
    return (
        <div>
                        <div  className="gridlayout">

{Mumbai.map(el=>{
      return(
           
        <div className="columns" key={el.id}>
           <img src={el.imgurl} alt=""/>
            <span> {el.name}</span>
            <span style={{color:'blue'}}>{el.location}</span>
            <span  style={{color:'red' ,fontSize:'12px'}}> INR{el.price}</span>
        </div>
      
    

      )
})}  
</div>
<button type="button" class="btn btn-primary">Show more (Mumbai) Properties</button>
           
        </div>
    )
}
