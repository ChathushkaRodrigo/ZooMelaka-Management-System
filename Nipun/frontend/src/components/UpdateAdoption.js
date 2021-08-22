import React, {useState} from 'react';
import axios from 'axios';

export default function updateAdoption(){
     
    
    
    return(
        <div className = "container">
        <form>
            <div className="form-group">
                <label for="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter name" onChange = {(e) => {
                    //setName(e.target.value); //assigning filled value on input field to state variable name
                }}/>
                
            </div>
            <div className="form-group">
                <label for="age">Age</label>
                <input type="number" className="form-control" id="age" placeholder="Enter age" onChange = {(e) => {
                    //setAge(e.target.value); 
                }}/>
                
            </div>
            <div className="form-group">
                <label for="name">Gender</label>
                <input type="text" className="form-control" id="gender" placeholder="Enter gender" onChange = {(e) => {
                    //setGender(e.target.value); 
                }}/>
                
            </div>
              <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
        )

}