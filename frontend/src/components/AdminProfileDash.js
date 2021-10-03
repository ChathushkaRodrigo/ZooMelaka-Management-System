/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import axios from 'axios';
import "../CSS/memberdashboard.css";

import jsPDF from 'jspdf'
import 'jspdf-autotable'

class memberdashboard extends Component {

  constructor(props){
    super(props);

    this.state={
      profiles:[]
    }
  }

  componentDidMount(){
    this.retrieveProfiles();
  }
  //Retrieve Posts from the backend
  retrieveProfiles(){
    axios.get("http://localhost:8015/profiles").then(res =>{
      if(res.data.success){
        this.setState({
          profiles:res.data.existingProfiles
        });       
      };
    });
  }

  //Delete a profile
  onDelete =(id)=>{
  
    axios.delete(`http://localhost:8015/profile/delete/${id}`).then((res) =>{
    
      alert("Deleted Successfully");
    
      this.retrieveProfiles();
    })    
  }

  //Report Generate Function onClick
jspdGenerator=()=>{

        
  //Create document obj
  var doc =new jsPDF("p","pt","b3") 


  doc.html(document.querySelector("#Customers"), {
    
    callback:function(pdf){

      pdf.save("DashboardCustomer.pdf");
      
    }

  });

 
}
//End of function report 


  render() {
    return (
      <div id="NudujaDash">
          
          <div className="pgdb" id="headerprofile">
          
            <div className="prof-dashboard">
            
              <div className="bg_prof"></div> &nbsp;
                 {/* For Header */}
                <div className="headerprofile">   
                     <h1 id="profguideheading">
                       <center>Member Dashboard</center> <br />
                     </h1>
                 </div>
              </div>

                  <br />
              {/* Begin table */}
              <div id="NudujaT">
              <table className="profdashboard" id="CustomersN" style={{border:'5px'}}>
                {/* Table Header */}
                <thead>
                  <tr>
                    <th scope="col" style={{width:'50px',fontSize:'20px',textAlign:'center'}}>#</th>
                    <th scope="col" style={{width:'50px',fontSize:'18px',textAlign:'center'}}>First Name</th>
                    <th scope="col" style={{width:'50px',fontSize:'18px',textAlign:'center'}}>Last Name</th>
                    <th scope="col" style={{marginLeft:'20px',width:'50px',fontSize:'18px',textAlign:'center'}}>Username</th>
                    <th scope="col" style={{width:'50px',fontSize:'18px',textAlign:'center'}}>Email</th>
                    <th scope="col" style={{width:'50px',fontSize:'18px',textAlign:'center'}}>Team</th>
                    <th scope="col" style={{width:'50px',fontSize:'18px',textAlign:'center'}}>Action</th>
                  </tr>
                </thead>
                {/* Table Body */}
                <tbody>
                  {/* Table Row */}
                  {/* Rendering an Array of Data from map */}
                  {this.state.profiles.map((profiles,index) => (
                    <tr key={index} style={{borderBottomColor:'black',border:'1px'}}>
                      <td scope="row" style={{textAlign:'center'}}>{index+1}</td>
                      <td style={{textAlign:'center'}}>
                          <a id="legendanchor" href={`/uprofile/${profiles._id}`} style={{textDecoration:'none'}}>
                              {profiles.fName}
                          </a>
                      </td>
                      <td style={{textAlign:'center'}}>{profiles.lName}</td>
                      <td style={{textAlign:'center'}}>{profiles.uName}</td>
                      <td style={{textAlign:'center'}}>{profiles.email}</td>                    
                      <td style={{textAlign:'center'}}>{profiles.team}</td>                   
                      <td style={{textAlign:'center'}}>  
                          {/* Profile Edit Button */}
                          <a className="btn btn-warning" href={`/AdminUProfileEdit/${profiles._id}`}>
                              <i className="fas fa-edit"></i>&nbsp;Edit                        
                          </a>
                        &nbsp;
                        {/* Profile Delete Button */}
                          <a href="/AdminProfileDash" className="btn btn-danger" onClick={() =>this.onDelete(profiles._id)}>
                              <i className="far fa-trash-alt"></i>&nbsp;Delete                        
                          </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>  
              <div>  
             <button className="btn btn-success" style={{marginLeft:"0", marginTop:"0px",width:"150px"}} >
              <a href="/adminpanelhome" style={{ textDecoration: "none", color: "white" }}>
                Admin Home
              </a>
              </button>
              </div>
              <div>
              <button className="btn btn-success" onClick={this.jspdGenerator}>Generate Members Report</button>
              </div>
            </div>
          </div>      
    );
  }
  
}
export default memberdashboard;