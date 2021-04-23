import React from 'react'
import './Header.css';
export default function Header() {
    return (
    
            <div>
               <div className=" navigation d-flex flex-row justify-content-around flex-wrap align-content-center">
                   <a href="/"  > Logo </a>
                   <a href="/"  > Flight + Hotel </a>
                   <a href="/" > Hotels & Homes </a>
                   <a href="/" > Flights </a>
                   <a href="/"> Today's deals </a>
                   <a href="/" > Aparatments</a>
                   <a href="/" id="mar" > ...</a>
                   <a href="/" > <button type="button" className="btn btn-outline-warning">List your place</button></a>
                   <a href="/" > Country</a>
                   <a href="/" > Rs.</a>
                   <a href="/" > Sign in</a>
                   <a href="/" > <button type="button" className="btn btn-outline-primary">Create account</button></a>
               </div>

            <div className="header1">
                <p>
                We know your travel plans may be impacted by COVID-19. Check local travel restrictions prior to booking your trip. <a href=""> Learn more</a> .
                </p>
            </div>

            </div>

    )
}
