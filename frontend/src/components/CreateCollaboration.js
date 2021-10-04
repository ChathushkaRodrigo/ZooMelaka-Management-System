/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import axios from'axios'
import "../CSS/CreateCollaboration.css"
import { FormErrors } from './FormErrors';

class CreateCollaboration extends Component {
        constructor(props){
            super(props);
            this.state={
                research_feild:"",
                research_topic:"",
                name:"",
                email:"",
                contact_no:"",
                zoological_institution:"",
            formErrors: {email: '', contact_no:''},
            emailValid: false,
            contact_noValid: false,
            formvalid: false

            }
        }
        handleInputChange = (e)=>{
            const {name,value} = e.target;
            this.setState({
                ...this.state,
                [name]:value
            },() => { this.validateField(name, value) }
        );
        }
        onSubmit=(e)=>{
            e.preventDefault();
            const {research_feild,
                research_topic,
                name,
                email,
                contact_no,
                zoological_institution
        }=this.state;


            const data={research_feild:research_feild,
                research_topic:research_topic,
                name:name,
                email:email,
                contact_no:contact_no,
                zoological_institution:zoological_institution
               }
        
        console.log(data);
        axios.post("http://localhost:8015/collaboration/add",data).then((res)=>{
            if(res.data.success){
                alert(`New Collaboration Request created successfully   `);
                this.setState(
                    {
                research_feild:"",
                research_topic:"",
                name:"",
                email:"",
                contact_no:"",
                zoological_institution:""
                    }

                )
            }
        })
    }
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let contact_noValid = this.state.contact_noValid;
    
        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'contact_no':
            contact_noValid = value.length >= 10;
            fieldValidationErrors.contact_no =contact_noValid ? '': ' is too short';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        contact_noValid: contact_noValid
                      }, this.validateForm);
      }
    
      validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.contact_noValid});
      }
    
      errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
      }



    render() {
        return (
            <div className="topic">
            <div classsName="col-md-8-mt-4-mx-auto">
                <h1 className="h3-mb-3 font-weight-normal" style={{color:'white',fontSize:'40px'}}>Create new Collaboration</h1>
                <div style={{backgroundColor:'white',width:'80%',marginLeft:''}}>
                <form className="formbody needs-validation" noValidate>
                <FormErrors formErrors={this.state.formErrors} className="FormError"/>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px',color:"black",marginTop:'20px'}}>research_feild</label>
                        <input type="text" required
                        
                        className="form-control"
                        name="research_feild"
                        placeholder="Enter the research_feild"
                        value={this.state.research_feild}
                        onChange={this.handleInputChange}/>
                        </div>
                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style ={{marginBottom:'5px',color:"black"}}>research_topic</label>
                            <input type="text"
                            className="form-control"
                            name="research_topic"
                            placeholder="Enter the research_topic"
                            value={this.state.research_topic}
                            onChange={this.handleInputChange}/>
                            </div>


                            <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style ={{marginBottom:'5px',color:"black"}}>name</label>
                            <input type="text"
                            className="form-control"
                            name="name"
                            placeholder="Enter the name"
                            defualtValue={this.state.name}
                            onChange={this.handleInputChange}/>
                            </div>





                            <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style ={{marginBottom:'5px',color:"black"}}>email</label>
                            <input type="text"
                            className="form-control"
                            name="email"
                            placeholder="Enter the email"
                            value={this.state.email}
                            onChange={this.handleInputChange}/>
                            </div>
                            
                            <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style ={{marginBottom:'5px',color:"black"}}>contact_no</label>
                            <input type="number"
                            className="form-control"
                            name="contact_no"
                            placeholder="Enter the contact_no"
                            value={this.state.contact_no}
                            onChange={this.handleInputChange}/>
                            </div>

                            
                            <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style ={{marginBottom:'5px',color:"black"}}>zoological_institution</label>
                            <input type="text"
                            className="form-control"
                            name="zoological_institution"
                            placeholder="Enter the zoological_institution"
                            value={this.state.zoological_institution}
                            onChange={this.handleInputChange}/>
                            </div>

                             
                          

                        <div>
                            <button className="btn btn-success"type ="submit" style={{marginLeft:"50px",marginTop:'15px'}} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp;Save
                            </button>

                            <button className="btn btn-success" style={{marginLeft:"700px", marginTop:"-60px",width:"150px",marginBottom:'00px'}} >
                            <a href="/research/customerDash" style={{ textDecoration: "none", color: "white" }}>
                            Dashboard
                            </a>
                            </button>
                        </div>

          
            
            </form>
            </div>

            
        </div>
        </div>
        )
}}

export default CreateCollaboration;