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
filterData(researches, searchkey){
  const result = researches.filter((researches) =>
  researches.catergory.toLowerCase().includes(searchkey)
  );
  this.setState({Research:result});
  }




  handleSearchArea = (e) => {
  const searchkey = e.currentTarget.value;

  axios.get("http://localhost:8015/research").then(res =>{
      if(res.data.success){
          this.filterData(res.data.existingResearch, searchkey)
      }
      
      });
  }



  render() {
    return (
    
     
      <div classsName ="container">
         <h1 className ="heading"> All researches </h1>
         <div className = "imagedivm2">
           <div className="image6"> </div>
          </div>
         <br/>
         <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange = {this.handleSearchArea}></input>

        <div style={{backgroundColor:'white'}}>
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
                <td><a className="btn btn-warning" href ={`/research/researchdata/${researches._id}`}>
                     Research Data &nbsp;
                  </a>
                  </td>
             
              </tr>
            ))}
          </tbody>
        </table>
        </div>

     
        
        
        <button className="btn btn-success"><a href= "/research/createCollaboration/"style ={{textDecoration:'none',color:"white"}}>Create New Collaboration</a></button>
      </div>
      
    );
  }
}

export default CustomerResearchDash;