/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import axios from 'axios';



class TourGuideDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {

      bookings:[]
      
    };
  }
componentDidMount(){


this.retrieveBookings();
}


retrieveBookings(){
  axios.get("http://localhost:8015/booking").then(res=>{

  if(res.data.success){
    this.setState({
      bookings:res.data.existingBookings
    });
    console.log(this.state.bookings);
  }
  });
}





  render() {
    return (
      <div className="container">
        <p>Tour Guide Details Dashboard</p>

        <table class= "table">
          <thead class="thead-dark">
            <tr>
            <th scope="col">#</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Customer Email</th>
            <th scope="col">Mobile No</th>
            <th scope="col">Tour Option</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Tour Guide </th>
            <th scope="col">Action</th>
            
            </tr>
          </thead>
          <tbody>
            {this.state.bookings.map((booking,index)=>(
              <tr>
                <th scope="row">
                  <a href={`/booking/${booking._id}`} style={{textDecoration:false}}>
                  {index+1}
                  </a>
                </th>
                <td>{booking.CustomerName}</td>
                <td>{booking.CustomerEmail}</td>
                <td>{booking.MobileNumber}</td>
                <td>{booking.TourOption}</td>
                <td>{booking.Date}</td>
                <td>{booking.Time} </td>
                <td>{booking.TourGuideName}</td>
                <td>
                  
                  <a className="btn btn-warning" hred="#">
                    <i className="fas fa-edit"></i> &nbsp; Edit
                  </a>
                  &nbsp; 
                  <a className="btn btn-danger" hred="#">
                    <i className="far fa-trash-alt"></i> &nbsp; Delete
                  </a>
                  
                </td>

              </tr>

            ))}





          </tbody>



        </table>

        <button className ="btn btn-success"><a href="/add" style={{textDecoration:'none' ,color:'white' }}>  Add new Tour Booking </a></button>




       


      </div>
    )
  }
}

export default TourGuideDashboard