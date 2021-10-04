/* eslint-disable no-unused-vars */
/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react';
import axios from 'axios';
import "../CSS/memberdashboard.css";


import SplitButton from 'react-bootstrap/SplitButton';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Select from 'react-select'

class AdminUProfileEdit extends Component {

    constructor(props){
        super(props);

        this.state ={
            userid:"",
            fName:"",
            lName:"",
            uName:"",
            email:"",
            password:"",
            team:""
        }
    }

    handleInputChange = (e)=>{
        const {name,value} = e.target;
        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit =(e)=>{

        const id = this.props.match.params.id;

        e.preventDefault();

        const {fName,lName,uName,email,password,team} = this.state;

        const data={
            fName:fName,
            lName:lName,
            uName:uName,
            email:email,
            password:password,
            team:team
        }
        console.log(data);

        axios.put(`http://localhost:8015/profile/update/${id}`,data).then((res)=>{
            if(res.data.success){
                alert("Profile Updated Successfully");
                this.setState(
                    {
                        fName:"",
                        lName:"",
                        uName:"",
                        email:"",
                        password:"",
                        team:""
                    }
                )
                this.props.history.push('/adminprofiledash'); 
            }          
            
        })   
        
    }

    onDelete =(id)=>{
  
        axios.delete(`http://localhost:8015/profile/delete/${id}`).then((res) =>{
        
          alert("Deleted Successfully");
        
        //   this.retrieveProfiles();
        })
        this.props.history.push('/'); 
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        this.state.userid = id;

        axios.get(`http://localhost:8015/profile/${id}`).then((res) => {
            if(res.data.success) {
                this.setState({                    
                    fName:res.data.profile.fName,
                    lName:res.data.profile.lName,
                    uName:res.data.profile.uName,
                    email:res.data.profile.email,
                    password:res.data.profile.password,
                    team:res.data.profile.team
                });
                console.log(this.state.profile);                
            }
        });        
    }
    render() {

        const handleSelect=(e)=>{
            console.log(e);
            
            this.state.team = e
            console.log("Helloooo: " + this.state.team)
            
            this.ref.current.value = e
        }

        return (
            <div id="NudujaEdit" >
          <div className="col-md-8 mt-4 mx-auto" style={{backgroundColor:'white',marginBottom:'0px',height:'850px'}} >
            <h1 className="h3 mb-3 font-weight-normal" style={{fontSize:'40px',marginLeft:'40%',paddingTop:'30px'}}>Edit Profile</h1>
              <form className="needs-validation" noValidate>
                  <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px',color:'black'}}>First Name</label>
                        <input type="text"
                            className="form-control"
                            name="fName"
                            placeholder="Enter First Name"
                            value={this.state.fName}
                            onChange={this.handleInputChange} />                    
                    </div>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px',color:'black'}}>Last Name</label>
                        <input type="text"
                            className="form-control"
                            name="lName"
                            placeholder="Enter Last Name"
                            value={this.state.lName}
                            onChange={this.handleInputChange} />                    
                    </div>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px',color:'black'}}>User Name</label>
                        <input type="text"
                            className="form-control"
                            name="uName"
                            placeholder="Enter User Name"
                            value={this.state.uName}
                            onChange={this.handleInputChange} />                    
                    </div>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px',color:'black'}}>Email</label>
                        <input type="text"
                            className="form-control"
                            name="email"
                            placeholder="Enter Email"
                            value={this.state.email}
                            onChange={this.handleInputChange} />                    
                    </div>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px',color:'black'}}>Password</label>
                        <input type="text"
                            className="form-control"
                            name="password"
                            placeholder="Enter Password"
                            value={this.state.password}
                            onChange={this.handleInputChange} />                    
                    </div>
    
                    
    
                </form>
                <div style={{width:'80%',margin:'0 auto',display:'inline'}}>
                    <div style={{float:'Right',marginRight:'126px'}}> 
                        <button className="btn btn-success" type="submit" onClick={this.onSubmit}>   
                                <i className="far fa-check-square"> </i>
                                &nbsp; Update
                            </button>
                    </div>
                    <div style={{float:'left',marginLeft:'126px'}}>
                        <button className="btn btn-success" style={{marginTop:"0px",width:"200px"}} >
                        <a href="/adminprofiledash" style={{ textDecoration: "none", color: "white" }}>
                        Profile Dashboard
                        </a>
                        </button>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
export default AdminUProfileEdit;