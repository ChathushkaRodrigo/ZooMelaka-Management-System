/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../CSS/AllAdoptions.css';


class AllAdoptions extends Component {
  constructor(props){
    super(props);

    this.state={
      adoptions:[]
    };
  }

  componentDidMount(){
    this.retrieveAdoptions();
  }

  retrieveAdoptions(){
    axios.get("http://localhost:8015/adoption/").then(res =>{
      if(res.data.success){
        this.setState({
          adoptions:res.data.existingAdoptions
        });

        console.log(this.state.adoptions)
      }
    })
  }

  onDelete = (id) => {
      axios.delete(`http://localhost:8015/adoption/delete/${id}`).then((res) => {
          alert("Delete Successfull");
          this.retrieveAdoptions();
      })
  }

  filterData(adoptions, searchkey){
    const result = adoptions.filter((adoptions) => 
    adoptions.animal_name.toLowerCase().includes(searchkey)
    );
    this.setState({adoptions:result});
    }




    handleSearchArea = (e) => {
    const searchkey = e.currentTarget.value;

    axios.get("http://localhost:8015/adoption/").then(res =>{
        if(res.data.success){
            this.filterData(res.data.existingAdoptions, searchkey)
        }
        
        });
    }


  render() {
    return (
 
        
          <div className = "bodybackgrnd">
            <div className = "all-hero">
              <div class="bg_image bgimage"></div>
              <div className = "content">
                Adoptions Details
              </div>
            </div>
            <div className = "the_content">
            <br/>
            
            <div className ="searchbar">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange = {this.handleSearchArea}></input>
            </div>
            <br/>
            <table className="table table-light table-bordered table-hover container ">
              <thead>
              <tr>
                <th scope= "col">#</th>
                <th scope= "col">Animal Name</th>
                <th scope= "col">Adoption Level</th>
                <th scope= "col">Payment Plan</th>
                <th scope= "col">Live Cam</th>
                <th scope= "col">Adoption Date</th>
                <th scope= "col">Animal Id</th>
                <th scope= "col">Member Id</th>
                <th scope= "col">Action</th>
              </tr>
              </thead>
              <tbody>
                {this.state.adoptions.map((adoptions, index) => (
                  <tr key = {index}>
                    <th scope="row">{index + 1}</th>
                    <td>
                        <Link to = {`/adoption/details/${adoptions._id}`} style = {{textDecoration:"none"}}>
                        {adoptions.animal_name}
                        </Link>
                    </td>
                    <td>{adoptions.adoption_level}</td>
                    <td>{adoptions.payment_plan}</td>
                    <td>{adoptions.live_cam.toString()}</td>
                    <td>{adoptions.adoption_date}</td>
                    <td>{adoptions.animal_id}</td>
                    <td>{adoptions.member_id}</td>
                    <td>
                      {/* <a className = "btn btn-warning" href = {`adoption/edit/${adoptions._id}`}>
                        <i className= "fas fa-edit"></i>&nbsp;Edit
                      </a>
                      &nbsp; */}
                      <a className = "deletebtn" href = "#" onClick = {() => this.onDelete(adoptions._id)}>
                        <i className= " far fa-trash-alt"></i>&nbsp;Remove
                      </a>

                    </td>
                  </tr>
                  ))}

              </tbody>
              
            </table>
            
            <button className = "btn btn-success"><Link to = "/adoption/add" style = {{textDecoration:"none", color:"white"}}>Create</Link></button>
            <div className = "bottomspace"></div>
            </div>
          </div>
        
        
      
    );
  }
}

export default AllAdoptions;