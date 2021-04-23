import React from 'react'
import './Footer1.css'
export default function Footer1() {
    return (
        <div className=" f1 d-flex flex-row justify-content-around  align-items-baseline  ">
                        <div className=" d-flex flex-column justify-content-around  ">
                            <h4>Help</h4>
                            <a href="/">Help Center</a>
                            <a href="/">FAQs</a>
                            <a href="/">PrivacyPolicy</a>
                            <a href="/">Cookie policy</a>
                            <a href="/">Terms of use</a>
                        </div>
                        <div className=" d-flex flex-column justify-content-around">
                            <h4>About us</h4>
                             <a href="/"> PointsMAX</a>
                             <a href="/"> Careers</a>
                             <a href="/"> Press</a>
                             <a href="/"> Blog</a>
                        </div>
                        <div className=" d-flex flex-column justify-content-around">
                            <h4>Destinations</h4>
                             <a href="/">Coutries/Territories</a>
                             <a href="/">Cities</a>
                        </div>
                        <div className=" d-flex flex-column justify-content-around">
                            <h4>Parter with us</h4>
                            <a href="/"> YCS parter portal</a>
                            <a href="/"> Parter solutions</a>
                            <a href="/"> Affiliates</a>
                            <a href="/"> Connectivity parters</a>
                        </div>
                        <div className=" d-flex flex-column justify-content-around">
                            <h4>Get the app</h4>
                            <a href="/">iOS app</a>
                            <a href="/">Android app</a>
                        </div>
                       
                   </div>
    )
}
