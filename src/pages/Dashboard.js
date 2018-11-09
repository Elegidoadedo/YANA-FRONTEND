import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';


class Dashboard extends Component {
  render() {
    return (
      <div>
        <button className="sos-button">S.O.S</button>          
      </div>
    )
  }
}

export default withAuth(Dashboard);