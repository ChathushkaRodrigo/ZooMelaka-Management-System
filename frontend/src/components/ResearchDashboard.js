/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import axios from 'axios';
import "../CSS/ResearchDashboard.css"
import {Link} from 'react-router-dom';
class ResearchDashboard extends Component {
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
  axios.get("http://localhost:8015/research").then(res =>{
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
         <h1 className ="heading"> All researches </h1>
         <div className="  image6"> </div>
         <br/>
       
        <table className="table table-bordered table-hover">
          <thead className="thead-bg-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">
                <b>Name_of_scientist</b>
              </th>

              <th scope="col">
                <b>Date_research_started</b>
              </th>
              <th scope="col">
                <b>Date_research_ended</b>
              </th>
              <th scope="col">
                <b>Catergory</b>
              </th>
              <th scope="col">
                <b>Research_name</b>
              </th>
              <th scope="col">
                <b>Animal Id</b>
              </th>

              <th scope="col">
                <b>Research_information</b>
              </th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.Research.map((researches,index) =>(
              <tr key={index}>
                <th scope="row">
                  <a
                   href= {`/research/details/${researches._id}`}
                    style={{ textDecoration: false }}
                  >
                    {index + 1}
                  </a>
                </th>
                <td> <Link to = {`/employee/details/${researches.employee_id}`} style = {{textDecoration:"none"}}>
                      {researches.name_of_scientist} 
                      </Link></td>
                <td>{researches.date_research_started}</td>
                <td>{researches.date_research_ended}</td>
                <td>{researches.catergory}</td>
                <td>{researches.research_name} </td>
                <td>
                <Link to = {`/animal/details/${researches.animal_id}`} style = {{textDecoration:"none"}}>
                      {researches.animal_id} 
                      </Link>
               </td>
                <td> <a className="btn btn-warning" href ={`/research/researchinfo/${researches._id}`}>
                     Research Data &nbsp;
                  </a>
                  
                </td>
                <td>
                  <a className="btn btn-warning" href ={`research/edit/${researches._id}`}>
                    Edit &nbsp;
                  </a>
                  &nbsp; &nbsp; &nbsp;
                  <a
                    className="btn btn-danger"
                    href=""
                    onClick={() => this.onDelete(researches._id)}>
                    <i className="far fa-trash-alt"></i> &nbsp; Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="btn btn-success"><a href= "/research/add"style ={{textDecoration:'none',color:"white"}}>Create New Research</a></button>
        &nbsp; &nbsp;
        <button className="btn btn-success"><a href= "/research/collaboration/"style ={{textDecoration:'none',color:"white"}}>Collaboration</a></button>
        <br/> <br/>
        <br/> <br/>
       
      </div>
      
    );
  }
}

export default ResearchDashboard;