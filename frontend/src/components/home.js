import React from 'react'

export default function home() {
    return (
        <div>
            <div className="hero-image">
                <div className="bg_banner"></div>
                <div className="hero-text">
                    <h1>Zoo Melaka <br/>
                        <font color="#228B22">Organization</font> <br/>
                        Portfolio </h1>
                        <p>With a whole new experience and completely adaptable. <br/>
                        Booking, your significant serenity begins second <br/>
                        you start dreaming.</p>
                    <button> JOIN US</button>
                </div>
                    <div className="hero-buttons">
                        <button><a href="/booking">LOG IN</a></button>
                        <button>SIGN UP</button>

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
                    <p><font color="red">Know</font> Us</p>
                </div>
                <div className="packagecards-container">
                    <div className="package-card">
                        <h1>HISTORY</h1>
                    </div>
                    <div className="package-card">
                        <h1>WHY WE?</h1>
                    </div>
                    <div className="package-card">
                        <h1>OUR SERVICES</h1>
                    </div>
                 
                </div>
            </div>
        </div>
    )
}
