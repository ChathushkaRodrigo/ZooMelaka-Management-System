import React, { Component } from 'react';
import axios from 'axios';

class UpdateAdoption extends Component {

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
        const id = this.props.match.params.id;
        
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
        axios.post(`/adoption/update/${id}`, adoption).then(() => {
            alert('Adoption Record updated');
        })
        .catch(error => {
            alert (error.message);
        });
    }


    componentDidMount() {
        const id = this.props.match.params.id;

        axios.get(`/adoption/get/${id}`).then((res) => {
            if (res.data.success){
                this.setState({
                    animal_name: res.data.adoption.animal_name,
                    adoption_level: res.data.adoption.adoption_level,
                    payment_plan: res.data.adoption.payment_plan,
                    live_cam: res.data.adoption.live_cam,
                    adoption_date: res.data.adoption.adoption_date,
                    animal_id: res.data.adoption.animal_id,
                    member_id: res.data.adoption.member_id
                });

                console.log(res.data.adoption);
            }
        });
    }

    render() {
        return (
            <div className = "container">
            <div className="form-group">
                    <label for="name">Animal Name</label>
                    <input type="text" className="form-control" id="name"  value = {this.state.animal_name} onChange = {this.setAnimalName}/>
                    
                </div>
                <div className="form-group">
                    <label for="age">Adoption Level</label>
                    <input type="text" className="form-control" id="age" value = {this.state.adoption_level} onChange = {this.setAdoptionLevel}/>
                    
                </div>
                <div className="form-group">
                    <label for="name">Payment Plan</label>
                    <input type="text" className="form-control" id="gender"  value = {this.state.payment_plan} onChange = {this.setPaymentPlan}/>
                    
                </div>
                <div className="form-group">
                    <label for="age">Live Cam</label>
                    <input type="text" className="form-control" id="age"  value = {this.state.live_cam} onChange = {this.setLiveCam}/>
                    
                </div>
                <div className="form-group">
                    <label for="age">Adoption Date</label>
                    <input type="date" className="form-control" id="age"  value = {this.state.adoption_date} onChange = {this.setAdoptionDate}/>
                    
                </div>
                <div className="form-group">
                    <label for="age">Animal Id</label>
                    <input type="text" className="form-control" id="age"  value = {this.state.animal_id} onChange = {this.setAnimalId}/>
                    
                </div>
                <div className="form-group">
                    <label for="age">Member Id</label>
                    <input type="text" className="form-control" id="age" value = {this.state.member_id} onChange = {this.setMemberId}/>
                    
                </div>
              <button className="btn btn-primary" onClick = {this.saveAdoption}>Update</button>
        
        </div>
        );
    }
}

export default UpdateAdoption;