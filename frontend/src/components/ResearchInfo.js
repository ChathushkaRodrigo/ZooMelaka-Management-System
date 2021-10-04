/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import axios from 'axios';
import "../CSS/EditResearch.css"

class ResearchInfo extends Component {

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
                    animal_id:res.data.animal_id,
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
            <h1 className="h3 mb-3 font-weight-normal">Edit Research Information</h1>
            
              <form className=" formbody1 needs-validation" noValidate>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                    <br/>
                        <label style={{marginBottom:'5px',color:"black"}}>research_information</label>
                        <textarea name="research_information" rows="30" cols="150" value={this.state.research_information}
                            onChange={this.handleInputChange} ></textarea>
                      
                    </div>
                
    
                    <button className="btn btn-success" type="submit" onClick={this.onSubmit}>   
                        <i className="far fa-check-square"> </i>
                        &nbsp; Update
                    </button>
    
                </form>
                <button className="btn btn-success" style={{marginLeft:"0", marginTop:"0px",width:"150px"}} >
                        <a href="/ResearchDashboard" style={{ textDecoration: "none", color: "white" }}>
                            AdminDashboard
                        </a>
                </button>

            </div>
            </div>
        );
    }
}
export default ResearchInfo;