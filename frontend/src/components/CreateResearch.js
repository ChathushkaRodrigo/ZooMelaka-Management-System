/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import axios from'axios'
import "../CSS/CreateResearch.css"
class CreateResearch extends Component {
        constructor(props){
            
            super(props);
            this.handleEmployee=this.handleEmployee.bind(this);
            this.getemployee=this.getemployee.bind(this);
            this.getanimal=this.getanimal.bind(this);

            this.validateform = this.validateform.bind(this);
            this.state={
                name_of_scientist:"",
                employee_id:"",
                date_research_started:"",
                date_research_ended:"",
                catergory:"",
                research_name:"",
                animal_id:"",
                a_id:"",
                research_information:"",
                zooAnimal:[],
                posts:[],
                post:[],
                scientists:[],
                animal:[]

            }
           
            this.retrievescientist();

            this.ref1 = React.createRef();
            this.ref2 = React.createRef();
            this.ref3 = React.createRef();
            this.ref4 = React.createRef();
            this.ref5 = React.createRef();
        }
        componentDidMount(){
            this.retrieveAnimal();
            this.retrievePosts();
            
            
          }
       
        handleInputChange=(e)=>{
            const{name,value}=e.target;
            this.setState({
                ...this.state,
                [name]:value
            })
        }
        handleEmployee=(e)=>{
            
            this.setState({employee_id:e.target.value});
            this.getemployee(e.target.value);
            console.log(this.state.name_of_scientist);
         
            
        }
        getemployee(eid){
            console.log(eid);
               
            axios.get(`/post/${eid}`).then((res) =>{
                if(res.data.success){
                    this.setState({
                        post:res.data.post
                    })
                    console.log(this.state.post)
                }
            });
            this.setState({name_of_scientist:this.state.post.userName});
            console.log(this.state.name_of_scientist);
        }

        handleAnimal=(e)=>{
            
            this.setState({animal_id:e.target.value});
            this.getanimal(e.target.value);
            
         
            
        }

        getanimal(aid){
            console.log(aid);
               
            axios.get(`/animal/${aid}`).then((res) =>{
                if(res.data.success){
                    this.setState({
                        animal:res.data.post
                    })
                    console.log(this.state.animal)
                }
            });
            this.setState({aid:this.state.animal.Animal_ID});
            console.log(this.state.aid);
        }
        retrievescientist(){
            axios.get("http://localhost:8015/posts").then(res =>{
              if(res.data.success){
                this.setState({
                  posts:res.data.existingPosts
                });
        
                console.log(this.state.posts)
    
                this.state.posts.map((posts) => {
                    if(posts.employeeType === "Researcher"){
                        this.setState({scientists:[...this.state.scientists,posts]});
                       
                    }
                });
                console.log(this.state.scientists);
    
              }
            })
         }


        onSubmit=(e)=>{
            e.preventDefault();

            axios.get(`/post/${this.state.employee_id}`).then((res) =>{
                if(res.data.success){
                    this.setState({
                        post:res.data.post
                    })
                    console.log(this.state.post)
                }
            });
            this.setState({name_of_scientist:this.state.post.userName});

            const { name_of_scientist,
            employee_id,
            date_research_started,
            date_research_ended,
            catergory,
            research_name,
            animal_id,
            research_information
            }=this.state;


            const data={name_of_scientist:name_of_scientist, employee_id: employee_id, date_research_started: date_research_started,date_research_ended:date_research_ended,
                catergory:catergory,research_name:research_name,  animal_id:  animal_id,research_information:research_information
               }
        
                console.log(data);
                axios.post("http://localhost:8015/research/add",data).then((res)=>{
                    if(res.data.success){
                        alert(`New Research created successfully   `);
                        this.setState(
                            {
                                name_of_scientist:"",
                                employee_id:"",
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
                //alert("success !");
            }

    validateform(e){
        if(this.state.animal_id === ''  || this.state.date_research_started === '' || this.state.date_research_ended === '' || this.state.catergory === ''){
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

      Demo = () => {
        this.ref1.current.value = "Test1"
        this.ref2.current.value = "Test2"
        this.ref3.current.value = "Test3"
        this.ref4.current.value = "Test4"
        this.ref5.current.value = "Test5@"

        this.state.catergory = "Test1"
        this.state.research_name = "Test2"
        this.state.research_information = "Test3"
        

        
    }
      


    render() {
        return (
            <div className="topic">
            <div classsName="col-md-8-mt-4-mx-auto">
                <h1 className="h3-mb-3 font-weight-normal" style={{color:'white',fontSize:'40px'}}>Create new Research</h1>
                <div className="ResCreate" style={{backgroundColor:'white'}}> 
                    {/* <form className=" formbody needs-validation"> */}
                    {/* <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px',color:"black"}}>name_of_scientist</label>
                        <input type="text" required
                        
                        className="form-control"
                        name="name_of_scientist"
                        placeholder="Enter the scientist /scientists name"
                        value={this.state.name_of_scientist}
                        onChange={this.handleInputChange}/>
                        </div> */}

                        
                        <div className="form-group" style={{marginBottom:'15px'}}>
                       <label for="scientits" style={{color:'black', marginTop:'10px'}}>Choose a scientist:</label>
                            <select name="employee_id" id="scientits"
                              onChange={this.handleEmployee}
                            >
                            {this.state.scientists.map((employees,index) =>(
                             
                              
                                <option value={employees._id}>{employees.userName}</option>
                         
                                
                                
                            ))}
                            </select>
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

                            <div className="form-group" style={{marginBottom:'15px'}}>
                            <label for="animals" style={{color:'black'}}>Choose an animal:</label>
                            <select name="animal_id" id="animals"
                              onChange={this.handleInputChange}
                            >
                            {this.state.zooAnimal.map((zooAnimal,index) =>(
                                <option value={zooAnimal._id}>{zooAnimal.Animal_Name}</option>
                            ))}
                            </select>
                            </div>
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

                            <div>
                            <button className="btn btn-success"type ="submit" style={{marginTop:'20px',marginLeft:'150px',marginBottom:'20px'}} onClick={this.validateform} >
                            <i className="far fa-check-square"></i>
                            &nbsp;Save
                            </button>
                            <button className="btn btn-success" style={{marginLeft:"1010px", marginTop:"20px",width:"160px",marginBottom:'20px'}} >
                            <a href="/ResearchDashboard" style={{ textDecoration: "none", color: "white" }}>
                            AdminDashboard
                            </a>
                            </button>

                            <button className="btn btn-success" style={{marginTop:'-16px', marginLeft:'400px'}} onClick={this.Demo} type="button">
                                <i className="far fa-check-square"></i>
                                &nbsp; Demo
                            </button>
                            </div>

          
            
                            {/* </form> */}
                </div>
        </div>

        </div>
        )
}}

export default CreateResearch;