import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';
import profileedit from '../lib/profile-service';


class Profile extends Component {
 state= {
   username:'',
   phone: '',
   email: '',
   avatar: '',
 }

  handleChange = (event) => {  
    this.setState( {
      [event.target.name]: event.target.value,
    });
  }
  
  componentDidMount (){
    this.setState({
      username:this.props.user.username,
      phone: this.props.user.phone,
      email: this.props.user.email,
      avatar: this.props.user.avatar,
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const {username, password, email, phone, avatar} = this.state

    profileedit.edit({username, password, email, phone, avatar})
    .then((result)=>{
      this.props.setUser(result);
      console.log ("muestro esto:" ,result)
      this.setState( {
        username:result.username,
        phone: result.phone,
        email: result.email,
        avatar: result.avatar})
    })
  }

  handlesearchSubmit = (event) => {
    const {contact} = this.state
    profileedit.addcontact({contact})
    .then((result)=>{
      this.setState( {result})
    })
  }


  render() {
    const {user} = this.props;

    return (
      <div>
      <form >
        <label>Username</label>
        <input type="text" name="username" value={this.state.username} placeholder={user.username} onChange={this.handleChange} />
        <label>Email</label>
        <input type="email" name="email" value={this.state.email} placeholder={user.email} onChange={this.handleChange}/>
        <label>Phone</label>
        <input type="number" name="phone" value={this.state.phone}  onChange={this.handleChange}/>
        <label>Avatar</label>
        <input type="text" name="avatar" value={this.state.avatar} placeholder={user.avatar} onChange={this.handleChange}/>
        <button type="submit" onClick={this.handleFormSubmit}>Submit!</button>
      </form>
      <input type="text" name="contact" onChange={this.handleChange} ></input>
      <button type="submit" onClick={this.handlesearchSubmit}>Search!</button>
      </div>
    )
  }
}

export default withAuth(Profile);