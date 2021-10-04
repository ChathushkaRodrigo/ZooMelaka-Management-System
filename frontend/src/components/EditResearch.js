import React, { Component } from 'react';
import axios from 'axios';
import "../CSS/EditResearch.css"

class EditResearch extends Component {

    constructor(props){
        super(props);

        this.state ={
                name_of_scientist:"",
                date_research_started:"",
                date_research_ended:"",
                catergory:"",
                research_name:"",
                animal_id:"",
                research_information:""
        }
    }

    handleInputChange = (e)=>{
        const {name,value} = e.target;
        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit =(e)=>{

        const id = this.props.match.params.id;

        e.preventDefault();

        const {name_of_scientist,
            date_research_started,
            date_research_ended,
            catergory,
            research_name,
            animal_id,
            research_information} = this.state;

        const data={
            name_of_scientist:name_of_scientist,
            date_research_started:date_research_started,
            date_research_ended:date_research_ended,
            catergory: catergory,
            research_name:research_name,
            animal_id:animal_id,
            research_information:research_information
        }
        console.log(data);

        axios.put(`http://localhost:8015/research/update/${id}`,data).then((res)=>{
            if(res.data.success){
                alert("Research Updated Successfully");
                this.setState(
                    {name_of_scientist:"",
                    date_research_started:"",
                    date_research_ended:"",
                    catergory:"",
                    research_name:"",
                    animal_id:"",
                    research_information:""
                    }
                )
            }
        })   
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`http://localhost:8015/research/${id}`).then((res) => {
            if(res.data.success) {
                this.setState({

                    name_of_scientist:res.data.research.name_of_scientist,
                    date_research_started:res.data.research.date_research_started,
                    date_research_ended:res.data.research.date_research_ended,
                    catergory:res.data.research.catergory,
                    research_name:res.data.research.research_name,
                    animal_id:res.data.research.animal_id,
                    research_information:res.data.research.research_information

                });
                console.log(this.state.research);
            }
        });
    }
    render() {
        return (
            <div className="topic1">
            <div className="col-md-8 mt-4 mx-auto">
            <h1 className="h3 mb-3 font-weight-normal" style={{color:'white',fontSize:'40px'}}>Edit Research</h1>
            <div className="image5"> 
              <form className=" formbody1 needs-validation" noValidate>
                  <div className="form-group" style={{marginBottom:'15px'}}>
                  
                        <label style={{marginBottom:'5px',color:"black"}}>Name of scientist/scientists</label>
                        <input type="text" style={{width:'800px'}}
                            className="form-control"
                            name="name_of_scientist"
                            placeholder="Enter the scientist /scientists name"
                            value={this.state.name_of_scientist}
                            onChange={this.handleInputChange} />                    
                    </div>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px',color:"black"}}>Date research started</label>
                        <input type="text" style={{width:'800px'}}
                            className="form-control"
                            name="date_research_started"
                            placeholder="Enter the date research started"
                            value={this.state.date_research_started}
                            onChange={this.handleInputChange} />                    
                    </div>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px',color:"black"}}>Date research ended</label>
                        <input type="text" style={{width:'800px'}}
                            className="form-control"
                            name="date_research_ended"
                            placeholder="Enter the date research ended"
                            value={this.state.date_research_ended}
                            onChange={this.handleInputChange} />                    
                    </div>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px',color:"black"}}>Catergory</label>
                        <input type="text" style={{width:'800px'}}
                            className="form-control"
                            name="catergory"
                            placeholder="Enter the catergory"
                            value={this.state.catergory}
                            onChange={this.handleInputChange} />                    
                    </div>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px',color:"black"}}>Research Name</label>
                        <input type="text" style={{width:'800px'}}
                            className="form-control"
                            name="research_name"
                            placeholder="Enter the research name"
                            value={this.state.research_name}
                            onChange={this.handleInputChange} />                    
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px',color:"black"}}>animal_id</label>
                        <input type="text" style={{width:'800px'}}
                            className="form-control"
                            name="animal_id"
                            placeholder="Enter the animal id"
                            value={this.state.animal_id}
                            onChange={this.handleInputChange} />                    
                    </div>





                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px',color:"black"}}>Research Information </label>
                        <input type="text" style={{width:'800px'}}
                            className="form-control"
                            name="research_information "
                            placeholder="Enter the researchinformation"
                            value={this.state.research_information}
                            onChange={this.handleInputChange} />                    
                    </div>

    
                    <button className="btn btn-success" type="submit" onClick={this.onSubmit} style={{marginLeft:'50px',marginTop:'30px'}}>   
                        <i className="far fa-check-square"> </i>
                        &nbsp; Update
                    </button>
    
                    <button className="btn btn-success" style={{marginLeft:"700px", marginTop:"-35px",width:"150px",marginBottom:'30px'}} >
                        <a href="/ResearchDashboard" style={{ textDecoration: "none", color: "white" }}>
                            AdminDashboard
                        </a>
                    </button>

                </form>
                

                
                    </div>
            </div>
            </div>
        );
    }
}
export default EditResearch;