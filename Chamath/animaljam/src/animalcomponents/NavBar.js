import React, {Component} from "react";
export default class NavBar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#F0FFFF'}}>
            <div className="container-fluid">
            <a className="navbar-brand" href="/" style={{fontFamily:'"Copperplate","Payrus",Fantasy'}}>Animal Portfolio Navigation</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#" style={{fontFamily:'"Copperplate","Payrus",Fantasy'}}>Zoo Melaka</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#" style={{fontFamily:'"Copperplate","Payrus",Fantasy'}}>Safari Park</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#" style={{fontFamily:'"Copperplate","Payrus",Fantasy'}}>About Us</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"></a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
        )
    }
}