import React, { Component } from 'react'
import { withAuth } from '../lib/authContext';
import alertedit from '../lib/alert-service';




 class Alerts extends Component {
  state={
    arrayAlerts:null
  }

  handleSendMessage = (id) =>{
    alertedit.sendMessage(id, this.props.user.username)
  }



  componentDidMount(){
    const id = this.props.user._id;
    alertedit.getAlerts(id)
   .then((result)=>{
    console.log( "esto es result", result.data)
    this.setState( {'arrayAlerts': result.data})
  
  })
  }

  render() {
    let {arrayAlerts} = this.state;
    return (
      <div>
        <h3>Active Alerts:</h3>
       { arrayAlerts ? <ul>{arrayAlerts.map( (element) => {
         return<section>
            <li key={element._id}>{element.creator.username}</li>
            <button onClick={this.handleSendMessage(element.creator._id)}>I'M GOING!</button>
          </section>
       })} </ul>:null }
      </div>
    )
  }
}



export default withAuth(Alerts);