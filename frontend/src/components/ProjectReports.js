import React, { Component } from 'react';
import axios from 'axios';


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
                
                <center>
                <h4 className="reportheader">
                    Project&nbsp;
                    {name}
                    &nbsp;Report

                </h4>
            
                <p></p>
             <div className="content">
                {/* <d1 className="row" style={{textAlign:'left'}}>
                    <dt className="col-sm-3">Project ID:</dt>
                    <dd className="col-sm-9">{projectID}</dd>
                    <dt className="col-sm-3">Project Name:</dt>
                    <dd className="col-sm-9">{name}</dd>
                    <dt className="col-sm-3">Title:</dt>
                    <dd className="col-sm-9">{title}</dd>
                    <dt className="col-sm-3">Projects Description:</dt>
                    <dd className="col-sm-9">{description}</dd>
                    <dt className="col-sm-3">Supervisor:</dt>
                    <dd className="col-sm-9">{supervisor}</dd>
                    <dt className="col-sm-3">Working Team:</dt>
                    <dd className="col-sm-9">{workingTeam}</dd>
                </d1> */}
                <table>
                    <tr>
                        <th>Project ID:</th>
                        <td>{projectID}</td>
                    </tr>
                    <tr>
                        <th>Project Name:</th>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <th>Title:</th>
                        <td>{title}</td>
                    </tr>
                    <tr>
                        <th>Projects Description:</th>
                        <td>{description}</td>
                    </tr>
                    <tr>
                        <th>Supervisor:</th>
                        <td>{supervisor}</td>
                    </tr>
                    <tr>
                        <th>Working Team:</th>
                        <td>{workingTeam}</td>
                    </tr>
                </table>
                <button className="print" onClick="window.print()">Print report</button>
             </div></center>
             </div>

            </div>                   
            
        )
    }  
}