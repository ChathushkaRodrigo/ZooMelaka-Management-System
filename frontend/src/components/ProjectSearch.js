/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import axios from 'axios';
import '../CSS/Projects.css';



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
     
      <div className="container">
        <p/><p/>
        <table>
          <thead>
              <tr style={{fontSize:'18px',borderBottom:'2px solid black ',borderLeft:'none',borderRight:'none'}}>
                <th scope="col" style={{width:'2%'}}>#</th>
                <th scope="col" style={{width:'14%'}}>ID</th>
                <th scope="col" style={{width:'14%'}}>Name</th>
                <th scope="col" style={{width:'14%'}}>Title</th>
                <th scope="col" style={{width:'14%'}}>Descrip.</th>
                <th scope="col" style={{width:'14%'}}>Supervisor</th>
                <th scope="col" style={{width:'14%'}}>Working Team</th>
                <th scope="col" style={{width:'14%'}}>Edit/Delete</th>
              </tr>
           </thead>
           <tbody>
            {this.state.projects.map((projects,index) =>(
              <tr id="tr" key={index} style={{borderLeft:'none',borderRight:'none',borderBottom:'0.5px solid black'}}>
                <th scope="row">{index+1}</th>
                <td>{projects.projectID}
                </td>
                <td>
                  <a href={`/project/report/${projects._id}`} className="searchlink">{projects.name}</a>
                </td>
                <td>{projects.title}</td>
                <td>{projects.description}</td>
                <td>{projects.supervisor}</td>
                <td>{projects.workingTeam}</td>
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
          
      </div>
      </div>

    )
  }
}