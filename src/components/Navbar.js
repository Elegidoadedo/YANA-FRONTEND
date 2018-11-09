import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/authContext';
class Navbar extends Component {
  render() {  
    const { isLogged } = this.props;
    return (
      <div>
        { isLogged ? <div className= "flex-navbar">
          <img class="logo-peq" src={process.env.PUBLIC_URL + '/img/logo-frontpage.png'} alt="Yana icon" />
          <a href="tel:112">CALL 112</a>
        </div> : null}
      </div>
    )
  }
}

export default withAuth()(Navbar);