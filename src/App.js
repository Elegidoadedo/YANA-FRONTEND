import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import PrivateRoute from './components/PrivateRoute'
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';

import AuthContext from './lib/authContext';
import Navbar from './components/Navbar';
import FooterBar from './components/FooterBar';

class App extends Component {
  render() {
    return (
      <AuthContext>
        <Navbar />
        <div className="container">
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </AuthContext>
    )
  }
}

export default App;
