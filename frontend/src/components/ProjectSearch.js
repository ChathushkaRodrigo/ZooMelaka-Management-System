/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import axios from 'axios';
import '../CSS/Projects.css';

import jsPDF from 'jspdf'
import 'jspdf-autotable'



export default class Search extends Component {
  constructor(props){
    super(props);

    this.state={
      projects:[]
    };

  }

  componentDidMount(){
    this.retrievePosts();
  }

  retrievePosts(){
    axios.get('http://localhost:8015/projects').then(res =>{
      if(res.data.success){
        this.setState({
          projects:res.data.existingPosts
        });
        console.log(this.state.projects)
      }
    });
  }


  onDelete = (id) =>{ 

    axios.delete(`http://localhost:8015/project/delete/${id}`).then((res) =>{
      alert("Deleted Successfuly");
      this.retrievePosts();
    });
  }


  filterData(projects,searchKey){
    const result = projects.filter((post) =>
    post.name.includes(searchKey))

    this.setState({projects:result})
    
  }

  handleSearchArea = (e) =>{
    const searchKey = e.currentTarget.value;
    
    axios.get("http://localhost:8015/projects").then(res =>{
      if(res.data.success){
        this.filterData(res.data.existingPosts,searchKey)
      }
          
    });

  }

//Report Generate Function onClick
jspdGenerator=()=>{

        
  //Create document obj
  var doc =new jsPDF("p","pt","a2") 


  doc.html(document.querySelector("#ProjectsAll"), {
    
    callback:function(pdf){

      pdf.save("AllProjects.pdf");
      
    }

  });

 
}
//End of function report 

  render(){
    return(
        
     <div className="searchback">
        
      <div className="container1">
        <div className="row">
          <div>
                <div className="Caption">
                <h1 className="pageCaption">All Projects</h1>
            </div>
          <div id="psearchbar">
            <input className="form-control" id="psearch" type="search" placeholder="Search.." name="searchQuery" onChange={this.handleSearchArea}></input>
          </div>
          </div>
        </div>

      </div>
     
      <div className="containerPV">
        <p/><p/>
        <table id="ProjectsAll">
          <thead>
              <tr style={{fontSize:'18px',borderBottom:'2px solid black ',borderLeft:'none',borderRight:'none',textAlign:'center'}}>
                <th scope="col" style={{width:'2%'}}>#</th>
                <th scope="col" style={{width:'6%'}}>ID</th>
                <th scope="col" style={{width:'10%'}}>Name</th>
                <th scope="col" style={{width:'16%'}}>Title</th>
                <th scope="col" style={{width:'34%'}}>Descrip.</th>
                <th scope="col" style={{width:'8%'}}>Supervisor</th>
                <th scope="col" style={{width:'12%'}}>Working Team</th>
                <th scope="col" style={{width:'10%'}}>Edit/Delete</th>
              </tr>
           </thead>
           <tbody>
            {this.state.projects.map((projects,index) =>(
              <tr id="tr" key={index} style={{borderLeft:'none',borderRight:'none',borderBottom:'0.5px solid black',textAlign:'center',fontSize:'17px'}}>
                <th scope="row">{index+1}</th>
                <td>{"P" + projects.projectID}
                </td>
                <td>
                  <a href={`/project/report/${projects._id}`} className="searchlink">{projects.name}</a>
                </td>
                <td>{projects.title}</td>
                <td>{projects.description}</td>
                <td>{projects.supervisor}</td>
                <td>{projects.workingTeam}</td>
                {localStorage.setItem('boo', projects.projectID)}
                <td>
                  <a className="btn btn-warning" id="sedit" href={`/project/edit/${projects._id}`}>
                    <i className="fas fa-edit"></i>
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" id="sdelete"
                  onClick={() =>this.onDelete(projects._id)}>
                    <i className="far fa-trash-alt"></i>
                  </a>
                </td>
              </tr>
           ))}
          </tbody>
          </table>

          {/* Copy generate from here */}

       
        

        
       
      </div> 

      <div style={{marginTop:'10px',display:'flex',width:'85%',margin:'0 auto'}}>
            <div style={{}}>
                <button className="btn btn-success" >
              <a href="/adminpanelhome" style={{ textDecoration: "none", color: "white" }}>
                Admin Home
                </a>
              </button>
            </div>
            <div style={{marginLeft:'77.5%'}}>
              <button className="btn btn-success" onClick={this.jspdGenerator}> Generate Projects Report</button>
              <br/><br/>
            </div>
        </div>
      
         
      </div>
      
      

    )
  }
}