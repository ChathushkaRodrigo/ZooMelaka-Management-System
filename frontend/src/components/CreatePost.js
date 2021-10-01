/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import axios from 'axios';

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
        const {userName,firstName,eID,lastName,email,address,employeeType,DOB,salary} = this.state;
        
        
        
        const data={
            
            userName:userName,
            firstName:firstName,
            eID:eID,
            lastName:lastName,
            email:email,
            address:address,
            employeeType:employeeType,
            DOB:DOB,
            salary:salary
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
                  salary:""

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
        this.state.email = "Test5@"
        this.state.salary = "Test5@"
        this.state.userName = "Test2"
        this.state.firstName = "Test3"
        this.state.lastName = "Test4"
        this.state.address = "Test6"
        this.state.eID = "Test7"
        
    }

    render() {

        const handleSelect=(e)=>{
            console.log(e);
            
            this.state.employeeType = e
            console.log("Helloooo: " + this.state.employeeType)
            
            this.ref.current.value = e
        }
        return (
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal" style={{fontFamily:'Papyrus, fantasy'}}>Create new post</h1>
                <form className="needs-validation" noValidate>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px',fontFamily:'Papyrus, fantasy',color:'black'}} >eID</label>
                    <input type="text"
                    ref={this.ref1}
                    className="form-control"
                    name="eID"
                    placeholder=""
                    value={this.state.eID}
                    onChange={this.handleInputChange}/>
                    </div>

                    
                
                    

                <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px',fontFamily:'Papyrus, fantasy',color:'black'}} >Username</label>
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
                <label style={{marginBottom:'5px',fontFamily:'Papyrus, fantasy',color:'black'}} >First Name</label>
                <input type="text"
                ref={this.ref3}
                className="form-control"
                name="firstName"
                placeholder=""
                value={this.state.firstName}
                onChange={this.handleInputChange}/></div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px',fontFamily:'Papyrus, fantasy',color:'black'}} >Last Name</label>
                <input type="text"
                ref={this.ref4}
                className="form-control"
                name="lastName"
                placeholder=""
                value={this.state.lastName}
                onChange={this.handleInputChange}/></div>


                <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px',fontFamily:'Papyrus, fantasy',color:'black'}} >E-mail</label>
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
                <label style={{marginBottom:'5px',fontFamily:'Papyrus, fantasy',color:'black'}} >Address</label>
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

            <div className="mb-2">
                <DropdownButton align="center" title="Employee catagory" id="dropdown-menu-align-end" onSelect={handleSelect}>
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
                
                
                </div>
                
                </DropdownButton>
                <label style={{marginBottom:'5px'}} id="chamForm">Designation</label>
                <input type="text"
                id="chamathRet"
                className="form-control"
                name="Attended_Zookeeper"
                placeholder="Enter The Last Attended Zookeeper:"
                value={this.state.Attended_Zookeeper}
                onChange={this.handleInputChange}
                ref={this.ref}
                />
            </div>




                <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px',fontFamily:'Papyrus, fantasy',color:'black'}} >DOB</label>
                <input type="text"
                className="form-control"
                name="DOB"
                type="date"
                placeholder=""
                value={this.state.DOB}
                onChange={this.handleInputChange}/></div>


                <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px',fontFamily:'Papyrus, fantasy',color:'black'}} >Salary</label>
                <input type="text"
                className="form-control"
                ref={this.ref7}
                name="salary"
                placeholder=""
                value={this.state.salary}
                onChange={this.handleInputChange}/></div>
               

                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Save
                    </button>
                    <button className="btn btn-success" style={{marginTop:'15px'}} onClick={this.Demo} type="button">
                        <i className="far fa-check-square"></i>
                        &nbsp; Demo
                    </button>
                    <br/><br/><br/><br/><br/>


                </form>
                
            </div>
        )
    }
}
