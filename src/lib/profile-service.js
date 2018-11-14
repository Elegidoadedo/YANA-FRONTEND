import axios from 'axios';

class ProfileService {
  constructor() {
    this.profile = axios.create({
      baseURL: process.env.REACT_APP_BASEURL,
      withCredentials: true
    })
  }

  alertmode(mode) {
    return this.profile.patch('/profile/alertmode', {mode})
    .then(({ data }) => data);
  }

  edit(user) {
    const { username, password, email, phone, avatar} = user;
    return this.profile.put('/profile/edit', {username, password, email, phone, avatar })
      .then(({ data }) => data);
  }

  addcontact(contact) {
    return this.profile.patch('/profile/addContact', {contact})
    .then(({ data }) => data);
  }

  getInfo() {
    return this.profile.get('/profile/info')
    .then(({ data }) => data);
  }


}

const profileedit = new ProfileService();

export default profileedit;