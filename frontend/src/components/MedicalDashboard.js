import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  constructor(props){
  super(props);

  this.state= {
    Medical:[]

  };
}
componentDidMount(){
  this.retrieveMedical();
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

onDelete =(id)=>{
  
  axios.delete(`http://localhost:8015/medical/delete/${id}`).then((res) =>{
  
    alert("Deleted Successfully");
  
    this.retrieveMedical();
  })
  
}

  render() {
    return (
      <div classsName ="container">
        <p>All MedicalRecords</p>
        <table className="table">
          <thead>
            <tr>
              <th scope = "col">#</th>
              <th scope = "col">vname</th>
              <th scope = "col">zname</th>
              <th scope = "col">animalID</th>
              <th scope = "col">injID</th>
              <th scope = "col">sinfo </th> 
              <th scope = "col">Action</th>
            </tr>
          </thead>
          <tbody>
          {this.state.Medical.map((medicals,index) =>(
            <tr key={index}>
              <th scope= "row">{index+1}</th>
              <td>
                 <a href= {`/medical/${medicals._id}`}style={{textDecration:'none'}}>
              <td>{medicals.vname}</td>
              </a>
              </td>
              <td>{medicals.zname}</td>
              <td>{medicals.animalID}</td>
              <td>{medicals.injID}</td>
              <td>{medicals.sinfo}</td>
              
              <td>
              <a className = "btn btn-warning" href ={`/medical/update/${medicals._id}`}>
              <i className  ="fas fa-edit"></i>&nbsp;Edit
              </a>
              &nbsp;
              <a className="btn btn-danger" href="/medicalDashboard" onClick={() =>this.onDelete(medicals._id)}>
              <i className ="far fa-trash-alt"></i>&nbsp;Delete
              </a>


               </td>
                
                </tr> 

             
            
        ))}
          </tbody>
        </table>
        <button className="btn btn-success"><a href= "medical/create"style ={{textDecoration:'none',color:"white"}}>Create New Medical Report</a></button>
        
       
      </div>
    );
  }
}

export default Home;