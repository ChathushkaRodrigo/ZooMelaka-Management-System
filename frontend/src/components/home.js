/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../CSS/home.css'
import { Link } from "react-router-dom";
import BannerImage from "../images/bannerZoo.jpg";


export default function home() {
    return (
        <div>
            
           
            <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Zoo Melaka</h1>
        <p></p>
        <p> Fresh look at our new services join us  <br/>to serve zoo community and <br/> spend some time with us lets make <br/> good memories </p>
        <Link to="/menu">
          <button href="/login"> JOIN US </button>
        </Link>
      </div>
    </div>
          
 





        </div>
    )
}