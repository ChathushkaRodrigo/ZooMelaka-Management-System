/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import axios from 'axios';
import "../CSS/memberdashboard.css";

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

  render() {
    return (
      <div>
          
          <div className="pgdb" id="headerprofile">
          
          <div className="prof-dashboard">
            
      <div className="bg_prof"></div> &nbsp;
          {/* For Header */}
          <div className="headerprofile">   
            <h1 id="profguideheading">
              <center>MemberDashboard</center> <br />
            </h1>
          </div>
        </div>

    <br />
            {/* Begin table */}
            <table className="profdashboard" id="Customers">
              {/* Table Header */}
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">FIrst Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody>
                {/* Table Row */}
                {/* Rendering an Array of Data from map */}
                {this.state.profiles.map((profiles,index) => (
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>
                        <a href={`/profile/${profiles._id}`} style={{textDecoration:'none'}}>
                            {profiles.fName}
                        </a>
                    </td>
                    <td>{profiles.lName}</td>
                    <td>{profiles.uName}</td>
                    <td>{profiles.email}</td>
                    <td>{profiles.password}</td>                    
                    <td>  
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
          </div>        
    );
  }
  
}
export default memberdashboard;