import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import { GeoJSONLayer } from "react-mapbox-gl";
import geopos from "../lib/geo-service"



const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiZWxlZ2lkb2FkZWRvIiwiYSI6ImNqbzZ4a2xxazBjY2czd3BnNDdkZDRodGUifQ.dsKcuO5shReZ1zxifh4n7A"
});




 class MapGenerator extends Component {
   state={
     points:null,
   }

   componentDidMount(){
     geopos.addjson(this.props.alert)
     .then( result =>{
       console.log("result dentro de mapgenerator:", result)
       this.setState({
         points: result,
       })
     })
   }

   render() {
     return (
       <div>
        <Map center={[2.1903215,41.3980973]}
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: "300px",
            width: "300px",
            
          }}>
           {this.state.points ? <GeoJSONLayer
              data= {this.state.points}
              type="symbol"

              symbolLayout={{
                "icon-image": "circle-11",
                "text-field": "prueba",
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                "text-offset": [1, 0],
                "text-anchor": "top"
              }}
              /> : null }
         
              {/* <Feature coordinates={[2.1903215, 41.3980973]}/> */}



        </Map>
      </div>
    )
  }
}




export default MapGenerator;