import React from 'react'
import "./login.css"
import axios from 'axios'
class Login extends React.Component {
  onSignin=(props)=>{
    axios.post('https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin', {
      uuid: 'Hello'
    })
    .then(function (res) {
      console.log(res);
      const {data} = res;
      const {response} = data;
      const {access_token} =  response;
      sessionStorage.setItem('token', access_token);
     props.history.push('/start')
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render(){
    console.log(this.props)
return <div className='Rectangle-3'>
  <img src="./bear-face.png"
       alt='blabla'
     className="bear-face"></img>
  <button onClick={()=>this.onSignin(this.props)} className='Rectangle-2 '> <p className='Let-me-in'>Let me in</p></button>    

</div>
}};
export default Login;