import React, { Component } from 'react'

const options = {
  enableHighAccuracy: true,
  timeout: 99999999,
  maximumAge: 0
};

class Geolocation extends Component {
  
  success= (pos) => {
    var crd = pos.coords;
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  
  error = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  geolocate = () => {
     navigator.geolocation.getCurrentPosition(this.success, this.error, options)
     
  }

  render() {
    
  
    return (
      <div>
        {this.geolocate()}
        
      </div>
    )
  }
}


export default Geolocation;