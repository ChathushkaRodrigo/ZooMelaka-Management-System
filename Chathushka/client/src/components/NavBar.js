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
            
              
         <nav >
        <label className="logo">Zoo</label>
        <ul>
            <li> <a href=""> Home</a></li>
            <li><a href="/">Tour Guide Dashboard</a></li>
            <li><a href="/add">Add a new booking</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Feedback</a></li>
        </ul>
    </nav>

           
         
        
            
        )
    }
}

export default NavBar