import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from "./components/Home";
import CreateResearch from "./components/CreateResearch";
import EditResearch from "./components/EditResearch";
import ResearchDetails from "./components/ResearchDetails";
import NavBar from "./components/NavBar";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="container">
        <NavBar />
        <Route path ="/" exact component ={Home}></Route>
        <Route path ="/add" component ={CreateResearch}></Route>
        <Route path ="/edit/:id" component ={EditResearch}></Route>
        <Route path ="/research/:id" component ={ResearchDetails}></Route>
      </div>


      </BrowserRouter>
      
        
    );
  }
}

export default App;