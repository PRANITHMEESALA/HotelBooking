import React, { Component } from 'react'
import './App.css'
import CountingNotes from './components/Episodes/CountingNotes Redux'
import NewsPaper from './components/Newspaper/FrontPage/FrontPage'
import RadarChart from './components/Charts/RadarChart'
import Homepage from './components/AgodaHomepage/Homepage'
class App extends Component {
    
      render() {
        return (
          <div className="App">
              <Homepage/>
          </div>
        )
    }
}
export default App;
