import React, { Component } from 'react'
import { withAuth } from '../lib/authContext';




 class Message extends Component {
  render() {
    return (
      <div>
        <h1>HI! Soy Message madafakah!</h1>
      </div>
    )
  }
}



export default withAuth(Message);