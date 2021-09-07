import axios from 'axios';
import React, { Component } from 'react';

class AddAdoption extends Component {

    constructor(props){
        super(props);
        this.setAnimalName = this.setAnimalName.bind(this);
        this.setAdoptionLevel = this.setAdoptionLevel.bind(this);
        this.setPaymentPlan = this.setPaymentPlan.bind(this);
        this.setLiveCam = this.setLiveCam.bind(this);
        this.setAdoptionDate = this.setAdoptionDate.bind(this);
        this.setAnimalId = this.setAnimalId.bind(this);
        this.setMemberId = this.setMemberId.bind(this);
        this.saveAdoption = this.saveAdoption.bind(this);

        this.state = {
            animal_name: '',
            adoption_level: '',
            payment_plan: '',
            live_cam: '',
            adoption_date: '',
            animal_id: '',
            member_id: ''

        }
    }


    setAnimalName(e){
        this.setState({animal_name: e.target.value});
    }
    setAdoptionLevel(e){
        this.setState({adoption_level : e.target.value});
    }
    setPaymentPlan(e){
        this.setState({payment_plan : e.target.value});
    }
    setLiveCam(e){
        this.setState({live_cam : e.target.value});
    }
    setAdoptionDate(e){
        this.setState({adoption_date : e.target.value});
    }
    setAnimalId(e){
        this.setState({animal_id : e.target.value});
    }
    setMemberId(e){
        this.setState({member_id : e.target.value});
    }

    saveAdoption(e){
        e.preventDefault();
        
        console.log('Adoption data', this.state);

        const adoption = {
            animal_name : this.state.animal_name,
            adoption_level: this.state.adoption_level,
            payment_plan: this.state.payment_plan,
            live_cam: this.state.live_cam,
            adoption_date: this.state.adoption_date,
            animal_id: this.state.animal_id,
            member_id: this.state.member_id
        }
        axios.post("/adoption/add", adoption).then(() => {
            alert('adoption report added');
        })
        .catch(error => {
            alert (error.message);
        });
    }

    render() {
        return (
            <div className = "container">
            
                <div className="form-group">
                    <label for="name">Animal Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Animal name" value = {this.state.animal_name} onChange = {this.setAnimalName}/>
                    
                </div>
                <div className="form-group">
                    <label for="age">Adoption Level</label>
                    <input type="number" className="form-control" id="age" placeholder="Enter Adoption Level" value = {this.state.adoption_level} onChange = {this.setAdoptionLevel}/>
                    
                </div>
                <div className="form-group">
                    <label for="name">Payment Plan</label>
                    <input type="text" className="form-control" id="gender" placeholder="Enter Payment Plan" value = {this.state.payment_plan} onChange = {this.setPaymentPlan}/>
                    
                </div>
                <div className="form-group">
                    <label for="age">Live Cam</label>
                    <input type="number" className="form-control" id="age" placeholder="Enter Live Cam" value = {this.state.live_cam} onChange = {this.setLiveCam}/>
                    
                </div>
                <div className="form-group">
                    <label for="age">Adoption Date</label>
                    <input type="number" className="form-control" id="age" placeholder="Enter Adoption Date" value = {this.state.adoption_date} onChange = {this.setAdoptionDate}/>
                    
                </div>
                <div className="form-group">
                    <label for="age">Animal Id</label>
                    <input type="number" className="form-control" id="age" placeholder="Enter Animal Id" value = {this.state.animal_id} onChange = {this.setAnimalId}/>
                    
                </div>
                <div className="form-group">
                    <label for="age">Member Id</label>
                    <input type="number" className="form-control" id="age" placeholder="Enter Memeber Id" value = {this.state.member_id} onChange = {this.setMemberId}/>
                    
                </div>
                  <button className="btn btn-primary" onClick = {this.saveAdoption}>Submit</button>
            
            </div>
        );
    }
}

export default AddAdoption;