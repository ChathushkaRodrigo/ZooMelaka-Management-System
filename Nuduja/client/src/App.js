import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import CreateProfile from './components/CreateProfile';
import EditProfile from './components/EditProfile';
import ProfileDetails from './components/ProfileDetails';

import Login from './components/Login';


import NavBar from './components/NavBar';

//import Login from './components/Login';
//<Route path="/login" component={Login}></Route>  

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <NavBar/>            
          <Route path="/" exact component={Home}></Route>
          <Route path="/add" component={CreateProfile}></Route>          
          <Route path="/edit/:id" component={EditProfile}></Route>
          <Route path="/profile/:id" component={ProfileDetails}></Route>
          <Route path="/login" component={Login}></Route>                   
        </div>
      </BrowserRouter>
    );
  }
}
export default App;