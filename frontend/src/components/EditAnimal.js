import React, {Component} from 'react';
import axios from 'axios';
export default class EditAnimal extends Component{
   
    constructor(props){
        super(props);
        this.state={
            
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
        const id = this.props.match.params.id;
        const{
                
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

        axios.put(`http://localhost:8015/animal/update/${id}`,data).then((res)=>{
            if(res.data.success){
                alert("Animal Portfolio Updated Successfully!")
                this.setState({
                    
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
    


    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`http://localhost:8015/animal/${id}`).then((res)=>{
            if (res.data.success){
                this.setState({
                    Feeding_And_Watering_Date:res.data.post.Feeding_And_Watering_Date,

                    Feeding_And_Watering_Time:res.data.post.Feeding_And_Watering_Time,

                    Animal_Satisfaction_Level:res.data.post.Animal_Satisfaction_Level,

                    Animal_Health_Level:res.data.post.Animal_Health_Level,

                    Attended_Zookeeper:res.data.post.Attended_Zookeeper,

                    Date_Of_Treatment_And_Medical_Care:res.data.post.Date_Of_Treatment_And_Medical_Care,

                    Time_Of_Treatment_And_Medical_Care:res.data.post.Time_Of_Treatment_And_Medical_Care,

                    Current_Enclosure_ID:res.data.post.Current_Enclosure_ID
                });
                
                console.log(this.state.post);
            }
        });
    }
   
    render(){
        return(
            <div className="col-md-8 mt-4 mx-auto" style={{backgroundColor:'#F8F8FF'}}>
            <h1 className="h3 mb-3 font-weight-normal" style={{fontFamily:'"Arial","Helvetica",sans-serif'}} style={{textDecoration:'underline'}}>Lets Update The Animal Portfolio</h1>
            <form className="needs-validation" noValidate>
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
            &nbsp;Update
            </button>


            </form>
              
            </div>
        )
    }
}