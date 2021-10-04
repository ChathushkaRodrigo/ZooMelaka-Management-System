/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import axios from 'axios';
import "../CSS/ResearchDashboard.css"
import {Link} from 'react-router-dom';
import jsPDF from 'jspdf'
import 'jspdf-autotable'

class ResearchDashboard extends Component {
  constructor(props){
  super(props);

  this.state= {
    Research:[]

  };
}

//Report Generate Function onClick
jspdGenerator=()=>{


  //Create document obj
  var doc =new jsPDF("p","pt","b2")
  doc.html(document.querySelector("#researches"), {
    callback:function(pdf){
      pdf.save("Report Details.pdf");
    }
  });
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



filterData(Research, searchkey){
  const result = Research.filter((Research) => 
  Research.catergory.toLowerCase().includes(searchkey)
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
    
     
      <div id ="containerMN" style={{backgroundImage:'url(../images/cheetah.jpg)'}}>
         <h1 className ="heading"> All researches </h1>
         <div className = "imagedivm">
           <div className="image6"> </div>
          </div>
         <br/>

         <div className ="searchbar">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange = {this.handleSearchArea}></input>
            </div>
            <br/>
       <div style={{backgroundColor:'white', width:'95%',margin:'0 auto'}}>
         <table className="table table-bordered table-hover" id ="researches">
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
        </div>

        <button className="btn btn-success"><a href= "/research/add"style ={{textDecoration:'none',color:"white"}}>Create New Research</a></button>
        &nbsp; &nbsp;
        <button className="btn btn-success"><a href= "/research/collaboration/"style ={{textDecoration:'none',color:"white"}}>Collaboration</a></button>
        <br/> <br/>
        <br/> 
        <div>
        <button className="btn btn-success" onClick={this.jspdGenerator}>Generate Report</button>
        <br/><br/>
        
         <button className="btn btn-success" style={{marginLeft:"0", marginTop:"0px",width:"150px"}} >
                        <a href="/adminpanelhome" style={{ textDecoration: "none", color: "white" }}>
                            AdminHome
                        </a>
          </button>

        </div>
        <br/>
      </div>
      
    );
  }
}

export default ResearchDashboard;