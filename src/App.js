import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'

import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import EditProfile from './pages/Edit-profile';
import Messages from './pages/Messages';
import Alerts from './pages/Alerts';


import AuthContext from './lib/authContext';
import Navbar from './components/Navbar';
import FooterBar from './components/FooterBar';

class App extends Component {
  render() {
    return (
      
      <AuthContext>
        <Navbar />
        <div className="container ">
          <div>
            <Switch>
              <PublicRoute exact path="/" component={Home} />
              <PublicRoute path="/login" component={Login} />
              <PublicRoute path="/signup" component={Signup} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/messages" component={Messages} />
              <PrivateRoute path="/alerts" component={Alerts} />
              <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute path="/edit-profile" component={EditProfile} />
            </Switch>
            <FooterBar />
          </div>
        </div>
      </AuthContext>
    )
  }
}

export default App;
