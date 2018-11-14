import React, { Component } from 'react'
import { withAuth } from '../lib/authContext';
import alertedit from '../lib/alert-service';
import MapGenerator from '../components/MapGenerator';
import CallbackMessage from '../components/CallbackSendMessage'

 class Alerts extends Component {
  state={
    arrayAlerts:null
  }

  
  handleSendMessage = (id) =>{
    alertedit.sendMessage(id, this.props.user.username, this.props.user.avatar)
    console.log("enviado")
  }



  componentDidMount(){
    // const id = this.props.user._id;
    
    alertedit.getAlerts()
   .then((result)=>{
    
    this.setState( {'arrayAlerts': result.data})
  
  })
  }
  
  render() {
 
    let {arrayAlerts} = this.state;
    return (
      <div>
        <h3 className="text-center">Active Alerts:</h3>
       { arrayAlerts ? <ul>{arrayAlerts.map( (element, idx) => {
          return<section className="map" key={element._id}>
          <section className="row-3ele">
            <h3 className="text-center" >{element.creator.username}</h3>
            <img className="map-avatar" src={element.creator.avatar} alt="photo"/>
          </section>
            <MapGenerator alert={element.creator} center="[41.3980973, 2.1903215]" />
            <button className="im-going" onClick= {(evt) => this.handleSendMessage(element.creator._id)} >I'M GOING!</button>
          </section>
       })} </ul>:null }
      </div>
    )
  }
}



export default withAuth(Alerts);