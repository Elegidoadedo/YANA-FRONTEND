import React, { Component } from 'react'
import authService from './auth-service';

const { Provider, Consumer } = React.createContext();

export const withAuth = (Comp) => {
  return class WithAuth extends Component {
    render() {
      return (
        <Consumer>
          {(authStore) => {
            return <Comp 
              isLogged={authStore.isLogged}
              user={authStore.user}
              logout={authStore.logout}
              setUser={authStore.setUser}
              {...this.props} />
          }}
        </Consumer>
      )
    }    
  }
}

export default class AuthContext extends Component {
  state = {
    isLogged: false,
    user: null,
    isLoading: true
  }

  componentDidMount() {
    authService.me()
    .then((user)=>{
      this.setState({
        user,
        isLoading : false,
        isLogged : true
      })
    })
    .catch((error)=>{
      this.setState({
        isLogged : false,
        user : null,
        isLoading : false
      })
    })
  }

  handleSetUser = (user) => {
    this.setState({
      user,
      isLogged : true
    })
  }

  handleLogOut = () =>{
    authService.logout()
    .then(()=>{
      this.setState({
        user : null,
        isLogged : false
      })
    })
    .catch((error)=>{
    })
  }

  render() {
    const { isLoading } = this.state;
    return isLoading ? <h1>Loading...</h1> : <Provider value={{
      isLogged: this.state.isLogged,
      user: this.state.user,
      logout: this.handleLogOut,
      setUser: this.handleSetUser
    }}>
      {this.props.children}
    </Provider>
  }
}
