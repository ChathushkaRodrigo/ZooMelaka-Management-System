import React, { Component } from 'react'
import axios from 'axios'
import "../CSS/ShasRet.css"

import {Link} from 'react-router-dom';
export default class PostDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            post:{},
            ret:[],
            Research:[]
        };
        this.retrievePosts();
        this.retrieveResearch();
    }

    retrievePosts(){
        axios.get("http://localhost:8015/posts").then(res=>{
          if(res.data.success){
            this.setState({
              ret:res.data.existingPosts
            })
            console.log(this.state.ret)
          }
        })
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

    retrieveResearch(){
        axios.get("http://localhost:8015/research").then(res =>{
          if(true){
            this.setState({
              Research:res.data.existingResearch
            });
            console.log(this.state.Research)
          }
        })
      
        
      }
    
    render() {

        const {eID,userName,firstName,lastName,email,address,employeeType,DOB,salary} = this.state.post;

        return (
            <div style={{marginTop:'20px'}}>
                
                 
                <h1 style={{color:'black'}}>Hello, {userName}</h1>
                <hr/>

                <form className="shasForms">

                <div class="form-group" id="shaszz">
                        <label style ={{marginBottom:'5px',color:"black"}} for="firstName">First Name  </label>
                        <input type="text" class="form-control" id="firstName" placeholder={firstName} disabled/>
                    </div>

                

                <br/>
                    <div class="form-group" id="shaszz">
                    <label  style ={{marginBottom:'5px',color:"black"}}for="lastName"> Last Name</label>
                        <input type="text" class="form-control" id="lastName" placeholder={ lastName} disabled/>
                        
                    </div>


                    <br/>
                    <div class="form-group" id="shaszz">
                    <label  style ={{marginBottom:'5px',color:"black"}}for="eID"> Employee ID</label>
                        <input type="text" class="form-control" id="eID" placeholder={ eID}  disabled/>
                        
                    </div>
                    <br/>
                    <div class="form-group" id="shaszz">
                    <label  style ={{marginBottom:'5px',color:"black"}}for="email"> E-mail</label>
                        <input type="text" class="form-control" id="email" placeholder={ email} disabled/>
                        
                    </div>
                    <br/>

                    <div class="form-group" id="shaszz">
                    <label  style ={{marginBottom:'5px',color:"black"}}for="address"> Address</label>
                        <input type="text" class="form-control" id="address" placeholder={ address} disabled/>
                        
                    </div>
                    <br/>

                    <div class="form-group" id="shaszz">
                    <label  style ={{marginBottom:'5px',color:"black"}}for="employeeType"> Designation</label>
                        <input type="text" class="form-control" id="employeeType" placeholder={ employeeType} disabled/>
                        
                    </div>
                    <br/>

                    <div class="form-group" id="shaszz">
                    <label  style ={{marginBottom:'5px',color:"black"}}for="DOB">Date Of Birth</label>
                        <input type="text" class="form-control" id="DOB" placeholder={DOB} disabled/>
                        
                    </div>
                    <br/>

                    <div class="form-group" id="shaszz">
                    <label style ={{marginBottom:'5px',color:"black"}} for="salary">Salary</label>
                        <input type="text" class="form-control" id="salary" placeholder={salary} disabled/>
                        
                    </div>
                    <br/>



                    
                    </form>

                <div>

                
                <div>
                {this.state.Research.map(Research =>(
                   
                <div>
               {Research.name_of_scientist==userName && 

             
                    <div>
                        <center>
                        <Link to = {`/animal/details/${Research.animal_id}`} style = {{textDecoration:"none"}}>
                      <h2>Click to See latest research!</h2>
                      </Link>
                </center>
                    </div>
    }</div>
    
                ))}</div>

                </div>
                <br/><br/><br/><br/><br/><br/>

                {/* <table style={{color:'black'}}> 
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
                </table> */}

                {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
            </div>
        )
    }
}
