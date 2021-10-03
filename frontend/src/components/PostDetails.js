import React, { Component } from 'react'
import axios from 'axios'
import jsPDF from 'jspdf'
import 'jspdf-autotable'


export default class PostDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            post:{}
        };
    }

    componentDidMount(){
        const id =  this.props.match.params.id;

        axios.get(`/post/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                })
                console.log(this.state.post)
            }
        })
    }
        // Generate Employee  
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
                head: [['Firstname', 'Lastname', 'EID','Email','Address','Designation','D.O.B','Salary']],
                body: [
                   
                  [this.state.post.firstName,this.state.post.lastName,this.state.post.eID,this.state.post.email,this.state.post.address,this.state.post.employeeType,this.state.post.DOB,this.state.post.salary], 
                ],
               
                styles: {  fontSize:10 },
             
                
              })
              
         
    
         
            //Save pdf 
            doc.save("Employee Report.pdf");
    
    
        }
    
    render() {

        const {eID,userName,firstName,lastName,email,address,employeeType,DOB,salary} = this.state.post;

        return (
            <div style={{marginTop:'20px',backgroundColor:"#00002b"}} >
                 
                <h1 style={{color:'white'}}>Hello, {userName}</h1>
                <hr/>
                <table style={{color:'white'}} id="employees"> 
                <tr>
                    <td style={{border:"0px"}} className="col-sm-3">FirstName</td>
                    <td style={{border:"0px"}} className="col-sm-9">{firstName}</td>
                </tr>
                <tr>
                    <td style={{border:"0px"}} className="col-sm-3">LastName</td>
                    <td style={{border:"0px"}} className="col-sm-9">{lastName}</td>
                </tr>
                <tr>
                    <td style={{border:"0px"}} className="col-sm-3">EID</td>
                    <td style={{border:"0px"}} className="col-sm-9">{eID}</td>
                </tr>
                <tr>
                    <td style={{border:"0px"}} className="col-sm-3">Email</td>
                    <td style={{border:"0px"}} className="col-sm-9">{email}</td>
                </tr>
                <tr>
                    <td style={{border:"0px"}} className="col-sm-3">Address</td>
                    <td style={{border:"0px"}} className="col-sm-9">{address}</td>
                </tr>
                <tr>
                    <td style={{border:"0px"}} className="col-sm-3">Designation</td>
                    <td style={{border:"0px"}} className="col-sm-9">{employeeType}</td>
                </tr>
                <tr>
                    <td style={{border:"0px"}} className="col-sm-3">D.O.B</td>
                    <td style={{border:"0px"}} className="col-sm-9">{DOB}</td>
                </tr>
                <tr>
                    <td style={{border:"0px"}} className="col-sm-3">Salary</td>
                    <td style={{border:"0px"}} className="col-sm-9">{salary}</td>
                </tr>
                </table>

                <br/><br/>
                <button className="btn btn-success" onClick={this.jspdGenerator}>Generate Report</button>
                
                <br/><br/>
                <div>
        <button className="btn btn-success" onClick={this.jspdGenerator}>Generate Report</button>
        <br/><br/>
        <button className="btn btn-success" >
        <a href="/adminpanelhome" style={{ textDecoration: "none", color: "white" }}>
           Admin Home
          </a>
          

         </button>

        
        </div>
                
                <br/><br/><br/><br/><br/>
            </div>
        )
    }
}
