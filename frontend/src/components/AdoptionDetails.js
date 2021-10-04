import React, { Component } from 'react';
import axios from "axios";
import "../CSS/AdoptionDetails.css"
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import { ImageData } from './ImageData';
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

    //Report Generate Function onClick
jspdGenerator=()=>{

        
    //doc obj
    var doc =new jsPDF('p','pt');
  
      
    var imageData =ImageData.IMAGE_DATA;
          
    doc.addImage(imageData,"ReportLogo",120, 300, 370, 200);
    
    doc.autoTable({ html: '#my-table' })
    //add texts
  
    doc.text(200,20,'Adoption Report')
  
    doc.autoTable({
       
       tableWidth:'auto',
       margin: { top: 10 },
        columnStyles: { europe: { halign: 'center' } },
        theme:'grid',
        head: [['Animal Name', 'Adoption Level', 'Payment Plan','Live Cam','Date','Animal ID','member ID']],
        body: [
         
          [this.state.adoption.animal_name,this.state.adoption.adoption_level,this.state.adoption.payment_plan,this.state.adoption.live_cam,this.state.adoption.adoption_date,this.state.adoption.animal_id,this.state.adoption.member_id],
  
        
          
        ],
       
        styles: {  fontSize:10 },
     
        
      })
    //Save pdf 
    doc.save("Generated.pdf");
  
  
  }

    render() {
        //const { animal_name, adoption_level, payment_plan, live_cam, adoption_date, animal_id, member_id} = this.state.adoption;
        
        
        
        
        return (

        <div className = "bodybackgrnd">
                <div className = "all-hero">
                    <div className="bg_image bgimage">
                        <div className = "content">
                            <p className = "adpt-det-topic">Adoptions Details</p>
                        </div>
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
            <br/>
                    <button className="btn btn-success" onClick={this.jspdGenerator} style={{marginLeft:'570px'}}>Generate Report</button>
                    
                    <button className="btn btn-success" style={{marginLeft:"430px", marginTop:"0px",width:"170px"}} >
                        <a href="/AllAdoptions" style={{ textDecoration: "none", color: "white" }}>
                            AdminDashboard
                        </a>
                    </button>
                    <div className = "bottomspace"></div>
            </div>
            </div>
        );
    }
}

export default AdoptionDetails;