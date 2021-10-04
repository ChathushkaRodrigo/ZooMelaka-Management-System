/* eslint-disable no-unused-vars */
/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react';
import axios from 'axios';
import "../CSS/profile.css";
// import Link from 'Link';
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import { ImageData } from './ImageData';
import {Link} from 'react-router-dom';

class profile extends Component {

    constructor(props){
        super(props);

        this.state = {
            profile:{},
            userid:""
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        this.state.userid = id;
        axios.get(`http://localhost:8015/profile/${id}`).then((res) => {
            if(res.data.success) {
                this.setState({
                    profile:res.data.profile
                });
                console.log(this.state.profile);
            }
        });
    }

    //Report Generate Function onClick
jspdGenerator=()=>{

        
  //doc obj
  var doc =new jsPDF('p','pt');

    
  var imageData =ImageData.IMAGE_DATA;
          
  doc.addImage(imageData,"ReportLogo",120, 300, 370, 200);
  
  doc.autoTable({ html: '#my-table' })
  //add texts

  doc.text(200,20,'Memeber Report')

  doc.autoTable({
     
     tableWidth:'auto',
     margin: { top: 10 },
      columnStyles: { europe: { halign: 'center' } },
      theme:'grid',
      head: [['First Name', 'Last Name', 'Username','Email','Team']],
      body: [
       
        [this.state.profile.fName,this.state.profile.lName,this.state.profile.uName,this.state.profile.email,this.state.profile.team],

      
        
      ],
     
      styles: {  fontSize:10 },
   
      
    })
  //Save pdf 
  doc.save("Member Report.pdf");


}

    render() {
        
      // Variables Assigned with user Information
        const {fName,lName,uName,email,password,team} = this.state.profile;
        return (
            <div id="upN">
              <div className="headerprofile">
               <div class="container">
                <div class="main-body">    
                  <div class="row gutters-sm">
                    <div class="col-md-4 mb-3">

                      {/* Card to include Basic User identifications */}
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex flex-column align-items-center text-center">                            
                            <div class="mt-3">

                              {/* Display The First name and teh last name of the user */}
                            <h4>{fName} &nbsp; {lName}</h4>

                            {/* Display the Username of the user */}
                           <p class="text-secondary mb-1">@{uName}</p>  

                               {/* Button to edit teh profile */}
                                <a href={`/profile/update/${this.state.userid}`}> <button class="btn btn-primary">
                              &nbsp;Edit   
                                </button></a>  

                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card mt-3">
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            
                          <Link to = {`/profile/membersbooking/${this.state.userid}`} style = {{textDecoration:"none"}}>
                            <span class="text-secondary" style={{fontSize:'20px'}}><b>My Booking</b></span>
                            </Link>
                          </li>
                          <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <Link to = {`/profile/adoptedanimals/${this.state.userid}`} style = {{textDecoration:"none"}}>
                            <span class="text-secondary" style={{fontSize:'20px'}}><b>My Adoptions</b></span>
                            </Link>
                          </li>
                          
                          
                          {/* <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
                            <span class="text-secondary">@bootdey</span>
                          </li>*/}
                        
                        </ul>
                      </div>
                      <br/>
                          <button className="btn btn-success" onClick={this.jspdGenerator}>Generate Report</button>
                    </div>
                    
                    <div class="col-md-8">
                      {/* Card to Display user Information */}
                      <div class="card mb-3">
                        <div class="card-body">
                          
                          {/* Display First Name */}
                          <div class="row-1">
                            <div class="col-sm-3">
                              <h4 class="mb-0">First Name</h4>
                            </div>
                            <div class="col-sm-9 text-secondary" style={{fontSize:'18px'}}>
                            {fName}
                            </div>
                          </div>
                          <hr/>
                          {/* Display Last Name */}
                          <div class="row-1">
                            <div class="col-sm-3">
                              <h4 class="mb-0">Last Name</h4>
                            </div>
                            <div class="col-sm-9 text-secondary" style={{fontSize:'18px'}}>
                            {lName}
                            </div>
                          </div>
                          <hr/>

                          {/* Display Userame */}
                          <div class="row-1">
                            <div class="col-sm-3">
                              <h4 class="mb-0">Username</h4>
                            </div>
                            <div class="col-sm-9 text-secondary" style={{fontSize:'18px'}}>
                            {uName}
                            </div>                                                       
                          </div>
                          <hr/> 

                          {/* Display Email */}
                          <div class="row-1">
                            <div class="col-sm-3">
                              <h4 class="mb-0">Email</h4>
                            </div>
                            <div class="col-sm-9 text-secondary" style={{fontSize:'18px'}}>
                            {email}
                            </div>
                          </div>
                          <hr/> 
                          

                          {/* Display Team */}
                          <div class="row-1">
                            <div class="col-sm-3">
                              <h4 class="mb-0">Team</h4>
                            </div>
                            <div class="col-sm-9 text-secondary" style={{fontSize:'18px'}}>
                            {team}
                            </div>
                          </div>
                          <hr/> 
                          
                    
                        </div>
                      </div>  
                      {/* End of Card to Display User Information */}

                    </div>
                  </div>
                  
                </div>
            </div>      
           </div>
           </div>
        );
    }    
}
export default profile;