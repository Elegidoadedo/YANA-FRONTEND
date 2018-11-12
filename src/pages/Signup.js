import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import auth from '../lib/auth-service';
import { withAuth } from '../lib/authContext';

class Signup extends Component {

  state = {
    username: "",
    password: "",
    email: "",
    phone: "",
    avatar: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const {username, password, email, phone, avatar} = this.state

    auth.signup({ username, password, email, phone, avatar })
      .then( (user) => {
        this.setState({
            username: "",
            password: "",
            avatar:"",
            email:"",
            phone:"",
        });
        this.props.setUser(user);
        this.props.history.push('/dashboard');
      })
      .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { username, password, email, phone, avatar } = this.state;
    return (
      <div className="flex-col-center">
        <img className="logo-med" src={process.env.PUBLIC_URL + '/img/logo-frontpage.png'} alt="Yana icon" />
        <form className="signup-form" onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input type="text" name="username" value={username} onChange={this.handleChange}/>
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} />
          <label>E-mail</label>
          <input type="email" name="email" value={email} onChange={this.handleChange} />
          <label>Phone number</label>
          <input type="number" name="phone" value={phone} onChange={this.handleChange} />
          <label>Avatar</label>
          <input type="text" name="avatar" value={avatar} onChange={this.handleChange} />

          <input type="submit" value="Signup" />
        </form>

        <p>Already have account? 
          <Link to={"/Login"}> Login</Link>
        </p>
      </div>
    )
  }
}

export default withAuth(Signup);