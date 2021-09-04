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
            
              
                 <nav>
        <input type="checkbox" id="check"/>
        <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
        </label>
        <label class="logo">Logo</label>
        <ul>
            <li><a class="active" href="#">Home</a></li>
            <li><a href="">Tour Guide Dashboard</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Feedback</a></li>
        </ul>
    </nav>

           
         
        
            
        )
    }
}

export default NavBar