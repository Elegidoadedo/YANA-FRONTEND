import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Login from './Login';
import Signup from './Signup';


 class Home extends Component {
  render() {
    return (
      <div className= "flex-col-center">
        <img  src={process.env.PUBLIC_URL + '/img/logo-frontpage.png'} alt="Yana icon" />
    <p> You have already an Account?  <Link to='./Login'>Log in!</Link></p>
    <p> Do you need an Account?  <Link to='./Signup'>SIGN UP!</Link></p>
      </div>
    )
  }
}
export default Home;
