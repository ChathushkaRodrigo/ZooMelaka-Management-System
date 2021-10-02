import React, { Component } from 'react';
import axios from "axios";
import "../CSS/AdoptionDetails.css"
class AdoptionDetails extends Component {
    constructor(props){
        super(props);

        this.state = {
            adoption: [],

        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        axios.get(`http://localhost:8015/adoption/get/${id}`).then((res) => {
            if (res.data.success){
                this.setState({
                    adoption: res.data.adoption
                });

                console.log(this.state.adoption);
            }
        });
    }


    render() {
        //const { animal_name, adoption_level, payment_plan, live_cam, adoption_date, animal_id, member_id} = this.state.adoption;
        
        
        
        
        return (

        <div className = "bodybackgrnd">
                <div className = "all-hero">
                    <div class="bg_image bgimage"></div>
                    <div className = "content">
                        <p className = "adpt-det-topic">Adoptions Details</p>
                    </div>
                </div>
                <div className = "the_content">
                <br/>
            
            <div className = "adpt-det">
                <br/>

                <p>Animal Name = {this.state.adoption.animal_name}</p>
                <p>Adoption Level = {this.state.adoption.adoption_level}</p>
                <p>Payment Plan = {this.state.adoption.payment_plan}</p>
                <p>Live Cam = {this.state.adoption.live_cam}</p>
                <p>Adoption Date= {this.state.adoption.adoption_date}</p>
                <p>Animal Id = {this.state.adoption.animal_id}</p>
                <p>Member Id = {this.state.adoption.member_id}</p>

                <br/>

                
                           
                            <div className = "adp-det-image">
                                <div >
                                <img className = "circlesType" alt ="Adoption"  src = 'https://s28164.pcdn.co/files/Asian-Small-clawed-Otter-0072-2545-300x300.jpg'></img>
                                
                                </div>
                                <div >
                                        
                                </div>
                            </div>
                

            </div>
            </div>
            </div>
        );
    }
}

export default AdoptionDetails;