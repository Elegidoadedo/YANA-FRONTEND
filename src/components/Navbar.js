import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';


class Navbar extends Component {
  render() {  
    const { isLogged } = this.props;
    return (
      <div>
        { isLogged ? <div className= "flex-navbar">
          <img className="logo-peq nav-logo" src={process.env.PUBLIC_URL + '/img/logo-header.svg'} alt="Yana icon" />
          </div> : null
        }
      </div>
    )
  }
}

export default withAuth(Navbar);