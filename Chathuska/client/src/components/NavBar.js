/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from 'react'
import  '../css/nav-bar.css';

class NavBar extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            
              
         <nav className="navbar navbar-expand-lg ">
        <label className="logo">Zoo</label>
        <ul>
            <li> <a className="active" href="#">Home</a></li>
            <li><a href="/">Tour Guide Dashboard</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Feedback</a></li>
        </ul>
    </nav>

           
         
        
            
        )
    }
}

export default NavBar