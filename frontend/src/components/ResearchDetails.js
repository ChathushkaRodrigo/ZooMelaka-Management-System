/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import axios from 'axios';
import "../CSS/ResearchDetails.css"
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import { ImageData } from './ImageData';


class ResearchDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            research:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8015/research/${id}`).then((res)=>{
            
        if(res.data.success){
                this.setState({
                       research:res.data.research
                });

                console.log(this.state.research);
            }
           
        });
     
                
    }
//Report Generate Function onClick
jspdGenerator=()=>{

        
  //doc obj
  var doc =new jsPDF('p','pt','c0');

    
  var imageData =ImageData.IMAGE_DATA;
          
  doc.addImage(imageData,"ReportLogo",120, 300, 370, 200);
  
  doc.autoTable({ html: '#my-table' })
  //add texts

  doc.text(200,20,'Research Report')

  doc.autoTable({
     
     tableWidth:'auto',
     margin: { top: 10 },
      columnStyles: { europe: { halign: 'center' } },
      theme:'grid',
      head: [['Scientist', 'Started Date ', 'Ended Date','Catagory','Research Name','Animal ID','Description']],
      body: [
       
        [this.state.research.name_of_scientist,this.state.research.date_research_started,this.state.research.date_research_ended,this.state.research.catergory,this.state.research.research_name,this.state.research.animal_id,this.state.research.research_information],

      
        
      ],
     
      styles: {  fontSize:10 },
   
      
    })
    
  //Save pdf 
  doc.save("ResearchDetails.pdf");


}


    render() {

        const { name_of_scientist,
            date_research_started,
            date_research_ended,
            catergory,
            research_name,
            animal_id,
            research_information} =this.state.research;

  
        return (
            <div>
                  <div className="col-md-8 mt-4 mx-auto" id="edit-booking-body">
                    <h1 style={{color:'white',fontSize:'40px'}}>    Research Details</h1> 
                    <br/>
                    <br/>
                    <div className="details-form">
                    <form>
                    <div class="form-group">
                        <label style ={{marginBottom:'5px',color:"black"}} for="scientistName">Name of scientist  </label>
                        <input type="text" class="form-control" id="scientistName" placeholder={name_of_scientist} disabled/>
                    </div>
                    <br/>
                    <div class="form-group">
                    <label  style ={{marginBottom:'5px',color:"black"}}for="startDate"> Date research started</label>
                        <input type="text" class="form-control" id="startDate" placeholder={ date_research_started} disabled/>
                        
                    </div>
                    <br/>
                    <div class="form-group">
                    <label  style ={{marginBottom:'5px',color:"black"}}for="endDate"> Date research ended</label>
                        <input type="text" class="form-control" id="endDate" placeholder={ date_research_ended}  disabled/>
                        
                    </div>
                    <br/>
                    <div class="form-group">
                    <label  style ={{marginBottom:'5px',color:"black"}}for="catogoryName"> Catergory</label>
                        <input type="text" class="form-control" id="catogoryName" placeholder={ catergory} disabled/>
                        
                    </div>
                    <br/>
                    <div class="form-group">
                    <label  style ={{marginBottom:'5px',color:"black"}}for="researchName">Research name</label>
                        <input type="text" class="form-control" id="researchName" placeholder={research_name} disabled/>
                        
                    </div>
                    <br/>

                    <div class="form-group">
                    <label  style ={{marginBottom:'5px',color:"black"}}for="animal_id">Animal Id</label>
                        <input type="text" class="form-control" id="animal_id" placeholder={research_name} disabled/>
                        
                    </div>
                    <br/>

                    <div class="form-group">
                    <label style ={{marginBottom:'5px',color:"black"}} for="researchInfo">Research information</label>
                        <input type="text" class="form-control" id="researchInfo" placeholder={research_information} disabled/>
                        
                    </div>
                    <br/>
                    
                   
                    </form>
                    <br/>
                    <button className="btn btn-success" onClick={this.jspdGenerator} style={{marginLeft:'120px',marginBottom:'30px'}}>Generate Report</button>
                    <button className="btn btn-success" style={{marginLeft:"690px", marginTop:"0px",width:"160px",marginBottom:'30px'}} >
                        <a href="/ResearchDashboard" style={{ textDecoration: "none", color: "white" }}>
                            AdminDashboard
                        </a>
                    </button>

                                        


                    </div>

                    </div>
            </div>
            
        )
    }
}

export default ResearchDetails