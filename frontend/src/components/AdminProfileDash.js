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

  retrieveProfiles(){
    axios.get("http://localhost:8015/profiles").then(res =>{
      if(res.data.success){
        this.setState({
          profiles:res.data.existingProfiles
        });       
      };
    });
  }

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
          <div className="headerprofile">
            <h1 id="profguideheading">
              <center>MemberDashboard</center> <br />
            </h1>
          </div>
        </div>

    <br />

            <table className="profdashboard" id="Customers">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">FName</th>
                  <th scope="col">LName</th>
                  <th scope="col">UName</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
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
                        <a className="btn btn-warning" href={`/AdminUProfileEdit/${profiles._id}`}>
                            <i className="fas fa-edit"></i>&nbsp;Edit                        
                        </a>
                      &nbsp;
                        <a className="btn btn-danger" onClick={() =>this.onDelete(profiles._id)}>
                            <i className="far fa-trash-alt"></i>&nbsp;Delete                        
                        </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table> 
            <br/>
            <br/>
            <br/> 
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            

            {/* <button className="btn btn-success"><a href="/signup" style={{textDecoration:'none', color:'white'}}>Create New Profile</a></button>
            <button className="btn btn-success"><a href="/login" style={{textDecoration:'none', color:'white'}}>Login</a></button>                  */}

          </div>
          </div>        
    );
  }
  
}
export default memberdashboard;