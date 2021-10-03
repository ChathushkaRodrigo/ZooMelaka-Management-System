import React, { Component } from 'react';
import axios from'axios'
import "../CSS/CreateResearch.css"

import SplitButton from 'react-bootstrap/SplitButton';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Select from 'react-select'


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
                zooAnimal:[],
                posts:[]

            }
            this.retrievePosts()
            this.ref1 = React.createRef();
            this.ref2 = React.createRef();
            this.ref3 = React.createRef();
            this.ref4 = React.createRef();

        }
        retrievePosts(){
            axios.get("/posts").then(res =>{
                if(res.data.success){
                    this.setState({
                        posts:res.data.existingPosts
                    });
                    console.log(this.state.posts)
                }
            })
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
    Demo = () => {
        this.ref1.current.value = "Test1"
        this.ref2.current.value = "Test2"
        this.ref3.current.value = "Test3"
        this.ref4.current.value = "Test4"

        this.state.name_of_scientist = "Test1"
        this.state.catergory = "Test2"
        this.state.research_name = "Test3"
        this.state.research_information = "Test4"

        
    }

    render() {
        const handleSelect=(e)=>{
            console.log(e);
            
            this.state.name_of_scientist = e
            console.log("Helloooo: " + this.state.name_of_scientist)
            this.state.name_of_scientist = e
            this.ref1.current.value = e
        }
        return (
            
            <div className="topic">
            <div classsName="col-md-8-mt-4-mx-auto">
                <h1 className="h3-mb-3 font-weight-normal">Create new Research</h1>
                <div className="  image4"> </div>
                <form className=" formbody needs-validation">
                    {/* <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px',color:"black"}}>name_of_scientist</label>
                        <input type="text" required
                        
                        className="form-control"
                        name="name_of_scientist"
                        placeholder="Enter the scientist /scientists name"
                        value={this.state.name_of_scientist}
                        onChange={this.handleInputChange}/>
                        </div> */}
                        <div className="mb-2">
                <DropdownButton align="center" title="name_of_scientist" id="dropdown-menu-align-end" onSelect={handleSelect}>
                <div>
                {this.state.posts.map(posts =>(
                <div>
                {posts.employeeType=="Researcher" && 

                <Dropdown.Item eventKey={posts.userName}>
                {posts.userName}
                </Dropdown.Item>
                }</div>
                ))}</div>
                
                </DropdownButton>
                <label style={{marginBottom:'5px'}} id="chamForm">Attended Zookeeper</label>
                <input type="text"
                id="chamathRet"
                className="form-control"
                name="Attended_Zookeeper"
                placeholder="Enter The Last Attended Zookeeper:"
                value={this.state.name_of_scientist}
                onChange={this.handleInputChange}
                ref={this.ref1}
                />
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
                            ref = {this.ref2}
                            onChange={this.handleInputChange}/>
                            </div>

                            
                            <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style ={{marginBottom:'5px',color:"black"}}>research_name</label>
                            <input type="text"
                            className="form-control"
                            name="research_name"
                            ref = {this.ref3}
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
                            ref = {this.ref4}
                            placeholder="Enter the researchinformation "
                            defualtValue={this.state.research_information }
                            onChange={this.handleInputChange}/>
                            </div>


                            <button className="btn btn-success"type ="submit" style={{marginTop:'15px'}} onClick={this.validateform} >
                            <i className="far fa-check-square"></i>
                            &nbsp;Save
                            </button>
                            <button className="btn btn-success" style={{marginTop:'15px'}} onClick={this.Demo} type="button">
                        <i className="far fa-check-square"></i>
                        &nbsp; Demo
                    </button>
                         

          
            
            </form>
        </div>
        </div>
        )
}}

export default CreateResearch;