import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import TourGuideDashboard from './components/TourGuideDashboard';
import CreateBooking from './components/CreateBooking';
import EditBooking from './components/EditBooking';
import TourDetails from './components/TourDetails';
import Header from './components/header';
import Footer from './components/footer';
import './CSS/App.css'
import Home from './components/home';
class TourApp extends Component {
  
render() {
    return (
      <div>
      <Router>
        <Header/>
        <Route path="/" exact component={Home}/>
        <Route path="/bookings" exact component={TourGuideDashboard} />
        
        
        <Footer/>
      </Router>
    </div>  
    )
  }
}

export default TourApp