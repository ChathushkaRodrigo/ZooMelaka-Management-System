import React, {useState} from 'react';
import axios from 'axios';


export default function AddAdoption(){
    
    let [animal_name, setAnimalName] = useState("");
    let [adoption_level, setAdoptionLevel] = useState("");
    let [payment_plan, setPaymentPlan] = useState("");
    let [live_cam, setLiveCam] = useState("");
    let [adoption_date, setAdoptionDate] = useState("");
    let [animal_id, setAnimalId] = useState("");
    let [member_id, setMemberId] = useState("");

    function sendData(e){
        //e - event, because sendData is an event
        e.preventDefault(); //form submit default is to send data to another site. to prevent default behavior this is used

        const newEmployee = {
            animal_name,
            adoption_level,
            payment_plan,
            live_cam,
            adoption_date,
            animal_id,
            member_id
        }
       
        axios.post('http://localhost:8070/adoption/add', newEmployee)
        .then(()=>{
            alert('Adoption Record Added');

            setAnimalName("");
            setAdoptionLevel();
            setPaymentPlan("");
            setLiveCam("");

        })
        .catch((err) =>{
            alert(err);
        });

        //can use this on button as onClick or on form as onSubmit
    }
    
    return(

        <div className = "container">
        <form onSubmit = {sendData}>
            <div className="form-group">
                <label for="name">Animal Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter name" onChange = {(e) => {
                    setAnimalName(e.target.value); //assigning filled value on input field to state variable name
                }}/>
                
            </div>
            <div className="form-group">
                <label for="age">Adoption Leve</label>
                <input type="text" className="form-control" id="age" placeholder="Enter age" onChange = {(e) => {
                    setAdoptionLevel(e.target.value); 
                }}/>
                
            </div>
            <div className="form-group">
                <label for="name">Payment Plan</label>
                <input type="text" className="form-control" id="gender" placeholder="Enter gender" onChange = {(e) => {
                    setPaymentPlan(e.target.value); 
                }}/>
                
            </div>
            <div className="form-group">
                <label for="name">Live Cam</label>
                <input type="text" className="form-control" id="gender" placeholder="Enter gender" onChange = {(e) => {
                    setLiveCam(e.target.value); 
                }}/>
                
            </div>
              <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
        )
}