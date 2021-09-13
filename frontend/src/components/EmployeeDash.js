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
        <div className="header1">
          <div className="row">
              
            <div className="col-lg-9 mt-2 mb-2"><b>
              <h4 style={{color:"white",fontSize:"50px"}}>Employee Managment<br/> Dashboard</h4>
              </b>
              <div className="employeeImg"> </div>
              </div>
              <div className="col-lg-3 mt-2 mb-2" style={{margin:"15px",marginLeft:"350px"}}>
              <input style={{width:"500px"}}
              className="form-control"
              type="search"
              placeholder="                                         Search for records"
              name="searchQuery"
              onChange={this.handleSearchArea}>

              </input>
       
              </div>
              </div>
           
        <table className="table" style={{width:"100%"}}>
          <thead style={{backgroundColor:"#333",color:"white",textTransform:'uppercase'}}>
            <tr>
              <th scope="col" style={{backgroundColor:"#333",color:"white"}}>#</th>
              <th scope="col" >eID</th>
              <th scope="col">userName</th>
              <th scope="col">firstName</th>
              <th scope="col">lastName</th>
              <th scope="col">email</th>
              <th scope="col">address</th>
              <th scope="col">employeeType</th>
              <th scope="col">DOB</th>
              <th scope="col">salary</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts,index) =>(
                          <tr>
                            <th scope="row" style={{backgroundColor: "#36c",color: "#fff"}}>{index+1}</th>
                            <td>
                                <a href={`/employee/details/${posts._id}`} style={{textDecoration:'none'}}>
                                {posts.eID}
                                </a>
                                
                                </td>
                            <td>{posts.userName}</td>
                             <td>{posts.firstName}</td>
                            <td>{posts.lastName}</td>
                            <td>{posts.email}</td>
                            <td>{posts.address}</td>
                            <td>{posts.employeeType}</td>
                            <td>{posts.DOB}</td>
                            <td>{posts.salary}</td>
                            <td>
                            <a className="btn btn-warning" style={{margin:'10px'}} href={`/edit/employee/${posts._id}`}>
                              <i className="fas fa-edit"></i>&nbsp;Edit
                            </a>
                            &nbsp;
                            <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(posts._id)}>
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

    
    )
  }
}
