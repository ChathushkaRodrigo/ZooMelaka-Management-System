/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import axios from 'axios';


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
        emailError:""


}

export default class CreatePost extends Component {

constructor(props){
    super(props);
    this.state=initial
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

    render() {
        return (
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal" style={{fontFamily:'Papyrus, fantasy'}}>Create new post</h1>
                <form className="needs-validation" noValidate>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px',fontFamily:'Papyrus, fantasy',color:'black'}} >eID</label>
                    <input type="text"
                    className="form-control"
                    name="eID"
                    placeholder=""
                    value={this.state.eID}
                    onChange={this.handleInputChange}/>
                    </div>

                    
                
                    

                <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px',fontFamily:'Papyrus, fantasy',color:'black'}} >Username</label>
                <input type="text"
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
                className="form-control"
                name="firstName"
                placeholder=""
                value={this.state.firstName}
                onChange={this.handleInputChange}/></div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px',fontFamily:'Papyrus, fantasy',color:'black'}} >Last Name</label>
                <input type="text"
                className="form-control"
                name="lastName"
                placeholder=""
                value={this.state.lastName}
                onChange={this.handleInputChange}/></div>


                <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px',fontFamily:'Papyrus, fantasy',color:'black'}} >E-mail</label>
                <input type="text"
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
                name="address"
                placeholder=""
                value={this.state.address}
                onChange={this.handleInputChange}/></div>


                <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px',fontFamily:'Papyrus, fantasy',color:'black'}} >Employee Type</label>
                <input type="text"
                className="form-control"
                name="employeeType"
                placeholder=""
                value={this.state.employeeType}
                onChange={this.handleInputChange}/></div>


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
                name="salary"
                placeholder=""
                value={this.state.salary}
                onChange={this.handleInputChange}/></div>
               

                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Save
                    </button>

                    <br/><br/><br/><br/><br/>


                </form>
                
            </div>
        )
    }
}
