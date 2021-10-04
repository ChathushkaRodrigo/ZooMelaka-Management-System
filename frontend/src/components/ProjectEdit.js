import React, { Component } from 'react';
import axios from 'axios';


export default class Edit extends Component{

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
        const id = this.props.match.params.id;
        
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
        
        axios.put(`http://localhost:8015/project/update/${id}`,data).then((res) =>{
            if(res.data.success){
                alert("Project updated successfully")
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

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8015/project/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    projectID:res.data.post.projectID,
                    name:res.data.post.name,
                    title:res.data.post.title,
                    description:res.data.post.description,
                    supervisor:res.data.post.supervisor,
                    workingTeam:res.data.post.workingTeam,
                });
                console.log(this.state.data);
            }
        });

    }


    render() {
        return(
            <div className="editback">
            <div>
                <div className="Caption">
                <h1 className="pageCaption">Edit Project - {this.state.name}</h1>
                </div>
             <div className="createF" style={{background:'rgba(255,255,255,0.7)'}}>
                <form className="cform">
                    <h3 style={{marginBottom:'15px', textAlign:'center',fontSize:'30px',marginBottom:'20px'}}><b><u>Edit Project Form</u></b></h3>
                    <div className="form-group">
                        <label className="formLabels" style={{color:'black'}}>Project Name</label>
                        <input type="text" style={{marginTop:'0px'}} className="form-control" name="name" placeholder="Enter Project Name" value={this.state.name} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label className="formLabels" style={{color:'black'}}>Project Title</label>
                        <input type="text" style={{marginTop:'0px'}} className="form-control" name="title" placeholder="Enter Project Title" value={this.state.title} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label className="formLabels" style={{color:'black'}}>Project Description</label>
                        <textarea className="form-control" name="description" rows="5" placeholder="Enter Project Description" value={this.state.description} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group" style={{paddingTop:'15px'}}> 
                        <label className="formLabels"  style={{color:'black'}}>Supervisor</label>
                        <input type="text" style={{marginTop:'0px'}} className="form-control" name="supervisor" placeholder="Enter Supervisor" value={this.state.supervisor} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label className="formLabels" style={{color:'black'}}>Working Team</label>
                        <input type="text" style={{marginTop:'0px'}} className="form-control" name="workingTeam" placeholder="Enter Working Team" value={this.state.workingTeam} onChange={this.handleInputChange}/>
                    </div>
                    
                    <button className="btn btn-success" id="eupdate" type="submit" onClick={this.onSubmit} style={{marginBottom:'30px'}}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Update
                    </button>
                    <button className="btn btn-success" style={{marginLeft:'730px',marginTop:'10px'}}>
                        <a href="/project/find" style={{ textDecoration: "none", color: "white" }}>
                        Back
                        </a>
                    </button>
                </form>
                </div>
              </div>
                
            </div>
        )
    }    
}