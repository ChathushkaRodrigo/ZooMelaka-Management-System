import React, { Component } from 'react'
import axios from 'axios';
import '../CSS/booking-details.css'
import { ImageData } from './ImageData';
import jsPDF from 'jspdf'
import 'jspdf-autotable'


class BookingDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            booking:{}
        };
    }


    //Report Generate Function onClick
    jspdGenerator=()=>{

        
        //doc obj
        var doc =new jsPDF('p','pt');

             var imageData =ImageData.IMAGE_DATA;
          
          doc.addImage(imageData,"ReportLogo",120, 300, 370, 200);

          doc.text(110,200,"generated date : 5th Tuesday ");

        doc.autoTable({ html: '#my-table' })
        //add texts

        doc.text(200,20,'Customer Booking Report')
    
        doc.autoTable({
           
           tableWidth:'auto',
           margin: { top: 10 },
            columnStyles: { europe: { halign: 'center' } },
            theme:'grid',
            head: [['Email address', 'Name', 'Mobile Number','Tour Option','Date','Allocated Time','Tour Guide']],
            body: [
               
              [this.state.booking.CustomerEmail,this.state.booking.CustomerName,this.state.booking.MobileNumber,this.state.booking.TourOption,this.state.booking.Date,this.state.booking.Time,this.state.booking.TourGuideName],

            
              
            ],
           
            styles: {  fontSize:10 },
         
            
          })
          
     












        
     
        //Save pdf 
        doc.save("Generated.pdf");


    }





    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8015/booking/${id}`).then((res)=>{
            
        if(res.data.success){
                this.setState({
                        booking:res.data.booking
                });

                console.log(this.state.booking);
            }
           
        });
     
                
    }




    render() {

        const { CustomerName,CustomerEmail,MobileNumber,TourOption,Date,Time,TourGuideName} =this.state.booking;

  
        return (
            <div>
            <div className="col-md-8 mt-4 mx-auto" id="edit-booking-body">
                    <h1 id="header-details">    Booking Details</h1> 
                    <br/>
                    <br/>
                    <div className="details-form">
                     <form>
                    <div class="form-group">
                        <label for="emailC" id="details-lable">Email address</label>
                        <input type="email" class="form-control" id="emailC" placeholder={CustomerEmail} disabled/>
                    </div>
                    <br/>
                    <div class="form-group">
                    <label for="cName" id="details-lable">Customer Name</label>
                        <input type="text" class="form-control" id="cName" placeholder={CustomerName} disabled/>
                        
                    </div>
                    <br/>
                    <div class="form-group">
                    <label for="MobileNo" id="details-lable">Mobile Number</label>
                        <input type="text" class="form-control" id="MobileNo" placeholder={MobileNumber}  disabled/>
                        
                    </div>
                    <br/>
                    <div class="form-group">
                    <label for="TourOp" id="details-lable">Tour Option</label>
                        <input type="text" class="form-control" id="TourOp" placeholder={TourOption} disabled/>
                        
                    </div>
                    <br/>
                    <div class="form-group">
                    <label for="Date" id="details-lable">Date</label>
                        <input type="text" class="form-control" id="Date" placeholder={Date} disabled/>
                        
                    </div>
                    <br/>
                    <div class="form-group">
                    <label for="Time" id="details-lable">Allocated time</label>
                        <input type="text" class="form-control" id="Time" placeholder={Time} disabled/>
                        
                    </div>
                    <br/>
                    <div class="form-group">
                    <label for="TName" id="details-lable">Tour Guide Name</label>
                        <input type="text" class="form-control" id="TName" placeholder={TourGuideName}disabled />
                        
                    </div>
                   
                    </form>

                    <button className="btn btn-success" onClick={this.jspdGenerator} style={{marginTop:'30px',marginBottom:'30px'}}>Generate Report</button>
                    </div>

                    



                                        





            </div> <br/><br/>
            </div>
            
        )
    }
}

export default BookingDetails