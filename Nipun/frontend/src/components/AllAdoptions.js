import React, { Component } from 'react';
import axios from 'axios';


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
    axios.get("/adoption/").then(res =>{
      if(res.data.success){
        this.setState({
          adoption:res.data.existingAdoptions
        });

        console.log(this.state.adoptions)
      }
    })
  }

  onDelete = (id) => {
      axios.delete(`/adoption/delete/${id}`).then((res) => {
          alert("Delete Successfull");
          this.retrieveAdoptions();
      })
  }

  filterData(adoptions, searchkey){
    const result = adoptions.filter((employees) =>
    adoptions.name.toLowerCase().includes(searchkey)
    );
    this.setState({adoptions:result});
    }




    handleSearchArea = (e) => {
    const searchkey = e.currentTarget.value;

    axios.get("/adoption/").then(res =>{
        if(res.data.success){
            this.filterData(res.data.existingAdoption, searchkey)
        }
        
        });
    }


  render() {
    return (
 
        
          <div className = "container">
            <p>All Adoptions</p>
            <table className="table">
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
              </tr>
              </thead>
              <tbody>
                {this.state.adoptions.map((adoptions, index) => (
                  <tr key = {index}>
                    <th scope="row">{index + 1}</th>
                    <td>
                        <a href = {`/details/${adoptions._id}`} style = {{textDecoration:"none"}}>
                        {adoptions.animal_name}
                        </a>
                    </td>
                    <td>{adoptions.adoption_level}</td>
                    <td>{adoptions.payment_plan}</td>
                    <td>{adoptions.live_cam}</td>
                    <td>{adoptions.adoption_date}</td>
                    <td>{adoptions.animal_id}</td>
                    <td>{adoptions.member_id}</td>
                    <td>
                      <a className = "btn btn-warning" href = {`/edit/${adoptions._id}`}>
                        <i className= "fas fa-edit"></i>&nbsp;Edit
                      </a>
                      &nbsp;
                      <a className = "btn btn-danger" href = "#" onClick = {() => this.onDelete(adoptions._id)}>
                        <i className= "far fa-trash-alt"></i>&nbsp;Delete
                      </a>

                    </td>
                  </tr>
                  ))}

              </tbody>
            </table>
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange = {this.handleSearchArea}></input>

            <button className = "btn btn-success"><a href = "/add" style = {{textDecoration:"none", color:"white"}}>Create</a></button>
            
          </div>
        
        
      
    );
  }
}

export default AllAdoptions;