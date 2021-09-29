import React, { Component } from 'react';
import axios from 'axios';
import '../CSS/Projects.css';

export default class Create extends Component{

    constructor(props){
        super(props);
        this.state={
            projectID:"",
            name:"",
            title:"",
            description:"",
            supervisor:"",
            workingTeam:""
        }
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
        return(
            <div className="createback">
            <div>
                <div className="Caption">
                <h1 className="pageCaption">Create New Project</h1>
                </div>
                <div className="createF">
                <form className="cform">
                    <h3 style={{marginBottom:'15px', textAlign:'center'}}><b><u>Create New Project Form</u></b></h3>
                    <div className="form-group">
                        <label className="formLabels">Project ID</label>
                        <input type="text" style={{marginTop:'0px'}} required className="form-control" name="projectID" placeholder="Enter Project ID" value={this.state.projectID} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label className="formLabels">Project Name</label>
                        <input type="text" style={{marginTop:'0px'}} required className="form-control" name="name" placeholder="Enter Project Name" value={this.state.name} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label className="formLabels">Project Title</label>
                        <input type="text" style={{marginTop:'0px'}} className="form-control" name="title" placeholder="Enter Project Title" value={this.state.title} onChange={this.handleInputChange} required/>
                    </div>
                    <div className="form-group">
                        <label className="formLabels">Project Description</label>
                        <textarea required className="form-control" name="description" rows="5" placeholder="Enter Project Description" value={this.state.description} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group" style={{paddingTop:'15px'}}> 
                        <label className="formLabels">Supervisor</label>
                        <input type="text" style={{marginTop:'0px'}} className="form-control" required name="supervisor" placeholder="Enter Supervisor" value={this.state.supervisor} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label className="formLabels">Working Team</label>
                        <input type="text" style={{marginTop:'0px'}} className="form-control" required name="workingTeam" placeholder="Enter Working Team" value={this.state.workingTeam} onChange={this.handleInputChange}/>
                    </div>
                    <div className="Cbtn">
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
                        <button className="btn btn-success" id="btnsubmit" type="submit" style={{marginTop:'30px'}} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp; Submit
                        </button>
                    </div>
                </form>
               </div>
            </div>
        </div>
        )
    }  
}