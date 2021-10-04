/* eslint-disable react/no-direct-mutation-state */
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
        this.validateform = this.validateform.bind(this);
        this.state = {
                vname:"",
                zname:"",
                animalID:"",
                injID:"",
                sinfo:"",
                posts:[],
                zooAnimal:[]



            
        }
        this.retrievePosts()
        this.ref1 = React.createRef();
        this.ref2 = React.createRef();
        this.ref3 = React.createRef();
        this.ref4 = React.createRef();
        this.ref5 = React.createRef();
    }

    componentDidMount(){
        this.retrieveAnimal();
      }


      retrieveAnimal(){
        axios.get("http://localhost:8015/animal").then(res=>{
          if(res.data.success){
            this.setState({
              zooAnimal:res.data.existingPosts
            });
            console.log(this.state.zooAnimal);
          }
        });
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
            sinfo:"eye checkup"
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

    validateform(e){
        if(this.state.vname === '' || this.state.zname === '' || this.state.injID === '' || this.state.sinfo === ''){
            alert("All the inputs must be filled!");
        }
        else{
            this.onSubmit(e);
        }
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
            
            this.ref2.current.value = e
        }

        const handleSelect2=(e)=>{
            console.log(e);
            
            this.state.animalID = e
            console.log("Helloooo: " + this.state.animalID)
            
            this.ref3.current.value = e
        }




        return (
            <div className = "CreateMedicalBody">
            <div classsName="col-md-8-mt-4-mx-auto">
            <br/>
                <h1 className="titlepage" id="RandiCreaTit">Create Medical Record</h1>
                
                <div style={{backgroundColor:'white',width:'80%',margin:'0 auto'}}>
        
                <form className=" needs-validation " noValidate id="RandiForm1">
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


                <div className="form-group">
                <DropdownButton style={{marginLeft:'-100px'}} align="center" title="Veterinarian" id="dropdown-menu-align-end" onSelect={handleSelect}>
                <div>
                {this.state.posts.map(posts =>(
                <div>
                {posts.employeeType==="Veterinarian" && 

                <Dropdown.Item eventKey={posts.userName}>
                {posts.userName}
                </Dropdown.Item>
                }</div>
                ))}</div>
                
                </DropdownButton>
                <label style={{marginBottom:'5px'}} id="RandiForm1">Veterinarian</label>
                <input type="text" style={{marginLeft:'-100px'}}
                id="randimal"
                className="form-control"
                name="Attended_Zookeeper"
                placeholder="Enter The Veterinarian:"
                value={this.state.vname}
                onChange={this.handleInputChange}
                ref={this.ref1}
                />
            </div>

            <div className="form-group">
                <DropdownButton style={{marginLeft:'-100px'}} align="center" title="Attended Zookeeper" id="dropdown-menu-align-end" onSelect={handleSelect1}>
                <div>
                {this.state.posts.map(posts =>(
                <div>
                {posts.employeeType==="ZooKeeper" && 

                <Dropdown.Item eventKey={posts.userName}>
                {posts.userName}
                </Dropdown.Item>
                }</div>
                ))}</div>
                
                </DropdownButton>
                <label style={{marginBottom:'5px'}} id="RandiForm1">Attended Zookeeper</label>
                <input type="text" style={{marginLeft:'-100px'}}
               id="randimal"
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

                        
                <div className="form-group">
                <DropdownButton style={{marginLeft:'-100px'}} align="center" title="Animal ID" id="dropdown-menu-align-end" onSelect={handleSelect2}>
                <div>
                {this.state.zooAnimal.map(zooAnimal =>(//
                

                <Dropdown.Item eventKey={zooAnimal.Animal_ID}>
                {zooAnimal.Animal_ID}
                </Dropdown.Item>
                
                ))}</div>
                
                </DropdownButton>
                <label style={{marginBottom:'5px'}} id="RandiForm1">Animal ID</label>
                <input type="text"
                id="randimal" style={{marginLeft:'-100px'}}
                className="form-control"
                name="Attended_Zookeeper"
                placeholder="Enter The Animal ID:"
                value={this.state.animalID}
                onChange={this.handleInputChange}
                ref={this.ref3}
                />
            </div>
                        
                        
                        
                        
                        
                        {/* <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Animal ID</label>
                        <input type="text"
                        className="form-control"
                        ref={this.ref3}
                        name="animalID"
                        placeholder="Enter the animalID"
                        value={this.state.animalID}
                        onChange={this.handleInputChange}/>
                        </div> */}
                            

                            
                            <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style ={{marginBottom:'5px'}} id="RandiForm1">Injection ID</label>
                            <input type="text" style={{marginLeft:'-100px'}}
                            id="randimal"
                            className="form-control"
                            ref={this.ref4}
                            name="injID"
                            placeholder="Enter the Injection ID"
                            value={this.state.injID}
                            onChange={this.handleInputChange}/>
                            </div>

                             
                            <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style ={{marginBottom:'5px'}} id="RandiForm1">Surjery Info </label>
                            <input type="text" style={{marginLeft:'-100px'}}
                            id="randimal"
                            className="form-control"
                            ref={this.ref5}
                            name="sinfo "
                            placeholder="Enter the Surgery Info "
                            defualtValue={this.state.sinfo }
                            onChange={this.handleInputChange}/>
                            </div>
                        <br/><br/>

                    <div>
                    <button className="btn btn-success" type="submit" style={{marginBottom:'15px',marginLeft:'50px'}} onClick={this.validateform}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Submit Medical Report
                    </button>

                    <button className="btn btn-success" style={{marginTop:'-16px', marginLeft:'400px'}} onClick={this.Demo} type="button">
                        <i className="far fa-check-square"></i>
                        &nbsp; Demo
                    </button>

                    <button className ="btn btn-success" style={{marginTop:'-50px',marginLeft:'700px'}}><a href="/medicalDashboard" style={{textDecoration:'none' ,color:'white'}}>  Dashboard </a></button>
                    </div>
                   
                    </form>
                    </div>
                <br/>

    
                  
     

                </div></div>

           
        )
    }
}