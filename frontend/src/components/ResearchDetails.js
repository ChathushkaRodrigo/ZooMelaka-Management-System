import React, { Component } from 'react'
import axios from 'axios';
import "../CSS/ResearchDetails.css"

class ResearchDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            research:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8015/research/${id}`).then((res)=>{
            
        if(res.data.success){
                this.setState({
                       research:res.data.research
                });

                console.log(this.state.research);
            }
           
        });
     
                
    }


    render() {

        const { name_of_scientist,
            date_research_started,
            date_research_ended,
            catergory,
            research_name,
            research_information} =this.state.research;

  
        return (
            <div>
                  <div className="col-md-8 mt-4 mx-auto" id="edit-booking-body">
                    <h1>    Research Details</h1> 
                    <br/>
                    <br/>
                    <div className="details-form">
                    <form>
                    <div class="form-group">
                        <label for="scientistName">Name of scientist</label>
                        <input type="text" class="form-control" id="scientistName" placeholder={name_of_scientist} disabled/>
                    </div>
                    <br/>
                    <div class="form-group">
                    <label for="startDate"> Date research started</label>
                        <input type="text" class="form-control" id="startDate" placeholder={ date_research_started} disabled/>
                        
                    </div>
                    <br/>
                    <div class="form-group">
                    <label for="endDate"> Date research ended</label>
                        <input type="text" class="form-control" id="endDate" placeholder={ date_research_ended}  disabled/>
                        
                    </div>
                    <br/>
                    <div class="form-group">
                    <label for="catogoryName"> Catergory</label>
                        <input type="text" class="form-control" id="catogoryName" placeholder={ catergory} disabled/>
                        
                    </div>
                    <br/>
                    <div class="form-group">
                    <label for="researchName">Research name</label>
                        <input type="text" class="form-control" id="researchName" placeholder={research_name} disabled/>
                        
                    </div>
                    <br/>
                    <div class="form-group">
                    <label for="researchInfo">Research information</label>
                        <input type="text" class="form-control" id="researchInfo" placeholder={research_information} disabled/>
                        
                    </div>
                    <br/>
                    
                   
                    </form>


                                        


                    </div>

                    </div>
            </div>
            
        )
    }
}

export default ResearchDetails