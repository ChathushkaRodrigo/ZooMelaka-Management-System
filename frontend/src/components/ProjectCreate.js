import React, { Component } from 'react';
import axios from 'axios';

import '../CSS/Projects.css';
import { FormErrors } from './FormErrors';


//integration
import SplitButton from 'react-bootstrap/SplitButton';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Select from 'react-select'

export default class Create extends Component{

    constructor(props){
        super(props);
        this.state={
            projectID:"",
            name:"",
            title:"",
            description:"",
            supervisor:"",
            workingTeam:"",



            //validation part
            formErrors: {projectID: ''},
            projectIDValid: false,
            formvalid: false,

            value:"",
            posts:[]

        }

        //integration
        this.ref = React.createRef();
        this.retrievePosts()
        this.ref1 = React.createRef();
        this.ref2 = React.createRef();
        this.ref3 = React.createRef();
        this.ref5 = React.createRef();
        this.ref4 = React.createRef();
     
    }

    //integration
    retrievePosts(){
        axios.get("/posts").then(res =>{
            if(res.data.success){
                this.setState({
                    posts:res.data.existingPosts
                });
                console.log(this.state.posts)
            }
        })
    }



    handleInputChange = (e) =>{

        const {name,value} = e.target;
        this.setState({
            ...this.state,
            [name]:value
        },() => { this.validateField(name, value) }
    );
    }

    onSubmit = (e) =>{

        e.preventDefault();
        
        const {projectID,name,title,description,supervisor,workingTeam} = this.state;

        const data = {
            projectID:projectID,
            name:name,
            title:title,
            description:description,
            supervisor:supervisor,
            workingTeam:workingTeam
        }

        console.log(data)
        
        axios.post("http://localhost:8015/project/save",data).then((res) =>{
            if(res.data.success){
                alert("Project created succesfully")
                this.setState(
                   {
                    projectID:"",
                    name:"",
                    title:"",
                    description:"",
                    supervisor:"",
                    workingTeam:""
                   } 
                )
            }
        })

    }


        //validation fileds
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let projectIDValid = this.state.projectIDValid;
    
        switch(fieldName) {
          case 'projectID':
            projectIDValid = value.length <= 5;
            fieldValidationErrors.projectID = projectIDValid ? '' : ' is too long';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        projectIDValid: projectIDValid,
                      }, this.validateForm);
      }
    
      validateForm() {
        this.setState({formValid: this.state.projectIDValid});
      }
    
      errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
      }



    Demo = () => {
        this.ref1.current.value = "Test1"
        this.ref2.current.value = "Test2"
        this.ref3.current.value = "Test3"
        this.ref4.current.value = "Test4"
        this.ref5.current.value = "Test5"
        this.state.projectID = "Test1"
        this.state.name = "Test2"
        this.state.title = "Test3"
        this.state.description = "Test4"
        this.state.workingTeam = "Test5"
    }
    


    render() {
        //integration
        const handleSelect=(e)=>{
            console.log(e);
            
            this.state.value = e
            console.log("Helloooo: " + this.state.supervisor)
            this.state.supervisor = e
            this.ref.current.value = e
            
        }
        return(


            <div className="createback">
            <div>
                <div className="Caption">
                <h1 className="pageCaption">Create New Project</h1>
                </div>
                <div className="createF">

               
                <form className="cform">
                    <h3 style={{marginBottom:'15px', textAlign:'center', fontSize:'32px'}}><b><u>Create New Project Form</u></b></h3>
                    <div className="form-group">
                        <label className="formLabels">Project ID</label>
                        <input type="text" style={{marginTop:'0px'}} className="form-control" name="projectID" placeholder="Enter Project ID" value={this.state.projectID} onChange={this.handleInputChange}/>
                    </div><div id="Error"><FormErrors formErrors={this.state.formErrors} className="FormError"/></div>
                    <div className="form-group">
                        <label className="formLabels">Project Name</label> 
                        <input type="text" style={{marginTop:'0px'}} className="form-control" name="name" placeholder="Enter Project Name" value={this.state.name} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label className="formLabels">Project Title</label>
                        <input type="text" style={{marginTop:'0px'}} className="form-control" name="title" placeholder="Enter Project Title" value={this.state.title} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label className="formLabels">Project Description</label>
                        <textarea  className="form-control" name="description" rows="5" placeholder="Enter Project Description" value={this.state.description} onChange={this.handleInputChange}/>
                    </div>
                    {/* <div className="form-group" style={{paddingTop:'15px'}}> 
                        <label className="formLabels">Supervisor</label>
                        <input type="text" style={{marginTop:'0px'}} className="form-control"  name="supervisor" placeholder="Enter Supervisor" value={this.state.supervisor} onChange={this.handleInputChange}/>
                    </div> */}
                    {/* integraion */}
                    <div className="mb-2">
                <DropdownButton align="center" title="Supervisor" id="dropdown-menu-align-end1" onSelect={handleSelect} >
                <div>
                {this.state.posts.map(posts =>(
                <div>
                {posts.employeeType=="Supervisor" && 

                <Dropdown.Item eventKey={posts.userName}>
                {posts.userName}
                </Dropdown.Item>
                }</div>
                ))}</div>
                
                </DropdownButton>
                <label style={{marginBottom:'5px'}} id="chamForm">Supervisor</label>
                <input type="text"
                id="vinodRet"
                className="form-control"
                name="Supervisor"
                placeholder="Enter supervisor"
                
                value={this.state.supervisor}
                onChange={this.handleInputChange}
                ref={this.ref}
                />
            </div>
                    <div className="form-group">
                        <label className="formLabels">Working Team</label>
                        <input type="text" style={{marginTop:'0px'}} className="form-control"  name="workingTeam" placeholder="Enter Working Team" value={this.state.workingTeam} onChange={this.handleInputChange}/>
                    </div>
                    
                        <button className="btn btn-danger" id="btnreset" type="reset" style={{marginTop:'30px', marginLeft:'10%'}}>
                        <i class="fa fa-refresh" aria-hidden="true"></i>
                            &nbsp; Reset
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="btn btn-success" id="btnsubmit" type="submit" onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp; Submit
                        </button>
                        <button className="btn btn-success" style={{marginTop:'15px'}} onClick={this.Demo} type="button">
                        <i className="far fa-check-square"></i>
                        &nbsp; Demo
                    </button>
                   
                </form>
               </div>

            {/* <div>

                <div style={{height:'70px',textAlign:'center',backgroundColor:'#009900'}}>
                <h3 className="pageCaption" style={{marginTop:'10px',color:'#FFFFFF',padding:'19px 0'}}>Create New Project</h3>
            </div> */}
                {/* <form>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Project ID</label>
                        <input type="text" ref={this.ref1} className="form-control" name="projectID" placeholder="Enter Project ID" value={this.state.projectID} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Project Name</label>
                        <input type="text" ref={this.ref2} className="form-control" name="name" placeholder="Enter Project Name" value={this.state.name} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Project Title</label>
                        <input type="text" ref={this.ref3} className="form-control" name="title" placeholder="Enter Project Title" value={this.state.title} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Project Description</label>
                        <input type="text" ref={this.ref4} className="form-control" name="description" placeholder="Enter Project Description" value={this.state.description} onChange={this.handleInputChange}/>
                    </div>
                    {/* <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Supervisor</label>
                        <input type="text" className="form-control" name="supervisor" placeholder="Enter Supervisor" value={this.state.supervisor} onChange={this.handleInputChange}/>
                    </div> */}

                {/* integraion */}
                    {/* <div className="mb-2">
                <DropdownButton align="center" title="Supervisor" id="dropdown-menu-align-end1" onSelect={handleSelect} >
                <div>
                {this.state.posts.map(posts =>(
                <div>
                {posts.employeeType=="Supervisor" && 

                <Dropdown.Item eventKey={posts.userName}>
                {posts.userName}
                </Dropdown.Item>
                }</div>
                ))}</div>
                
                </DropdownButton>
                <label style={{marginBottom:'5px'}} id="chamForm">Attended Zookeeper</label>
                <input type="text"
                id="vinodRet"
                className="form-control"
                name="Supervisor"
                placeholder="Enter supervisor"
                
                value={this.state.supervisor}
                onChange={this.handleInputChange}
                ref={this.ref}
                />
            </div>
          
            <div>
            
    
    </div>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Working Team</label>
                        <input type="text" ref={this.ref5} className="form-control" name="workingTeam" placeholder="Enter Working Team" value={this.state.workingTeam} onChange={this.handleInputChange}/>
                    </div>
                    <button className="btn btn-danger" type="reset" style={{marginTop:'15px'}}>
                        <i className="far fa-trash-alt"></i>
                        &nbsp; Reset
                    </button>
                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Submit
                    </button>
                    <button className="btn btn-success" style={{marginTop:'15px'}} onClick={this.Demo} type="button">
                        <i className="far fa-check-square"></i>
                        &nbsp; Demo
                    </button>
                </form>  */}
                {/* <br/><br/><br/><br/><br/><br/><br/>

            </div>
          </div>
        </div> */}
        </div>
        </div>
        )
    }  
}