import React from 'react'
import './Styles.css'
const Goa =[
    {
        id:1,
        name:"Baga Calangute 1 BHK apartments ",
        imgurl:"https://q-xx.bstatic.com/xdata/images/hotel/max500/288201142.jpg?k=267cdf3a1057b1608d32a0ea175a8e66bd59e5034475826f9de6396564765897&o= ",
        location:"Baga, Goa ",
        price:"599 ",
    },
    {
        id:2,
        name:"Riviera Hermitage ",
        imgurl:"https://q-xx.bstatic.com/xdata/images/hotel/max500/225469089.jpg?k=cdf8a14602743f6f3d7481b86da94bf986d6e8011e33485749efde0a6cd3b8bf&o= ",
        location:"Baga, Goa ",
        price:"1,800 ",
    },
    {
        id:3,
        name:"Casa Dos Rebelos ",
        imgurl:"https://pix6.agoda.net/hotelImages/21953508/-1/4e08bb8d6dedb40a5df3a9f05b71a44f.jpg ",
        location:"Panaji, Goa ",
        price:"1,767.12 ",
    },
    {
        id:4,
        name:"Om Sai Beach Huts ",
        imgurl:"https://pix6.agoda.net/hotelImages/558038/-1/86b8866ff16d74ef6254ddab07f4736d.jpg ",
        location:"Agonda, Goa ",
        price:"900 ",
    },
    {
        id:5,
        name:"Silent Waves Agonda ",
        imgurl:"https://q-xx.bstatic.com/xdata/images/hotel/max500/271714726.jpg?k=d81dcb188f70f93ef903192e9e0ea90a43016ef5f72be7cdf3d61146bd8d9fe0&o= ",
        location:"Agonda, Goa ",
        price:"1,035.5 ",
    },
    {
        id:6,
        name:"Presa Di Goa Country House ",
        imgurl:"https://pix6.agoda.net/hotelImages/412489/-1/222c22aec9d47eb62d41e0cb231efbd0.jpg ",
        location:" Calangute, Goa ",
        price:"3,158.84 ",
    },
    {
        id:7,
        name:"Shivam Bnb ",
        imgurl:"https://q-xx.bstatic.com/xdata/images/hotel/max500/290685909.jpg?k=ccc3ac6fb159b6060ce018d17587a9f7cf0ab6614b748b9a52f1715d81a00759&o= ",
        location:"Morjim, Goa ",
        price:"703.12 ",
    },
    {
        id:8,
        name:"Abba's Glory Land Huts and Rooms - Agonda ",
        imgurl:"https://pix6.agoda.net/hotelImages/295697/-1/5d8276daf0d1f2ce8d91e0d3475b574d.jpg ",
        location:"Agonda, Goa ",
        price:"1,039.41 ",
    }

]
export default function GoaHotels() {
    return (
        <div>
              <div  className="gridlayout">

{Goa.map(el=>{
      return(
           
        <div className="columns" key={el.id}>
           <img src={el.imgurl} alt=""/>
            <span> {el.name}</span>
            <span style={{color:'blue'}}>{el.location}</span>
            <span style={{color:'red' ,fontSize:'12px'}}> INR{el.price}</span>
        </div>
      
    

      )
})}  
        </div>

<button type="button" class="btn btn-primary">Show more (Goa) Properties</button>

        </div>
    )
}
