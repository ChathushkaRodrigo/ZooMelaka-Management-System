import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';


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
    axios.get("http://localhost:7070/projects").then(res =>{
      if(res.data.success){
        this.setState({
          projects:res.data.existingPosts
        });
        console.log(this.state.projects)
      }
    });
  }


  onDelete = (id) =>{ 

    axios.delete(`http://localhost:7070/post/delete/${id}`).then((res) =>{
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
    
    axios.get("http://localhost:7070/projects").then(res =>{
      if(res.data.success){
        this.filterData(res.data.existingPosts,searchKey)
      }
          
    });

  }

  render(){
    return(
        
     <div>
        <NavBar/>
      <div className="container">
        <div className="row">
          <div>
          <div style={{height:'70px',textAlign:'center',backgroundColor:'#009900'}}>
             <h3 className="pageCaption" style={{marginTop:'10px',color:'#FFFFFF',padding:'19px 0'}}>All Projects</h3>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input className="form-control" type="search" placeholder="Search.." name="searchQuery" onChange={this.handleSearchArea}></input>
          </div>
          </div>
        </div>

      </div>
     
      <div className="container">
        <p/><p/>
        <table className="allProjectsT" cellSpacing="20" cellPadding="7" style={{width:'100%'}}>
          <thead>
              <tr style={{fontSize:'18px',borderBottom:'2px solid black ',borderLeft:'none',borderRight:'none'}}>
                <th scope="col">#</th>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Title</th>
                <th scope="col" style={{width:'200px'}}>Descrip.</th>
                <th scope="col">Supervisor</th>
                <th scope="col">Working Team</th>
                <th scope="col">Actions</th>
              </tr>
           </thead>
           <tbody>
            {this.state.projects.map((projects,index) =>(
              <tr key={index} style={{borderLeft:'none',borderRight:'none',borderBottom:'0.5px solid black'}}>
                <th scope="row">{index+1}</th>
                <td>{projects.projectID}
                </td>
                <td>
                  <a href={`/post/${projects._id}`} style={{textDecoration:'none'}}>{projects.name}</a>
                </td>
                <td>{projects.title}</td>
                <td>{projects.description}</td>
                <td>{projects.supervisor}</td>
                <td>{projects.workingTeam}</td>
                <td>
                  <a className="btn btn-warning" href={`/edit/${projects._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger"
                  href="#"
                  onClick={() =>this.onDelete(projects._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp; Delete
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