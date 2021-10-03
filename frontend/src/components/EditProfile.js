/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react';
import axios from 'axios';
import "../CSS/EditProfile.css";
import { FormErrors } from './FormErrors';
import "../CSS/FormError.css";

import SplitButton from 'react-bootstrap/SplitButton';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Select from 'react-select'

class EditProfile extends Component {

    constructor(props){
        super(props);

        this.state ={
            userid:"",
            fName:"",
            lName:"",
            uName:"",
            email:"",
            password:"",
            team:"",
            profile:[],


            formErrors: {email: '', password:''},
            emailValid: false,
            passwordValid: false,
            formvalid: false
        }
        this.ref = React.createRef();
    }
    
    // Method to handle Input
    handleInputChange = (e)=>{
        const {name,value} = e.target;
        this.setState({
            ...this.state,
            [name]:value
        },() => { this.validateField(name, value) }
    );
    }

    // Method to handle user form submission
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
            }          
            
        })   
        
    }

    // Method to delete the profile
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

    // Method to validate user Input
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
    
        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'password':
            passwordValid = value.length >= 6;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
      }
    
      validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
      }
    
      errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
      }


    render() {

      const handleSelect=(e)=>{
        console.log(e);
        
        this.state.team = e
        console.log("Helloooo: " + this.state.team)
        
        this.ref.current.value = e
      }


        return (
          <div id="iidid">
          <div class="container" style={{width:'70%',height:'900px',opacitiy:'90%'}}>
           <div class="main-body">    
             <div class="row gutters-sm" style={{opacitiy:'80%'}}>
               <div class="col-md-4 mb-3" style={{margin:'0 auto'}}>
                   <br/>
                   {/* User Profile Identification card */}
                 <div class="card">
                   <div class="card-body">
                     <div class="d-flex flex-column align-items-center text-center">                       
                       <div class="mt-3">
                         <h4>{this.state.fName} &nbsp; {this.state.lName}</h4>
                         <p class="text-secondary mb-1">@{this.state.uName}</p>                       
                             {/* Cancel button */}
                           <a href={`/uprofile/${this.state.userid}`}> <button class="btn btn-primary">
                         &nbsp; Cancel 
                           </button></a> 
                           <a href="/" className="btn btn-outline-danger" onClick={() =>this.onDelete(this.state.userid)}>
                            <i className="far fa-trash-alt"></i>&nbsp;Delete                        
                        </a>                     
                       </div>
                     </div>
                   </div>
                 </div>                  
               </div>
               {/* Tag to display Form Errors */}
               <FormErrors formErrors={this.state.formErrors} className="FormError"/>

               {/* Begining of the Form */}
               <form className="needs-validation" style={{paddingBottom:'30px'}} noValidate>

                  {/* Edit First Name */}
                  <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px',color:'#000'}}>First Name</label>
                        <input className="formtxt" type="text"
                            className="form-control"
                            name="fName"
                            placeholder="Enter First Name"
                            value={this.state.fName}
                            onChange={this.handleInputChange} />                    
                    </div>

                    {/* Edit Last Name */}
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px',color:'#000'}}>Last Name</label>
                        <input type="text"
                            className="form-control"
                            name="lName"
                            placeholder="Enter Last Name"
                            value={this.state.lName}
                            onChange={this.handleInputChange} />                    
                    </div>

                    {/* Edit userName */}
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px',color:'#000'}}>User Name</label>
                        <input type="text"
                            className="form-control"
                            name="uName"
                            placeholder="Enter User Name"
                            value={this.state.uName}
                            onChange={this.handleInputChange} />                    
                    </div>

                    {/* Edit Email */}
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px',color:'#000'}}>Email</label>
                        <input type="text"
                            className="form-control"
                            name="email"
                            placeholder="Enter Email"
                            value={this.state.email}
                            onChange={this.handleInputChange} />                    
                    </div>
                    {/* Edit Password */}
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px',color:'#000'}}>Password</label>
                        <input type="text"
                            className="form-control"
                            name="password"
                            placeholder="Enter Password"
                            value={this.state.password}
                            onChange={this.handleInputChange} />                    
                    </div>

                  <div className="mb-2" style={{marginBottom:'15px',width:'70%',marginLeft:'10%'}}>

                  <div className="form-group" style={{marginBottom:'15px',display:'inline',width:'40%'}}>
                  <label style={{marginBottom:'5px',color:'#000',fontSize:'24px'}} id="chamForm">Team</label>
                  <br/>
                  <div style={{float:'left'}}>
                    <input type="text" style={{width:'650px'}}
                      id="chamathRet"
                      className="form-control"
                      name="Attended_Zookeeper"
                      placeholder="Enter The Last Attended Zookeeper:"
                      value={this.state.team}
                      onChange={this.handleInputChange}
                      ref={this.ref}
                      />
                      </div>
                      <div style={{float:'right',paddingLeft:'-90px',marginTop:'10px'}}> 
                      <DropdownButton align="center" title="Teams" id="dropdown-menu-align-end" onSelect={handleSelect}>
                      <div>                    
                    
                        <Dropdown.Item eventKey="Legends">
                          Legends
                        </Dropdown.Item>

                        <Dropdown.Item eventKey="Bashers">
                          Bashers
                        </Dropdown.Item>

                        <Dropdown.Item eventKey="Fighters">
                          Fighters
                        </Dropdown.Item>

                        <Dropdown.Item eventKey="Guardians">
                          Guardians
                        </Dropdown.Item>

                        <Dropdown.Item eventKey="Protectors">
                          Protectors
                        </Dropdown.Item>

                        <Dropdown.Item eventKey="Walkers">
                          Walkers
                        </Dropdown.Item>                   
                    
                      </div>
                    
                    </DropdownButton>
                    </div>
                    

                    
              </div>
              </div><br/><br/><br/>

                    <div style={{width:'70%',margin:'0 auto',marginTop:'30px'}}>
                    {/* Submit Button named Update */}
                    <button className="btn btn-success" type="submit" onClick={this.onSubmit}>   
                        <i className="far fa-check-square"> </i>
                        &nbsp; Update
                    </button>  
                    </div>  
                </form>
                {/* End of Form */}

                
                
             </div>
           </div>
       </div>      
      </div>
        );
    }
}
export default EditProfile;