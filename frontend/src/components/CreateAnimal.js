/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import axios from 'axios';
import '../CSS/CreateAnimal.css';
import { FormErrors } from './FormErrors';


import SplitButton from 'react-bootstrap/SplitButton';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Select from 'react-select'

export default class CreateAnimal extends Component{
    
    constructor(props){
        super(props);
        this.state={
            Animal_ID:"",
            Animal_Name:"",
            Animal_Species:"",
            Animal_Date_Of_Birth:"",
            Animal_Gender:"",
            Feeding_And_Watering_Date:"",
            Feeding_And_Watering_Time:"",
            Animal_Satisfaction_Level:"",
            Animal_Health_Level:"",
            Attended_Zookeeper:"",
            Date_Of_Treatment_And_Medical_Care:"",
            Time_Of_Treatment_And_Medical_Care:"",
            Current_Enclosure_ID:"",
            Adoptability:"false",
            posts:[],
            formErrors: {Animal_ID: ''},
            Animal_IDValid: false,
            formvalid: false,
            value:""
        }
           this.ref = React.createRef();
        this.retrievePosts()
        
        this.ref = React.createRef();
        this.ref1 = React.createRef();
        this.ref2 = React.createRef();
        this.ref3 = React.createRef();
        this.ref4 = React.createRef();
        this.ref5 = React.createRef();
        this.ref6 = React.createRef();
        this.ref7 = React.createRef();
        this.ref8 = React.createRef();
        this.ref9 = React.createRef();
        this.ref10 = React.createRef();
        this.ref11 = React.createRef();
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
    // componentDidMount(){
    //     this.retrievePosts();
    // }
    

    handleInputChange = (e)=>{
        const {name,value} = e.target;
        this.setState({
            ...this.state,
            [name]:value
        },() => { this.validateField(name, value) }
    );
    }

    onSubmit = (e) =>{
        e.preventDefault();
        const{
                Animal_ID,
                Animal_Name,
                Animal_Species,
                Animal_Date_Of_Birth,
                Animal_Gender,
                Feeding_And_Watering_Date,
                Feeding_And_Watering_Time,
                Animal_Satisfaction_Level,
                Animal_Health_Level,
                Attended_Zookeeper,
                Date_Of_Treatment_And_Medical_Care,
                Time_Of_Treatment_And_Medical_Care,
                Current_Enclosure_ID,
                Adoptability
                }=this.state;

        const data={
                Animal_ID:Animal_ID,
                Animal_Name:Animal_Name,
                Animal_Species:Animal_Species,
                Animal_Date_Of_Birth:Animal_Date_Of_Birth,
                Animal_Gender:Animal_Gender,
                Feeding_And_Watering_Date:Feeding_And_Watering_Date,
                Feeding_And_Watering_Time:Feeding_And_Watering_Time,
                Animal_Satisfaction_Level:Animal_Satisfaction_Level,
                Animal_Health_Level:Animal_Health_Level,
                Attended_Zookeeper:Attended_Zookeeper,
                Date_Of_Treatment_And_Medical_Care:Date_Of_Treatment_And_Medical_Care,
                Time_Of_Treatment_And_Medical_Care:Time_Of_Treatment_And_Medical_Care,
                Current_Enclosure_ID:Current_Enclosure_ID,
                Adoptability:Adoptability
                
        }

        console.log(data);

        axios.post("http://localhost:8015/animal/save",data).then((res)=>{
            if(res.data.success){
                this.setState({
                    Animal_ID:"",
                    Animal_Name:"",
                    Animal_Species:"",
                    Animal_Date_Of_Birth:"",
                    Animal_Gender:"",
                    Feeding_And_Watering_Date:"",
                    Feeding_And_Watering_Time:"",
                    Animal_Satisfaction_Level:"",
                    Animal_Health_Level:"",
                    Attended_Zookeeper:"",
                    Date_Of_Treatment_And_Medical_Care:"",
                    Time_Of_Treatment_And_Medical_Care:"",
                    Current_Enclosure_ID:"",
                    Adoptability:"",
                    value:""
                    
                }) 
                alert("A New Animal Record Has Been Created Successfully!")
            }
        })

    }
    
    
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let Animal_IDValid = this.state.Animal_IDValid;
    
        switch(fieldName) {
          
          case 'Animal_Gender':
            Animal_IDValid = value.length <= 5;
            fieldValidationErrors.Animal_ID = Animal_IDValid ? '': ' is too long';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        Animal_IDValid: Animal_IDValid
                      }, this.validateForm);
      }
    
      validateForm() {
        this.setState({formValid: this.state.Animal_IDValid});
      }
    
      errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
      }
      
      Demo = () => {
        // this.ref1.current.value = "Test1"
        this.ref2.current.value = "Tom The Cat"
        this.ref3.current.value = "Panthera Felix"
        // this.ref4.current.value = "Test4"
        // this.ref5.current.value = "Test5@"
        // this.ref6.current.value = "Test6"
        // this.ref7.current.value = "Test7"
        // this.ref8.current.value = "Test8"
        // this.ref9.current.value = "Test9"
        // this.ref10.current.value = "Test10"
        
        // this.state.Animal_ID = "Test5@"
        this.state.Animal_Name = "Tom The Cat"
        this.state.Animal_Species = "Panthera Felix"
        // this.state.Animal_Date_Of_Birth = "Test3"
        // this.state.Animal_Gender= "Test4"
        // this.state.Feeding_And_Watering_Date = "Test6"
        // this.state.Feeding_And_Watering_Time = "Test7"
        // this.state.Date_Of_Treatment_And_Medical_Care = "Test8"
        // this.state.Time_Of_Treatment_And_Medical_Care = "Test9"
        // this.state.Current_Enclosure_ID = "Test10"

        
    }
    
    render(){
        let data2 = parseInt(localStorage.getItem('goo'));
        data2++;
        console.log(String(data2))
        this.state.Animal_ID = String(data2)
        let data3 = parseInt(localStorage.getItem('too'));
        data3++;
        console.log(String(data3))
        this.state.Current_Enclosure_ID = String(data3)
        const handleSelect=(e)=>{
            console.log(e);
            
            this.state.value = e
            console.log("Helloooo: " + this.state.value)
            this.state.Attended_Zookeeper = e
            this.ref.current.value = e
        }
        return(
            <div className="CreateAnimal-body">
            <center><h1 className="h1-CreateAnimal">Add Zoo Animal!</h1></center>
            <div container="container-fluid" className="col-md-8 mx-auto" id="chamathCreaForm">
            
            <form className="CreateAniHead" noValidate>
                

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}} id="chamForm">Animal Name</label>
                <input type="text"
                id="chamathRet"
                ref={this.ref2}
                className="form-control"
                name="Animal_Name"
                placeholder="Animal Name:"
                value={this.state.Animal_Name}
                onChange={this.handleInputChange}
                />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}} id="chamForm">Animal Species</label>
                <input type="text"
                id="chamathRet"
                ref={this.ref3}
                className="form-control"
                name="Animal_Species"
                placeholder="Animal Species:"
                value={this.state.Animal_Species}
                onChange={this.handleInputChange}
                />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}} id="chamForm">Date Of Birth</label>
                <input type="date"
                id="chamathRet"
                ref={this.ref4}
                className="form-control"
                name="Animal_Date_Of_Birth"
                placeholder="Date Of Birth:"
                value={this.state.Animal_Date_Of_Birth}
                onChange={this.handleInputChange}
                />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}} id="chamForm">Gender</label>
                <input type="text"
                id="chamathRet"
                ref={this.ref5}
                className="form-control"
                name="Animal_Gender"
                placeholder="Gender:"
                value={this.state.Animal_Gender}
                onChange={this.handleInputChange}
                />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}} id="chamForm">Feeding Date</label>
                <input type="date"
                id="chamathRet"
                ref={this.ref6}
                className="form-control"
                name="Feeding_And_Watering_Date"
                placeholder="Feeding Date:"
                value={this.state.Feeding_And_Watering_Date}
                onChange={this.handleInputChange}
                />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}} id="chamForm">Feeding Time</label>
                <input type="time"
                id="chamathRet"
                className="form-control"
                ref={this.ref7}
                name="Feeding_And_Watering_Time"
                placeholder="Feeding Time:"
                value={this.state.Feeding_And_Watering_Time}
                onChange={this.handleInputChange}
                />
            </div>

            

            {/* <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}} id="chamForm">Attended Zookeeper</label>
                <input type="text"
                id="chamathRet"
                className="form-control"
                name="Attended_Zookeeper"
                placeholder="Enter The Last Attended Zookeeper:"
                value={this.state.Attended_Zookeeper}
                onChange={this.handleInputChange}
                />
            </div> */}

            {/* <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}} id="chamForm">Attended Zookeeper</label>
                <input type="text"
                id="chamathRet"
                className="form-control"
                name="Attended_Zookeeper"
                placeholder="Enter The Last Attended Zookeeper:"
                value={this.state.Attended_Zookeeper}
                onChange={this.handleInputChange}
                />
            </div> */}

            
           
                
        <div className="form-group">
                <DropdownButton align="left" title="Assigned Zookeeper" id="dropdown-menu-align-end" onSelect={handleSelect}>
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
                <label style={{marginBottom:'5px'}} id="chamForm"></label>
                <input style={{width:'300px'}} type="text"
                id="chamathRet"
                className="form-control"
                name="Attended_Zookeeper"
                placeholder="Assigned Zookeeper:"
                value={this.state.Attended_Zookeeper}
                onChange={this.handleInputChange}
                ref={this.ref}
                />
            </div>









            

            {/* <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}} id="chamForm">Date Of Medical Care</label>
                <input type="text"
                id="chamathRet"
                className="form-control"
                ref={this.ref8}
                name="Date_Of_Treatment_And_Medical_Care"
                placeholder="Enter The Date Of Treatment And Medical Care:"
                value={this.state.Date_Of_Treatment_And_Medical_Care}
                onChange={this.handleInputChange}
                />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}} id="chamForm">Time Of Medical Care</label>
                <input type="text"
                id="chamathRet"
                ref={this.ref9}
                className="form-control"
                name="Time_Of_Treatment_And_Medical_Care"
                placeholder="Enter The Time Of Treatment And Medical Care:"
                value={this.state.Time_Of_Treatment_And_Medical_Care}
                onChange={this.handleInputChange}
                />
            </div> */}

            

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}} for='Adoptability' id="chamForm">Adoptability</label>&nbsp;&nbsp;
                <input type="checkbox"
                id="Adoptability"
                name="Adoptability"
                placeholder="Adoptability Status:"
                value="true"
                onChange={this.handleInputChange}
                />
            </div>

            <button className="btn btn-light btn-small justify-content-between btn-outline-primary" type="submit" style={{marginTop:'25px',marginBottom:'25px'}} onClick={this.onSubmit}>
            <i className="fa fa-bug"></i>
            &nbsp;<b>Create!</b>
            </button>
            <button className="btn btn-success" style={{marginTop:'0px', marginLeft:'25px'}} onClick={this.Demo} type="button">
                        <i className="far fa-check-square"></i>
                        &nbsp; Demo
                    </button>
            <br/>

            <a className="btn btn-light btn-small justify-content-between btn-outline-danger" href={`/animaldashboard`} style={{marginTop:'10px',marginBottom:'100px',padding:'5px'}}>
            <i className="fas fa-hippo"></i>&nbsp;<b>Navigate To Animal Portfolio!</b>
</a>
            

            </form>
              
            </div></div>
        )
    }
}