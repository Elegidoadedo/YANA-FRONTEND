import axios from 'axios';

class AlertService {
  constructor() {
    this.profile = axios.create({
      baseURL: process.env.REACT_APP_BASEURL,
      withCredentials: true
    })
  }




  // edit(user) {
  //   const { username, password, email, phone, avatar} = user;
  //   return this.profile.patch('/profile/edit', {username, password, email, phone, avatar })
  //     .then(({ data }) => data);
  // }


}

const alertedit = new AlertService();

export default alertedit;