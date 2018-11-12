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
    const {value} = event.target;
    console.log( value)

    console.log( this.state.username)
    this.setState( {
      [event.target.name]: event.target.value,

    });
  }
  // componentDidMount (){
  //   let user = this.state
  //   profileedit.find( user);
  //   this.setState({user});
  // }
  

  handleFormSubmit = (event) => {
    // event.preventDefault();
    const {username, password, email, phone, avatar} = this.state


      profileedit.edit({username, password, email, phone, avatar})
      .then((result)=>{
        console.log (result)
        this.setState( {
          [event.target.name]: event.target.value,})
        

      })
    }
    handlesearchSubmit = (event) => {
      // event.preventDefault();
      const {contact} = this.state
  
  
        profileedit.addcontact({contact})
        .then((result)=>{
          console.log (result)
          this.setState( {
            [event.target.name]: event.target.value,})
          
  
        })
      }


  render() {
    const {user} = this.props;

       
    return (
      <div>
      <form >
        <label>Username</label>
        <input type="text" name="username" value={this.state.value} placeholder={user.username} onChange={this.handleChange} />
        <label>Email</label>
        <input type="email" name="email" value={this.state.value} placeholder={user.email} onChange={this.handleChange}/>
        <label>Phone</label>
        <input type="number" name="phone" value={this.state.value} placeholder={user.phone} onChange={this.handleChange}/>
        <label>Avatar</label>
        <input type="text" name="avatar" value={this.state.value} placeholder={user.avatar} onChange={this.handleChange}/>
        <button type="submit" onClick={this.handleFormSubmit}>Submit!</button>
      </form>

      <input type="text" name="contact" onChange={this.handleChange} ></input>
      <button type="submit" onClick={this.handlesearchSubmit}>Search!</button>
      </div>
    )
  }
}

export default withAuth(Profile);