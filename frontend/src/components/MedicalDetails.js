import React, { Component } from 'react'
import axios from 'axios';
import "../CSS/Createmedical.css"
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import { ImageData } from './ImageData';

class MedicalDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            medical:{}
        };
    }
    jspdGenerator=()=>{

        
        //doc obj
        var doc =new jsPDF('p','pt');
      

        var imageData =ImageData.IMAGE_DATA;
          
        doc.addImage(imageData,"ReportLogo",120, 300, 370, 200);
          
        
        doc.autoTable({ html: '#my-table' })
        //add texts
      
        doc.text(200,20,'Employee Report')
      
        doc.autoTable({
           
           tableWidth:'auto',
           margin: { top: 10 },
            columnStyles: { europe: { halign: 'center' } },
            theme:'grid',
            head: [['vname','zname','animalID','injID','sinfo']],
            body: [
             
              [this.state.medical.vname,this.state.medical.zname,this.state.medical.animalID,this.state.medical.injID,this.state.medical.sinfo],
      
            
              
            ],
           
            styles: {  fontSize:10 },
         
            
          })
          
      
      
      
      
      
      
      
      
      
      
      
      
      
        
      
        //Save pdf 
        doc.save("Generated.pdf");
      
      
      }
      

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8015/medical/get/${id}`).then((res)=>{
            
        if(res.data.success){
                this.setState({
                       medical:res.data.medical
                });

                console.log(this.state.medical);
            }
           
        });
     
                
    }




    render() {

        const { vname,
            zname,
            animalID,
            injID,
            sinfo } =this.state.medical;

  
        return (
            <div>
                <br/>
                    <h1 className="titlepage"> Medical Details</h1> 
                    <div className= "imagemed"> </div>
                    <br/>
                    <br/>

                                        <form>
                    <div class="form-group">
                        <label for="vname">Name of Vetenarian</label>
                        <input type="text" class="form-control" id="vname" placeholder={vname} disabled/>
                    </div>
                    <br/>
                    <div class="form-group">
                    <label for="zname"> Name of Zoo Keeper</label>
                        <input type="text" class="form-control" id="zname" placeholder={zname} disabled/>
                        
                    </div>
                    <br/>
                    <div class="form-group">
                    <label for="animalID"> Animal ID</label>
                        <input type="text" class="form-control" id="animalID" placeholder={ animalID}  disabled/>
                        
                    </div>
                    <br/>
                    <div class="form-group">
                    <label for="injID"> Injection ID</label>
                        <input type="text" class="form-control" id="injID" placeholder={ injID} disabled/>
                        
                    </div>
                    <br/>
                    <div class="form-group">
                    <label for="sinfo"> Surgery Info</label>
                        <input type="text" class="form-control" id="sinfo" placeholder={ sinfo} disabled/>
                        
                    </div>
                    <br/>
                    
                   
                    </form>

                    <button className="btn btn-success" onClick={this.jspdGenerator}>Generate Report</button>
                    <button className="btn btn-success" style={{marginLeft:"0", marginTop:"0px",width:"150px"}} >
                        <a href="/medicalDashboard" style={{ textDecoration: "none", color: "white" }}>
                            AdminDashboard
                        </a>
                    </button>                   





            </div>
            
        )
    }
}

export default MedicalDetails