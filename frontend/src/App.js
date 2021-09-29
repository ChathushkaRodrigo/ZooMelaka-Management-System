import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/footer';
import './CSS/App.css';
import Home from './components/home';


//User Profile Management 
import AdminProfileDashboard from './components/AdminProfileDash';
import Login from './components/Login';
import EditProfile from './components/EditProfile';
import Profile from './components/profile'
import Signup from './components/signup';
import AdminUProfileEdit from './components/AdminUProfileEdit';


//Employee Management
import AdminPanelHome from './components/AdminPanelHome';
import EmployeeDashboard from './components/EmployeeDash';
import EditEmployee from './components/EditPost';
import EmployeeDetails from './components/PostDetails';

//Research Management
import ResearchDashboard from './components/ResearchDashboard';
import AddEmployee from './components/CreatePost';
import EditResearch from './components/EditResearch';
import ResearchDetails from './components/ResearchDetails';
import CreateResearch from './components/CreateResearch';
import CustomerResearchDash from './components/CustomerResearchDash';
import ResearchCollaboration from './components/ResearchCollaboration';
import CreateCollaboration from './components/CreateCollaboration';

//Project Management
import ProjectsHome from './components/ProjectsHome';
import AddProject from './components/ProjectCreate';
import ProjectDetails from './components/ProjectSearch';
import EditDetails from './components/ProjectEdit';
import ProjectReport from './components/ProjectReports';
//importing projects slider
import ProjectSlider from './components/ProjectSlider/ProjectSlider';

//Medical Management
import MedicalDashboard from './components/MedicalDashboard';
import CreateMedical from './components/CreateMedical';
import EditMedical from './components/EditMedical';
import MedicalDetails from './components/MedicalDetails';

//Customer Service Management
import TourGuideDashboard from './components/TourGuideDashboard';
import CreateBooking from './components/CreateBooking';
import UpdateBooking from './components/EditBooking';
import BookingDetails from './components/BookingDetails';
import RequestBooking from './components/RequestBooking';

//Adoption Management
import AllAdoptions from './components/AllAdoptions';
import AdoptionDetails from './components/AdoptionDetails';
import EditAdoptionDetails from './components/UpdateAdoption';
import CreateAdoption from './components/AddAdoption';

//Animal Management
import AnimalDashboard from './components/AnimalDashboard';
import CreateAnimalPortfolio from './components/CreateAnimal';
import UpdateAnimalPortfolio from './components/EditAnimal';
import AnimalDetails from './components/AnimalDetails';
import AnimalsforAdoption from './components/AnimalsforAdoption';
import MemberAdoptedAnimals from './components/MemberAdoptedAnimals';


import { FormErrors } from './components/FormErrors';

class TourApp extends Component {
  
render() {
    return (
      <div>
      <Router>
        <NavBar/>
        
        <Route path="/" exact component={Home}/>
      
      
        {/* Routes for Profile management */}
        <Route path ="/login" component={Login}/>
        <Route path ="/AdminProfileDash" component={AdminProfileDashboard}/>
        <Route path ="/profile/update/:id" component={EditProfile}/>
        <Route path ="/profile/:id" component={Profile}/>
        <Route path ="/signup" component={Signup}/>
        <Route path ="/AdminUProfileEdit/:id" component={AdminUProfileEdit}/>
        
        
        


        <Route path="/adminpanelhome" component={AdminPanelHome}/>


        
        <Route path="/EmployeeDash" component={EmployeeDashboard}/>
        <Route path="/edit/employee/:id" component={EditEmployee}/>
        <Route path="/employee/add" component={AddEmployee}/>
        <Route path="/employee/details/:id" component={EmployeeDetails}/>

        
        <Route path = "/ResearchDashboard" component ={ResearchDashboard}/>
        <Route path = "/research/edit/:id" component ={EditResearch}/>
        <Route path = "/research/add" component = {CreateResearch}/>
        <Route path = "/research/details/:id" component = {ResearchDetails}/> 
        <Route path = "/research/customerDash/" component = {CustomerResearchDash}/> 
        <Route path = "/research/collaboration/" component = {ResearchCollaboration}/> 
        <Route path = "/research/createCollaboration/" component = {CreateCollaboration}/> 


        <Route path = "/ProjectsHome" component = {ProjectsHome}/>
        <Route path = "/project/add" component = {AddProject}/>
        <Route path ="/project/find" component={ProjectDetails}/>
        <Route path ="/project/edit/:id" component={EditDetails}/>
        <Route path ="/project/report/:id" component={ProjectReport}/>
        <Route path ="/ProjectSlider" component={ProjectSlider}/>
        
        
        <Route path = "/medicalDashboard" component = {MedicalDashboard}/>
        <Route path = "/medical/create" component = {CreateMedical}/>
        <Route path = "/medical/update/:id" component = {EditMedical}/>
        <Route path="/medical/details/:id" component ={MedicalDetails}/>


        <Route path = "/TourGuideDashboard" component = {TourGuideDashboard}/> 
        <Route path = "/booking/add" component = {CreateBooking}/>
        <Route path = "/booking/update/:id" component = {UpdateBooking}/>
        <Route path=  "/booking/details/:id" component={BookingDetails}/>
        <Route path="/booking/request" component={RequestBooking}/>
        



        <Route path = "/AllAdoptions" component = {AllAdoptions}/>
        <Route path = "/adoption/details/:id" component = {AdoptionDetails}/>
        <Route path = "/adoption/edit/:id" component = {EditAdoptionDetails}/>
        <Route path = "/adoption/add" component = {CreateAdoption}/>
        <Route path = "/AnimalsforAdoption" component = {AnimalsforAdoption}/>
        <Route path = "/profile/adoptedanimals" component = {MemberAdoptedAnimals}/>

        <Route path = "/animaldashboard" component = {AnimalDashboard}/>
        <Route path = "/animal/add" component ={CreateAnimalPortfolio}/>
        <Route path = "/animal/update/:id" component={UpdateAnimalPortfolio}/>
        <Route path = "/animal/details/:id" component={AnimalDetails}/>


        

        
        <Route path = "/FormErrors" component={FormErrors}/>
        
         
            

        <Footer/>
      </Router>
    </div>  
    )
  }
}

export default TourApp