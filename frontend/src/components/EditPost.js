import React, { Component } from 'react'
import axios from 'axios'

export default class EditPost extends Component {
    

    constructor(props){
        super(props);
        this.state={
           
            userName:"",
            firstName:"",
            eID:"",
            lastName:"",
            email:"",
            address:"",
            employeeType:"",
            DOB:"",
            salary:""
        }
    }
    
        handleInputChange =(e) =>{
            const {name,value} = e.target;
    
            this.setState({
                ...this.state,
                [name]:value
            })
        }
    
        onSubmit = (e) =>{
            e.preventDefault();
            const id =  this.props.match.params.id;
            
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
    
            axios.put(`http://localhost:8015/post/update/${id}`,data).then((res)=>{
                if(res.data.success){
                    alert("Post Updated Successfully")
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


    componentDidMount(){
        const id =  this.props.match.params.id;

        axios.get(`http://localhost:8015/post/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    userName:res.data.post.userName,
                    firstName:res.data.post.firstName,
                    eID:res.data.post.eID,
                    lastName:res.data.post.lastName,
                    email:res.data.post.email,
                    address:res.data.post.address,
                    employeeType:res.data.post.employeeType,
                    DOB:res.data.post.DOB,
                    salary:res.data.post.salary

                })
                console.log(this.state.post)
            }
        })
    }

    //font-family: Papyrus, fantasy;
    
    
    render() {
        return (
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal" style={{fontFamily:"Arial"}}>Edit Records</h1>
                <form className="needs-validation" noValidate>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px',fontFamily:"Arial",color:'black'}} > Username</label>
                    <input type="text"
                    className="form-control"
                    name="eID"
                    placeholder="Enter Topic"
                    value={this.state.eID}
                    onChange={this.handleInputChange}/>
                    </div>
                
                <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px',fontFamily:"Arial",color:'black'}} >FirstName</label>
                <input type="text"
                className="form-control"
                name="userName"
                placeholder="Enter Post Category"
                value={this.state.userName}
                onChange={this.handleInputChange}/></div>


                <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px',fontFamily:"Arial",color:'black'}} >eID</label>
                <input type="text"
                className="form-control"
                name="firstName"
                placeholder="Enter Post Category"
                value={this.state.firstName}
                onChange={this.handleInputChange}/></div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px',fontFamily:"Arial",color:'black'}} >LastName</label>
                <input type="text"
                className="form-control"
                name="lastName"
                placeholder="Enter Post Category"
                value={this.state.lastName}
                onChange={this.handleInputChange}/></div>


                <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px',fontFamily:"Arial",color:'black'}} >Email</label>
                <input type="text"
                className="form-control"
                name="email"
                placeholder="Enter Post Category"
                value={this.state.email}
                onChange={this.handleInputChange}/></div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px',fontFamily:"Arial",color:'black'}} >Address</label>
                <input type="text"
                className="form-control"
                name="address"
                placeholder="Enter Post Category"
                value={this.state.address}
                onChange={this.handleInputChange}/></div>


                <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px',fontFamily:"Arial",color:'black'}} >EmployeeType</label>
                <input type="text"
                className="form-control"
                name="employeeType"
                placeholder="Enter Post Category"
                value={this.state.employeeType}
                onChange={this.handleInputChange}/></div>


                <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px',fontFamily:"Arial",color:'black'}} >DOB</label>
                <input type="text"
                className="form-control"
                name="DOB"
                placeholder="Enter Post Category"
                value={this.state.DOB}
                onChange={this.handleInputChange}/></div>


                <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px',fontFamily:"Arial",color:'black'}} >Salary</label>
                <input type="text"
                className="form-control"
                name="salary"
                placeholder="Enter Post Category"
                value={this.state.salary}
                onChange={this.handleInputChange}/></div>
               

                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Update
                    </button>




                </form>
                <br/><br/><br/><br/><br/>
            </div>
        )
    }
}
