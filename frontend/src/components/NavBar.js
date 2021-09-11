/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from 'react'

class NavBar extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon">Zoo Melaka</span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <a class="navbar-brand" href="#"> </a>
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Admin Dashboard</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">Contact US</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">Log Out</a>
                </li>
              </ul>
         
            </div>
          </nav>
        
            
        )
    }
}

export default NavBar