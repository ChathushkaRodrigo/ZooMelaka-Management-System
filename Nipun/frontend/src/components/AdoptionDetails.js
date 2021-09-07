import React, { Component } from 'react';
import axios from "axios";

class AdoptionDetails extends Component {
    constructor(props){
        super(props);

        this.state = {
            adoption: []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        axios.get(`/adoption/get/${id}`).then((res) => {
            if (res.data.success){
                this.setState({
                    adoption: res.data.adoption
                });

                console.log(this.state.adoption);
            }
        });
    }

    render() {
        const { animal_name, adoption_level, payment_plan, live_cam, adoption_date, animal_id, member_id} = this.state.adoption;

        return (
            <div>
                <br/>
                <h5>Adoption Details</h5>

                <p>Animal Name = {animal_name}</p>
                <p>Adoption Level = {adoption_level}</p>
                <p>Payment Plan = {payment_plan}</p>
                <p>Live Cam = {live_cam}</p>
                <p>Adoption Date= {adoption_date}</p>
                <p>Animal Id = {animal_id}</p>
                <p>Member Id = {member_id}</p>
            </div>
        );
    }
}

export default EmployeeDetails;