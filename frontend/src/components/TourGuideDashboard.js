/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import axios from "axios";
import '../CSS/tour-guide-dashboard.css'
import jsPDF from 'jspdf'
import 'jspdf-autotable'



class TourGuideDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookings: [],
    };
  }

//Report Generate Function onClick
jspdGenerator=()=>{

        
  //doc obj
  var doc =new jsPDF('p','pt');
  var specialElementHandlers = {
    '#getPDF': function(element, renderer){
      return true;
    },
    '.controls': function(element, renderer){
      return true;
    }
  };


  


  //Save pdf 
  doc.save("Generated.pdf");


}


  componentDidMount() {
    this.retrieveBookings();
  }

  retrieveBookings() {
    axios.get("http://localhost:8015/booking").then((res) => {
      if (res.data.success) {
        this.setState({
          bookings: res.data.existingBookings,
        });
      }
    });
  }
  onDelete = (id) => {
    alert("Deleted Successfully");
    axios.delete(`http://localhost:8015/booking/delete/${id}`).then((res) => {
      this.retrieveBookings();
    });
  };

  filterData(bookings, searchKey) {
    const result = bookings.filter(
      (booking) =>
        booking.CustomerEmail.toLowerCase().includes(searchKey) ||
        booking.CustomerName.toLowerCase().includes(searchKey) ||
        booking.TourGuideName.toLowerCase().includes(searchKey)
    );
    this.setState({ bookings: result });
  }

  handleSearchBookingQuery = (e) => {
    const searchKey = e.currentTarget.value;
    axios.get("http://localhost:8015/booking").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingBookings, searchKey);
      }
    });
  };

  render() {
    return (
      <div className="tgdb" id="tgdb">
        <div className="hero-dashboard">
          <div className="bg_tour"></div> &nbsp;
          <div className="header">
            <h1 id="tourguideheading">
              <center>Tour Guide Dashboard</center> <br />
            </h1>
          </div>
        </div>

        <br />
        <div className="Tourdashboard" id="Customers">
        <table className="table table-bordered">
          <thead className="thead-bg-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">
                <b>Customer Name</b>
              </th>
              <th scope="col">
                <b>Customer Email</b>
              </th>
              <th scope="col">
                <b>Mobile No</b>
              </th>
              <th scope="col">
                <b>Tour Option</b>
              </th>
              <th scope="col">
                <b>Date</b>
              </th>
              <th scope="col">
                <b>Time</b>
              </th>
              <th scope="col">
                <b>Tour Guide</b>{" "}
              </th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.bookings.map((booking, index) => (
              <tr key={index}>
                <th scope="row">
                  <a
                    href={`booking/details/${booking._id}`}
                    style={{ textDecoration: false }}
                  >
                    {index + 1}
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
                  <a className="btn btn-warning" href={`booking/update/${booking._id}`}>
                  <i className="fa fa-address-card"></i> &nbsp;
                    Edit &nbsp;
                  </a>
                  &nbsp; &nbsp; &nbsp;
                  <a
                    className="btn btn-danger"
                    href=""
                    onClick={() => this.onDelete(booking._id)}>
                    <i className="far fa-trash-alt"></i> &nbsp; Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
       
              <div>
        <button className="btn btn-success">
          <a href="booking/add" style={{ textDecoration: "none", color: "white" }}>
            {" "}
            Add new Tour Booking{" "}
          </a>
        </button>
        </div>
     
        </div>
      </div>
    );
  }
}

export default TourGuideDashboard;
