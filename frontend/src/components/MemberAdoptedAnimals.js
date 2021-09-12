import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../CSS/MemberAdoptedAnimals.css'

export default class MemberAdoptedAnimals extends Component {
    render() {
        return (
           
                <div>

<div className = 'bckgrnd'>
<div className = "add-hero">
    <div class="add-bg_image mem-adpt-bgimage"></div>
    <div className = "content">
        <p>My Adoptions</p><br/>
  </div>
</div>
<div className = "add-contentdiv">
    <br/>
<div className = "anadd-formdiv container">
{/* <h4>You can Change Adoption Details and Cancel Adoption Subscription</h4> */}
<br/>
    
    
    <ul className = "gridder">

        {/* data map area */}
        <li className = "mem-gridder-list circles">
            
            <div className = "section">
                <div >
                <img className = "image_area circlesType lazyloaded" src = 'https://s28164.pcdn.co/files/Asian-Small-clawed-Otter-0072-2545-300x300.jpg'></img>
                <h5 className = "mem-adpt-contentarea ">Asian Otter</h5><br/>
                {/* <button value = "Edit">Edit</button>&nbsp;&nbsp;
                <button>Cancel Adoption</button> */}
                 
                 <Link to = '/adoption/edit/613d1da2bef8bd5c40d2ad03' className ="mem-adpt-contentarea">
                 <a className = "btn" >
                     <i className= ""></i>&nbsp;Edit
                      </a>
                </Link>
                      &nbsp;
                <Link to = '/adoption/edit/613d1da2bef8bd5c40d2ad03' className ="mem-adpt-contentarea">
                      <a className = "btn" >
                        <i className= ""></i>&nbsp;Remove
                        </a>
                </Link>
                </div>
                <div >
                        
                </div>
            </div>
            
        </li>

        <li className = "mem-gridder-list circles">
            
            <div className = "section">
                <div >
                <img className = "image_area circlesType lazyloaded" src = 'https://s28164.pcdn.co/files/Asian-Small-clawed-Otter-0072-2545-300x300.jpg'></img>
                <h5 className = "mem-adpt-contentarea ">Asian Otter</h5><br/>
                {/* <button value = "Edit">Edit</button>&nbsp;&nbsp;
                <button>Cancel Adoption</button> */}
                 
                 <Link to = '/adoption/edit/613d1da2bef8bd5c40d2ad03' className ="mem-adpt-contentarea">
                 <a className = "btn" >
                     <i className= ""></i>&nbsp;Edit
                      </a>
                </Link>
                      &nbsp;
                <Link to = '/adoption/edit/613d1da2bef8bd5c40d2ad03' className ="mem-adpt-contentarea">
                      <a className = "btn" >
                        <i className= ""></i>&nbsp;Remove
                        </a>
                </Link>
                </div>
                <div >
                        
                </div>
            </div>
            
        </li>


        <li className = "mem-gridder-list circles">
            
            <div className = "section">
                <div >
                <img className = "image_area circlesType lazyloaded" src = 'https://s28164.pcdn.co/files/Asian-Small-clawed-Otter-0072-2545-300x300.jpg'></img>
                <h5 className = "mem-adpt-contentarea ">Asian Otter</h5><br/>
                {/* <button value = "Edit">Edit</button>&nbsp;&nbsp;
                <button>Cancel Adoption</button> */}
                 
                 <Link to = '/adoption/edit/613d1da2bef8bd5c40d2ad03' className ="mem-adpt-contentarea">
                 <a className = "btn" >
                     <i className= ""></i>&nbsp;Edit
                      </a>
                </Link>
                      &nbsp;
                <Link to = '/adoption/edit/613d1da2bef8bd5c40d2ad03' className ="mem-adpt-contentarea">
                      <a className = "btn" >
                        <i className= ""></i>&nbsp;Remove
                        </a>
                </Link>
                </div>
                <div >
                        
                </div>
            </div>
            
        </li>



        <li className = "mem-gridder-list circles">
            
            <div className = "section">
                <div >
                <img className = "image_area circlesType lazyloaded" src = 'https://s28164.pcdn.co/files/Asian-Small-clawed-Otter-0072-2545-300x300.jpg'></img>
                <h5 className = "mem-adpt-contentarea ">Asian Otter</h5><br/>
                {/* <button value = "Edit">Edit</button>&nbsp;&nbsp;
                <button>Cancel Adoption</button> */}
                 
                 <Link to = '/adoption/edit/613d1da2bef8bd5c40d2ad03' className ="mem-adpt-contentarea">
                 <a className = "btn" >
                     <i className= ""></i>&nbsp;Edit
                      </a>
                </Link>
                      &nbsp;
                <Link to = '/adoption/edit/613d1da2bef8bd5c40d2ad03' className ="mem-adpt-contentarea">
                      <a className = "btn" >
                        <i className= ""></i>&nbsp;Remove
                        </a>
                </Link>
                </div>
                <div >
                        
                </div>
            </div>
            
        </li>


        
    </ul>
    
</div>

</div>
</div>
            </div>
        )
    }
}
