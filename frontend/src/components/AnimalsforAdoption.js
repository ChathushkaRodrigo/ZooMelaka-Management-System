import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import "../CSS/AnimalsforAdoption.css"

export default class AnimalsforAdoption extends Component {
    render() {
        return (
            <div>

                <div className = 'bckgrnd'>
                <div className = "add-hero">
                    <div class="add-bg_image an-foradp-bgimage"></div>
                    <div className = "add-content">
                        <p className = "add-topic">Animals for Adoption</p><br/>
                        <p className = 'add-sub-content'>Become a proud conservationist of a Zoo Melaka animal today! By adopting an <br/> animal, you not only help the care and feeding of that animal, but also <br/>support education and conservation programs at the Zoo Melaka.</p>
                  </div>
                </div>
                <div className = "add-contentdiv">
                    <br/>
                <div className = "anadd-formdiv container">
                <h4 className = "add-topic">Select an Animal for adoption</h4>
                <br/>
                    <div className ="aa-searchbar">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" ></input>
                    </div>
                    
                    <ul className = "gridder">

                        {/* data map area */}
                        <li className = "gridder-list circles">
                            <Link to = '/adoption/add' className ="ann-contentarea">
                            <div className = "section">
                                <div >
                                <img className = "image_area circlesType lazyloaded" alt ="Adoption" src = 'https://s28164.pcdn.co/files/Asian-Small-clawed-Otter-0072-2545-300x300.jpg'></img>
                                <h5 className = "ann-contentarea ">Asian Otter</h5>
                                </div>
                                <div >
                                        
                                </div>
                            </div>
                            </Link>
                        </li>

                        
                    </ul>
                    
                </div>

                </div>
            </div>
            </div>
        )
    }
}
