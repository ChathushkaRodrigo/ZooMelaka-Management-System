/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import axios from 'axios';
import "../CSS/ResearchCollaboration.css"


class ResearchCollaboration extends Component {
  constructor(props){
  super(props);

  this.state= {
    ResearchCollaboration:[]

  };
}
componentDidMount(){
  this.retrieveResearchCollaboration();
}

retrieveResearchCollaboration(){
  axios.get("http://localhost:8015/collaboration").then(res =>{
    if(true){
      this.setState({
        ResearchCollaboration:res.data.existingCollaboration
      });
      console.log(this.state.ResearchCollaboration)
    }
  })
  
}




  render() {
    return (
    
     
      <div classsName ="researchcolman backgimagem">
         <h1 className ="heading"> Research Collaborations</h1>
         <div className = "imagedivm3">
           <div className="image6"> </div>
          </div>
         <br/>
        
        <div id="researchcol">
        <table className="table table-bordered">
          <thead className="thead-bg-dark">
            <tr>
              <th scope="col" style={{color:'white'}}>#</th>
              <th scope="col">
                <b>Research_feild</b>
              </th>
              <th scope="col">
                <b>Research_topic</b>
              </th>
              <th scope="col">
                <b>Name</b>
              </th>
              <th scope="col">
                <b>Email</b>
              </th>
              <th scope="col">
                <b>Contact_no</b>
              </th>
              <th scope="col">
                <b>Zoological_institution</b>
              </th>
          
            </tr>
          </thead>
          <tbody>
            {this.state.ResearchCollaboration.map((researches,index) =>(
              <tr key={index}>
                <th scope="row">
                  <a
                   href= {`/research/collaboration/${researches._id}`}
                    style={{ textDecoration: false }}
                  >
                    {index + 1}
                  </a>
                </th>
                <td>{researches.research_feild}</td>
                <td>{researches.research_topic}</td>
                <td>{researches.name}</td>
                <td>{researches.email}</td>
                <td>{researches.contact_no} </td>
                <td>{researches.zoological_institution}</td>
             
              </tr>
            ))}
          </tbody>
        </table></div>

     
        
       
      </div>
      
    );
  }
}

export default ResearchCollaboration;