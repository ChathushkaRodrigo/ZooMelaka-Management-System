import React, { Component } from 'react'
import axios from 'axios';

export default class CreateMedical extends Component {
    constructor(props) {
        super(props);

        this.state = {
            vname:"",
            zname:"",
            animalID:"",
            injID:"",
            sinfo:"",




            
        }
    }
    handleInputChange = (e) =>{
        const {name,value} =e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onsubmit =(e)=>{
        e.preventDefault();
   
        const { vname,zname,animalID,injID,sinfo,} =this.state; 
        const data ={
            vname:vname,
            zname:zname,
            animalID:animalID,
            injID:injID,
            sinfo:sinfo
        }
        console.log(data);

        axios.post("http://localhost:8015/medical/create", data).then((res)=>{
            if(res.data.success){
                alert(`New medical Record created `)
               
                this.setState(
                {
                    vname:"",
                    zname:"",
                    animalID:"",
                    injID:"",
                    sinfo:""

                });
            }
        });

        
    }

    render() {
        return (
            <div classsName="col-md-8-mt-4-mx-auto">
                <h1 className="h3-mb-3 font-weight-normal">Create Medical Record</h1>
                <form className="needs-validation" noValidate>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Vetenarian Name</label>
                        <input type="text"
                        className="form-control"
                        name="vname"
                        placeholder="Enter the vetenarian name"
                        value={this.state.vname}
                        onChange={this.handleInputChange}/>
                        </div>
                        <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Zoo Keeper Name</label>
                        <input type="text"
                        className="form-control"
                        name="zname"
                        placeholder="Enter the Zoo Keeper Name"
                        value={this.state.zname}
                        onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Animal ID</label>
                        <input type="text"
                        className="form-control"
                        name="animalID"
                        placeholder="Enter the animalID"
                        value={this.state.animalID}
                        onChange={this.handleInputChange}/>
                        </div>
                            

                            
                            <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style ={{marginBottom:'5px'}}>Injection ID</label>
                            <input type="text"
                            className="form-control"
                            name="injID"
                            placeholder="Enter the Injection ID"
                            value={this.state.injID}
                            onChange={this.handleInputChange}/>
                            </div>

                             
                            <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style ={{marginBottom:'5px'}}>Surjery Info </label>
                            <input type="text"
                            className="form-control"
                            name="sinfo "
                            placeholder="Enter the Surgery Info "
                            defualtValue={this.state.sinfo }
                            onChange={this.handleInputChange}/>
                            </div>
                        <br/><br/>
                    <button className="btn btn-success" type="submit" style={{marginBottom:'15px'}} onClick={this.onsubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Submit Medical Report
                    </button>

                    
                    
                   
                    </form>
                <br/>

                <button className ="btn btn-success"><a href="/" style={{textDecoration:'none' ,color:'white' }}>  Dashboard </a></button>
                  
     


            </div>
        )
    }
}