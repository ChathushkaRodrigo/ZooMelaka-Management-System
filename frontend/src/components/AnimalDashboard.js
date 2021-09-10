/* eslint-disable jsx-a11y/anchor-is-valid */
// Usage Of React Class Component
// Shows The Page When The Server Is First Loaded
// User Should Be Able To View All The Initially Posted Content
import React, {Component} from 'react';
import axios from 'axios';
import '../CSS/AnimalDashboard.css';


export default class Home extends Component{
  constructor(props){
    super(props);

// Initialize An Array To Put The Posted Content
this.state={
  zooAnimal:[]
};

  }

//Call The Method Using In-Built React Method ComponentDidMount()
componentDidMount(){
  this.retrieveAnimal();
}

//Method For GET Content For Animal

retrieveAnimal(){
axios.get("http://localhost:8015/animal").then(res=>{
  if(res.data.success){
    this.setState({
      zooAnimal:res.data.existingPosts
    });
    console.log(this.state.zooAnimal);
  }
});
}

onDelete = (id) => {
  axios.delete(`http://localhost:8015/animal/delete/${id}`).then((res) =>{
    alert("The Animal Record Is Deleted Successfully!");
    this.retrieveAnimal();
  })
}

filterData(zooAnimal,searchAnimalKey){
  const searchResult = zooAnimal.filter((zooAnimal)=>
  zooAnimal.Animal_Name.includes(searchAnimalKey))
  this.setState({zooAnimal:searchResult})
}


handleSearchArea = (e) => {
  const searchAnimalKey = e.currentTarget.value;
  axios.get("http://localhost:8015/animal").then(res=>{
    if(res.data.success){
     this.filterData(res.data.existingPosts,searchAnimalKey)
    }
  });
}


  render(){
    return(
    <div className="AnimalDashboard-body">
    <div className="container-fluid">
    <div className="row">
    <div className="col-lg-9 mt-2 mb-2">
        <center><h1 id="headerName"><b>Manage Animal Portfolio</b></h1></center>
        </div>
    <div className="col-lg-3 mt-2 mb-2">
      <input
      className="form-control"
      type="search"
      placeholder="Search By Animal Name"
      name="searchQuery"
      onChange={this.handleSearchArea}>
      </input>
        </div>
        </div>
        <table className="table" id="hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" style={{fontFamily:'Papyrus, fantasy'}}>Animal ID</th>
            <th scope="col" style={{fontFamily:'Papyrus,fantasy'}}>Animal Name</th>
            <th scope="col" style={{fontFamily:'Papyrus,fantasy'}}>Animal Species</th>
            <th scope="col" style={{fontFamily:'Papyrus,fantasy'}}>Animal Date Of Birth</th>
            <th scope="col" style={{fontFamily:'Papyrus,fantasy'}}>Animal Gender</th>
            <th scope="col" style={{fontFamily:'Papyrus,fantasy'}}>Feeding And Watering Date</th>
            <th scope="col" style={{fontFamily:'Papyrus,fantasy'}}>Feeding And Watering Time</th>
            <th scope="col" style={{fontFamily:'Papyrus,fantasy'}}>Animal Satisfaction Level</th>
            <th scope="col" style={{fontFamily:'Papyrus,fantasy'}}>Animal Health Level</th>
            <th scope="col" style={{fontFamily:'Papyrus,fantasy'}}>Attended Zookeeper</th>
            <th scope="col" style={{fontFamily:'Papyrus,fantasy'}} >Date Of Treatment And Medical Care</th>
            <th scope="col" style={{fontFamily:'Papyrus,fantasy'}}>Time Of Treatment And Medical Care</th>
            <th scope="col" style={{fontFamily:'Papyrus,fantasy'}}>Current Enclosure ID</th>
            <th scope="col" style={{fontFamily:'Papyrus,fantasy'}}>Action</th>
          </tr>
        </thead>
              <tbody>
                {this.state.zooAnimal.map((zooAnimal,index) =>(
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>
                      <a href={`animal/details/${zooAnimal._id}`} style = {{textDecoration:'none'}}>
                      {zooAnimal.Animal_ID}
                      </a>
                    </td>
                    <td style={{fontFamily:'Goudy Old Style,serif'}}><b>{zooAnimal.Animal_Name}</b></td>
                    <td style={{fontFamily:'Goudy Old Style,serif'}}><b>{zooAnimal.Animal_Species}</b></td>
                    <td style={{fontFamily:'Goudy Old Style,serif'}}><b>{zooAnimal.Animal_Date_Of_Birth}</b></td>
                    <td style={{fontFamily:'Goudy Old Style,serif'}}><b>{zooAnimal.Animal_Gender}</b></td>
                    <td style={{fontFamily:'Goudy Old Style,serif'}}><b>{zooAnimal.Feeding_And_Watering_Date}</b></td>
                    <td style={{fontFamily:'Goudy Old Style,serif'}}><b>{zooAnimal.Feeding_And_Watering_Time}</b></td>
                    <td style={{fontFamily:'Goudy Old Style,serif'}}><b>{zooAnimal.Animal_Satisfaction_Level}</b></td>
                    <td style={{fontFamily:'Goudy Old Style,serif'}}><b>{zooAnimal.Animal_Health_Level}</b></td>
                    <td style={{fontFamily:'Goudy Old Style,serif'}}><b>{zooAnimal.Attended_Zookeeper}</b></td>
                    <td style={{fontFamily:'Goudy Old Style,serif'}}><b>{zooAnimal.Date_Of_Treatment_And_Medical_Care}</b></td>
                    <td style={{fontFamily:'Goudy Old Style,serif'}}><b>{zooAnimal.Time_Of_Treatment_And_Medical_Care}</b></td>
                    <td style={{fontFamily:'Goudy Old Style,serif'}}><b>{zooAnimal.Current_Enclosure_ID}</b></td>
                    <td>
                        <a className="btn btn-primary btn-lg justify-content-center" href={`animal/update/${zooAnimal._id}`} style={{fontFamily:'Papyrus,fantasy'}}>
                            <i className="fas fa-edit"></i>&nbsp;<b>Update Animal Portfolio</b>
                        </a>
                        &nbsp;
                        <a className="btn btn-danger btn-lg justify-content-center" href="#" onClick={() => this.onDelete(zooAnimal._id)} style={{fontFamily:'Papyrus,fantasy'}}>
                            <i className="far fa-trash-alt"></i>&nbsp;<b>Delete Animal Portfolio</b>
                        </a>
                    </td>

                    
                  </tr>
                ))}
              </tbody>
        </table>

<a className="btn btn-success btn-lg justify-content-center" href={`animal/add`} style={{fontFamily:'Papyrus,fantasy',marginTop:'25px',marginBottom:'25px'}}>
                            <i className="fa fa-plus-square"></i>&nbsp;<b>Create Animal Portfolio!</b>
</a>
    </div></div>)
  }
}

