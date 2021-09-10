import React, {Component} from 'react';
import axios from 'axios';
import '../CSS/CreateAnimal.css';
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
            Current_Enclosure_ID:""
        }
    }

    handleInputChange = (e) =>{
        const {name,value} = e.target;
        this.setState({
            ...this.state,
            [name]:value
        })
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
                Current_Enclosure_ID 
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
                Current_Enclosure_ID:Current_Enclosure_ID 
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
                    Current_Enclosure_ID:""
                }) 
                alert("A New Animal Record Has Been Created Successfully!")
            }
        })
    }
    
    
    
    
    render(){
        return(
            <div className="CreateAnimal-body" id="page">
            <div container="container-fluid" className="col-md-8 mt-4 mx-auto">
            <h1 className="h3 mb-3 font-weight-bold">Lets Facilitate A New Animal To The Zoo</h1>
            <form className="needs-validation" noValidate>
                <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Animal ID</label>
                <input type="text"
                className="form-control"
                name="Animal_ID"
                placeholder="Enter The Animal ID:"
                value={this.state.Animal_ID}
                onChange={this.handleInputChange}
                />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Animal Name</label>
                <input type="text"
                className="form-control"
                name="Animal_Name"
                placeholder="Enter The Animal Name:"
                value={this.state.Animal_Name}
                onChange={this.handleInputChange}
                />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Animal Species</label>
                <input type="text"
                className="form-control"
                name="Animal_Species"
                placeholder="Enter The Animal Species:"
                value={this.state.Animal_Species}
                onChange={this.handleInputChange}
                />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Animal Date Of Birth</label>
                <input type="text"
                className="form-control"
                name="Animal_Date_Of_Birth"
                placeholder="Enter The Animal Date Of Birth:"
                value={this.state.Animal_Date_Of_Birth}
                onChange={this.handleInputChange}
                />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Animal Gender</label>
                <input type="text"
                className="form-control"
                name="Animal_Gender"
                placeholder="Enter The Animal Gender:"
                value={this.state.Animal_Gender}
                onChange={this.handleInputChange}
                />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Feeding And Watering Date</label>
                <input type="text"
                className="form-control"
                name="Feeding_And_Watering_Date"
                placeholder="Enter The Feeding And Watering Date:"
                value={this.state.Feeding_And_Watering_Date}
                onChange={this.handleInputChange}
                />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Feeding And Watering Time</label>
                <input type="text"
                className="form-control"
                name="Feeding_And_Watering_Time"
                placeholder="Enter The Feeding And Watering Time:"
                value={this.state.Feeding_And_Watering_Time}
                onChange={this.handleInputChange}
                />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Animal Satisfaction Level</label>
                <input type="text"
                className="form-control"
                name="Animal_Satisfaction_Level"
                placeholder="Enter The Animal Satisfaction Level:"
                value={this.state.Animal_Satisfaction_Level}
                onChange={this.handleInputChange}
                />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Animal Health Level</label>
                <input type="text"
                className="form-control"
                name="Animal_Health_Level"
                placeholder="Enter The Animal Health Level:"
                value={this.state.Animal_Health_Level}
                onChange={this.handleInputChange}
                />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Attended Zookeeper</label>
                <input type="text"
                className="form-control"
                name="Attended_Zookeeper"
                placeholder="Enter The Last Attended Zookeeper:"
                value={this.state.Attended_Zookeeper}
                onChange={this.handleInputChange}
                />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Date Of Treatment And Medical Care</label>
                <input type="text"
                className="form-control"
                name="Date_Of_Treatment_And_Medical_Care"
                placeholder="Enter The Date Of Treatment And Medical Care:"
                value={this.state.Date_Of_Treatment_And_Medical_Care}
                onChange={this.handleInputChange}
                />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Time Of Treatment And Medical Care</label>
                <input type="text"
                className="form-control"
                name="Time_Of_Treatment_And_Medical_Care"
                placeholder="Enter The Time Of Treatment And Medical Care:"
                value={this.state.Time_Of_Treatment_And_Medical_Care}
                onChange={this.handleInputChange}
                />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Current Enclosure ID</label>
                <input type="text"
                className="form-control"
                name="Current_Enclosure_ID"
                placeholder="Enter The Current Enclosure ID:"
                value={this.state.Current_Enclosure_ID}
                onChange={this.handleInputChange}
                />
            </div>


            <button className="btn btn-warning btn-lg justify-content-between" type="submit" style={{marginTop:'25px',marginBottom:'25px'}} onClick={this.onSubmit}>
            <i className="fa fa-bug"></i>
            &nbsp;<b>Create!</b>
            </button>
            <br/>

            <a className="btn btn-info btn-lg justify-content-between " href={`/animaldashboard`} style={{fontFamily:'Papyrus,fantasy',marginTop:'10px',marginBottom:'10px'}}>
            <i className="fa fa-arrow-circle-left"></i>&nbsp;<b>Navigate To Animal Portfolio!</b>
</a>
            

            </form>
              
            </div></div>
        )
    }
}