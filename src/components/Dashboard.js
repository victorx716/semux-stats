import React, { Component } from 'react'
import axios from 'axios'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latest: null
    }
  }

  componentDidMount() {
    axios.get(`https://api.semux.online/v2.1.0/info`)
      .then(res => {
        const stat = res.data;
        this.setState({ latest: stat.result.latestBlockNumber });
      })
  }
    render() {    
      return (      
      <div> <div> Latest block number is {this.state.latest}</div> </div>    
      )}
    }
export default Dashboard;