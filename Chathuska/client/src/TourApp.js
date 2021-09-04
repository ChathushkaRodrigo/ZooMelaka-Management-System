import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import TourGuideDashboard from './components/TourGuideDashboard';
import CreateBooking from './components/CreateBooking';
import EditBooking from './components/EditBooking';
import BookingDetails from './components/BookingDetails';
import NavBar from './components/NavBar';

class TourApp extends Component {
  
render() {
    return (
  <BrowserRouter>
  <div className ="container">
    <NavBar/>
    <Route path ="/" exact component={TourGuideDashboard}></Route>
    <Route path ="/add"  component={CreateBooking}></Route>
    <Route path ="/edit/:id" component ={EditBooking}></Route>
    <Route path ="/booking:id" component ={BookingDetails}></Route>
    


  </div>
  
  
  </BrowserRouter>      
    )
  }
}

export default TourApp