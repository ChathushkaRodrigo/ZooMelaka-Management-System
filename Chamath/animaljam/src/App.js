import React, {Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './animalcomponents/Home';
import CreateAnimal from './animalcomponents/CreateAnimal';
import EditAnimal from './animalcomponents/EditAnimal';
import AnimalDetails from './animalcomponents/AnimalDetails';
import NavBar from './animalcomponents/NavBar';

export default class App extends Component{
  render(){
      return(
        <BrowserRouter>
          <div className = "container-fluid">
              <NavBar/>
              <Route path="/" exact component = {Home}></Route>
              <Route path="/add" component={CreateAnimal}></Route>
              <Route path="/edit/:id" component={EditAnimal}></Route>
              <Route path="/animal/:id" component={AnimalDetails}></Route>

          </div>
        </BrowserRouter>
      )
  }
}