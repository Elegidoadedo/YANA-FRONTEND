import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';
import { Link } from 'react-router-dom';
import profileedit from '../lib/profile-service';



class Profile extends Component {
 state={
   userContacts:[],
 }
componentDidMount(){
  profileedit.getInfo()
  
  .then((result)=>{
 
     let arrayContact = [];
     result.contacts.forEach((element)=>{
   
      arrayContact.push(element.username)
     })
  this.setState({

    userContacts : arrayContact,  
  })

  })
  .catch( (error)=>{
   return  console.log("la has liado", error)
  })
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
            {this.state.userContacts.map( (contact,idx) =>{
              return <li key={idx}> {contact} </li>
            })}

            
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