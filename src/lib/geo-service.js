import axios from 'axios';

class GeoService {

  constructor() {
    this.geopos = axios.create({
      baseURL: process.env.REACT_APP_BASEURL,
      withCredentials: true
    })
  }

  addjson(data){
 
    return this.geopos.post('/geo/points', {"latitude": data.coordinates[1],"longitude": data.coordinates[0]})
    .then(({data}) => data)
  }

  getinfo(victim){
    return this.geopos.post('/geo/info', {"victim":victim})
    .then(({data}) => data)
  }



    addpos(data){
      console.log("esto es data del service", data.coont)
      return this.geopos.put('/geo/set', {"latitude": data.latitude,"longitude": data.longitude})
      .then(({data}) => data)
    }
}

const geopos = new GeoService();

export default geopos;
