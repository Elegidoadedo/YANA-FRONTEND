import React, { Component } from 'react';
import { Link } from 'react-router-dom'

 class Home extends Component {
  render() {
    return (
      <div className= "flex-col-center">
        <img className="logo-front" src={process.env.PUBLIC_URL + '/img/logo-frontpage.svg'} alt="Yana icon" />
        <p> Already have an Account?</p> 
        <Link className="button-primary" to='./Login'>Log in!</Link>
        <p> Do you need one?</p> 
        <Link className="button-primary" to='./Signup'>SIGN UP!</Link>
      </div>
    )
  }
}
export default Home;
