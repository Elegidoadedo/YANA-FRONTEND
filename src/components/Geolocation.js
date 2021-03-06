import React, { Component } from 'react';
import geopos from '../lib/geo-service';

const options = {
  enableHighAccuracy: true,
  timeout: 99999999,
  maximumAge: 0
};

class Geolocation extends Component {
  
  success= (pos) => {
    let crd = pos.coords;
    geopos.addpos(crd)
    .then( result => {
      
    })
    .catch ( error =>{
   
    })

  }
  
  
  error = (err) => {
    // console.warn(`ERROR(${err.code}): ${err.message}`);
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