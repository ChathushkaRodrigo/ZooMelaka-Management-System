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
                Current_Enclosure_ID,
                Adoptability
                 } = this.state.zooAnimal;
        return(
            <div className="AnimalDetails-body">
            <div className = "container-fluid">
            <center><h1 id="AniDetHead">Retrieve Animal Portfolio</h1></center>
            <hr/>
            <div className="ChamathRetreiveForm">
            <form className="myFormsChamath">
                    <div class="form-group">
                        <label for="emailC">Animal Identification Number</label>
                        <input type="text" class="form-control" id="chamathRet" placeholder={Animal_ID} readOnly/>
                    </div>

                  
                    
                    <div class="form-group">
                    <label for="cName">Animal Name</label>
                        <input type="text" class="form-control" id="chamathRet" placeholder={Animal_Name} readOnly/>
                        
                    </div>
                    

                    <div class="form-group">
                    <label for="cName">Animal Species</label>
                        <input type="text" class="form-control" id="chamathRet" placeholder={Animal_Species} readOnly/>
                        
                    </div>
                   

                    <div class="form-group">
                    <label for="cName">Date Of Birth</label>
                        <input type="text" class="form-control" id="chamathRet" placeholder={Animal_Date_Of_Birth} readOnly/>
                        
                    </div>
                    

                    <div class="form-group">
                    <label for="cName">Animal Gender</label>
                        <input type="text" class="form-control" id="chamathRet" placeholder={Animal_Gender} readOnly/>
                        
                    </div>
                   

                    <div class="form-group">
                    <label for="cName">Animal Adoptability</label>
                        <input type="text" class="form-control" id="chamathRet" placeholder={Adoptability} readOnly/>
                        
                    </div>
                    </form></div>



           
<center>
<a className="btn btn-light btn-small justify-content-center btn-outline-success" href={`/animaldashboard`} style={{marginTop:'25px',marginBottom:'100px'}}>
                            <i className="fa fa-paw"></i>&nbsp;<b>Retreival Completed!</b>
</a></center>
            </div></div>
        )
    }
}
