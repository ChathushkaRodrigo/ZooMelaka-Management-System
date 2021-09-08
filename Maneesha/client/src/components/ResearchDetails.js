import React, { Component } from 'react'
import axios from 'axios';


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
                    <h1>    Research Details</h1> 
                    <br/>
                    <br/>

                                        <form>
                    <div class="form-group">
                        <label for="emailC">name_of_scientis</label>
                        <input type="text" class="form-control" id="emailC" placeholder={name_of_scientist} disabled/>
                    </div>
                    <br/>
                    <div class="form-group">
                    <label for="cName"> date_research_started</label>
                        <input type="text" class="form-control" id="cName" placeholder={ date_research_started} disabled/>
                        
                    </div>
                    <br/>
                    <div class="form-group">
                    <label for="MobileNo"> date_research_ended</label>
                        <input type="text" class="form-control" id="MobileNo" placeholder={ date_research_ended}  disabled/>
                        
                    </div>
                    <br/>
                    <div class="form-group">
                    <label for="TourOp"> catergory</label>
                        <input type="text" class="form-control" id="TourOp" placeholder={ catergory} disabled/>
                        
                    </div>
                    <br/>
                    <div class="form-group">
                    <label for="Date">research_name</label>
                        <input type="text" class="form-control" id="Date" placeholder={research_name} disabled/>
                        
                    </div>
                    <br/>
                    <div class="form-group">
                    <label for="Time">esearch_information</label>
                        <input type="text" class="form-control" id="Time" placeholder={research_information} disabled/>
                        
                    </div>
                    <br/>
                    
                   
                    </form>


                                        





            </div>
            
        )
    }
}

export default ResearchDetails