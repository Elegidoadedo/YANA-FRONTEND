import axios from 'axios';

class AlertService {

  constructor() {
    this.alert = axios.create({
      baseURL: process.env.REACT_APP_BASEURL,
      withCredentials: true
    })
  }


    create(id){
      return this.alert.post('/alerts/add', {"id":id})
      .then(({data}) => data)
    }


    delete(id){
      return this.alert.post('/alerts/delete', {"id":id})
      .then(({data}) => data)
    }


  // edit(user) {
  //   const { username, password, email, phone, avatar} = user;
  //   return this.profile.patch('/profile/edit', {username, password, email, phone, avatar })
  //     .then(({ data }) => data);
  // }


}

const alertedit = new AlertService();

export default alertedit;