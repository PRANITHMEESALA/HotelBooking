import React from 'react'
import './Styles.css'
const Chennai =[
    {
        id:1,
        name:"Syening Hospitality ",
        imgurl:"https://q-xx.bstatic.com/xdata/images/hotel/max500/276669965.jpg?k=66a4d49a7a41522e02393d9620c4ff9d7610e8da690c7cf619b93c0728549216&o= ",
        location:"Tambaram, Chennai ",
        price:"599 ",
    },
    {
        id:2,
        name:"Pebbles ",
        imgurl:"https://q-xx.bstatic.com/xdata/images/hotel/max500/110251717.jpg?k=0214fc581bfe95364bc12696bf2b682e6040788f0ea22f7a93c86449d0c15c5b&o= ",
        location:"Chennai City Center,Chennai ",
        price:"2,249.1 ",
    },
    {
        id:3,
        name:"Sreedevi Residency ",
        imgurl:"https://q-xx.bstatic.com/xdata/images/hotel/max500/87598397.jpg?k=8aec5de83e2d868ffbac6367a1806b1791fe4c81a58f0505bf3fb8939b16404b&o= ",
        location:"Chennai City Center,Chennai ",
        price:"1,637.95 ",
    },
    {
        id:4,
        name:"STHALAS ",
        imgurl:"https://q-xx.bstatic.com/xdata/images/hotel/max500/187521003.jpg?k=b1e54a57a1ff752648054e6dd66f4df120b11b6c2a11582a391b420c361ceb02&o= ",
        location:"Mahabalipuram, Chennai ",
        price:"801.9 ",
    },
    {
        id:5,
        name:"Season 4 Residence ",
        imgurl:"https://pix6.agoda.net/hotelImages/757/757059/757059_15071309180032141155.jpg ",
        location:"Chennai City Center,Chennai ",
        price:"1,270.2 ",
    }]

export default function ChennaiHotels() {
    return (
        <div>
                        <div  className="gridlayout">

{Chennai.map(el=>{
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
<button type="button" className="btn btn-primary">Show more (Chennai) Properties</button>

        </div>
    )
}
