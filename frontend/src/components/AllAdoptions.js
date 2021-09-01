import React, {useState, useEffect} from 'react';
//use effect is used to show what to show in a page component-dead-mount for class method
import axios from 'axios';

export default function AllAdoptions(){

    const [adoptions, setAdoptions] = useState([]);

    useEffect(() => {
        //where and how data is received
        function getAdoptions(){
            axios.get('http://localhost:8070/adoption/') //json.token is used as middleware when user login and authenticate json file. it is used as 2nd parameter in axios
            .then((res)=>{
                //console.log(res.data);
                setAdoptions(res.data);

            }).catch((err) => {
                alert(err.message);
            });
        }
        getAdoptions();
    }, [] /*empty array*/);

   let number = 1;

    return (
        <div>
            
            <table class="table">
            <thead class="thead-dark">
            <tr>
            <th scope="col">#</th>
            <th scope="col">Animal Name</th>
            <th scope="col">Adoption Level</th>
            <th scope="col">Payment Plan</th>
            </tr>
                </thead>
                <tbody>
            {adoptions.map(adp => (

                <tr>
                    <th scope="row">{number++}</th>
                    <td>{adp.animal_name}</td>
                    <td>{adp.adoption_level}</td>
                    <td>{adp.payment_plan}</td>
                </tr>
            
            ))}

                </tbody>
            </table>

        </div>
    )

    
}

