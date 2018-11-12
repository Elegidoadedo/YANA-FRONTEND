import React, { Component } from 'react'
import { withAuth } from '../lib/authContext';




 class Alerts extends Component {
  render() {
    return (
      <div>
        <h1>HI! Soy alerts madafakah!</h1>
      </div>
    )
  }
}



export default withAuth(Alerts);