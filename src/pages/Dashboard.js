import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';
import alertedit from '../lib/alert-service';

class Dashboard extends Component {
  state={
    alertmode: false,
  }

  createAlert = () => {
    if(!this.state.alertmode){
      alertedit.create(this.props.user._id)
      this.setState({
        alertmode: true,
      })
      console.log (this.state.alertmode)

    } else{
      alertedit.delete(this.props.user._id)
      this.setState({
        alertmode: false,
      })
      console.log (this.state.alertmode)
    }
  }
  render() {
    return (
      <div>
        <button className="sos-button" onClick={this.createAlert}>S.O.S</button>          
      </div>
    )
  }
}

export default withAuth(Dashboard);