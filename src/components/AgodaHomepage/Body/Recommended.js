import React from 'react'
import {Link,Switch,Route} from 'react-router-dom'
import Newdelhi from '../SearchSection/Locations/NewDelhi'
import Goa from '../SearchSection/Locations/Goa'
import Bangalore from '../SearchSection/Locations/Bangalore'
import Mumbai from '../SearchSection/Locations/Mumbai'
import Chennai from '../SearchSection/Locations/Chennai'
import './Recommended.css'
export default function Recommeded() {

    return (
         <div>
            <h2> Featured homes recommended for you</h2>
               <div className=" links d-flex flex-row justify-content-around">
                     <Link className="path" to="/Newdelhi"> New Delhi</Link>
                     <Link className="path" to="/Goa"> Goa</Link>
                     <Link className="path" to="/Bangalore"> Bangalore</Link>
                     <Link className="path" to="/Mumbai"> Mumbai</Link>
                     <Link className="path" to="/Chennai"> Chennai</Link>

               </div>


               <Switch>
                   <Route path="/Newdelhi" exact component={Newdelhi}/>
                   <Route path="/Goa" component={Goa}/>
                   <Route path="/Bangalore" component={Bangalore}/>
                   <Route path="/Mumbai" component={Mumbai}/>
                   <Route path="/Chennai" component={Chennai}/>

               </Switch>
        </div>
        
    
    )

}
