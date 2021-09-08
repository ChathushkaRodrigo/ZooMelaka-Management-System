import React, { Component } from 'react';

export default class NavBar extends Component{
    render() {
        return(
            <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'black'}}>
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNew" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul clas="navbarNaw">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="/">Projects</a>
                            </li>
                        </ul>
                    </div>

                </div>

            </nav>
        )
    }  
}