import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  constructor(props){
  super(props);

  this.state= {
    Research:[]

  };
}
componentDidMount(){
  this.retrieveResearch();
}

retrieveResearch(){
  axios.get("/research").then(res =>{
    if(true){
      this.setState({
        Research:res.data.existingResearch
      });
      console.log(this.state.Research)
    }
  })

  
}

onDelete =(id)=>{
  
  axios.delete(`http://localhost:8015/research/delete/${id}`).then((res) =>{
  
    alert("Deleted Successfully");
  
    this.retrieveResearch();
  })
  
}

  render() {
    return (
      <div classsName ="container">
        <p>All researches</p>
        <table className="table">
          <thead>
            <tr>
              <th scope = "col">#</th>
              <th scope = "col">Name_of_scientist</th>
              <th scope = "col">Date_research_started</th>
              <th scope = "col">Date_research_ended</th>
              <th scope = "col">Catergory</th>
              <th scope = "col">Research_name</th>
              <th scope = "col">Research_information </th> 
              <th scope = "col">Action</th>
            </tr>
          </thead>
          <tbody>
          {this.state.Research.map((researches,index) =>(
            <tr key={index}>
              <th scope= "row">{index+1}</th>
              <td>
                 <a href= {`/research/${researches._id}`}style={{textDecration:'none'}}>
              <td>{researches.name_of_scientist}</td>
              </a>
              </td>
              <td>{researches.date_research_startedy}</td>
              <td>{researches.date_research_ended}</td>
              <td>{researches.catergory}</td>
              <td>{researches.research_name}</td>
              <td>{researches.research_information}</td>
              
              <td>
              <a className = "btn btn-warning" href ={`/edit/${researches._id}`}>
              <i className  ="fas fa-edit"></i>&nbsp;Edit
              </a>
              &nbsp;
              <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(researches._id)}>
              <i className ="far fa-trash-alt"></i>&nbsp;Delete
              </a>


               </td>
                
                </tr> 

             
            
        ))}
          </tbody>
        </table>
        <button className="btn btn-success"><a href= "/add"style ={{textDecoration:'none',color:"white"}}>Create New Research</a></button>
        
       
      </div>
    );
  }
}

export default Home;