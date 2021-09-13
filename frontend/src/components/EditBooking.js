import React, { PureComponent } from 'react'
import axios from 'axios';
import '../CSS/edit-booking.css'
class EditBooking extends PureComponent {
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
        const id = this.props.match.params.id;
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

        axios.put(`http://localhost:8015/booking/update/${id}`,data).then((res)=>{
            if(res.data.success){
                    alert("Booking updated successfully")
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
    
    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8015/booking/${id}`).then((res)=>{
            
        if(res.data.success){
                this.setState({
                       CustomerEmail:res.data.booking.CustomerEmail,
                       CustomerName:res.data.booking.CustomerName,
                       MobileNumber:res.data.booking.MobileNumber,
                       TourOption: res.data.booking.TourOption,
                       Date:res.data.booking.Date,
                       Time:res.data.booking.Time,
                       TourGuideName:res.data.booking.TourGuideName


                });

                console.log(this.state.booking);
            }
           
        });
     
                
    }

    render() {
        return (
            <div className="col-md-8 mt-4 mx-auto" id="edit-booking-body">

            <h1 id="edit-header">   Edit Booking Details  </h1>
            <br/>
                   <br/>
                <div className="edit-form">
                   <form className="needs-validation" noValidate>
                   <div className="form-group" style={{marginBottom:'15px'}}>
                       <label for="emailC" style={{marginBottom:'5px'}} id="label-form">Email address</label>
                       <input type="email" 
                       className="form-control" 
                        name="CustomerEmail" 
                     placeholder="Enter your email " 
                     defaultValue={this.state.CustomerEmail}
                    onChange={this.handleInputChange} />
                   </div>

                   <br/>
                   <div className="form-group">
                   <label for="cName" style={{marginBottom:'5px'}} id="label-form">Customer Name</label>
                       <input type="text" 
                       className="form-control" 
                       id="cName" name="CustomerName" 
                       placeholder="Enter your Name" 
                       defaultValue= {this.state.CustomerName}  
                       onChange={this.handleInputChange}/>
                       
                   </div>
                   <br/>
                   <div className="form-group">
                   <label for="MobileNo" style={{marginBottom:'5px'}} id="label-form">Mobile Number</label>
                       <input type="tel" 
                       className="form-control" 
                       id="MobileNo"name="MobileNumber" 
                       placeholder="Enter your mobile number"
                       defaultValue={this.state.MobileNumber}  
                       onChange={this.handleInputChange} />
                       
                   </div>
                   <br/>
                   <div className="form-group">
                   <label for="TourOp" style={{marginBottom:'5px'}} id="label-form">Tour Option</label>
                       <input type="text" 
                       className="form-control" 
                       id="TourOp" name="TourOption" 
                       placeholder="Enter tour option" 
                       defaultValue={this.state.TourOption}  
                       onChange={this.handleInputChange} />
                       
                   </div>
                   <br/>
                   <div className="form-group">
                   <label for="Date" style={{marginBottom:'5px'}} id="label-form">Date</label>
                       <input type="date" 
                       className="form-control" 
                       id="Date" 
                       name="Date" 
                       placeholder="Enter date you want to visit"  
                       defaultValue={this.state.Date}  
                       onChange={this.handleInputChange} />
                       
                   </div>
                   <br/>
                   <div className="form-group">
                   <label for="Time" style={{marginBottom:'5px'}} id="label-form">Allocated time</label>
                       <input type="time" 
                       className="form-control" 
                       id="Time" 
                       name="Time"
                       placeholder="Time you want to visit" 
                       defaultValue={this.state.Time}  
                       onChange={this.handleInputChange} />
                       
                   </div>
                   <br/>
                   <div className="form-group">
                   <label for="TName" style={{marginBottom:'5px'}}id="label-form">Tour Guide Name</label>
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
                       &nbsp; Update Booking
                   </button> <br/>
                   <button className ="btn btn-success"><a href="/TourGuideDashboard" style={{textDecoration:'none' ,color:'white' }}> Dashboard </a></button>
                  
                   </form>
                   </div>
                   <br/>
                   &nbsp;
                
                  
                    
                                                



           </div>
           
        )
    }
}

export default EditBooking