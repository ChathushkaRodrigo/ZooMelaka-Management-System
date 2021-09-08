import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import CreatePost from './components/CreatePost'
import NavBar from './components/NavBar'
import EditPost from './components/EditPost'
import Home from './components/Home'
import PostDetails from './components/PostDetails'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      
      <div className="container">
        <NavBar/>
        <Route path="/" exact component={Home}></Route>
        <Route path="/add" component={CreatePost}></Route>
        <Route path="/edit/:id" component={EditPost}></Route>
        <Route path="/post/:id" component={PostDetails}></Route>
      </div>
      
      </BrowserRouter>
    )
  }
}
