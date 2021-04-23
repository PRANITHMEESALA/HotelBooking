import React from 'react'
import Header from './header1'
import SearchSection from './SearchSection/SearchSection'
import BodySection from './Body/BodySection'
import Footer1 from './Footers/Footer1'
import Footer2 from './Footers/Footer2'
import Footer3 from './Footers/Footer3'



const homepage =()=>{
       return(
           <div>
              <Header/>
                <SearchSection/>
                <BodySection/>
                <Footer1/>
                <Footer2/>
                <Footer3/>
                
           </div>
       )
}
export default homepage;