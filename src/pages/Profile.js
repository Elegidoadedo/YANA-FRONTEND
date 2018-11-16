import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';
import { Link } from 'react-router-dom';
import profileedit from '../lib/profile-service';



class Profile extends Component {
 state={
   user:null,
   userContacts:[{}],
 }

  componentDidMount(){
    profileedit.getInfo()
    
    .then((result)=>{
  
      let arrayContact = [];
      result.contacts.forEach((element)=>{
    
        arrayContact.push({ 'username': element.username, 'avatar': element.avatar })
      })
    this.setState({
      user:result, 
    })

    })
    .catch( (error)=>{
    
    })
    }

  render() {
    const {user} = this.state;
       
    return (
      <div className="text-color-dark">
        { user ? <div>
          <hr className="hr-color"/>
          <div className="flex-profile-info">
            <div>
              <section>
                <p className="text-bold margin-input">Name:</p>
                <p className="margin-input"> {user.username}</p>
              </section>
              <section>
                <p className="text-bold margin-input">Email:</p>
                <p className="margin-input">{user.email}</p>
              </section>
              <section>
              <p className="text-bold margin-input">Phone Number:</p>
              <p className="margin-input">{user.phone}</p>
              </section>
            </div>
            <img className="avatar-profile" src={user.avatar} alt="avatar"></img>
          </div>
         <div>
         <hr className="hr-color"/>
         <h3>Contacts:</h3>
         <ul className="row-3ele">
         {user.contacts.map( (contact,idx) =>{
           return <li key={idx} className="article-contacts"> <img className="avatar-contacts" src={contact.avatar} alt="avatsar"></img>   <p>{contact.username}</p></li>
         })}

         
         </ul>
         </div>
         </div>
        :null }
        <div className="call-container botton">
        <Link className="button-primary" to="./edit-profile" >Edit </Link> 
        </div>
      </div>
    )
  }
}

export default withAuth(Profile);