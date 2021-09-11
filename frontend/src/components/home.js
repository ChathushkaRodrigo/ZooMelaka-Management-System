/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../CSS/home.css'
import { Link } from "react-router-dom";
import BannerImage from "../images/bannerZoo.jpg";
import serviceImage from "../images/serviceBanner.jpg";




export default function home() {
    return (
        <div className="home-body">

        
            
           
            <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
                <div className="headerContainer">
                 <h1>Zoo Melaka</h1>
                    <p></p>
                    <p> Fresh look at our new services join us  <br/>to serve zoo community and <br/> spend some time with us lets make <br/> good memories </p>
                        <Link to="/login">
                             <button > JOIN US </button>
                        </Link>
                </div>

                
            </div>    
            <div className="home"style={{ backgroundImage: `url(${serviceImage})` }}>
            <div className="home-content">
                
                
                    <div className="packagecards-container">
                        <a href="">
                            <div className="package-card">
                                <h1>HISTORY</h1>
                            </div>
                        </a>
                        <a>
                            <div className="package-card">
                                <h1>WHY WE?</h1>
                            </div>
                        </a>    
                        <a>
                            <div className="package-card">
                                <h1>OUR SERVICES</h1>
                            </div>
                        </a>
                    </div>
            </div>
            </div>
            
        
        </div>
          
 





        
    )
}