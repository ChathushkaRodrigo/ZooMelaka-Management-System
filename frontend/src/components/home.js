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
                        <Link to="/profile/login">
                             <button > JOIN US </button>
                        </Link>
                </div>

                
            </div>    
            <div className="home"style={{ backgroundImage: `url(${serviceImage})` }}>
            <div className="headerContainer2">
                <div className="card1">
                    <center>
                        <h1>The Community</h1>
                        <p>vemvklvmmdcmkldamcmdscmdcmldmklcmaddcmlkmklcm<br/>jkcjkncjksmcwlkoc<br/></p>
                    </center>

                </div>  
            </div>
            </div>
            
        
        </div>
          
 





        
    )
}