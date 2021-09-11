import React, { Component } from 'react';
import "../CSS/login.css";
import {Link} from 'react-router-dom';

class Login extends Component {

    constructor(props){
        super(props);

        this.state ={           
            email:"",
            password:""
        }
    }

    handleInputChange = (e)=>{
        const {name,value} = e.target;
        this.setState({
            ...this.state,
            [name]:value
        })
    }

    handleSubmit =(e)=>{

           e.preventDefault()
    }   

    render() {
        return (
            <>
            <div class="login-box">
  <h2>Login</h2>
  <form>
    <div class="user-box">
      <input type="text" name="" required=""/>
      <label>Username</label>
    </div>
    <div class="user-box">
      <input type="password" name="" required=""/>
      <label>Password</label>
    </div>
    <Link to = "./AdminPanelHome">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
      </Link>
  </form>
</div>                   
                
            </>
        )
    }
}
export default Login;