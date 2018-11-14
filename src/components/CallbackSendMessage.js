import React, { Component } from 'react'

class CallbackMessage extends Component {
  render() {
    const {id} = this.props;
    return (
         this.handleSendMessage(id)
    )
  }
}


export default CallbackMessage;