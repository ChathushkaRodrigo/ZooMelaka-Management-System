import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

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
        
        axios.put(`http://localhost:7070/post/update/${id}`,data).then((res) =>{
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

        axios.get(`http://localhost:7070/post/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    projectID:res.data.post.projectID,
                    name:res.data.post.name,
                    title:res.data.post.title,
                    description:res.data.post.description,
                    supervisor:res.data.post.supervisor,
                    workingTeam:res.data.post.workingTeam,
                });
                console.log(this.state.post);
            }
        });

    }


    render() {
        return(
            <div><NavBar/>
                <div style={{height:'70px',textAlign:'center',backgroundColor:'#009900'}}>
                <h3 className="pageCaption" style={{marginTop:'10px',color:'#FFFFFF',padding:'19px 0'}}>Edit Project</h3>
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
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Supervisor</label>
                        <input type="text" className="form-control" name="supervisor" placeholder="Enter Supervisor" value={this.state.supervisor} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Working Team</label>
                        <input type="text" className="form-control" name="workingTeam" placeholder="Enter Working Team" value={this.state.workingTeam} onChange={this.handleInputChange}/>
                    </div>
                    
                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Update
                    </button>
                </form>
                
            </div>
        )
    }  
}