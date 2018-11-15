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
          profileedit.getInfo()
      .then((result)=>{
      console.log("ME CARGO EN EL DIDMOUTN STATE", result.alertmode);
      this.setState({
        user:result,
        alertmode:result.alertmode,
      })
    })
    this.intervalID =  setInterval(()=>{
      profileedit.getInfo()
      .then((result)=>{
      console.log("ME CARGO EN EL DIDMOUTN STATE", result.alertmode);
      this.setState({
        user:result,
        alertmode:result.alertmode,
      })
    })},
      2000
    );}


      componentWillUnmount(){
        clearInterval(this.intervalID);
      }
 
  createAlert = () => {
    if(!this.state.alertmode){
      console.log("creando alerta")
      profileedit.alertmode("true")
      .then((result)=>{
        console.log("OJO AQUIII", this.state.user)
        alertedit.create(this.state.user)
        .then((result2)=>{
          console.log("ESTO ES EL RESULTO A CAMBIAR crear",result2)
         
          this.setState({
            user:result,
            alertmode:true, 
            
          })
          console.log("estado 2",this.state.user.alertmode)
        })
        .catch( (error)=>{
         return  console.log("la has liado", error)
        })
      })

    } else if(this.state.alertmode){
      console.log("borrando alerta")
      alertedit.delete(this.state.user._id)
      .then((result)=>{
        profileedit.alertmode("false")
        .then((result)=>{
          console.log("ESTO ES EL RESULTO A CAMBIAR borrar",result)
          this.setState({
            user:result, 
            alertmode: false,
          })
        })
        .catch( (error)=>{
         return  console.log("la has liado", error)
        })
      })

    }}; 

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
       return  console.log("la has liado", error)
      })
    })
    .catch( (error)=>{
     return  console.log("la has liado", error)
    })
  
  .then((result)=>{
    this.setState({
      user:result, 
    })
  })
  .catch( (error)=>{
   return  console.log("la has liado", error)
  })
}



  render() {


    let {user}= this.state;
    return (
      <div>
        {!user ? <Geolocation /> : !this.state.alertmode ? <img className="sos-button" onClick={this.createAlert} src="/img/logo-header.svg" />  : <section className="sos-container">
          <img className="sos-button" onClick={this.createAlert} src="/img/logo-header.svg" />  
          <Geolocation />
        {console.log("ESTO ES EL ESTADO DE ALERTMODE:", user.alertmode)}
          <div className="radar"></div>
          <div className="radar"></div>
          <div className="radar"></div>
          <div className="radar"></div>
          <h3>Sending Emergency signal:</h3>
        </section>
        }

          <a className="call112" href="tel:112">CALL 112</a>
          { !user ?null :  <ul>
            { !user.message ? null:user.message.map ( element => {
              return <li>{element}</li>
            })}
          </ul>}
        <button className="botton test" onClick={this.handleEraseMessage} >Erase all messages</button>       
      </div>
    )
  }
}


export default withAuth(Dashboard);