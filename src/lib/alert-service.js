import axios from 'axios';

class AlertService {

  constructor() {
    this.alert = axios.create({
      baseURL: process.env.REACT_APP_BASEURL,
      withCredentials: true
    })
  }


    create(user){
      return this.alert.post('/alerts/add', {"id":user._id, 'heroes':user.contacts, 'location':user.location})
      .then(({data}) => data)
    }

    getAlerts(){
      return this.alert.get('/alerts/')
    }

    sendMessage(id, name){
      return this.alert.post('/alerts/message', {"id":id, "name": name})
    }

    deletemessages(id){
      return this.alert.post('/alerts/deletemessage', {"id":id})
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