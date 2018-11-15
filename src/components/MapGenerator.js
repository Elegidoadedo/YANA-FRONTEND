import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import { GeoJSONLayer } from "react-mapbox-gl";
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
     console.log("viene victim como prop?", this.props.alert)
     geopos.getinfo(this.props.alert)
     .then( (result) =>{
        console.log('ESTO ES USER PARA EL MAP:', result.user)
       this.setState({
         user: result.user,
         victim:result.victim,

       })
     })
   }

   render() {
     return (
       <div>

        <Map center={[2.189945, 41.397039] } 
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            zoom: 1.6,
            height: "200px",
            width: "200px",
            
        }}>
        { this.state.victim ?
        <div>
        <Marker
          coordinates={this.state.victim.location.coordinates}
          anchor="bottom">
          <p>{this.state.victim.username}</p>
          <img className="map-avatar" src={this.state.victim.avatar}/>
        </Marker>
        <Marker
          coordinates={this.state.user.location.coordinates}
          anchor="bottom">
          <p>{this.state.user.username}</p>
          <img className="map-avatar" src={this.state.user.avatar}/>
        </Marker>
        </div> : null

         }
           {/* {this.state.points ? <GeoJSONLayer
              data= {this.state.points}
              type="symbol"

              symbolLayout={{
                "icon-image": "circle-11",
                "text-field": ,
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                "text-offset": [1, 0],
                "text-anchor": "top"
              }}
              /> : null } */}
         
              {/* <Feature coordinates={[2.1903215, 41.3980973]}/> */}



        </Map>
      </div>
    )
  }
}




export default MapGenerator;