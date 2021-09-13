/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from 'react'
import '../CSS/nav-bar.css'
class NavBar extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            
          <nav>
          <div class="menu-icon">
             <span class="fas fa-bars"></span>
          </div>
          <div class="logo">
             
          </div>
          <div class="nav-items">
             <li><a href="/">Home</a></li>
             <li><a href="/booking/request">Book Tour</a></li>
             <li><a href="/adoption/add">Adopt Now</a></li>
             <li><a href="/contactUs">Contact Us</a></li>
             <li><a href="/aboutus">About Us</a></li>
             <li><a href="/research/customerDash/">Researches</a></li>
 
 
          </div>
          
          <div class="topnav">
          <div class="login-container">
             <button type="submit">Login</button>
             <button type="submit">Sign In</button>
          </div>
       </div>
       </nav>
        
            
        )
    }
}

export default NavBar