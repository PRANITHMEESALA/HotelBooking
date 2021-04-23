import React,{Component} from 'react'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import 'font-awesome/css/font-awesome.min.css'
import { SingleDatePicker } from 'react-dates';
export default class FlightHotels extends Component {
    constructor(props){
        super(props)
            this.state={
            date:null,
            plus:0,
            minus:0   
   }

    }
       
      IncreHandler=()=>{
          this.setState({plus : this.state.plus + 1});
      }
      DecreHandler=()=>{
        this.setState({plus : this.state.plus - 1});
    }
    render(){

           var count = <div>
               <span onClick={this.DecreHandler}>-</span>

                <option value="Adults">{this.state.plus} Adults(Above 11 years) </option>
            <span onClick={this.IncreHandler}>+</span>

           </div>
               return (
        <div>
               <div className="flights">
                   <div>
                       <div>
                       <select name="" id="">
                             <option value="">Round Trip</option>
                             <option value="">One-way</option>
                             <option value="">Road Trip</option>
                         </select>
                         <select name="" id="">
                             <option value="">Economy</option>
                             <option value="">Premium economy</option>
                             <option value="">Business</option>
                             <option value="">First</option>

                         </select>
                       </div>
                         
                   <input type="text" name="" id="" placeholder="Flying from"/>
                  <input type="text" name="" id="" placeholder="Flying to"/>
                  <SingleDatePicker
                        date={this.state.date} 
                        onDateChange={date => this.setState({ date })} 
                        focused={this.state.focused} 
                        onFocusChange={({ focused }) => this.setState({ focused })} 
                        id="your_unique_id" 
                        placeholder="Depature"
                        />
                   </div>
                   <div>
                      
                           <select name="" id="">
                               <option value="Children"> Children(2 to 11 years) </option>
                               <option value="Infants">  Infats(Below 2 years)</option>
                           </select>
                           
                   </div>
                  
               </div>
        </div>
    )
    }
}
