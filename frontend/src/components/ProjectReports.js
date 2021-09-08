import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

export default class Reports extends Component{
    constructor(props){
        super(props);

        this.state={
            post:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:7070/post/${id}`).then((res) =>{
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
            <div>
                <NavBar/>
                <h4 style={{textAlign:'center',marginTop:'30px'}}>
                    <u><b>Project&nbsp;</b></u>
                    <u><b>{name}</b></u>
                    <u><b>&nbsp;Report</b></u>
                </h4>
            
                <p></p>
             <div style={{paddingTop:'50px',paddingLeft:'100px',paddingRight:'100px'}}>
                <d1 className="row" style={{textAlign:'left'}}>
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
                </d1>
             </div>

            </div>                   
            
        )
    }  
}