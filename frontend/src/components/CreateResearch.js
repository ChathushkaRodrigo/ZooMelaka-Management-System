/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import axios from'axios'
import "../CSS/CreateResearch.css"
class CreateResearch extends Component {
        constructor(props){
            super(props);
            this.validateform = this.validateform.bind(this);
            this.state={
                name_of_scientist:"",
                date_research_started:"",
                date_research_ended:"",
                catergory:"",
                research_name:"",
                animal_id:"",
                research_information:"",
                zooAnimal:[]

            }
        }
        componentDidMount(){
            this.retrieveAnimal();
          }
       
        handleInputChange=(e)=>{
            const{name,value}=e.target;
            this.setState({
                ...this.state,
                [name]:value
            })
        }
        onSubmit=(e)=>{
            e.preventDefault();
            const { name_of_scientist,
            date_research_started,
            date_research_ended,
            catergory,
            research_name,
            animal_id,
            research_information
        }=this.state;


            const data={name_of_scientist:name_of_scientist, date_research_started: date_research_started,date_research_ended:date_research_ended,
                catergory:catergory,research_name:research_name,  animal_id:  animal_id,research_information:research_information
               }
        
        console.log(data);
        axios.post("http://localhost:8015/research/add",data).then((res)=>{
            if(res.data.success){
                alert(`New Research created successfully   `);
                this.setState(
                    {
                        name_of_scientist:"",
                        date_research_started:"",
                        date_research_ended:"",
                        catergory:"",
                        research_name:"",
                        animal_id:"",
                        research_information :""
                    }

                )
            }
        })
    }

    validateform(e){
        if(this.state.name_of_scientist === '' || this.state.date_research_started === '' || this.state.date_research_ended === '' || this.state.catergory === ''){
            alert("All the inputs must be filled!");
        }
        else{
            this.onSubmit(e);
        }
    }
    
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

    render() {
        return (
            <div className="topic">
            <div classsName="col-md-8-mt-4-mx-auto">
                <h1 className="h3-mb-3 font-weight-normal">Create new Research</h1>
                <div className="  image4"> </div>
                <form className=" formbody needs-validation">
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px',color:"black"}}>name_of_scientist</label>
                        <input type="text" required
                        
                        className="form-control"
                        name="name_of_scientist"
                        placeholder="Enter the scientist /scientists name"
                        value={this.state.name_of_scientist}
                        onChange={this.handleInputChange}/>
                        </div>
                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style ={{marginBottom:'5px',color:"black"}}>date_research_started</label>
                            <input type="date"
                            className="form-control"
                            name="date_research_started"
                            placeholder="Enter the date research started"
                            value={this.state.date_research_started}
                            onChange={this.handleInputChange}/>
                            </div>

                            <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style ={{marginBottom:'5px',color:"black"}}>date_research_ended</label>
                            <input type="date"
                            className="form-control"
                            name="date_research_ended"
                            placeholder="Enter the date research ended"
                            value={this.state.date_research_ended}
                            onChange={this.handleInputChange}/>
                            </div>
                            
                            <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style ={{marginBottom:'5px',color:"black"}}>catergory</label>
                            <input type="text"
                            className="form-control"
                            name="catergory"
                            placeholder="Enter the catergory"
                            value={this.state.catergory}
                            onChange={this.handleInputChange}/>
                            </div>

                            
                            <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style ={{marginBottom:'5px',color:"black"}}>research_name</label>
                            <input type="text"
                            className="form-control"
                            name="research_name"
                            placeholder="Enter the research name"
                            value={this.state.research_name}
                            onChange={this.handleInputChange}/>
                            </div>


                            <label for="animals">Choose an animal:</label>
                            <select name="animal_id" id="animals"
                              onChange={this.handleInputChange}
                            >
                            {this.state.zooAnimal.map((zooAnimal,index) =>(
                                <option value={zooAnimal._id}>{zooAnimal.Animal_Name}</option>
                            ))}
                            </select>
                            {/* <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style ={{marginBottom:'5px',color:"black"}}>animal_id</label>
                            <input type="text"
                            className="form-control"
                            name="animal_id"
                            placeholder="Enter the animal id"
                            value={this.state.animal_id}
                            onChange={this.handleInputChange}/>
                            </div> */}

                             
                            <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style ={{marginBottom:'5px',color:"black"}}>research_information </label>
                            <input type="text"
                            className="form-control"
                            name="research_information"
                            placeholder="Enter the researchinformation "
                            defualtValue={this.state.research_information }
                            onChange={this.handleInputChange}/>
                            </div>


                            <button className="btn btn-success"type ="submit" style={{marginTop:'15px'}} onClick={this.validateform} >
                            <i className="far fa-check-square"></i>
                            &nbsp;Save
                            </button>
                         

          
            
            </form>
        </div>
        </div>
        )
}}

export default CreateResearch;
