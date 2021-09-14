/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import axios from 'axios';
import "../CSS/Createmedical.css"
import { FormErrors } from './FormErrors';

export default class CreateMedical extends Component {
    constructor(props) {
        super(props);

        this.state = {
                vname:"",
                zname:"",
                animalID:"",
                injID:"",
                sinfo:"",


                formErrors: {animalID: '', injID:''},
                animalIDValid: false,
                injIDValid: false,
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

    onsubmit =(e)=>{
        e.preventDefault();
   
        const { vname,zname,animalID,injID,sinfo,} =this.state; 
        const data ={
            vname:vname,
            zname:zname,
            animalID:animalID,
            injID:injID,
            sinfo:"nuduja"
        }
        console.log(data);

        axios.post("http://localhost:8015/medical/add", data).then((res)=>{
            if(res.data.success){
                alert(`New medical Record created `)
               
                this.setState(
                {
                    vname:"",
                    zname:"",
                    animalID:"",
                    injID:"",
                    sinfo:""

                });
            }
        });

        
    }

 
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let animalIDValid = this.state.animalIDValid;
        let injIDValid = this.state.injIDValid;
    
        switch(fieldName) {
          case 'animalID':
            animalIDValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.animalID = animalIDValid ? '' : ' is invalid';
            break;
          case 'injID':
            injIDValid = value.length >= 6;
            fieldValidationErrors.injID = injIDValid ? '': ' is too short';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        animalIDValid: animalIDValid,
                        injIDValid: injIDValid
                      }, this.validateForm);
      }
    
      validateForm() {
        this.setState({formValid: this.state.animalIDValid && this.state.injIDValid});
      }
    
      errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
      }

    render() {
        return (
           
            <div classsName="col-md-8-mt-4-mx-auto">
            <br/>
                <h1 className="titlepage">Create Medical Record</h1>
                
                <div className= "imagemed"> </div>
        
                <form className=" needs-validation " noValidate>
                <FormErrors formErrors={this.state.formErrors} className="FormError"/>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Vetenarian Name</label>
                        <input type="text"
                        className="form-control"
                        name="vname"
                        placeholder="Enter the vetenarian name"
                        value={this.state.vname}
                        onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Zoo Keeper Name</label>
                        <input type="text"
                        className="form-control"
                        name="zname"
                        placeholder="Enter the Zoo Keeper Name"
                        value={this.state.zname}
                        onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Animal ID</label>
                        <input type="text"
                        className="form-control"
                        name="animalID"
                        placeholder="Enter the animalID"
                        value={this.state.animalID}
                        onChange={this.handleInputChange}/>
                        </div>
                            

                            
                            <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style ={{marginBottom:'5px'}}>Injection ID</label>
                            <input type="text"
                            className="form-control"
                            name="injID"
                            placeholder="Enter the Injection ID"
                            value={this.state.injID}
                            onChange={this.handleInputChange}/>
                            </div>

                             
                            <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style ={{marginBottom:'5px'}}>Surjery Info </label>
                            <input type="text"
                            className="form-control"
                            name="sinfo "
                            placeholder="Enter the Surgery Info "
                            defualtValue={this.state.sinfo }
                            onChange={this.handleInputChange}/>
                            </div>
                        <br/><br/>
                    <button className="btn btn-success" type="submit" style={{marginBottom:'15px'}} onClick={this.onsubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Submit Medical Report
                    </button>

                    
                    
                   
                    </form>
                <br/>

    
                <button className ="btn btn-success"><a href="/medicalDashboard" style={{textDecoration:'none' ,color:'white' }}>  Dashboard </a></button>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
     

                </div>

           
        )
    }
}