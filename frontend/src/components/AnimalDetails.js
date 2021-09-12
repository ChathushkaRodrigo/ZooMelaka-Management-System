import React, {Component} from 'react';
import axios from 'axios';
import '../CSS/AnimalDetails.css';
export default class AnimalDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            zooAnimal:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`http://localhost:8015/animal/${id}`).then((res)=>{
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
            <div className="AnimalDetails-body">
            <div className = "container-fluid" style={{marginTop:'20px',backgroundColor:'#F0FFFF'}}>
            <h4 style={{fontFamily:'Papyrus,fantasy'}}><b>Retrieve Animal Portfolio</b></h4>
            <hr/>
            <dl className="row">

                <dt className="col-sm-3" style={{fontFamily:'Papyrus,fantasy'}}>Animal ID</dt>
                <dd className="col-sm-9" style={{fontFamily:'Papyrus,fantasy'}}><b>{Animal_ID}</b></dd>

                <dt className="col-sm-3" style={{fontFamily:'Papyrus,fantasy'}}>Animal Name</dt>
                <dd className="col-sm-9" style={{fontFamily:'Papyrus,fantasy'}}><b>{Animal_Name}</b></dd>

                <dt className="col-sm-3" style={{fontFamily:'Papyrus,fantasy'}}>Animal Species</dt>
                <dd className="col-sm-9" style={{fontFamily:'Papyrus,fantasy'}}><b>{Animal_Species}</b></dd>

                <dt className="col-sm-3" style={{fontFamily:'Papyrus,fantasy'}}>Animal Date Of Birth</dt>
                <dd className="col-sm-9" style={{fontFamily:'Papyrus,fantasy'}}><b>{Animal_Date_Of_Birth}</b></dd>

                <dt className="col-sm-3" style={{fontFamily:'Papyrus,fantasy'}}>Animal Gender</dt>
                <dd className="col-sm-9" style={{fontFamily:'Papyrus,fantasy'}}><b>{Animal_Gender}</b></dd>

                <dt className="col-sm-3" style={{fontFamily:'Papyrus,fantasy'}}>Feeding And Watering Date</dt>
                <dd className="col-sm-9" style={{fontFamily:'Papyrus,fantasy'}}><b>{Feeding_And_Watering_Date}</b></dd>

                <dt className="col-sm-3" style={{fontFamily:'Papyrus,fantasy'}}>Feeding And Watering Time</dt>
                <dd className="col-sm-9" style={{fontFamily:'Papyrus,fantasy'}}><b>{Feeding_And_Watering_Time}</b></dd>

                <dt className="col-sm-3" style={{fontFamily:'Papyrus,fantasy'}}>Animal Satisfaction Level</dt>
                <dd className="col-sm-9" style={{fontFamily:'Papyrus,fantasy'}}><b>{Animal_Satisfaction_Level}</b></dd>

                <dt className="col-sm-3" style={{fontFamily:'Papyrus,fantasy'}}>Animal Health Level</dt>
                <dd className="col-sm-9" style={{fontFamily:'Papyrus,fantasy'}}><b>{Animal_Health_Level}</b></dd>

                <dt className="col-sm-3" style={{fontFamily:'Papyrus,fantasy'}}>Attended Zookeeper</dt>
                <dd className="col-sm-9" style={{fontFamily:'Papyrus,fantasy'}}><b>{Attended_Zookeeper}</b></dd>

                <dt className="col-sm-3" style={{fontFamily:'Papyrus,fantasy'}}>Date Of Treatment And Medical Care</dt>
                <dd className="col-sm-9" style={{fontFamily:'Papyrus,fantasy'}}><b>{Date_Of_Treatment_And_Medical_Care}</b></dd>

                <dt className="col-sm-3" style={{fontFamily:'Papyrus,fantasy'}}>Time Of Treatment And Medical Care</dt>
                <dd className="col-sm-9" style={{fontFamily:'Papyrus,fantasy'}}><b>{Time_Of_Treatment_And_Medical_Care}</b></dd>

                <dt className="col-sm-3" style={{fontFamily:'Papyrus,fantasy'}}>Current Enclosure ID</dt>
                <dd className="col-sm-9" style={{fontFamily:'Papyrus,fantasy'}}><b>{Current_Enclosure_ID}</b></dd>

            </dl>
               

<a className="btn btn-danger btn-lg justify-content-center" href={`/animaldashboard`} style={{fontFamily:'Papyrus,fantasy',marginTop:'25px',marginBottom:'25px'}}>
                            <i className="fa fa-arrow-circle-o-left"></i>&nbsp;<b>Retreival Completed!</b>
</a>
            </div></div>
        )
    }
}
