import React, { Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf'
import 'jspdf-autotable'


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

    // Generate Medical report 
    jspdGenerator=()=>{

        
        //doc obj
        var doc =new jsPDF('p','pt');

        doc.autoTable({ html: '#my-table' })
        //add texts

        doc.text(200,20,'Project Report')
    
        doc.autoTable({
           
           tableWidth:'auto',
           margin: { top: 10 },
            columnStyles: { europe: { halign: 'center' } },
            theme:'grid',
            head: [['Project ID', 'Project Name', 'Title','Description','Supervisor','Working Team']],
            body: [
               
              [this.state.post.projectID,this.state.post.name,this.state.post.title,this.state.post.description,this.state.post.supervisor,this.state.post.workingTeam], 
            ],
           
            styles: {  fontSize:10 },
         
            
          })
          
     

     
        //Save pdf 
        doc.save("Project Report.pdf");


    }


    render() {

        const {projectID,name,title,description,supervisor,workingTeam} = this.state.post;

        return(
            <div>
              
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
             <br/>

<button className="btn btn-success" onClick={this.jspdGenerator}>Generate Report</button>

            </div>                   
            
        )
    }  
}