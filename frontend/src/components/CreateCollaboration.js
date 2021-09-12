import React, { Component } from 'react';
import axios from'axios'
import "../CSS/CreateCollaboration.css"

class CreateCollaboration extends Component {
        constructor(props){
            super(props);
            this.state={
                research_feild:"",
                research_topic:"",
                name:"",
                email:"",
                contact_no:"",
                zoological_institution:""

            }
        }
       
        handleInputChange=(e)=>{
            const{name,value}=e.target;
            this.setState({
                ...this.state,
                [name]:value
            })
        }
        onSubmit=(e)=>{
            e.preventDefault();
            const {research_feild,
                research_topic,
                name,
                email,
                contact_no,
                zoological_institution
        }=this.state;


            const data={research_feild:research_feild,
                research_topic:research_topic,
                name:"jk",
                email:email,
                contact_no:contact_no,
                zoological_institution:zoological_institution
               }
        
        console.log(data);
        axios.post("http://localhost:8015/collaboration/add",data).then((res)=>{
            if(res.data.success){
                alert(`New Collaboration Request created successfully   `);
                this.setState(
                    {
                research_feild:"",
                research_topic:"",
                name:"",
                email:"",
                contact_no:"",
                zoological_institution:""
                    }

                )
            }
        })
    }
    render() {
        return (
            <div className="topic">
            <div classsName="col-md-8-mt-4-mx-auto">
                <h1 className="h3-mb-3 font-weight-normal">Create new Collaboration</h1>
                <div className="  image4"> </div>
                <form className=" formbody needs-validation" noValidate>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>research_feild</label>
                        <input type="text" required
                        
                        className="form-control"
                        name="research_feild"
                        placeholder="Enter the research_feild"
                        value={this.state.research_feild}
                        onChange={this.handleInputChange}/>
                        </div>
                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style ={{marginBottom:'5px'}}>research_topic</label>
                            <input type="text"
                            className="form-control"
                            name="research_topic"
                            placeholder="Enter the research_topic"
                            value={this.state.research_topic}
                            onChange={this.handleInputChange}/>
                            </div>


                            <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style ={{marginBottom:'5px'}}>name</label>
                            <input type="text"
                            className="form-control"
                            name="name"
                            placeholder="Enter the name"
                            defualtValue={this.state.name}
                            onChange={this.handleInputChange}/>
                            </div>





                            <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style ={{marginBottom:'5px'}}>email</label>
                            <input type="text"
                            className="form-control"
                            name="email"
                            placeholder="Enter the email"
                            value={this.state.email}
                            onChange={this.handleInputChange}/>
                            </div>
                            
                            <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style ={{marginBottom:'5px'}}>contact_no</label>
                            <input type="number"
                            className="form-control"
                            name="contact_no"
                            placeholder="Enter the contact_no"
                            value={this.state.contact_no}
                            onChange={this.handleInputChange}/>
                            </div>

                            
                            <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style ={{marginBottom:'5px'}}>zoological_institution</label>
                            <input type="text"
                            className="form-control"
                            name="zoological_institution"
                            placeholder="Enter the zoological_institution"
                            value={this.state.zoological_institution}
                            onChange={this.handleInputChange}/>
                            </div>

                             
                          


                            <button className="btn btn-success"type ="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp;Save
                            </button>
                         

          
            
            </form>
        </div>
        </div>
        )
}}

export default CreateCollaboration;
