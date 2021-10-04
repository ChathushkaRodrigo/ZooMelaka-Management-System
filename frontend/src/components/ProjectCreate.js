/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-unused-vars */
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
        // this.validateform = this.validateform.bind(this);
        this.state={
            projectID:"",
            name:"",
            title:"",
            description:"",
            supervisor:"",
            workingTeam:"",
            Legends:"",
            Bashers:"",
            Fighters:"",
            Guardians:"",
            Protectors:"",
            Walkers:"",


            //validation part
            formErrors: {name: ''},
            projectIDValid: false,
            formvalid: false,

            value:"",
            posts:[],
            profiles:[]

        }
        this.retrievePosts();
        //integration
        this.ref = React.createRef();

        this.ref1 = React.createRef();
        this.ref2 = React.createRef();
        this.ref3 = React.createRef();
        this.ref5 = React.createRef();
        this.ref4 = React.createRef();
     

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
            console.log(this.state.profiles)     
          };
        });
        
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
          case 'name':
            projectIDValid = value.length > 1;
            fieldValidationErrors.name = projectIDValid ? '' : ' is too short';
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


      //null validation

    //   validateform(e){
    //     if(this.state.name === '' || this.state.title === '' || this.state.description === ''){
    //         alert("All the inputs must be filled!");
    //     }
    //     else{
    //         this.onSubmit(e);
    //     }
    // }


    Demo = () => {
        // this.ref1.current.value = ""
        this.ref2.current.value = "Food Bank 2021"
        this.ref3.current.value = "Food Bank Event held on 2021"
        this.ref4.current.value = "This event will held on 2021"
        this.ref5.current.value = "G012"
        // this.state.projectID = "Test1"
        this.state.name = "Food Bank 2021"
        this.state.title = "Food Bank Event held on 2021"
        this.state.description = "This event will held on 2021"
        this.state.workingTeam = "G012"
    }



    render() {
        let data1 = parseInt(localStorage.getItem('boo'));
        data1++;
        console.log(String(data1))
        this.state.projectID = String(data1)
        //integration
        const handleSelect1=(e)=>{
            console.log(e);
         
            console.log("bye: " + this.state.supervisor)
            this.state.workingTeam = e
            this.ref5.current.value = e
            
        }
        const handleSelect=(e)=>{
            console.log(e);
    
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
                        <input type="text" style={{marginTop:'0px'}} className="form-control" name="projectID" value={this.state.projectID} onChange={this.handleInputChange}/>
                    
                    <div className="form-group">
                    </div>
                    <div id="Error"><label className="formLabels">Project Name</label> <FormErrors formErrors={this.state.formErrors} className="FormError" style={{marginLeft:'80%'}}/></div>
                        <input type="text" style={{marginTop:'0px'}} ref={this.ref2} className="form-control" name="name" value={this.state.name} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                    <label className="formLabels">Project Title</label>
                        <input type="text" style={{marginTop:'0px'}} ref={this.ref3} className="form-control" name="title" value={this.state.title} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label className="formLabels">Project Description</label>
                        <textarea  className="form-control" ref={this.ref4} name="description" rows="5" value={this.state.description} onChange={this.handleInputChange}/>
                    </div>
                    {/* <div className="form-group" style={{paddingTop:'15px'}}> 
                        <label className="formLabels">Supervisor</label>
                        <input type="text" style={{marginTop:'0px'}} className="form-control"  name="supervisor" placeholder="Enter Supervisor" value={this.state.supervisor} onChange={this.handleInputChange}/>
                    </div> */}
                    {/* integraion */}
                    <div className="form-group">
                <label style={{marginBottom:'5px',marginTop:'20px'}} id="chamForm">Supervisor</label>
                <div>
                <input type="text" style={{width:'530px'}}
                id="vinodRet"
                className="form-control"
                name="Supervisor"
                placeholder="Enter supervisor"
                
                value={this.state.supervisor}
                onChange={this.handleInputChange}
                ref={this.ref}
                />
                <DropdownButton align="center" title="Supervisor" id="dropdown-menu-align-end1" onSelect={handleSelect} style={{marginTop:'-51px'}}>
                <div>
                {this.state.posts.map(posts =>(
                <div>
                {posts.employeeType == "Supervisor" && 

                <Dropdown.Item eventKey={posts.userName}> 
                {posts.userName}
                </Dropdown.Item>
                }</div>
                ))}</div>
                
                </DropdownButton>
                </div>

                {/* //working team */}
                <div className="form-group">
                <label style={{marginBottom:'5px',marginTop:'20px',marginLeft:'-200px'}} id="chamForm">Teams</label>
                <div>
                <input type="text" style={{width:'530px'}}
                id="vinodRet"
                className="form-control"
                name="Supervisor"
                placeholder="Enter supervisor"
                
                value={this.state.supervisor}
                onChange={this.handleInputChange}
                ref={this.ref5}
                />
                <DropdownButton align="center" title="Teams" id="dropdown-menu-align-end1" onSelect={handleSelect1} style={{marginTop:'-51px'}}>
                <div>
                    {localStorage.setItem("Legends", 0)}
                    {localStorage.setItem("Bashers", 0)}
                    {localStorage.setItem("Fighters", 0)}
                    {localStorage.setItem("Gurdians", 0)}
                    {localStorage.setItem("Protectors", 0)}
                    {localStorage.setItem("Walkers", 0)}
                    {console.log(localStorage.getItem('Legends'))}

                {this.state.profiles.map(profiles =>(
                <div>
                
                <div>
                    
                {profiles.team==="Legends" && 
              
               
         
          
                localStorage.setItem("Legends", parseInt(localStorage.getItem('Legends'))+1)
         
                }



                {profiles.team==="Bashers" && 
                
            
        
                localStorage.setItem("Bashers", parseInt(localStorage.getItem('Bashers'))+1)
      
           
                }
                
                {profiles.team==="Fighters" && 
                
        
                localStorage.setItem("Fighters", parseInt(localStorage.getItem('Fighters'))+1)
             
             
                }

                {profiles.team==="Gurdians" && 
     
                    localStorage.setItem("Gurdians", parseInt(localStorage.getItem('Gurdians'))+1)
       
             
        
                }

                {profiles.team==="Protectors" && 
                
               
                    localStorage.setItem("Protectors", parseInt(localStorage.getItem('Protectors'))+1)
                
                }
                {profiles.team==="Walkers" && 
                
              
                    localStorage.setItem("Walkers", parseInt(localStorage.getItem('Walkers'))+1)
              
                }</div>

                </div>
                ))}</div>
<Dropdown.Item eventKey="Walkers">
                <div>Walkers: {localStorage.getItem('Walkers')}</div>
                </Dropdown.Item>
                <Dropdown.Item eventKey="Protectors">
                <div>Protectors: {localStorage.getItem('Protectors')}</div>
                </Dropdown.Item>
                <Dropdown.Item eventKey="Gurdians">
                <div>Gurdians: {localStorage.getItem('Gurdians')}</div>
                </Dropdown.Item>
                <Dropdown.Item eventKey="Fighters">
                <div>Fighters: {localStorage.getItem('Fighters')}</div>
                </Dropdown.Item>
                <Dropdown.Item eventKey="Bashers">
                <div>Bashers: {localStorage.getItem('Bashers')}</div>
                </Dropdown.Item>
                <Dropdown.Item eventKey="Legends">
                <div>Legends: {localStorage.getItem('Legends')}</div>
                </Dropdown.Item>
                </DropdownButton>
                </div>
                
                
            </div>
                    {/* <div className="form-group">
                        <label className="formLabels">Working Team</label>
                        <input type="text" ref={this.ref5} style={{marginTop:'0px'}} className="form-control"  name="workingTeam" placeholder="Enter Working Team" value={this.state.workingTeam} onChange={this.handleInputChange}/>
                    </div> */}
                    
                    <div style={{width:'80%',margin:'0 auto'}}>
                        <div >
                        <a href="/ProjectsHome">
                        <button className="btn btn-success" style={{marginTop:'0', marginLeft:'0%'}}>
                        <a href="/ProjectsHome"><i class="fas fa-arrow-alt-circle-left" aria-hidden="true"></i>Projects Home</a>
                        </button> 
                        </a>
                        </div>
                        {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                        <div style={{paddingTop:'-10px',marginTop:'0%', marginLeft:'42%'}}> 
                        <button className="btn btn-success" id="btnsubmit" type="submit" onClick={this.onSubmit} style={{marginTop:'-13%'}}>
                            <i className="far fa-check-square"></i>
                            &nbsp; Submit
                        </button>
                        </div>
                        <div style={{marginTop:'0%', marginLeft:'89%'}}>
                        <button className="btn btn-success" style={{marginTop:'-120%'}} onClick={this.Demo} type="button">
                        <i className="far fa-check-square"></i>
                        &nbsp; Demo
                        </button>
                        </div>
                    </div>
                   </div>
                </form>
               </div>

            {/* <div>

                <div style={{height:'70px',textAlign:'center',backgroundColor:'#009900'}}></div>
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