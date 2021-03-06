import React, { Component } from 'react';
import ReactMapboxGl from "react-mapbox-gl";
import geopos from "../lib/geo-service";
import { Marker } from "react-mapbox-gl";



const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiZWxlZ2lkb2FkZWRvIiwiYSI6ImNqbzZ4a2xxazBjY2czd3BnNDdkZDRodGUifQ.dsKcuO5shReZ1zxifh4n7A"
});




 class MapGenerator extends Component {
   state={
     user:null,
     victim:null,
   }

   componentDidMount(){
     geopos.getinfo(this.props.alert)
     .then( (result) =>{
       this.setState({
         user: result.user,
         victim:result.victim,

       })
     })
   }

   render() {
     return (
       <div>

         { this.state.victim ?
       <div>
        <Map center= {this.state.victim.location.coordinates} 
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            zoom: 1.6,
            height: "200px",
            width: "200px",
            
          }}>
        <Marker
          coordinates={this.state.victim.location.coordinates}
          anchor="bottom">
          <p>{this.state.victim.username}</p>
          <img className="map-avatar" src={this.state.victim.avatar} alt="victim-avatar"/>
        </Marker>
        <Marker
          coordinates={this.state.user.location.coordinates}
          anchor="bottom">
          <p>{this.state.user.username}</p>
          <img className="map-avatar" src={this.state.user.avatar} alt="user-avatar"/>
        </Marker>
        </Map>
        </div> : null

         }

      </div>
    )
  }
}




export default MapGenerator;