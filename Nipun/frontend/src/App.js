import './App.css';
import AddAdoption from './components/AddAdoption';
import Header from './components/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AllAdoptions from './components/AllAdoptions';
import UpdateAdoption from './components/UpdateAdoption';


function App() {
  return (
    <Router>
    <div className="App">
      <Header/>

     
      <Route path = "/add" exact component = {AddAdoption} />
      <Route path = "/update" exact component = {UpdateAdoption} />
      <Route path = "/" exact component = {AllAdoptions} />
     
    </div>
    </Router>
  );
}

export default App;
