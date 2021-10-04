import React, { Component } from 'react';
import axios from 'axios';
import "../CSS/Medicaldashboard.css"

class EditMedical extends Component {

    constructor(props){
        super(props);

        this.state ={
                vname:"",
                zname:"",
                animalID:"",
                injID:"",
                sinfo:""
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

        const {vname,
            zname,
            animalID,
            injID,
            sinfo} = this.state;

        const data={
            vname:vname,
            zname:zname,
            animalID:animalID,
            injID:injID,
            sinfo:sinfo
        }
        console.log(data);

        axios.put(`http://localhost:8015/medical/update/${id}`,data).then((res)=>{
            if(res.data.success){
                alert("Medical Updated Successfully");
                this.setState(
                    {vname:"",
                    zname:"",
                    animalID:"",
                    injID:"",
                    sinfo:""
                    }
                )
            }
        })   
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`http://localhost:8015/medical/get/${id}`).then((res) => {
            if(res.data.success) {
                this.setState({

                    vname:res.data.medical.vname,
                    zname:res.data.medical.zname,
                    animalID:res.data.medical.animalID,
                    injID:res.data.medical.injID,
                    sinfo:res.data.medical.sinfo

                });
                console.log(this.state.research);
            }
        });
    }
    render() {
        return (
            <div classsName="col-md-8-mt-4-mx-auto">
                <br/>
                <h1 className="titlepage" style={{color:'white',fontSize:'40px'}}>Edit Medical Record</h1>
                <div id="editform" style={{backgroundColor:'white',width:'80%',margin:'0 auto',paddingTop:'30px',paddingBottom:"30px"}}>
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
                            name="sinfo"
                            placeholder="Enter the Surgery Info "
                            defualtValue={this.state.sinfo }
                            onChange={this.handleInputChange}/>
                            </div>

    
                    
                    <button className="btn btn-success" style={{marginLeft:"150px", marginTop:"0px",width:"160px"}} >
                        <a href="/medicalDashboard" style={{ textDecoration: "none", color: "white" }}>
                            AdminDashboard
                        </a>
                    </button>
                    <button className="btn btn-success" style={{marginLeft:'955px'}} type="submit" onClick={this.onSubmit}>   
                        <i className="far fa-check-square"> </i>
                        &nbsp; Update
                    </button>
    
                </form>
                </div>

                

            </div>
        );
    }
}
export default EditMedical;