import './SearchSection.css'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import 'font-awesome/css/font-awesome.min.css'
import { DateRangePicker } from 'react-dates';
import React, { Component } from 'react'
import  {BrowserRouter} from 'react-router-dom';
import FlightsHotels from './FlightHotels'
import BodySection from '../Body/BodySection'

export default class SearchSection extends Component {
     constructor(props){
         super();
         this.state={
             startDate:null,
             endDate:null,
             check:false,
         }
     }
     handlechecking=()=>{
         this.setState({check:!this.state.check})
     }
    render() {

           var ch= this.state.check === true?<input className="Flying" type="text" name="" id="" placeholder="Flying from"/>:null;
                
              
        return (
            <div>

            
            <div>
                    <div className="body">
              <div id="bgimg"> 
              <div className=" types d-flex flex-row  justify-content-between ">
                      <a href="/"> Hotels & Homes  </a>
                      <a href="/"> Private Stays </a>
                      <a href="/"> Flight + Hotel</a>
                      <a href="/"> Flights</a>
                      <a href="/"> Monthly Stays</a>
                  </div>
              
                 <div className="searchsection">   <br/> <br/>
                 <div className="form-group has-search">
    <span className="fa fa-search form-control-feedback"></span>
    <input type="text" className="form-control" placeholder="Enter a destination or property" /> 
    </div>
  </div>    
                    <div className=" booking d-flex flex-row justify-content-between">
                    <div id="datepick">
                    <DateRangePicker 
                            
                            startDate={this.state.startDate} 
                            startDateId="your_unique_start_date_id"
                            endDate={this.state.endDate} 
                            endDateId="your_unique_end_date_id" 
                            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} 
                            focusedInput={this.state.focusedInput}
                            onFocusChange={focusedInput => this.setState({ focusedInput })} 
                            />

                    </div>
                    
                 
                 <select className="custom-select">
                        <option selected>Number of users</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                  </select>
                       <div>
                              
                       
                       <div className="form-check">
                <label className="form-check-label">
                  <input type="checkbox" onChange={this.handlechecking} className="form-check-input" name="" id="" value={this.state.check} />
                  Save up to 25% on hotels
                </label>
              </div>   
                 {ch}
                       </div>
                        
                    </div>
                          
                 </div>
               </div>
                </div> 
               <button type="button" className=" Searchbutton btn btn-primary">SEARCH</button> 
              
            </div>
        )
    }
}
