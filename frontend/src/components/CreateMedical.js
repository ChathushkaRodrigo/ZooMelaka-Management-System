/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import axios from 'axios';
import "../CSS/Createmedical.css"

import SplitButton from 'react-bootstrap/SplitButton';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Select from 'react-select'

export default class CreateMedical extends Component {
    constructor(props) {
        super(props);

        this.state = {
                vname:"",
                zname:"",
                animalID:"",
                injID:"",
                sinfo:"",
                posts:[]



            
        }
        this.retrievePosts()
        this.ref1 = React.createRef();
        this.ref2 = React.createRef();
        this.ref3 = React.createRef();
        this.ref4 = React.createRef();
        this.ref5 = React.createRef();
    }

    retrievePosts(){
        axios.get("/posts").then(res =>{
            if(res.data.success){
                this.setState({
                    posts:res.data.existingPosts
                });
                console.log(this.state.posts)
            }
        })
    }

    handleInputChange = (e) =>{
        const {name,value} =e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onsubmit =(e)=>{
        e.preventDefault();
   
        const { vname,zname,animalID,injID,sinfo,} =this.state; 
        const data ={
            vname:vname,
            zname:zname,
            animalID:animalID,
            injID:injID,
            sinfo:"nuduja"
        }
        console.log(data);

        axios.post("http://localhost:8015/medical/add", data).then((res)=>{
            if(res.data.success){
                alert(`New medical Record created `)
               
                this.setState(
                {
                    vname:"",
                    zname:"",
                    animalID:"",
                    injID:"",
                    sinfo:""

                });
            }
        });

        
    }

    Demo = () => {
        this.ref1.current.value = "Test1"
        this.ref2.current.value = "Test2"
        this.ref3.current.value = "Test3"
        this.ref4.current.value = "Test4"
        this.ref5.current.value = "Test5@"

        this.state.vname = "Test1"
        this.state.zname = "Test2"
        this.state.animalID = "Test3"
        this.state.injID = "Test4"
        this.state.sinfo = "Test5"

        
    }

    render() {
        const handleSelect=(e)=>{
            console.log(e);
            
            this.state.vname = e
            console.log("Helloooo: " + this.state.vname)
            this.state.vname = e
            this.ref1.current.value = e
        }
        const handleSelect1=(e)=>{
            console.log(e);
            
            this.state.zname = e
            console.log("Helloooo: " + this.state.vname)
            this.state.vname = e
            this.ref2.current.value = e
        }
        return (
           
            <div classsName="col-md-8-mt-4-mx-auto">
            <br/>
                <h1 className="titlepage">Create Medical Record</h1>
                
                <div className= "imagemed"> </div>
        
                <form className=" needs-validation " noValidate>
                    {/* <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Vetenarian Name</label>
                        <input type="text"
                        className="form-control"
                        ref={this.ref1}
                        name="vname"
                        placeholder="Enter the vetenarian name"
                        value={this.state.vname}
                        onChange={this.handleInputChange}/>
                        </div> */}


<div className="mb-2">
                <DropdownButton align="center" title="Veterinarian" id="dropdown-menu-align-end" onSelect={handleSelect}>
                <div>
                {this.state.posts.map(posts =>(
                <div>
                {posts.employeeType=="Veterinarian" && 

                <Dropdown.Item eventKey={posts.userName}>
                {posts.userName}
                </Dropdown.Item>
                }</div>
                ))}</div>
                
                </DropdownButton>
                <label style={{marginBottom:'5px'}} id="chamForm">Veterinarian</label>
                <input type="text"
                id="chamathRet"
                className="form-control"
                name="Attended_Zookeeper"
                placeholder="Enter The Veterinarian:"
                value={this.state.vname}
                onChange={this.handleInputChange}
                ref={this.ref1}
                />
            </div>

            <div className="mb-2">
                <DropdownButton align="center" title="Attended Zookeeper" id="dropdown-menu-align-end" onSelect={handleSelect1}>
                <div>
                {this.state.posts.map(posts =>(
                <div>
                {posts.employeeType=="Veterinarian" && 

                <Dropdown.Item eventKey={posts.userName}>
                {posts.userName}
                </Dropdown.Item>
                }</div>
                ))}</div>
                
                </DropdownButton>
                <label style={{marginBottom:'5px'}} id="chamForm">Attended Zookeeper</label>
                <input type="text"
                id="chamathRet"
                className="form-control"
                name="Attended_Zookeeper"
                placeholder="Enter The Last Attended Zookeeper:"
                value={this.state.zname}
                onChange={this.handleInputChange}
                ref={this.ref2}
                />
            </div>

                        {/* <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Zoo Keeper Name</label>
                        <input type="text"
                        className="form-control"
                        ref={this.ref2}
                        name="zname"
                        placeholder="Enter the Zoo Keeper Name"
                        value={this.state.zname}
                        onChange={this.handleInputChange}/>
                        </div> */}

                        <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Animal ID</label>
                        <input type="text"
                        className="form-control"
                        ref={this.ref3}
                        name="animalID"
                        placeholder="Enter the animalID"
                        value={this.state.animalID}
                        onChange={this.handleInputChange}/>
                        </div>
                            

                            
                            <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style ={{marginBottom:'5px'}}>Injection ID</label>
                            <input type="text"
                            className="form-control"
                            ref={this.ref4}
                            name="injID"
                            placeholder="Enter the Injection ID"
                            value={this.state.injID}
                            onChange={this.handleInputChange}/>
                            </div>

                             
                            <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style ={{marginBottom:'5px'}}>Surjery Info </label>
                            <input type="text"
                            className="form-control"
                            ref={this.ref5}
                            name="sinfo "
                            placeholder="Enter the Surgery Info "
                            defualtValue={this.state.sinfo }
                            onChange={this.handleInputChange}/>
                            </div>
                        <br/><br/>
                    <button className="btn btn-success" type="submit" style={{marginBottom:'15px'}} onClick={this.onsubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Submit Medical Report
                    </button>

                    <button className="btn btn-success" style={{marginTop:'15px'}} onClick={this.Demo} type="button">
                        <i className="far fa-check-square"></i>
                        &nbsp; Demo
                    </button>
                    <br/><br/><br/><br/><br/>
                    
                   
                    </form>
                <br/>

    
                <button className ="btn btn-success"><a href="/medicalDashboard" style={{textDecoration:'none' ,color:'white' }}>  Dashboard </a></button>
                  
     

                </div>

           
        )
    }
}