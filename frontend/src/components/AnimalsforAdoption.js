/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import "../CSS/AnimalsforAdoption.css"

export default class AnimalsforAdoption extends Component {
    constructor(props){
        super(props);
    
        this.state={
          animals:[],
          adoptables:[]
        };
      }

      componentDidMount(){
        this.retrieveAdoptions();
      }
    
      retrieveAdoptions(){
        axios.get("http://localhost:8015/animal/").then(res =>{
          if(res.data.success){
            this.setState({
              animals:res.data.existingPosts
            });
    
            console.log(this.state.animals);
            
            this.state.animals.map((animals) => {
                if(animals.Adoptability === 'true'){
                    this.setState({adoptables:[...this.state.adoptables,animals]});
                   
                }
            });
            console.log(this.state.adoptables);

          
          }
        })
      }
      filterData(adoptables, searchkey){
        const result = adoptables.filter((adoptables) => 
        adoptables.Animal_Species.toLowerCase().includes(searchkey)
        );
        this.setState({adoptables:result});
        }
    
    
    
    
        handleSearchArea = (e) => {
        const searchkey = e.currentTarget.value;
    
        axios.get("http://localhost:8015/animal/").then(res =>{
            if(res.data.success){
                this.filterData(res.data.existingPosts, searchkey)
            }
            
            });
        }
        
    render() {
        return (
            <div>

                <div className = 'bckgrnd'>
                <div className = "add-hero">
                    <div class="add-bg_image an-foradp-bgimage"></div>
                    <div className = "add-content">
                        <p className = "add-topic">Animals for Adoption</p><br/>
                        <p className = 'add-sub-content'>Become a proud conservationist of a Zoo Melaka animal today! By adopting an <br/> animal, you not only help the care and feeding of that animal, but also <br/>support education and conservation programs at the Zoo Melaka.</p>
                  </div>
                </div>
                <div className = "add-contentdiv">
                    <br/>
                <div className = "anadd-formdiv container">
                <h4 className = "add-topic">Select an Animal for adoption</h4>
                <br/>
                    <div className ="aa-searchbar">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange = {this.handleSearchArea}></input>
                    </div>
                    
                    <ul className = "gridder">
                        {this.state.adoptables.map((adoptables) => (
                           

                        <li className = "gridder-list circles">
                        <Link to = {`/adoption/add/${adoptables._id}`} className ="ann-contentarea">
                        <div className = "section">
                            <div >
                            <img className = "image_area circlesType lazyloaded" alt ="Adoption" src = 'https://s28164.pcdn.co/files/Asian-Small-clawed-Otter-0072-2545-300x300.jpg'></img>
                            <h5 className = "ann-contentarea ">{adoptables.Animal_Species}</h5>
                            </div>
                            <div >
                                    
                            </div>
                        </div>
                        </Link>
                    </li>

                        ))}
                        
                        
                    </ul>
                    
                </div>

                </div>
            </div>
            </div>
        )
    }
}
