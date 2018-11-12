import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';
import { Link } from 'react-router-dom';


class Profile extends Component {
 state={
   
 }


  render() {
    const {user} = this.props;
       
    return (
      <div>
        <div className="flex-profile-info">
          <div>
            <p>Name: {user.username}</p>
            <p>{user.email}</p>
            <p>Phone Number: {user.phone}</p>
            <p>Contacts:</p>
            <ul>
              {user.contacts ? user.contacts.forEach(contact => {
                return <li>{contact.username}</li>
              }): null}
            
            </ul>
          </div>
          <img className="avatar-profile" src={user.avatar} alt="avatar"></img>
         </div>
        <Link to="./edit-profile" >Edit </Link> 
      </div>
    )
  }
}

export default withAuth(Profile);