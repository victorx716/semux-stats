import React, { Component } from 'react'
import Dashboard from './Dashboard'

const divStyle = {
  color: 'orange'
};


class App extends Component {
    render() {    
      return (      
      <div>
         <h1 style={divStyle}>Semux</h1> 
         <div>
           <Dashboard/>
         </div>
      </div>    
      )}
    }
export default App;