import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Create from './projectComponents/Create';
import Edit from './projectComponents/Edit';
import Home from './projectComponents/Home';
import Reports from './projectComponents/Reports';
import Search from './projectComponents/Search';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="container">
       <navBar/>
        <Route path="/" exact component={Home}></Route>
        <Route path="/add" component={Create}></Route>
        <Route path="/edit/:id" component={Edit}></Route>
        <Route path="/post/:id" component={Reports}></Route>
        <Route path="/find" component={Search}></Route>
      </div>
      </BrowserRouter>
    )
  }
}