/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../CSS/member-booking.css'

export default class MemberBooking extends Component {

    constructor(props){
        super(props);
    
        this.state={
          bookings:[],
          membersbookings:[],
          MemberID:''
        };
      }
    
      componentDidMount(){
        const id = this.props.match.params.id;
        this.setState({MemberID: id});
        this.retrieveBookings();
      }
    
      retrieveBookings(){
        axios.get("http://localhost:8015/booking/").then(res =>{
          if(res.data.success){
            this.setState({
              bookings:res.data.existingBookings
            });
    
            console.log(this.state.bookings)

            this.state.bookings.map((bookings) => {
                if(bookings.MemberID == this.state.MemberID){
                    this.setState({membersbookings:[...this.state.membersbookings,bookings]});
                   
                }
            });
            console.log(this.state.membersbookings);

          }
        })
      }

    // onDelete = (id) => {
    //   axios.delete(`http://localhost:8015/adoption/delete/${id}`).then((res) => {
    //         alert("Delete Successfull");
    //         this.retrieveBookings();
    //   })
    // }
  
      

    render() {
        return (
           
                <div>

<div className = 'bckgrnd'>
<div className = "add-hero">
    <div class="add-bg_image mem-adpt-bgimage"></div>
    <div className = "add-content">
        <p className = "mem-adopt-topic">My Bookings</p><br/>
  </div>
</div>
<div className = "add-contentdiv">
    <br/>
<div className = "anadd-formdiv container">
{/* <h4>You can Change Adoption Details and Cancel Adoption Subscription</h4> */}
<br/>
    
    
    <ul className = "gridder">
    {this.state.membersbookings.map((membersbookings) => (
                           
       
        <li className = "mem-gridder-list circles">
            
            <div className = "section">
                <div >
                <img className = "image_area bggimage circlesType lazyloaded"  alt ="Adoption" src = 'https://cdn-icons-png.flaticon.com/512/1910/1910008.png'></img>
                <h5 className = "mem-adpt-contentarea ">{membersbookings.TourGuideName}</h5><br/>
               
                 
                 {/* <Link to = {`/adoption/edit/${membersanimals._id}`} className ="mem-adpt-contentarea">
                 <a className = "btn" href = "#">
                     <i className= ""></i>&nbsp;Edit
                      </a>
                </Link> */}
                      &nbsp;
                
                      {/* <a className = "btn" href = "#" onClick = {() => this.onDelete(membersanimals._id)}>
                        <i className= ""></i>&nbsp;CancelAdoption
                        </a> */}
                
                </div>
                <div >
                        
                </div>
            </div>
            
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
