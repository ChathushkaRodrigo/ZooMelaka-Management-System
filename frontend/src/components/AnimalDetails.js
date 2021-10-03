import React, {Component} from 'react';
import axios from 'axios';
import '../CSS/AnimalDetails.css';
import {Link} from 'react-router-dom';
export default class AnimalDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            zooAnimal:{},
            posts:[],
            Medical:[],
            // Research:[]
            
        };

        this.retrievePosts();
        this.retrieveMedical();
        // this.retrieveResearch();
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




    // componentDidMount(){

    //     const id = this.props.match.params.id;

    //     axios.get(`http://localhost:8015/research/${id}`).then((res)=>{
            
    //     if(res.data.success){
    //             this.setState({
    //                    research:res.data.research
    //             });

    //             console.log(this.state.research);
    //         }
           
    //     });
     
                
    // }








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


    //   retrieveResearch(){
    //     axios.get("http://localhost:8015/research").then(res =>{
    //       if(true){
    //         this.setState({
    //           Research:res.data.existingResearch
    //         });
    //         console.log(this.state.Research)
    //       }
    //     })
      
        
    //   }








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
            
            <div className="ChamathRetreiveForm" id="chamathRetForm">
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
                    


                    {/* <div>
                {this.state.Medical.map(Medical =>(
                <div>
                  {Medical.animalID =="ZooKeeper" && 
  
                {Medical.animalID}
                {Medical._id}
                
                }</div>
                ))}</div> */}

            <div className="btn btn-light btn-small justify-content-center btn-outline-info" style={{marginTop:'5px',marginBottom:'5px'}} id="ChamathUpzzz">
            <i className="fa fa-heartbeat"></i>
                {this.state.Medical.map(Medical =>(
                <div>
                {Medical.animalID == Animal_ID && 

                <div>

                <Link to = {`/medical/details/${Medical._id}`} style = {{textDecoration:"none"}}>
                            Check Medical Records!
                      </Link>

                </div>

                }</div>
                ))}</div>




            {/* <div className="btn btn-light btn-small justify-content-center btn-outline-warning" style={{marginTop:'5px',marginBottom:'5px'}} id="ChamathUpsssz">
            <i className="fa fa-heartbeat"></i>
                {this.state.Research.map(Research =>(
                <div>
                {Research.animal_id == Animal_ID && 

                <div>

                <Link to = {`/research/details/${Research.animal_id}`} style = {{textDecoration:"none"}}>
                            Check Research Records!
                      </Link>

                </div>

                }</div>
                ))}</div> */}
                

                



           
<center>
<a className="btn btn-light btn-small justify-content-center btn-outline-success" href={`/animaldashboard`} style={{marginTop:'5px',marginBottom:'5px'}} id="ChamathUpss">
                            <i className="fa fa-paw"></i>&nbsp;<b>Retreival Completed!</b>
</a></center>

{/* <center>
<a className="btn btn-light btn-small justify-content-center btn-outline-primary" href={`/medicalDashboard`} style={{marginTop:'5px',marginBottom:'10px'}} id="ChamathUpsss">
<i className="fa fa-paw"></i>&nbsp;<b>Check Medical Records!</b>
</a></center> */}
            </div></div>
        )
    }
}
