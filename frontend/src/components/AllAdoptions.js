/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../CSS/AllAdoptions.css';
import jsPDF from 'jspdf'
import 'jspdf-autotable'

class AllAdoptions extends Component {
  constructor(props){
    super(props);
    //this.getAnimalId = this.getAnimalId.bind(this);

    this.state={
      adoptions:[],
      zooAnimal:[],
      adoptedanimals:[],
      AnimalId:''
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
    axios.get("http://localhost:8015/animal").then(res=>{
    if(res.data.success){
      this.setState({
        zooAnimal:res.data.existingPosts
    });
    console.log(this.state.zooAnimal)
    
  }
});
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

    // getAnimalId(id){
     
    //   this.state.zooAnimal.map((animals) => {
    //     if(animals.Animal_ID === id){
    //        //this.state.AnimalId = this.state.zooAnimal._id;
    //        let animid =  this.state.zooAnimal._id;
    //        console.log(animid);
    //       }})
    //     }
    //Report Generate Function onClick
jspdGenerator=()=>{
    //Create document obj
    var doc =new jsPDF("p","pt","b2")
    doc.html(document.querySelector("#table1"), {
      callback:function(pdf){
        pdf.save("DashboardCustomer.pdf");
      }
    });
}
//End of function report 

  render() {
    return (
          <div className = "bodybackgrnd">
            <div className = "all-hero">
              <div class="bg_image bgimage"></div>
              <div className = "content">
              <p className = "adpt-det-topic">Adoptions Details</p>
              </div>
            </div>
            <div className = "the_content">
            <br/>
            
            <div className ="searchbar">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange = {this.handleSearchArea}></input>
            </div>
            <br/>
            <div style={{backgroundColor:'white',width:'80%',margin:'0 auto'}}>
            <table className = "table table-hover" id = "table1">
            <thead class="thead-dark">
              <tr>
                <th scope= "col" style={{color:'black',fontSize:'20px'}}>#</th>
                <th scope= "col" style={{color:'black',fontSize:'20px'}}>Animal Name</th>
                <th scope= "col" style={{color:'black',fontSize:'20px'}}>Adoption Level</th>
                <th scope= "col" style={{color:'black',fontSize:'20px'}}>Payment Plan</th>
                <th scope= "col" style={{color:'black',fontSize:'20px'}}>Live Cam</th>
                <th scope= "col" style={{color:'black',fontSize:'20px'}}>Adoption Date</th>
                <th scope= "col" style={{color:'black',fontSize:'20px'}}>Animal Id</th>
                <th scope= "col" style={{color:'black',fontSize:'20px'}}>Member Id</th>
                <th scope= "col" style={{color:'black',fontSize:'20px'}}>Action</th>
              </tr>
              </thead>
              <tbody>
                {this.state.adoptions.map((adoptions, index) => (
                  <tr key = {index}>
                    <td scope="row" style={{color:'black',fontSize:'17px'}}>{index + 1}</td>
                    <td style={{color:'black',fontSize:'17px'}}>
                  
                        <Link to = {`/adoption/details/${adoptions._id}`} style = {{textDecoration:"none"}}>
                        {adoptions.animal_name}
                        </Link>
                        
                    </td>
                    <td style={{color:'black',fontSize:'17px'}}>{adoptions.adoption_level}</td>
                    <td style={{color:'black',fontSize:'17px'}}>{adoptions.payment_plan}</td>
                    <td style={{color:'black',fontSize:'17px'}}>{adoptions.live_cam.toString()}</td>
                    <td style={{color:'black',fontSize:'17px'}}>{adoptions.adoption_date}</td>
                    <td style={{color:'black',fontSize:'17px'}}>
                    {/* {this.getAnimalId(adoptions.animal_id)} */}
                    <Link to = {`/animal/details/${adoptions.animal_id}`} style = {{textDecoration:"none"}}>
                      {adoptions.aid}
                      </Link>
                    </td>
                    <td style={{color:'black',fontSize:'17px'}}>
                    <Link to = {`/uprofile/${adoptions.member_id}`} style = {{textDecoration:"none"}}>
                      {adoptions.member_id}
                      </Link>
                      </td>
                    <td style={{color:'black',fontSize:'17px'}}>
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
            </div>
            
            <button className="btn btn-success" onClick={this.jspdGenerator} style={{marginLeft:"290px"}}>Generate Report</button>
            <button className="btn btn-success" style={{marginLeft:"990px", marginTop:"0px",width:"170px"}} >
                        <a href="/adminpanelhome" style={{ textDecoration: "none", color: "white" }}>
                            AdminDashboard
                        </a>
                    </button>
            <div className = "bottomspace"></div>
            </div>
          </div>
        
        
      
    );
  }
}

export default AllAdoptions;