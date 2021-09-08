import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from "./components/Home";
import CreateMedical from "./components/CreateMedical";
import EditMedical from "./components/EditMedical";
import MedicalDetails from "./components/MedicalDetails";
import NavBar from "./components/NavBar";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="container">
        <NavBar />
        <Route path ="/" exact component ={Home}></Route>
        <Route path ="/add" component ={CreateMedical}></Route>
        <Route path ="/edit/:id" component ={EditMedical}></Route>
        <Route path ="/Medical/:id" component ={MedicalDetails}></Route>
      </div>


      </BrowserRouter>
      
        
    );
  }
}

export default App;