/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import axios from 'axios';
import "../CSS/ResearchDetails.css"
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import { ImageData } from './ImageData';


class ResearchData extends Component {
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
  var doc =new jsPDF('p','pt');

    
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
  doc.save("Generated.pdf");


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
                    <h1 style={{color:'white',fontSize:'40px'}}>    Research Data</h1> 
                    <br/>
                    <br/>
                    <div className="details-form">
                    
                    <div class="form-group">
                    <label style ={{marginBottom:'5px',color:"black"}} for="researchInfo">Research information</label>
                        
                        <textarea name="research_information" rows="25" cols="132" value={research_information}
                            onChange={this.handleInputChange} disabled />
                    </div>
                    <br/>
                    
                 
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

export default ResearchData