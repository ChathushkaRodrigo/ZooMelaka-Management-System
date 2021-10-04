/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import axios from 'axios';
import '../CSS/EmployeeDashboard.css'

import SplitButton from 'react-bootstrap/SplitButton';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Select from 'react-select'


const initial = {
    userName:"",
        firstName:"",
        eID:"",
        lastName:"",
        email:"",
        address:"",
        employeeType:"",
        DOB:"",
        salary:"",
        additional:"",
        userNameError:"",
        emailError:"",
        posts:[]

}

export default class CreatePost extends Component {

constructor(props){
    super(props);
    this.state=initial

    this.ref = React.createRef();
    this.ref1 = React.createRef();
    this.ref2 = React.createRef();
    this.ref3 = React.createRef();
    this.ref4 = React.createRef();
    this.ref5 = React.createRef();
    this.ref6 = React.createRef();
    this.ref7 = React.createRef();
    this.ref8 = React.createRef();
    this.state.additional = "GCE Advanced Level Qualifications\nProfessional English Qualifications\nResearch Contributions\nZoological Management Qualifications\nJob Experience"
                             
    
}

    handleInputChange =(e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }
    
    
    validate = () => { 

        let userNameError="";
        let emailError="";
        let len = 0;
        if(!this.state.email.includes('@')){
            emailError = "Invalid email";
        }

        if(emailError === "Invalid email"){
            this.setState({emailError});
            return false
        }
        
        if(this.state.userName.length < 5){
            userNameError = "Username has to be atleast 5 characters long";
        }

        if(userNameError === "Username has to be atleast 5 characters long"){
            this.setState({userNameError});
            return false
        }

        return true
    }
    


    
    onSubmit = (e) =>{
        e.preventDefault();
        const isValid = this.validate();
        if(isValid){
            console.log(this.state);

            //clear form
            this.setState(initial)
            alert("Successfully added data to database");
            

        }else{
            alert("Requirements not fulfiled, Try again");
            return false
        }
        const {userName,firstName,eID,lastName,email,address,employeeType,DOB,salary,additional} = this.state;
        
        
        
        const data={
            
            userName:userName,
            firstName:firstName,
            eID:eID,
            lastName:lastName,
            email:email,
            address:address,
            employeeType:employeeType,
            DOB:DOB,
            salary:salary,
            additional:additional
        }
        
        console.log(data)
        
        axios.post("http://localhost:8015/post/save",data).then((res)=>{
            if(res.data.success){
                this.setState(
                    {
                        username:"",
                        firstName:"",
                        eID:"",
                  lastName:"",
                  email:"",
                  address:"",
                  employeeType:"",
                  DOB:"",
                  salary:"",
                  additional:"",

                }
                )
            }
        })
        
    }
    Demo = () => {
        this.ref1.current.value = "Test1"
        this.ref2.current.value = "Test2"
        this.ref3.current.value = "Test3"
        this.ref4.current.value = "Test4"
        this.ref5.current.value = "Test5@"
        this.ref6.current.value = "Test6"
        this.ref7.current.value = "Test7"
        this.ref8.current.value = "Test8"
        this.state.email = "Test5@"
        this.state.salary = "Test5@"
        this.state.userName = "Test2"
        this.state.firstName = "Test3"
        this.state.lastName = "Test4"
        this.state.address = "Test6"
        this.state.eID = "Test7"
        this.state.additional = "Test8"
        // this.state.
        
        
    }

    render() {
        let data = parseInt(localStorage.getItem('foo'));
        data++;
        console.log(String(data))
        this.state.eID = String(data)
        const handleSelect=(e)=>{
            console.log(e);
            
            this.state.employeeType = e
            console.log("Helloooo: " + this.state.employeeType)
            
            this.ref.current.value = e
        }
        

        return (
            <div id="ShasCreate">
            <div className="col-md-8 mt-4 mx-auto"  style={{backgroundColor:'white',marginTop:'0px',paddingTop:'30px'}}>
                <h1 className="h3 mb-3 font-weight-normal" style={{fontSize:'36px',textAlign:'center'}}>Create employee record</h1>
                <form className="needs-validation" noValidate>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px',color:'black'}} >Employee ID</label>
                    <input type="text"
                    ref={this.ref1}
                    className="form-control"
                    name="eID"
                    placeholder=""
                    value={this.state.eID}
                    onChange={this.handleInputChange}
                    readonly/>
                    </div>

                    
                
                    

                <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px',color:'black'}} >User Name</label>
                <input type="text"
                ref={this.ref2}
                className="form-control"
                name="userName"
                placeholder=""
                value={this.state.userName}
                onChange={this.handleInputChange}/></div>

                <div style={{color:"red"}}>
                    {this.state.userNameError}
                    </div>

                    

                <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px',color:'black'}} >First Name</label>
                <input type="text"
                ref={this.ref3}
                className="form-control"
                name="firstName"
                placeholder=""
                value={this.state.firstName}
                onChange={this.handleInputChange}/></div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px',color:'black'}} >Last Name</label>
                <input type="text"
                ref={this.ref4}
                className="form-control"
                name="lastName"
                placeholder=""
                value={this.state.lastName}
                onChange={this.handleInputChange}/></div>


                <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px', color:'black'}} >E-mail</label>
                <input type="text"
                ref={this.ref5}
                className="form-control"
                name="email"
                placeholder=""
                value={this.state.email}
                onChange={this.handleInputChange}/></div>


                <div style={{color:"red"}}>
                    {this.state.emailError}
                    </div>


                <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px', color:'black'}} >Address</label>
                <input type="text"
                className="form-control"
                ref={this.ref6}
                name="address"
                placeholder=""
                value={this.state.address}
                onChange={this.handleInputChange}/></div>


                {/* <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px',fontFamily:'Papyrus, fantasy',color:'black'}} >Employee Type</label>
                <input type="text"
                className="form-control"
                name="employeeType"
                placeholder=""
                value={this.state.employeeType}
                onChange={this.handleInputChange}/></div> */}

            <div className="form-group">
                <label style={{marginBottom:'5px', marginLeft:'0'}} id="chamForm">Designation</label>
                <br/>
                <input type="text" style={{width:'50%',float:'left'}}
                id="chamathRet"
                className="form-control"
                name="Attended_Zookeeper"
                placeholder="Enter The Last Attended Zookeeper:"
                value={this.state.Attended_Zookeeper}
                onChange={this.handleInputChange}
                ref={this.ref}
                />
                <DropdownButton align="center" style={{marginTop:'8px'}} title="Employee catagory" id="dropdown-menu-align-end" onSelect={handleSelect}>
                <div>
                
                
                <Dropdown.Item eventKey="Supervisor">
                Supervisor
                </Dropdown.Item>
                <Dropdown.Item eventKey="Researcher">
                Researcher
                </Dropdown.Item>
                <Dropdown.Item eventKey="Manager">
                Manager
                </Dropdown.Item>
                <Dropdown.Item eventKey="ZooKeeper">
                ZooKeeper
                </Dropdown.Item>
                <Dropdown.Item eventKey="Veterinarian">
                Veterinarian
                </Dropdown.Item>
                <Dropdown.Item eventKey="Tour Guide">
                Tour Guide
                </Dropdown.Item>
                
                
                </div>
                
                </DropdownButton>
                
            </div><br/><br/>




                <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px',color:'black'}} >DOB</label>
                <input type="text"
                className="form-control"
                name="DOB"
                type="date"
                placeholder=""
                value={this.state.DOB}
                onChange={this.handleInputChange}/></div>


                <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px',color:'black'}} >Salary</label>
                <input type="text"
                className="form-control"
                ref={this.ref7}
                name="salary"
                placeholder=""
                value={this.state.salary}
                onChange={this.handleInputChange}/></div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px',color:'black'}} >Additional Information about the employee</label>
                <textarea type="text"
                rows="10"
                cols="50"
                className="form-control"
                ref={this.ref8}
                name="additional"
                placeholder=""
                value={this.state.additional}
                onChange={this.handleInputChange}></textarea></div>

                
               
                    <div style={{width:'80%',margin:'0 auto'}}>
                        <div style={{float:'left'}}>
                            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                                <i className="far fa-check-square"></i>
                                &nbsp; Save
                            </button>
                        </div>

                        <div style={{float:'Right'}} >
                            <button className="btn btn-success" style={{marginTop:'15px'}} onClick={this.Demo} type="button">
                                <i className="far fa-check-square"></i>
                                &nbsp; Demo
                            </button>
                        </div>
                        <div style={{float:'Right'}} >
                            
                            <button className="btn btn-success" style={{marginTop:'15px',marginRight:'300px'}} ><a href="/EmployeeDash"><i className="far fa-check-square"></i>EmployeeDashboard</a></button>
                        </div>
                    </div>
                    <br/><br/><br/><br/><br/>
                

                </form>
                
            </div>
            </div>
        )
    }
}
