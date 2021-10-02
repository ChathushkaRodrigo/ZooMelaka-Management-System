/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import axios from 'axios';

import '../CSS/EmployeeDashboard.css'


export default class Home extends Component {
constructor(props){
  super(props);

  this.state={
    posts:[]
  };
}


componentDidMount(){
  this.retrievePosts();
}

retrievePosts(){
  axios.get("http://localhost:8015/posts").then(res=>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      })
      console.log(this.state.posts)
    }
  })
}

onDelete = (id) =>{
  axios.delete(`http://localhost:8015/post/delete/${id}`).then((res)=>{
    alert("Delete Successfully");
    this.retrievePosts()
  })
}

filterData(posts,searchKey){
  const result = posts.filter((post)=>
    post.eID.includes(searchKey)
  )
  
  this.setState({posts:result})

}


handleSearchArea = (e) =>{
      const searchKey = e.currentTarget.value


      axios.get("/posts").then(res=>{
        if(res.data.success){
          this.filterData(res.data.existingPosts,searchKey)
        }
      })
}

  render() {
    return (
        <div className="EmpDashBody">
        <div className="header1">
          <div className="row">
          
            <div className="col-lg-9 mt-2 mb-2"><b>
              <h4 className="Shas99HeadingEmpDash">Employee Management Dashboard</h4>
             
              </b>
              <div className="employeeImg"> </div>
              </div>
              <div className="col-lg-3 mt-2 mb-2" id="shas99SearchBar">
              <input 
              className="form-control"
              type="search"
              placeholder="                                         Search for records"
              name="searchQuery"
              onChange={this.handleSearchArea}>

              </input>
       
              </div>
              </div>
           
        <table className="table table-bordered table-sm table-hover"  style={{width:'25%', marginLeft:'30px'}} id="shas99Table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Employee ID</th>
              <th scope="col">Username</th>
              <th scope="col">Firstname</th>
              <th scope="col">Lastname</th>
              <th scope="col">E-mail</th>
              <th scope="col">Address</th>
              <th scope="col">Employee Type</th>
              <th scope="col">Date Of Birth</th>
              <th scope="col">Salary</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts,index) =>(
                          <tr>
                            <th >{index+1}</th>
                            <td>
                                <a href={`/employee/details/${posts._id}`}>
                                {posts.eID}
                                </a>
                                
                                </td>
                            <td >{posts.userName}</td>
                             <td>{posts.firstName}</td>
                            <td>{posts.lastName}</td>
                            <td>{posts.email}</td>
                            <td>{posts.address}</td>
                            <td>{posts.employeeType}</td>
                            <td>{posts.DOB}</td>
                            <td>{posts.salary}</td>
                            <td>
                            <a className="btn btn-warning"  href={`/edit/employee/${posts._id}`} id="shasEdit">
                              <i className="fas fa-edit"></i>&nbsp;Edit
                            </a>
                            {/* &nbsp; */}
                            <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(posts._id)} id="shasDelete">
                              <i className="far fa-trash-alt"></i>&nbsp;Delete
                            </a>
                            </td>
                          </tr>
            
                        ))}

                      </tbody>

        
      
      
      </table>
    <button className="btn btn-success" style={{margin:"15px"}}><a href="/employee/add" style={{textDecoration:'none',color:'white'}}>Create New Post</a>

        </button>
        <br/><br/><br/><br/>
      </div> 

    
      </div>)
  }
}
