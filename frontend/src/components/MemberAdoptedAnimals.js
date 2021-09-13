import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../CSS/MemberAdoptedAnimals.css'

export default class MemberAdoptedAnimals extends Component {

    constructor(props){
        super(props);
    
        this.state={
          adoptions:[],
          membersanimals:[],
          memberid:'M00069'
        };
      }
    
      componentDidMount(){
        this.retrieveAdoptions();
      }
    
      retrieveAdoptions(){
        axios.get("http://localhost:8015/adoption/").then(res =>{
          if(res.data.success){
            this.setState({
              adoptions:res.data.existingAdoptions
            });
    
            console.log(this.state.adoptions)

            this.state.adoptions.map((adoptions) => {
                if(adoptions.member_id === this.state.memberid){
                    this.setState({membersanimals:[...this.state.membersanimals,adoptions]});
                   
                }
            });
            console.log(this.state.membersanimals);

          }
        })
      }


      

    render() {
        return (
           
                <div>

<div className = 'bckgrnd'>
<div className = "add-hero">
    <div class="add-bg_image mem-adpt-bgimage"></div>
    <div className = "add-content">
        <p className = "mem-adopt-topic">My Adoptions</p><br/>
  </div>
</div>
<div className = "add-contentdiv">
    <br/>
<div className = "anadd-formdiv container">
{/* <h4>You can Change Adoption Details and Cancel Adoption Subscription</h4> */}
<br/>
    
    
    <ul className = "gridder">
    {this.state.membersanimals.map((membersanimals) => (
                           
       
        <li className = "mem-gridder-list circles">
            
            <div className = "section">
                <div >
                <img className = "image_area circlesType lazyloaded"  alt ="Adoption" src = 'https://s28164.pcdn.co/files/Asian-Small-clawed-Otter-0072-2545-300x300.jpg'></img>
                <h5 className = "mem-adpt-contentarea ">{membersanimals.animal_name}</h5><br/>
               
                 
                 <Link to = '/adoption/edit/613d1da2bef8bd5c40d2ad03' className ="mem-adpt-contentarea">
                 <a className = "btn" href = "#">
                     <i className= ""></i>&nbsp;Edit
                      </a>
                </Link>
                      &nbsp;
                <Link to = '/adoption/edit/613d1da2bef8bd5c40d2ad03' className ="mem-adpt-contentarea">
                      <a className = "btn" href = "#">
                        <i className= ""></i>&nbsp;Remove
                        </a>
                </Link>
                </div>
                <div >
                        
                </div>
            </div>
            
        </li>

    ))}

        
    </ul>
    
</div>

</div>
</div>
            </div>
        )
    }
}
