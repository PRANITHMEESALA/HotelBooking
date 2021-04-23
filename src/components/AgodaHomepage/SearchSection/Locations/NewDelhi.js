import React from 'react'
import './Styles.css'
  const Newdelhi = [
           {
               id:1,
               name:"Private Rooms with International Airport View",
               imgurl:"https://q-xx.bstatic.com/xdata/images/hotel/max500/271027832.jpg?k=594a1ae1449054cd6c465d599cb9c565a2e3ad94ea5caea2eff32313f212807b&o=",
               location:"Indira Gandhi Int'l Airport,New Delhi and NCR",
               price:"1,097.71",

           },
           {
               id:2,
               name:"Olive Service Apartments Gurgaon-Sushant Lok ",
               imgurl:"https://pix6.agoda.net/hotelImages/817451/-1/464919ef11d4c86ab7aa4dd20e43c552.jpg ",
               location:"Gurgaon New Delhi and NCR ",
               price:"1,936.62 ",
           },
           {
            id:3,
            name:"Anara Service Apartments - Greater Kailash Part II ",
            imgurl:"https://q-xx.bstatic.com/xdata/images/hotel/max500/62873721.jpg?k=3a761b25bff10aca66b5b8f357c54fe7f428f5106426ca55cf0ed89aa59baf28&o= ",
            location:"South Delhi, New Delhi and NCR ",
            price:"2,800 ",
        },
        {
            id:4,
            name:"Perch Arbor Golf Course ",
            imgurl:"https://pix6.agoda.net/hotelImages/105/1059847/1059847_15102415340037140058.jpg ",
            location:" Gurgaon, New Delhi and NCR",
            price:" 1,150.32",
        },
        {
            id:5,
            name:"NUAB House - Near Fortis, MAX, MEDANTA, Paras Hospitals and HUDA Metro ",
            imgurl:"https://q-xx.bstatic.com/xdata/images/hotel/max500/262915259.jpg?k=c99606795d54c89282f969e3444a2ea9838e3c83e0d688fcaf443ab1ce27aadb&o= ",
            location:"Gurgaon, New Delhi and NCR ",
            price:"650.25 ",
        },
        {
            id:6,
            name:"Woodpecker Service Apartments - Green Park ",
            imgurl:"https://pix6.agoda.net/hotelImages/908/908192/908192_16011313410039092318.jpg ",
            location:"South Delhi, New Delhi and NCR ",
            price:"1,425.97 ",
        },
        {
            id:7,
            name:"FUMIGATED ROOMS @ The Holt ",
            imgurl:"https://pix6.agoda.net/hotelImages/5942529/0/202fb7d553e005f06ba9ef0ceb633612.jpg ",
            location:"Indira Gandhi Int'l Airport, New Delhi and NCR ",
            price:"1,746.55 ",
        },
        {
            id:8,
            name:"Bajaj Indian Home Stay ",
            imgurl:"https://pix6.agoda.net/hotelImages/234204/0/ea8bc3e4baa6a64d8d24cce6caa319f6.jpg ",
            location:"Karol Bagh, New Delhi and NCR ",
            price:"1,553.69 ",
        }

           
    ]
 
export default function NewDelhi() {
    
     return(
         <div>
            
            <div  className="gridlayout">

{Newdelhi.map(el=>{
      return(
           
        <div className="columns" key={el.id}>
           <img src={el.imgurl} alt=""/>
            <span> {el.name}</span>
            <span style={{color:'blue'}}>{el.location}</span> <br/>
            <span  style={{color:'red' ,fontSize:'12px'}}> INR{el.price}</span>
        </div>
      
    

      )
})}  
</div>
<button type="button" class="btn btn-primary">Show more (NewDelhi) Properties</button>

         </div>
     )
}           

