import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';
import alertedit from '../lib/alert-service';
import Geolocation from '../components/Geolocation';
import profileedit from '../lib/profile-service';

class Dashboard extends Component {
  state={
    user: null,
    alertmode: false,
  }

  intervalID = 0;
  
  
  componentDidMount(){
    //for first render call getInfo, then interval for updates
    profileedit.getInfo()
    .then((result)=>{
      this.setState({
        user:result,
        alertmode:result.alertmode,
      })
    })
    this.intervalID =  setInterval(()=>{
      profileedit.getInfo()
      .then((result)=>{
        this.setState({
          user:result,
          alertmode:result.alertmode,
        })
      })
    },2000)
  }


  componentWillUnmount(){
    clearInterval(this.intervalID);
  }
 
  createAlert = () => {
    if(!this.state.alertmode){
      profileedit.alertmode("true")
      .then((result)=>{
        alertedit.create(this.state.user)
        .then((result2)=>{      
          this.setState({
            user:result,
            alertmode:true, 
            
          })
        })
        .catch( (error)=>{
        //  return  console.warn(error)
        })
      })

    } else if(this.state.alertmode){
      alertedit.delete(this.state.user._id)
      .then((result)=>{
        profileedit.alertmode("false")
        .then((result)=>{
          this.setState({
            user:result, 
            alertmode: false,
          })
        })
        .catch( (error)=>{
        //  return  console.warn(error)
        })
      })
    }
  }

  handleEraseMessage = () =>{
    alertedit.deletemessages(this.state.user._id)
    .then((result)=>{
      profileedit.getInfo()
      .then((result)=>{
        this.setState({
          user:result, 
        })
      })
      .catch( (error)=>{
      //  return  console.warn(error)
      })
    })
    .catch( (error)=>{
    //  return  console.warn( error)
    })
    .then((result)=>{
      this.setState({
        user:result, 
      })
    })
    .catch( (error)=>{
    // return  console.warn(error)
    })
  }

  render() {
    let {user}= this.state;
    return (
      <div>
        {!user ? <Geolocation /> : !this.state.alertmode ? <img className="sos-button" alt="sos-logo" onClick={this.createAlert} src="/img/logo-header.svg" />  : <section className="sos-container">
          <img className="sos-button" onClick={this.createAlert} src="/img/logo-header.svg" alt="sos-logo"/>  
          <Geolocation />
          <div className="radar"></div>
          <div className="radar"></div>
          <div className="radar"></div>
          <div className="radar"></div>
          <h3 className="color-red">Sending Emergency signal:</h3>
        </section>
        }
        <div className="call-container">
          <a className="call112" href="tel:112">CALL 112</a>
          <section className="container-heroes">
          { !user ?null :  <div className="row-3ele">
            { !user.message ? null:user.message.map ( element => {
              return <section className="article-contacts">
                <img className="logo-med" src={element.avatar} alt="avatar heroes"/>
                <h3>{element.username}</h3>
                <p>is going to you!</p>
              </section>
            })}
            </div>}
            </section>
          <button className="botton test" onClick={this.handleEraseMessage} >Erase all messages</button>       
        </div>
      </div>
    )
  }
}

export default withAuth(Dashboard);