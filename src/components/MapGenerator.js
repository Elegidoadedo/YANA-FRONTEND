import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";


const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiZWxlZ2lkb2FkZWRvIiwiYSI6ImNqbzZ4a2xxazBjY2czd3BnNDdkZDRodGUifQ.dsKcuO5shReZ1zxifh4n7A"
});

 class MapGenerator extends Component {
  render() {
    return (
      <div>
        <Map center={[2.1903215,41.3980973]}
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: "300px",
            width: "300px",
            
          }}>
            <Layer
              type="symbol"
              id="marker"
              layout={{ "icon-image": "marker-77" }}>
              <Feature coordinates={[2.1903215, 41.3980973]}/>
            </Layer>
        </Map>
      </div>
    )
  }
}




export default MapGenerator;