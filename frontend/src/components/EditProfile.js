/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react';
import axios from 'axios';
import "../CSS/EditProfile.css";
import { FormErrors } from './FormErrors';
import "../CSS/FormError.css";

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


            formErrors: {email: '', password:''},
            emailValid: false,
            passwordValid: false,
            formvalid: false
        }
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

        const {fName,lName,uName,email,password} = this.state;

        const data={
            fName:fName,
            lName:lName,
            uName:uName,
            email:email,
            password:password
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
                        password:""
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
                    password:res.data.profile.password
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
        return (
          <div>
          <div class="container">
           <div class="main-body">    
             <div class="row gutters-sm">
               <div class="col-md-4 mb-3">
                   <br/>
                   {/* User Profile Identification card */}
                 <div class="card">
                   <div class="card-body">
                     <div class="d-flex flex-column align-items-center text-center">                       
                       <div class="mt-3">
                         <h4>{this.state.fName} &nbsp; {this.state.lName}</h4>
                         <p class="text-secondary mb-1">@{this.state.uName}</p>                       
                             {/* Cancel button */}
                           <a href={`/profile/${this.state.userid}`}> <button class="btn btn-primary">
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
               <form className="needs-validation" noValidate>

                  {/* Edit First Name */}
                  <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>First Name</label>
                        <input className="formtxt" type="text"
                            className="form-control"
                            name="fName"
                            placeholder="Enter First Name"
                            value={this.state.fName}
                            onChange={this.handleInputChange} />                    
                    </div>

                    {/* Edit Last Name */}
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Last Name</label>
                        <input type="text"
                            className="form-control"
                            name="lName"
                            placeholder="Enter Last Name"
                            value={this.state.lName}
                            onChange={this.handleInputChange} />                    
                    </div>

                    {/* Edit userName */}
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>User Name</label>
                        <input type="text"
                            className="form-control"
                            name="uName"
                            placeholder="Enter User Name"
                            value={this.state.uName}
                            onChange={this.handleInputChange} />                    
                    </div>

                    {/* Edit Email */}
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Email</label>
                        <input type="text"
                            className="form-control"
                            name="email"
                            placeholder="Enter Email"
                            value={this.state.email}
                            onChange={this.handleInputChange} />                    
                    </div>
                    {/* Edit Password */}
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Password</label>
                        <input type="text"
                            className="form-control"
                            name="password"
                            placeholder="Enter Password"
                            value={this.state.password}
                            onChange={this.handleInputChange} />                    
                    </div>

                    {/* Submit Button named Update */}
                    <button className="btn btn-success" type="submit" onClick={this.onSubmit}>   
                        <i className="far fa-check-square"> </i>
                        &nbsp; Update
                    </button>    
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