/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import axios from'axios'
import "../CSS/CreateResearch.css"
class CreateResearch extends Component {
        constructor(props){
            super(props);
            this.state={
                name_of_scientist:"",
                date_research_started:"",
                date_research_ended:"",
                catergory:"",
                research_name:"",
                research_information:""

            }
            this.ref1 = React.createRef();
            this.ref2 = React.createRef();
            this.ref3 = React.createRef();
            this.ref4 = React.createRef();
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
            research_information
        }=this.state;


            const data={name_of_scientist:name_of_scientist, date_research_started: date_research_started,date_research_ended:date_research_ended,
                catergory:catergory,research_name:research_name,research_information:"aves"
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
                        research_information :""
                    }

                )
            }
        })
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
        return (
            <div className="topic">
            <div classsName="col-md-8-mt-4-mx-auto">
                <h1 className="h3-mb-3 font-weight-normal">Create new Research</h1>
                <div className="  image4"> </div>
                <form className=" formbody needs-validation" noValidate>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>name_of_scientist</label>
                        <input type="text" required
                        ref = {this.ref1}
                        className="form-control"
                        name="name_of_scientist"
                        placeholder="Enter the scientist /scientists name"
                        value={this.state.name_of_scientist}
                        onChange={this.handleInputChange}/>
                        </div>
                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style ={{marginBottom:'5px'}}>date_research_started</label>
                            <input type="date"
                            className="form-control"
                            name="date_research_started"
                            placeholder="Enter the date research started"
                            value={this.state.date_research_started}
                            onChange={this.handleInputChange}/>
                            </div>

                            <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style ={{marginBottom:'5px'}}>date_research_ended</label>
                            <input type="date"
                            className="form-control"
                            name="date_research_ended"
                            placeholder="Enter the date research ended"
                            value={this.state.date_research_ended}
                            onChange={this.handleInputChange}/>
                            </div>
                            
                            <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style ={{marginBottom:'5px'}}>catergory</label>
                            <input type="text"
                            className="form-control"
                            ref = {this.ref2}
                            name="catergory"
                            placeholder="Enter the catergory"
                            value={this.state.catergory}
                            onChange={this.handleInputChange}/>
                            </div>

                            
                            <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style ={{marginBottom:'5px'}}>research_name</label>
                            <input type="text"
                            className="form-control"
                            ref = {this.ref3}
                            name="research_name"
                            placeholder="Enter the research name"
                            value={this.state.research_name}
                            onChange={this.handleInputChange}/>
                            </div>

                             
                            <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style ={{marginBottom:'5px'}}>research_information </label>
                            <input type="text"
                            className="form-control"
                            ref = {this.ref4}
                            name="research_information "
                            placeholder="Enter the researchinformation "
                            defualtValue={this.state.research_information }
                            onChange={this.handleInputChange}/>
                            </div>


                            <button className="btn btn-success"type ="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp;Save
                            </button>
                         
                            <button className="btn btn-success" style={{marginTop:'15px'}} onClick={this.Demo} type="button">
                        <i className="far fa-check-square"></i>
                        &nbsp; Demo
                    </button>
                    <br/><br/><br/><br/><br/>
          
            
            </form>
        </div>
        </div>
        )
}}

export default CreateResearch;
