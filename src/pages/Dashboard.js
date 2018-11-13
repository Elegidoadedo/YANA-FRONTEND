import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';
import alertedit from '../lib/alert-service';

class Dashboard extends Component {
  state={
    alertmode: false,
    messages: false,
  }

  createAlert = () => {
    if(!this.state.alertmode){
      alertedit.create(this.props.user)
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

  // handleEraseMessage = () =>{
  //   alertedit.deletemessages(this.props.user._id)
  //   this.setState({
  //     message: true,
  //   })

  // }

  render() {
    return (
      <div>
        <button className="sos-button" onClick={this.createAlert}>S.O.S</button>  
        { this.props.user.message ?  <ul>
          {console.log( this.props.user)}
          {this.props.user.message.map ( element => {
            return <li>{element}</li>
          })}
        </ul>: null}
        <button className="botton" >Erase all messages</button>       
      </div>
    )
  }
}

export default withAuth(Dashboard);