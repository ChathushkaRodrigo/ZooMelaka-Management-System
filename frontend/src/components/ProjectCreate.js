import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';


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
            value:"",
            posts:[]
        }
        this.ref = React.createRef();
        this.retrievePosts()
    }


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
        })
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
    
      

    render() {
        
        const handleSelect=(e)=>{
            console.log(e);
            
            this.state.value = e
            console.log("Helloooo: " + this.state.supervisor)
            this.state.supervisor = e
            this.ref.current.value = e
            
        }
        return(
            <div><NavBar/>
                <div style={{height:'70px',textAlign:'center',backgroundColor:'#009900'}}>
                <h3 className="pageCaption" style={{marginTop:'10px',color:'#FFFFFF',padding:'19px 0'}}>Create New Project</h3>
            </div>
                <form>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Project ID</label>
                        <input type="text" className="form-control" name="projectID" placeholder="Enter Project ID" value={this.state.projectID} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Project Name</label>
                        <input type="text" className="form-control" name="name" placeholder="Enter Project Name" value={this.state.name} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Project Title</label>
                        <input type="text" className="form-control" name="title" placeholder="Enter Project Title" value={this.state.title} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Project Description</label>
                        <input type="text" className="form-control" name="description" placeholder="Enter Project Description" value={this.state.description} onChange={this.handleInputChange}/>
                    </div>
                    {/* <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Supervisor</label>
                        <input type="text" className="form-control" name="supervisor" placeholder="Enter Supervisor" value={this.state.supervisor} onChange={this.handleInputChange}/>
                    </div> */}
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
                        <input type="text" className="form-control" name="workingTeam" placeholder="Enter Working Team" value={this.state.workingTeam} onChange={this.handleInputChange}/>
                    </div>
                    <button className="btn btn-danger" type="reset" style={{marginTop:'15px'}}>
                        <i className="far fa-trash-alt"></i>
                        &nbsp; Reset
                    </button>
                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Submit
                    </button>
                </form>
                <br/><br/><br/><br/><br/><br/><br/>
            </div>
        )
    }  
}