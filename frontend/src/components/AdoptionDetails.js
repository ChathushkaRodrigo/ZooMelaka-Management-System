import React, { Component } from 'react';
import axios from "axios";
import "../CSS/AdoptionDetails.css"
import jsPDF from 'jspdf'
import 'jspdf-autotable'
class AdoptionDetails extends Component {
    constructor(props){
        super(props);

        this.state = {
            adoption: [],

        }
    }
      // Generate Medical report 
      jspdGenerator=()=>{

        
        //doc obj
        var doc =new jsPDF('p','pt');

        doc.autoTable({ html: '#my-table' })
        //add texts

        doc.text(200,20,'Medical Report')
    
        doc.autoTable({
           
           tableWidth:'auto',
           margin: { top: 10 },
            columnStyles: { europe: { halign: 'center' } },
            theme:'grid',
            head: [['Animal Name', 'Adoption', 'Payment Plan','Live cam','Date of Adoption','Animal ID','Member ID']],
            body: [
               
              [this.state.adoption.animal_name,this.state.adoption.adoption_level,this.state.adoption.payment_plan,this.state.adoption.adoption_date,this.state.adoption.animal_id,this.state.adoption.member_id], 
            ],
           
        //const { animal_name, adoption_level, payment_plan, live_cam, adoption_date, animal_id, member_id} = this.state.adoption;
            styles: {  fontSize:10 },
         
            
          })
          
     

     
        //Save pdf 
        doc.save("Adoption Report.pdf");


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
                                <br/><br/><br/><br/><br/><br/>
                                <div>
        <button className="btn btn-success" onClick={this.jspdGenerator}>Generate Report</button>
        <br/><br/>
        <button className="btn btn-success" >
        <a href="/adminpanelhome" style={{ textDecoration: "none", color: "white" }}>
           Admin Home
          </a>
          

         </button>

        
        </div>
        <br/>
                            </div>
                

            </div>
            </div>
            </div>
        );
    }
}

export default AdoptionDetails;