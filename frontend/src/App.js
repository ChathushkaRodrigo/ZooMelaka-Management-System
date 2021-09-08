import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import './CSS/App.css'
import Home from './components/home';

//MEthanin palleha dapn
// import AnimalDashboard from './components/AnimalDashboard';
// import AllAdoptions from './components/AllAdoptions';
import TourGuideDashboard from './components/TourGuideDashboard';
import ProjectsHome from './components/ProjectsHome';
// salaryroutes
import ProfileDetails from './components/ProfileDetails';






class TourApp extends Component {
  
render() {
    return (
      <div>
      <Router>
        <Header/>
        
        <Route path="/" exact component={Home}/>
        {/* <Route path="/animal" component ={AnimalDashboard}/> */}
        {/* <Route path="/alladoptions" component={AllAdoptions}/> */}
        <Route path="/booking" component={TourGuideDashboard}/>
        <Route path="/projects" component={ProjectsHome}/>
        {/* <Route path="/salaryroutestask" component={}/> */}
        <Route path="/profiles" component={ProfileDetails}/>
        
        
         
            

        <Footer/>
      </Router>
    </div>  
    )
  }
}

export default TourApp