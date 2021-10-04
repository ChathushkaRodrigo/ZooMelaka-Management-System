/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import Login from './Login';
import Register from './Register';

import { Route, Switch, Link } from 'react-router-dom'
import '../CSS/nav-bar.css'
import './style.css';
import PropTypes from "prop-types";
import store from '../store';
import { isAuth } from '../actions/authActions'
import {Redirect} from 'react-router-dom'
import { logout } from '../actions/authActions';
import { buttonReset} from '../actions/uiActions';

class NavBar extends PureComponent {

   static propTypes = {
      button: PropTypes.bool,
      authState: PropTypes.object.isRequired,
      buttonReset: PropTypes.func.isRequired,
      logout: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props)

        this.state = {
            loggedin:'',
            id:'',
            username:''
        }
        
    }
    componentDidMount() {
      // Check if session cookie is present
      store.dispatch(isAuth());
    }
  

    onLogout = (e) => {
      e.preventDefault();
      this.props.buttonReset();
      this.props.logout();
    };

    isloggedin(){
      if(!this.props.authState.isAuthenticated) {
         this.state.loggedin = <div class="login-container">
            
         <Link  to="/login"><button type="submit">Login</button></Link>
         <Link  to="/register"><button type="submit">Sign In</button></Link>

         </div>
      }
      else{
         
         this.state.loggedin =<div class="login-container"> 
         <button size="lg" onClick={this.onLogout} color="primary">Logout</button>
         <Link  to = {`/uprofile/${this.state.id}`}><button size="lg" color="primary">Profile</button></Link>
         </div>
      }
   }

    render() {
      const {user} = this.props.authState;
      this.isloggedin();


        return (
         <div>
          <nav id="navbody">
          <div class="menu-icon">
             <span class="fas fa-bars"></span>
          </div>
          <div class="logo">
             
          </div>
          <div class="nav-items">
             <li><a href="/">Home</a></li>
             <li><a href="/booking/request">Book Tour</a></li>
             <li><a href="/animalsforadoption">Adopt Now</a></li>
             <li><a href="/contactUs">Contact Us</a></li>
             <li><a href="/aboutus">About Us</a></li>
             <li><a href="/research/customerDash/">Researches</a></li>
  
          </div>
          
          <div class="topnav">
          

          {this.state.loggedin}
       </div>
       </nav>
       <Switch>
              <Route exact path ="/login" component={Login}/>
              <Route exact path ="/register" component={Register}/>
         </Switch>

         <label hidden>{this.state.id = (user ? `${user.id}`: '' )}</label>
         <label hidden>{this.state.username = (user ? `${user.name}`: '' )}</label>
      </div>
        
            
        )
    }
}
const mapStateToProps = (state) => ({ //Maps state to redux store as props
   button: state.ui.button,
   authState: state.auth
 });
 
 export default connect(mapStateToProps, { logout, buttonReset })(NavBar);
 