import React, {Component} from 'react';
import axios from 'axios';
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

        axios.post("/animal/save",data).then((res)=>{
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
            }
        })
    }
    
    
    
    
    render(){
        return(
            <div className="col-md-8 mt-4 mx-auto">
            <h1 className="h3 mb-3 font-weight-normal">Lets Facilitate A New Animal To The Zoo</h1>
            <form className="needs-validation" noValidate>
                <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Animal_ID</label>
                <input type="text"
                className="form-control"
                name="Animal_ID"
                placeholder="Enter The Animal_ID:"
                value={this.state.Animal_ID}
                onChange={this.handleInputChange}
                />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Animal_Name</label>
                <input type="text"
                className="form-control"
                name="Animal_Name"
                placeholder="Enter The Animal_Name:"
                value={this.state.Animal_Name}
                onChange={this.handleInputChange}
                />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Animal_Species</label>
                <input type="text"
                className="form-control"
                name="Animal_Species"
                placeholder="Enter The Animal_Species:"
                value={this.state.Animal_Species}
                onChange={this.handleInputChange}
                />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Animal_Date_Of_Birth</label>
                <input type="text"
                className="form-control"
                name="Animal_Date_Of_Birth"
                placeholder="Enter The Animal_Date_Of_Birth:"
                value={this.state.Animal_Date_Of_Birth}
                onChange={this.handleInputChange}
                />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Animal_Gender</label>
                <input type="text"
                className="form-control"
                name="Animal_Gender"
                placeholder="Enter The Animal_Gender:"
                value={this.state.Animal_Gender}
                onChange={this.handleInputChange}
                />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Feeding_And_Watering_Date</label>
                <input type="text"
                className="form-control"
                name="Feeding_And_Watering_Date"
                placeholder="Enter The Feeding_And_Watering_Date:"
                value={this.state.Feeding_And_Watering_Date}
                onChange={this.handleInputChange}
                />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Feeding_And_Watering_Time</label>
                <input type="text"
                className="form-control"
                name="Feeding_And_Watering_Time"
                placeholder="Enter The Feeding_And_Watering_Time:"
                value={this.state.Feeding_And_Watering_Time}
                onChange={this.handleInputChange}
                />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Animal_Satisfaction_Level</label>
                <input type="text"
                className="form-control"
                name="Animal_Satisfaction_Level"
                placeholder="Enter The Animal_Satisfaction_Level:"
                value={this.state.Animal_Satisfaction_Level}
                onChange={this.handleInputChange}
                />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Animal_Health_Level</label>
                <input type="text"
                className="form-control"
                name="Animal_Health_Level"
                placeholder="Enter The Animal_Health_Level:"
                value={this.state.Animal_Health_Level}
                onChange={this.handleInputChange}
                />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Attended_Zookeeper</label>
                <input type="text"
                className="form-control"
                name="Attended_Zookeeper"
                placeholder="Enter The Last Attended_Zookeeper:"
                value={this.state.Attended_Zookeeper}
                onChange={this.handleInputChange}
                />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Date_Of_Treatment_And_Medical_Care</label>
                <input type="text"
                className="form-control"
                name="Date_Of_Treatment_And_Medical_Care"
                placeholder="Enter The Date_Of_Treatment_And_Medical_Care:"
                value={this.state.Date_Of_Treatment_And_Medical_Care}
                onChange={this.handleInputChange}
                />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Time_Of_Treatment_And_Medical_Care</label>
                <input type="text"
                className="form-control"
                name="Time_Of_Treatment_And_Medical_Care"
                placeholder="Enter The Time_Of_Treatment_And_Medical_Care:"
                value={this.state.Time_Of_Treatment_And_Medical_Care}
                onChange={this.handleInputChange}
                />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Current_Enclosure_ID</label>
                <input type="text"
                className="form-control"
                name="Current_Enclosure_ID"
                placeholder="Enter The Current_Enclosure_ID:"
                value={this.state.Current_Enclosure_ID}
                onChange={this.handleInputChange}
                />
            </div>


            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
            <i className="far fa-check-square"></i>
            &nbsp;Save
            </button>


            </form>
              
            </div>
        )
    }
}