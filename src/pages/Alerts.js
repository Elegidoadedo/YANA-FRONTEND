import React, { Component } from 'react'
import { withAuth } from '../lib/authContext';
import alertedit from '../lib/alert-service';
import MapGenerator from '../components/MapGenerator';

 class Alerts extends Component {
  state={
    arrayAlerts:null
  }

  handleSendMessage = (id) =>{
    alertedit.sendMessage(id, this.props.user.username)
  }



  componentDidMount(){
    const id = this.props.user._id;
    alertedit.getAlerts(id)
   .then((result)=>{
    
    this.setState( {'arrayAlerts': result.data})
  
  })
  }
  
  render() {
 
    let {arrayAlerts} = this.state;
    return (
      <div>
        <h3>Active Alerts:</h3>
       { arrayAlerts ? <ul>{arrayAlerts.map( (element, idx) => {
         return<section key={element._id}>
            <li >{element.creator.username}</li>
            <MapGenerator center="[41.3980973, 2.1903215]" />
              <button onClick={this.handleSendMessage(element.creator._id)}>I'M GOING!</button>
          </section>
       })} </ul>:null }
      </div>
    )
  }
}



export default withAuth(Alerts);