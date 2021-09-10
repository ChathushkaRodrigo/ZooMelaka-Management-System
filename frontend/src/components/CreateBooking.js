import React, { Component } from 'react'
import axios from 'axios';
import '../CSS/create-booking.css'

export default class CreateBooking extends Component {
    constructor(props) {
        super(props);

        this.state = {
            CustomerEmail:"",
            CustomerName:"",
            MobileNumber:"",
            TourOption:"",
            Date:"",
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
   
        const { CustomerEmail,CustomerName,MobileNumber,TourOption,Date,Time,TourGuideName} =this.state; 
        const data ={
            CustomerEmail:CustomerEmail,
            CustomerName:CustomerName,
            MobileNumber:MobileNumber,
            TourOption:TourOption,
            Date:Date,
            Time:Time,
            TourGuideName:TourGuideName
        }
        console.log(data);

        axios.post("http://localhost:8015/booking/save", data).then((res)=>{
            if(res.data.success){
                alert(`New Booking created successfully for email  ${CustomerEmail}`)
               
                this.setState(
                {
                    CustomerEmail:"",
                    CustomerName:"",
                    MobileNumber:"",
                    TourOption:"",
                    Date:"",
                    Time:"",
                    TourGuideName:""

                });
            }
        });

        
    }

    render() {
        return (
            <div className="create-booking-body">
            <div class="d-flex flex-column justify-content-center w-100 h-100">


        
            <div className="col-md-8 mt-4 mx-auto">
                
         
  
 
  

             <h1 className="h8 mb-8 font-weight-fw-bold align-content-center" id="crtH">   Create a new Booking   </h1>
             <br/>
           
                    <br/>

                    <form className="create-form"  >
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label for="emailC" style={{marginBottom:'5px'}}>Email address</label>
                    <input type="email" 
                        className="form-control" 
                        name="CustomerEmail" 
                        id="cEmail"
                        placeholder="Enter your email " 
                        defaultValue={this.state.CustomerEmail}
                        onChange={this.handleInputChange}  
                       
                         required/>
                        
                    </div>

                    <br/>
                    <div className="form-group">
                    <label for="cName" style={{marginBottom:'5px'}}>Customer Name</label>
                        <input type="text" 
                        className="form-control" 
                        id="cName" name="CustomerName" 
                        placeholder="Enter your Name" 
                        defaultValue= {this.state.CustomerName}  
                        onChange={this.handleInputChange} required/>
                        
                    </div>
                    <br/>
                    <div className="form-group">
                    <label for="MobileNo" style={{marginBottom:'5px'}}>Mobile Number</label>
                        <input type="number" 
                        className="form-control" 
                        id="MobileNo"name="MobileNumber" 
                        placeholder="Enter your mobile number"
                        defaultValue={this.state.MobileNumber}  
                        onChange={this.handleInputChange}  required/>
                        
                    </div>
                    <br/>
                    <div className="form-group">
                    <label for="TourOp" style={{marginBottom:'5px'}}>Tour Option</label>
                        <input type="text" 
                        className="form-control" 
                        id="TourOp" name="TourOption" 
                        placeholder="Enter tour option" 
                        defaultValue={this.state.TourOption}  
                        onChange={this.handleInputChange} required />
                        
                    </div>
                    <br/>
                    <div className="form-group">
                    <label for="Date" style={{marginBottom:'5px'}}>Date</label>
                        <input type="date" 
                        className="form-control" 
                        id="Date" 
                        name="Date" 
                        placeholder="Enter date you want to visit"  
                        defaultValue={this.state.Date}  
                        onChange={this.handleInputChange}  required/>
                        
                    </div>
                    <br/>
                    <div className="form-group">
                    <label for="Time" style={{marginBottom:'5px'}}>Allocated time</label>
                        <input type="time" 
                        className="form-control" 
                        id="Time" 
                        name="Time"
                        placeholder="Time you want to visit" 
                        defaultValue={this.state.Time}  
                        onChange={this.handleInputChange} required />
                        
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
                        onChange={this.handleInputChange} required/>
                        
                    </div>
                        <br/><br/>
                        <input type="checkbox" name="terms" id="terms" onchange="activateButton(this)"/>  I Agree Terms and Coditions
                        <br/><br/>
                    <button className="btn btn-success" type="submit" style={{marginBottom:'15px'}} onClick={this.onsubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Submit Booking
                    </button>
                    &nbsp;
                    <br/>
                   

                        <br/>
                    
                    
                    <button className ="btn btn-success"><a href="/TourGuideDashboard" style={{textDecoration:'none' ,color:'white' }}>  Dashboard </a></button>
                    </form>
                <br/>

                </div>
                  
     


           
            	
</div>
</div>
        )
    }
}

