/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../CSS/home.css'
export default function home() {
    return (
        <div>
            <div className="hero-image">
                <div className="bg_banner" ></div>
                <div className="hero-text">
                    <h1>Zoo Melaka <br/>
                        <font color="#228B22">Organization</font> <br/>
                        Portfolio </h1>
                        <p>providing you with a fresh look of our zoo <br/> come with us for an amazing journey to <br/> make amazing memories</p>
                    <button href="#">  JOIN OUR COMMUNITY</button>
                </div>
                    <div className="hero-buttons">
                        <button ><a href="/login" style={{textDecoration:'none', color: "white"}}>LOG IN</a></button>
                        <button ><a href="/login" style={{textDecoration: "none", color: "white"}}>SIGN UP</a></button>

                        <div className="home-search">
                            <form className="d-flex">
                                <input className="home-search-form" type="search" placeholder="Search.." aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit"><i className="fas fa-search"></i></button>
                            </form>
                        </div>
                    </div> 
            </div>


            <div className="home-content">
                
                <div className="home-content-topic">
                    <p id="knowus"><font color="green">Get to know</font> us</p>
                </div>
                <div className="packagecards-container">
                    <a href="#">
                        <div className="package-card">
                            <h1>HISTORY</h1>
                        </div>
                    </a>
                    <a href="#">
                        <div className="package-card">
                            <h1>WHY WE?</h1>
                        </div>
                    </a>
                    <a href="#">
                        <div className="package-card">
                            <h1>OUR SERVICES</h1>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}