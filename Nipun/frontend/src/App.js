import './App.css';
import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import AllAdoptions from './components/AllAdoptions';
import AddAdoption from './components/AddAdoption';
import UpdateAdoption from './components/UpdateAdoption';
import AdoptionDetails from './components/AdoptionDetails';
import Header from './components/Header';


export default class App extends Component {
render() {
  return (
    <BrowserRouter>
    <div className="container">
      <Header/>
      <Route path = "/" exact component = {AllAdoptions} />
      <Route path = "/add"  component = {AddAdoption} />
      <Route path = "/edit/:id" component = {UpdateAdoption} />
      <Route path = "/details/:id"  component = {AdoptionDetails} />
     
    </div>
    </BrowserRouter>
    )
  }
}