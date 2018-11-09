import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/authContext';

class FooterBar extends Component {
  render() {
    const { isLogged } = this.props;
    return (
      <div>
      { isLogged ? <div className="footer-menu">
       <Link to="/Profile"> <i className="far fa-user"></i></Link>
       <Link to="/Dashboard"><i className="fas fa-bullhorn"></i> </Link>
       <Link to="/Messages"> <i className="far fa-envelope-open"></i> </Link>
       <Link to="/Alerts"> <i className="fas fa-exclamation-triangle"></i> </Link>
       <i onClick={this.props.logout} className="fas fa-door-open"></i> 
      </div>:null
    }
    </div>
    )
  }
}

export default withAuth(FooterBar);