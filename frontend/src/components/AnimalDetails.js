/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import axios from 'axios';
import '../CSS/AnimalDetails.css';
import {Link} from 'react-router-dom';
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import { ImageData } from './ImageData';
export default class AnimalDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            zooAnimal:{},
            posts:[],
            Medical:[]
        };

        this.retrievePosts();
        this.retrieveMedical();
    }

    jspdGenerator=()=>{

        
        //doc obj
        var doc =new jsPDF('p','pt');
      
          
        
        var imageData =ImageData.IMAGE_DATA;
          
        doc.addImage(imageData,"ReportLogo",120, 300, 370, 200);
        doc.autoTable({ html: '#my-table' })
        //add texts
      
        doc.text(200,20,'Animal Report')
      
        doc.autoTable({
           
           tableWidth:'auto',
           margin: { top: 10 },
            columnStyles: { europe: { halign: 'center' } },
            theme:'grid',
            head: [['Animal ID','Name','Species','Date Of Birth','Gender','Adoptability']],
            body: [
             
              [this.state.zooAnimal.Animal_ID,this.state.zooAnimal.Animal_Name,this.state.zooAnimal.Animal_Species,this.state.zooAnimal.Animal_Date_Of_Birth,this.state.zooAnimal.Animal_Gender,this.state.zooAnimal.Adoptability],
      
            
              
            ],
           
            styles: {  fontSize:10 },
         
            
          })
          

        
      
        //Save pdf 
        doc.save("Generated.pdf");
      
      
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



    retrievePosts(){
        axios.get("/posts").then(res =>{
            if(res.data.success){
                this.setState({
                    posts:res.data.existingPosts
                });
                console.log(this.state.posts)
            }
        })
    }


    retrieveMedical(){
        axios.get("http://localhost:8015/medical/").then(res =>{
          if(true){
            this.setState({
              Medical:res.data.existingMedical
            });
            console.log(this.state.Medical)
          }
        })
      
        
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
            <div className="ChamathRetreiveForm" id="chamathCreaForm">
            <form className="myFormsChamath">
                    <div class="form-group">
                        <label for="emailC" id="chamFormzaaa">Animal ID</label>
                        <input type="text" class="form-control" id="chamathRetzzz" placeholder={Animal_ID} readOnly/>
                    </div>

                  
                    
                    <div class="form-group">
                    <label for="cName" id="chamFormzaaa">Animal Name</label>
                        <input type="text" class="form-control" id="chamathRetzzz" placeholder={Animal_Name} readOnly/>
                        
                    </div>
                    

                    <div class="form-group">
                    <label for="cName" id="chamFormzaaa">Animal Species</label>
                        <input type="text" class="form-control" id="chamathRetzzz" placeholder={Animal_Species} readOnly/>
                        
                    </div>
                   

                    <div class="form-group">
                    <label for="cName" id="chamFormzaaa">Date Of Birth</label>
                        <input type="text" class="form-control" id="chamathRetzzz" placeholder={Animal_Date_Of_Birth} readOnly/>
                        
                    </div>
                    

                    <div class="form-group">
                    <label for="cName" id="chamFormzaaa">Animal Gender</label>
                        <input type="text" class="form-control" id="chamathRetzzz" placeholder={Animal_Gender} readOnly/>
                        
                    </div>
                   

                    <div class="form-group">
                    <label for="cName" id="chamFormzaaa">Adoptability</label>
                        <input type="text" class="form-control" id="chamathRetzzz" placeholder={Adoptability} readOnly/>
                        
                    </div>
                    </form></div>

                    <center>
                    <button className="dashButton btn btn-light btn-small justify-content-center btn-outline-warning" onClick={this.jspdGenerator} style={{width:'228px'}}><i className="fas fa-file"><bold> Generate Report!</bold></i></button></center>
                    



                    {/* <div>
                {this.state.Medical.map(Medical =>(
                <div>
                  {Medical.animalID =="ZooKeeper" && 
  
                {Medical.animalID}
                {Medical._id}
                
                }</div>
                ))}</div> */}

            <div style={{marginTop:'5px',marginBottom:'5px'}} id="ChamathUpzzz">
           
                {this.state.Medical.map(Medical =>(
                <div>
                {Medical.animalID === Animal_ID && 
                <div>
                <div className="btn btn-light btn-small justify-content-center btn-outline-info" style={{width:'228px'}}>
                <i className="fa fa-heartbeat ">  
                <Link to = {`/medical/details/${Medical._id}`} style = {{textDecoration:"none",paddingLeft:'3px'}}>
                    Medical Records!
                      </Link></i>
                    </div>
                </div>

                }</div>
                ))}</div>
                

                



           
<center>
<a className="btn btn-light btn-small justify-content-center btn-outline-success" href={`/animaldashboard`} style={{marginTop:'0px',marginBottom:'5px'}} id="ChamathUpss"> <i className="fa fa-paw"></i>&nbsp;<b>Retreival Completed!</b></a></center>
                           


{/* <center>
<a className="btn btn-light btn-small justify-content-center btn-outline-primary" href={`/medicalDashboard`} style={{marginTop:'5px',marginBottom:'10px'}} id="ChamathUpsss">
<i className="fa fa-paw"></i>&nbsp;<b>Check Medical Records!</b>
</a></center> */}
            </div></div>
        )
    }
}
