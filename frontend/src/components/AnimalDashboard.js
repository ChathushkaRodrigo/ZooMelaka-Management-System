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
  zooAnimal.Animal_ID.includes(searchAnimalKey))
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
    <div className="col-lg-9 mt-2 mb-2">
        <center><h1 id="animalHeading">Animal Portfolio</h1></center>
    </div>


    



    <div className="col-lg-3 mt-2 mb-2" id="searchingBox">
    
      <input
      className="form-control"
      id = "animalSearch"
      type="search"
      placeholder="Search By Animal ID"
      name="searchQuery"
      onChange={this.handleSearchArea}>
      </input>
        </div>
        </div>
        <div>
        <table id="AnimalTableChamath">

        
        <thead>
          <tr className="animalRow">  
            
            <th scope="col">Animal ID</th>
            <th scope="col">Feeding Date</th>
            <th scope="col">Feeding Time</th>
            <th scope="col">Attended Zookeeper</th>
            {/* <th scope="col">Date Of Medical Care</th>
            <th scope="col">Time Of Medical Care</th> */}
            <th scope="col">Enclosure ID</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
              
              <tbody className="anCol">
                {this.state.zooAnimal.map((zooAnimal,index) =>(
                  <tr key={index}>
                    
                    <td className="anRowing">
                      <a href={`animal/details/${zooAnimal._id}`} style = {{textDecoration:'none'}} id="chamathAnimalID">
                      {zooAnimal.Animal_ID}
                      </a>
                    </td>
                    <td className="anRowing">{zooAnimal.Feeding_And_Watering_Date}</td>
                    <td className="anRowing">{zooAnimal.Feeding_And_Watering_Time}</td>
                    <td className="anRowing">{zooAnimal.Attended_Zookeeper}</td>
                    {/* <td className="anRowing">{zooAnimal.Date_Of_Treatment_And_Medical_Care}</td>
                    <td className="anRowing">{zooAnimal.Time_Of_Treatment_And_Medical_Care}</td> */}
                    <td className="anRowing">{zooAnimal.Current_Enclosure_ID}</td>
                    <td className="anRowing">
                        <a className="btn btn-light btn-small justify-content-center btn-outline-primary" href={`animal/update/${zooAnimal._id}`} id="updateButton">
                            <i className="fas fa-feather-alt"></i>&nbsp;<b>Update</b>
                        </a>
                        
                        <a className="btn btn-light btn-small justify-content-center btn-outline-danger" href="#" onClick={() => this.onDelete(zooAnimal._id)} id="deleteButton">
                            <i className="fas fa-spider"></i>&nbsp;<b>Delete</b>
                        </a>
                    </td>

                    
                  </tr>
                ))}
              </tbody>
        </table></div>

<a className="dashButton btn btn-light btn-small justify-content-center btn-outline-success" href={`animal/add`} style={{marginTop:'10px'}}>
                            <i className="fas fa-dragon"></i>&nbsp;<b>Create Animal Portfolio!</b>
</a>

    </div>)
  }
}

