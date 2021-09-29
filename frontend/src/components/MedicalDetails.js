import React, { Component } from 'react'
import axios from 'axios';
import "../CSS/Createmedical.css"

class MedicalDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            medical:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8015/medical/get/${id}`).then((res)=>{
            
        if(res.data.success){
                this.setState({
                       medical:res.data.medical
                });

                console.log(this.state.medical);
            }
           
        });
     
                
    }




    render() {

        const { vname,
            zname,
            animalID,
            injID,
            sinfo } =this.state.medical;

  
        return (
            <div>
                <br/>
                    <h1 className="titlepage"> Medical Details</h1> 
                    <div className= "imagemed"> </div>
                    <br/>
                    <br/>

                                        <form>
                    <div class="form-group">
                        <label for="vname">Name of Vetenarian</label>
                        <input type="text" class="form-control" id="vname" placeholder={vname} disabled/>
                    </div>
                    <br/>
                    <div class="form-group">
                    <label for="zname"> Name of Zoo Keeper</label>
                        <input type="text" class="form-control" id="zname" placeholder={zname} disabled/>
                        
                    </div>
                    <br/>
                    <div class="form-group">
                    <label for="animalID"> Animal ID</label>
                        <input type="text" class="form-control" id="animalID" placeholder={ animalID}  disabled/>
                        
                    </div>
                    <br/>
                    <div class="form-group">
                    <label for="injID"> Injection ID</label>
                        <input type="text" class="form-control" id="injID" placeholder={ injID} disabled/>
                        
                    </div>
                    <br/>
                    <div class="form-group">
                    <label for="sinfo"> Surgery Info</label>
                        <input type="text" class="form-control" id="sinfo" placeholder={ sinfo} disabled/>
                        
                    </div>
                    <br/>
                    
                   
                    </form>


                                        





            </div>
            
        )
    }
}

export default MedicalDetails