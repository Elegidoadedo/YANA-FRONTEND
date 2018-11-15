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
      <div>
        { user ? <div>
          <div className="flex-profile-info">
            <div>
              <section className= "section-flex">
                <p className="text-bold">Name:</p>
                <p> {user.username}</p>
              </section>
              <section className= "section-flex">
                <p className="text-bold">Email:</p>
                <p>{user.email}</p>
              </section>
              <section className= "section-flex">
              <p className="text-bold">Phone Number:</p>
              <p>{user.phone}</p>
              </section>
            </div>
            <img className="avatar-profile" src={user.avatar} alt="avatar"></img>
          </div>
         <div>
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
        <Link className="call112" to="./edit-profile" >Edit </Link> 
        </div>
      </div>
    )
  }
}

export default withAuth(Profile);