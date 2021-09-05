import React, { Component } from 'react'
import axios from 'axios';
export default class CreateBooking extends Component {
    constructor(props) {
        super(props);

        this.state = {
            CustomerEmail:"",
            CustomerName:"",
            MobileNumber:"",
            TourOption:"",
            VisitDate:"",
            Time:"",
            TourGuideName:""




            
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
   
        const { CustomerEmail,CustomerName,MobileNumber,TourOption,VisitDate,Time,TourGuideName} =this.state; 
        const data ={
            CustomerEmail:CustomerEmail,
            CustomerName:CustomerName,
            MobileNumber:MobileNumber,
            TourOption:TourOption,
            VisitDate:VisitDate,
            Time:Time,
            TourGuideName:TourGuideName
        }
        console.log(data);

        axios.post("http://localhost:8015/booking/save",data).then((res)=>{
            if(res.data.success){

                this.setState(
                {
                    CustomerEmail:" ",
                    CustomerName:" ",
                    MobileNumber:" ",
                    TourOption:"",
                    VisitDate:" ",
                    Time:" ",
                    TourGuideName:" "

                });
            }
        });
    }

    render() {
        return (
            <div className="col-md-8 mt-4 mx-auto">

             <h1 className="h3 mb-3 font-weight-normal">   Create a new Booking   </h1>
             <br/>
                    <br/>

                    <form className="needs-validation" noValidate>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label for="emailC" style={{marginBottom:'5px'}}>Email address</label>
                        <input type="text" 
                        className="form-control" 
                         name="CustomerEmail" 
                      placeholder="Enter your email " 
                      defaultValue={this.state.CustomerEmail}
                     onChange={this.handleInputChange} />
                    </div>

                    <br/>
                    <div className="form-group">
                    <label for="cName" style={{marginBottom:'5px'}}>Customer Name</label>
                        <input type="text" 
                        className="form-control" 
                        id="cName" name="CustomerName" 
                        placeholder="Enter your Name" 
                        defaultValue= {this.state.CustomerName}  
                        onChange={this.handleInputChange}/>
                        
                    </div>
                    <br/>
                    <div className="form-group">
                    <label for="MobileNo" style={{marginBottom:'5px'}}>Mobile Number</label>
                        <input type="text" 
                        className="form-control" 
                        id="MobileNo"name="MobileNumber" 
                        placeholder="Enter your mobile number"
                        defaultValue={this.state.MobileNumber}  
                        onChange={this.handleInputChange} />
                        
                    </div>
                    <br/>
                    <div className="form-group">
                    <label for="TourOp" style={{marginBottom:'5px'}}>Tour Option</label>
                        <input type="text" 
                        className="form-control" 
                        id="TourOp" name="TourOption" 
                        placeholder="Enter tour option" 
                        defaultValue={this.state.TourOption}  
                        onChange={this.handleInputChange} />
                        
                    </div>
                    <br/>
                    <div className="form-group">
                    <label for="Date" style={{marginBottom:'5px'}}>Date</label>
                        <input type="text" 
                        className="form-control" 
                        id="Date" 
                        name="VisitDate" 
                        placeholder="Enter date you want to visit"  
                        defaultValue={this.state.VisitDate}  
                        onChange={this.handleInputChange} />
                        
                    </div>
                    <br/>
                    <div className="form-group">
                    <label for="Time" style={{marginBottom:'5px'}}>Allocated time</label>
                        <input type="text" 
                        className="form-control" 
                        id="Time" 
                        name="Time"
                        placeholder="Time you want to visit" 
                        defaultValue={this.state.Time}  
                        onChange={this.handleInputChange} />
                        
                    </div>
                    <br/>
                    <div className="form-group">
                    <label for="TName" style={{marginBottom:'5px'}}>Tour Guide Name</label>
                        <input type="text" 
                        className="form-control" 
                        id="TName" 
                        name="TourGuideName" 
                        placeholder="Enter tour guide name" 
                        defaultValue={this.state.TourGuideName}  
                        onChange={this.handleInputChange}/>
                        
                    </div>
                        <br/><br/>
                    <button className="btn btn-success" type="submit" style={{marginBottom:'15px'}} onClick={this.onsubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Submit Booking
                    </button>
                   
                    </form>



            </div>
        )
    }
}

