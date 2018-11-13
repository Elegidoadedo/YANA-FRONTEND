import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';
import alertedit from '../lib/alert-service';
import Geolocation from '../components/Geolocation';


class Dashboard extends Component {
  state={
    alertmode: false,
    messages: false,
  //   coords: {
  //     latitude,
  //     longitude,
  //     altitude,
  //     accuracy,
  //     altitudeAccuracy,
  //     heading,
  //     speed,
  // },
  // isGeolocationAvailable, // boolean flag indicating that the browser supports the Geolocation API
  // isGeolocationEnabled, // boolean flag indicating that the user has allowed the use of the Geolocation API
  // positionError, // object with the error returned from the Geolocation API call
}

 

  createAlert = () => {
    if(!this.state.alertmode){
      alertedit.create(this.props.user)
      this.setState({
        alertmode: true,
      })
      console.log (this.state.alertmode)

    } else{
      alertedit.delete(this.props.user._id)
      this.setState({
        alertmode: false,
      })
      console.log (this.state.alertmode)
    }
  }

  handleEraseMessage = () =>{
    alertedit.deletemessages(this.props.user._id)
    
    this.setState({
      messages: false,
    })
  }

  // componentDidMount(){
  //   //añadir actualizacion de la geolocation
  // }



  render() {
    return (
      <div>
        <button className="sos-button" onClick={this.createAlert}>S.O.S</button>  
        { this.props.user.message ?  <ul>
          {console.log( this.props.user)}
        <Geolocation />
        
          {this.props.user.message.map ( element => {
            return <li>{element}</li>
          })}
        </ul>: null}
        <button className="botton" onClick={this.handleEraseMessage} >Erase all messages</button>       
      </div>
    )
  }
}


export default withAuth(Dashboard);