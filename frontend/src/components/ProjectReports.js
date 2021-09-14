import React, { Component } from 'react';
import axios from 'axios';
import '../CSS/Projects.css';

export default class Reports extends Component{
    constructor(props){
        super(props);

        this.state={
            post:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8015/project/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });
                console.log(this.state.post);
            }
        });

    }

    render() {

        const {projectID,name,title,description,supervisor,workingTeam} = this.state.post;

        return(
            <div className="reportback">
                <div className="Caption">
                <h1 className="pageCaption">Project Report</h1>
                </div>
                <div className="report">
                
                
                <h4 className="reportheader">
                    Project&nbsp;
                    {name}
                    &nbsp;Report
                </h4>
            
                <p></p>
             <div className="content1">
                 <table className="treport" style={{borderStyle:'none'}}>
                     <tr>
                        <th className="col-sm-3">Project ID:</th>
                        <td className="col-sm-9">{projectID}</td>
                    </tr>

                    <tr>
                        <th className="col-sm-3">Project Name:</th>
                        <td className="col-sm-9">{name}</td>
                    </tr>
                        

                    <tr>
                        <th className="col-sm-3">Title:</th>
                        <td className="col-sm-9">{title}</td>
                    </tr>
                        

                    <tr>
                        <th className="col-sm-3">Project Description:</th>
                        <td className="col-sm-9">{description}</td>
                    </tr>
                        

                    <tr>
                        <th className="col-sm-3">Supervisor:</th>
                        <td className="col-sm-9">{supervisor}</td>
                    </tr>
                        

                    <tr>
                        <th className="col-sm-3">Working Team:</th>
                        <td className="col-sm-9">{workingTeam}</td>
                    </tr>
                        
                </table>
             </div>
             
             <button className="btn btn-dark" style={{marginLeft:'30px'}} Hover={{TransitionEvent:'scale(1.08s)'}} id="print" onClick={() => window.print()}>Print report</button>
             
             </div>

            </div>                   
            
        )
    }  
}