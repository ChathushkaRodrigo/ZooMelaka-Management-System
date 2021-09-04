import React, { Component } from 'react'
import axios from 'axios';


class BookingDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            booking:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8015/booking/${id}`).then((res)=>{
            
        if(res.data.success){
                this.setState({
                        booking:res.data.booking
                });
              
            }
            console.log(this.state.booking);
        });
    }




    render() {

        // const { CustomerName,CustomerEmail,MobileNumber,TourOption,Date,Time,TourGuideName} =this.state.booking;

  
        return (
            <div>
                        Booking Details
                    


            </div>
            
        )
    }
}

export default BookingDetails