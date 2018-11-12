import axios from 'axios';

class ProfileService {
  constructor() {
    this.profile = axios.create({
      baseURL: process.env.REACT_APP_BASEURL,
      withCredentials: true
    })
  }

  edit(user) {
    const { username, password, email, phone, avatar} = user;
    return this.profile.patch('/profile/edit', {username, password, email, phone, avatar })
      .then(({ data }) => data);
  }

  addcontact(contact) {
    return this.profile.patch('/profile/addContact', {contact})
    .then(({ data }) => data);
  }



}

const profileedit = new ProfileService();

export default profileedit;