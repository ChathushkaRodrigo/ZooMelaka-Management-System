import React, { Component } from 'react'
import axios from 'axios';

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
  axios.get("/posts").then(res=>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      })
      console.log(this.state.posts)
    }
  })
}

onDelete = (id) =>{
  axios.delete(`/post/delete/${id}`).then((res)=>{
    alert("Delete Successfully");
    this.retrievePosts()
  })
}




  render() {
    return (
      <div className="container">
        <p>All POSTS</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">eID</th>
              <th scope="col">userName</th>
              <th scope="col">firstName</th>
              <th scope="col">lastName</th>
              <th scope="col">email</th>
              <th scope="col">address</th>
              <th scope="col">employeeType</th>
              <th scope="col">DOB</th>
              <th scope="col">salary</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts,index) =>(
                          <tr>
                            <th scope="row">{index+1}</th>
                            <td>
                                <a href={`/post/${posts._id}`} style={{textDecoration:'none'}}>
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
                            <a className="btn btn-warning" href={`/edit/${posts._id}`}>
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

    <button className="btn btn-success"><a href="/add" style={{textDecoration:'none',color:'white'}}>Create New Post</a>

        </button>

      </div>
    )
  }
}
