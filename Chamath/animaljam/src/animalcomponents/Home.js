// Usage Of React Class Component
// Shows The Page When The Server Is First Loaded
// User Should Be Able To View All The Initially Posted Content
import React, {Component} from 'react';
import axios from 'axios';


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
axios.get("/animal").then(res=>{
  if(res.data.success){
    this.setState({
      zooAnimal:res.data.existingPosts
    });
    console.log(this.state.zooAnimal);
  }
});
}

onDelete = (id) => {
  axios.delete(`/animal/delete/${id}`).then((res) =>{
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
  axios.get("/animal").then(res=>{
    if(res.data.success){
     this.filterData(res.data.existingPosts,searchAnimalKey)
    }
  });
}


  render(){
    return(
    <div className="w3-container" style={{backgroundColor:'#F8F8FF'}}>
    <div className="row">
    <div className="col-lg-9 mt-2 mb-2">
        <center><h1 style={{fontFamily:'"Arial","Helvetica",sans-serif'}}>Manage Animal Portfolio</h1></center>
        </div>
    <div className="col-lg-3 mt-2 mb-2">
      <input
      className="form-control"
      type="search"
      placeholder="Search Animal Portfolio"
      name="searchQuery"
      onChange={this.handleSearchArea}>
      </input>
        </div>
        </div>
        <table className="table" style={{backgroundColor:'#FFFAFA'}}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Animal_ID</th>
            <th scope="col">Animal_Name</th>
            <th scope="col">Animal_Species</th>
            <th scope="col">Animal_Date_Of_Birth</th>
            <th scope="col">Animal_Gender</th>
            <th scope="col">Feeding_And_Watering_Date</th>
            <th scope="col">Feeding_And_Watering_Time</th>
            <th scope="col">Animal_Satisfaction_Level</th>
            <th scope="col">Animal_Health_Level</th>
            <th scope="col">Attended_Zookeeper</th>
            <th scope="col">Date_Of_Treatment_And_Medical_Care</th>
            <th scope="col">Time_Of_Treatment_And_Medical_Care</th>
            <th scope="col">Current_Enclosure_ID</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
              <tbody>
                {this.state.zooAnimal.map((zooAnimal,index) =>(
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>
                      <a href={`animal/${zooAnimal._id}`} style = {{textDecoration:'none'}}>
                      {zooAnimal.Animal_ID}
                      </a>
                    </td>
                    <td>{zooAnimal.Animal_Name}</td>
                    <td>{zooAnimal.Animal_Species}</td>
                    <td>{zooAnimal.Animal_Date_Of_Birth}</td>
                    <td>{zooAnimal.Animal_Gender}</td>
                    <td>{zooAnimal.Feeding_And_Watering_Date}</td>
                    <td>{zooAnimal.Feeding_And_Watering_Time}</td>
                    <td>{zooAnimal.Animal_Satisfaction_Level}</td>
                    <td>{zooAnimal.Animal_Health_Level}</td>
                    <td>{zooAnimal.Attended_Zookeeper}</td>
                    <td>{zooAnimal.Date_Of_Treatment_And_Medical_Care}</td>
                    <td>{zooAnimal.Time_Of_Treatment_And_Medical_Care}</td>
                    <td>{zooAnimal.Current_Enclosure_ID}</td>
                    <td>
                        <a className="btn btn-warning" href={`/edit/${zooAnimal._id}`}>
                            <i className="fas fa-edit"></i>&nbsp;Update
                        </a>
                        &nbsp;
                        <a className="btn btn-danger" href="#" onClick={() => this.onDelete(zooAnimal._id)}>
                            <i className="far fa-trash-alt"></i>&nbsp;Delete
                        </a>
                    </td>

                    
                  </tr>
                ))}
              </tbody>
        </table>

        <button className="btn btn-success"><a href="/add" style={{textDecoration:'none',color:'white'}}>Create Animal Portfolio</a></button>

    </div>)
  }
}

