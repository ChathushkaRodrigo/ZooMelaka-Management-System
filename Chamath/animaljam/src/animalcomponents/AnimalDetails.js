import React, {Component} from 'react';
import axios from 'axios';
export default class AnimalDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            zooAnimal:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`/animal/${id}`).then((res)=>{
            if (res.data.success){
                this.setState({
                    zooAnimal:res.data.post
                });
                console.log(this.state.zooAnimal);
            }
        });
    }
    render(){
        const { Animal_ID,
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
                Current_Enclosure_ID } = this.state.zooAnimal;
        return(
            <div style={{marginTop:'20px'}} style={{backgroundColor:'#F8F8FF'}}>
            <h4 style={{fontFamily:'"Arial","Helvetica",sans-serif'}} style={{textDecoration:'underline'}}>Retrieve Animal Portfolio</h4>
            <hr/>
            <dl className="row">

                <dt className="col-sm-3">Animal_ID</dt>
                <dd className="col-sm-9">{Animal_ID}</dd>

                <dt className="col-sm-3">Animal_Name</dt>
                <dd className="col-sm-9">{Animal_Name}</dd>

                <dt className="col-sm-3">Animal_Species</dt>
                <dd className="col-sm-9">{Animal_Species}</dd>

                <dt className="col-sm-3">Animal_Date_Of_Birth</dt>
                <dd className="col-sm-9">{Animal_Date_Of_Birth}</dd>

                <dt className="col-sm-3">Animal_Gender</dt>
                <dd className="col-sm-9">{Animal_Gender}</dd>

                <dt className="col-sm-3">Feeding_And_Watering_Date</dt>
                <dd className="col-sm-9">{Feeding_And_Watering_Date}</dd>

                <dt className="col-sm-3">Feeding_And_Watering_Time</dt>
                <dd className="col-sm-9">{Feeding_And_Watering_Time}</dd>

                <dt className="col-sm-3">Animal_Satisfaction_Level</dt>
                <dd className="col-sm-9">{Animal_Satisfaction_Level}</dd>

                <dt className="col-sm-3">Animal_Health_Level</dt>
                <dd className="col-sm-9">{Animal_Health_Level}</dd>

                <dt className="col-sm-3">Attended_Zookeeper</dt>
                <dd className="col-sm-9">{Attended_Zookeeper}</dd>

                <dt className="col-sm-3">Date_Of_Treatment_And_Medical_Care</dt>
                <dd className="col-sm-9">{Date_Of_Treatment_And_Medical_Care}</dd>

                <dt className="col-sm-3">Time_Of_Treatment_And_Medical_Care</dt>
                <dd className="col-sm-9">{Time_Of_Treatment_And_Medical_Care}</dd>

                <dt className="col-sm-3">Current_Enclosure_ID</dt>
                <dd className="col-sm-9">{Current_Enclosure_ID}</dd>

            </dl>
               
            
            </div>
        )
    }
}
