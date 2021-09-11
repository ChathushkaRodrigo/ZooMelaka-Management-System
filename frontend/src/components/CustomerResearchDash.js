/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import axios from 'axios';
import "../CSS/CustomerResearchDash.css"


class CustomerResearchDash extends Component {
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



  render() {
    return (
    
     
      <div classsName ="container">
         <h1 className ="heading"> All researches </h1>
         <div className="  image6"> </div>
         <br/>
       
        <table className="table table-bordered">
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
                <b>Research_information</b>
              </th>
          
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
                <td>{researches.name_of_scientist}</td>
                <td>{researches.date_research_started}</td>
                <td>{researches.date_research_ended}</td>
                <td>{researches.catergory}</td>
                <td>{researches.research_name} </td>
                <td>{researches.research_information}</td>
             
              </tr>
            ))}
          </tbody>
        </table>

     
        
       
      </div>
      
    );
  }
}

export default CustomerResearchDash;