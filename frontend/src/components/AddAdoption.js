import { connect } from "react-redux";
import PropTypes from "prop-types";
import store from '../store';
import { isAuth } from '../actions/authActions';
import {Link} from 'react-router-dom';
import { logout } from '../actions/authActions';
import { buttonReset} from '../actions/uiActions';

import axios from 'axios';
import React, { Component } from 'react';
import "../CSS/AddAdoption.css";


class AddAdoption extends Component {

    static propTypes = {
        button: PropTypes.bool,
        authState: PropTypes.object.isRequired,
        buttonReset: PropTypes.func.isRequired,
        logout: PropTypes.func.isRequired,
      };

    constructor(props){
        super(props);
        this.setAnimalName = this.setAnimalName.bind(this);
        this.setAdoptionLevel = this.setAdoptionLevel.bind(this);
        this.setPaymentPlan = this.setPaymentPlan.bind(this);
        this.setLiveCam = this.setLiveCam.bind(this);
        this.setAdoptionDate = this.setAdoptionDate.bind(this);
        this.setAnimalId = this.setAnimalId.bind(this);
        this.setMemberId = this.setMemberId.bind(this);
        this.saveAdoption = this.saveAdoption.bind(this);
        this.advocate = this.advocate.bind(this);
        this.guardian = this.guardian.bind(this);
        this.protector = this.protector.bind(this);
        this.partner = this.partner.bind(this);
        this.validateform = this.validateform.bind(this);
        //this.getanimal = this.getanimal.bind(this);

        this.state = {
            animal_name: '',
            adoption_level: '',
            payment_plan: '',
            live_cam: 'false',
            adoption_date: '',
            animal_id: '',
            aid:'',
            member_id: '',
            adptlvl: '',
            monthly:'$30/monthly',
            months_6:'$150/6 months',
            yearly:'$300/yearly',
            animal:[]

        }
        const id = this.props.match.params.id;

        this.state.animal_id = id;
        

        

        this.state.adptlvl = 
            <div>
                <img className = "adptlvl_img" alt ="Adoption" src ='https://s28164.pcdn.co/files/befe1abc-d1e4-4379-a2dc-3554ac1919bd-600x400.jpg'/>
                <div className = "adptlvl_des">
                <h4 className = "add-topic">Advocate Level Adoption</h4>
                <p><ul>
                    <li>adoption certification</li>
                    <li>free once a week visit pass</li>
                    <li>encounter</li>
                    </ul></p>
                    </div>
            </div>
        //this.state.member_id='6157ebebe084d8971d736453';
        


        
    }

    componentDidMount() {
        // Check if session cookie is present
        store.dispatch(isAuth());

        let today =new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); 
        let yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;
        this.setAdoptionDate(today);

        this.getanimal(this.state.animal_id);

        
        
      }

      getanimal(id){
        console.log(id);
           
        axios.get(`http://localhost:8015/animal/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    animal:res.data.post,
                    aid:res.data.post.Animal_ID
                })
                console.log(this.state.animal.Animal_ID);
                const animid = this.state.animal.Animal_ID;
                console.log(animid);
                this.setState({aid: animid})
            }
        });

        
        //this.setState({aid:a_id});
        
    }


    setAnimalName(e){
        this.setState({animal_name: e.target.value});
    }
    setAdoptionLevel(e){
        this.setState({adoption_level : e.target.value});
    }
    setPaymentPlan(e){
        this.setState({payment_plan : e.target.value});
    }
    setLiveCam(e){
        this.setState({live_cam : e.target.value});
    }
    setAdoptionDate(date){
        this.setState({adoption_date :date});
    }
    setAnimalId(e){
        this.setState({animal_id : e.target.value});
    }
    setMemberId(id){
        this.setState({member_id : id});
        console.log(this.state.member_id);
    }

    saveAdoption(e){
        e.preventDefault();
        
        console.log('Adoption data', this.state);
        
        console.log('animal id', this.state.aid);

        const adoption = {
            animal_name : this.state.animal_name,
            adoption_level: this.state.adoption_level,
            payment_plan: this.state.payment_plan,
            live_cam: this.state.live_cam,
            adoption_date: this.state.adoption_date,
            animal_id: this.state.animal_id,
            aid:this.state.aid,
            member_id: this.state.member_id
        }
        axios.post("http://localhost:8015/adoption/add", adoption).then(() => {
            alert('adoption report added');
        })
        .catch(error => {
            alert (error.message);
        });
    }

    udpatememid(mid){
        this.setState({member_id:mid});
        return mid;
    }

    advocate(){
        this.setState({monthly : '$30/monthly'});
        this.setState({months_6 : '$150/6 months'});
        this.setState({yearly : '$300/yearly'});
        this.setState({adptlvl : 
        <div>
            <img className = "adptlvl_img" alt ="Adoption"  src ='https://s28164.pcdn.co/files/befe1abc-d1e4-4379-a2dc-3554ac1919bd-600x400.jpg'/>
            <div className = "adptlvl_des">
            <h4 className = "add-topic">Advocate Level Adoption</h4>
            <p><ul>
                <li>adoption certification</li>
                <li>free once a week visit pass</li>
                <li>encounter</li>
                </ul></p>
                </div>
        </div>
        })
    }
    
    guardian(){
        this.setState({monthly : '$40/monthly'});
        this.setState({months_6 : '$200/6 months'});
        this.setState({yearly : '$350/yearly'});
        this.setState({adptlvl : 
        <div>
            <img className = "adptlvl_img" alt ="Adoption"  src ='https://sydneyzoo.com/wp-content/uploads/2021/05/a6da545b-8b76-4390-9938-716cf9070080.jpeg'/>
            <div className = "adptlvl_des">
            <h4 className = "add-topic">Guardian Level Adoption</h4>
            <p><ul>
                <li>adoption certification</li>
                <li>free once a week visit pass</li>
                <li>encounter</li>
                </ul></p>
            </div>
        </div>
        })
    }
    
    protector(){
        this.setState({monthly : '$50/monthly'});
        this.setState({months_6 : '$300/6 months'});
        this.setState({yearly : '$500/yearly'});
        this.setState({adptlvl : 
        <div >
            <img className = "adptlvl_img" alt ="Adoption"  src = "https://media.gettyimages.com/photos/happy-girl-hugging-sheep-in-petting-zoo-picture-id1064200044?k=20&m=1064200044&s=612x612&w=0&h=8XMRKl_Ch2FQr3kEgALFPqL3DWX7iSymN9xKuzGKmos="/>
            <div className = "adptlvl_des">
            <h4 className = "add-topic">Protector Level Adoption</h4>
            <p><ul>
                <li>adoption certification</li>
                <li>free once a week visit pass</li>
                <li>encounter</li>
                </ul></p>
                </div>
        </div>
        })
    }
    
    partner(){
        this.setState({monthly : '$60/monthly'});
        this.setState({months_6 : '$400/6 months'});
        this.setState({yearly : '$700/yearly'});
        this.setState({adptlvl : 
        <div>
            <img className = "adptlvl_img"  alt ="Adoption" src = 'https://www.zoodoo.com.au/assets/img/092.JPG'/>
            <div className = "adptlvl_des">
            <h4 className = "add-topic">Partner Level Adoption</h4>
            <p><ul>
                <li>adoption certification</li>
                <li>unlimited visit passes</li>
                <li>encounter</li>
                </ul></p>
                </div>
        </div>
        })
    }

    validateform(e){
        if(this.state.animal_name === '' || this.state.adoption_level === '' || this.state.payment_plan === '' || this.state.live_cam === ''){
            //alert("All the inputs must be filled!");
            if(this.state.animal_name === ''){
                alert("Animal Name must be added!");
            }
            if(this.state.adoption_level === ''){
                alert("Adoption Level must be selected!");
            }
            if(this.state.payment_plan === ''){
                alert("Payment Plan must be selected!");
            }
        }
        else{
            this.saveAdoption(e);
        }
    }

    render() {

        if(!this.props.authState.isAuthenticated) {
            // return <Redirect to="/" />
          }
          const {user} = this.props.authState;
       
         
        return (
            
            <div className = 'bckgrnd'>
                <div className = "add-hero">
                    <div class="add-bg_image add-bgimage"></div>
                    <Link to = {"/AnimalsforAdoption"} style = {{textDecoration:"none"}}>
                    <p className = "add-topic leftnavigation">🡰 Animals for Adoption</p><br/>
                    </Link>
                    <div id = "addcontent" className = "add-content">
                        
                        <p className = "add-topic">Adopt an Animal</p><br/>
                        <p className = 'add-sub-content'>Become a proud conservationist of a Zoo Melaka animal today! By adopting an <br/> animal, you not only help the care and feeding of that animal, but also <br/>support education and conservation programs at the Zoo Melaka.</p>
                  </div>
                </div>
                {}
                <div className = "add-contentdiv">
                    <br/>
                <div className = "add-formdiv container">
                <div className="form-group">
                    Give a Name for the Animal :
                    <input type="text" className="form-control" id="name" placeholder="Enter Animal name" value = {this.state.animal_name} onChange = {this.setAnimalName}/>
                    
                </div>
                <div className="form-group">
                    Adoption Level
                    <div onChange = {this.setAdoptionLevel}>
                    <input type="radio" id="advocate" name="adoption_level" value = "Advocate" onClick = {this.advocate}/>
                    <label className = "add-label remextraspace" for="advocate">Advocate</label><br/>
                    <input  type="radio" id="guardian" name="adoption_level" value = "Guardian" onClick = {this.guardian} />
                    <label className = "add-label" for="guardian">Guardian</label><br/>
                    <input  className = "add-button" type="radio" id="protector" name="adoption_level" value = "Protector" onClick = {this.protector} />
                    <label className = "add-label" for="protector">Protector</label><br/>
                    <input className = "add-button" type="radio" id="partner" name="adoption_level" value = "Partner" onClick = {this.partner}/>
                    <label className = "add-label" for="partner">Partner</label><br/>
                    </div>
                </div>
                <div className="form-group">
                    Choose a payment plan
                    <div onChange = {this.setPaymentPlan}>
                    <input type="radio" id="monthly" name="payment_plan" value = {this.state.monthly} />
                    <label className = "add-label remextraspace" for="monthly">{this.state.monthly}</label><br/>
                    <input type="radio" id="6months" name="payment_plan" value = {this.state.months_6} />
                    <label className = "add-label" for="6months">{this.state.months_6}</label><br/>
                    <input  className = "add-button" type="radio" id="yearly" name="payment_plan" value = {this.state.yearly} />
                    <label className = "add-label" for="yearly">{this.state.yearly}</label><br/>
                    </div>
                </div>
                <div className="form-group">
                    <label className = "add-label-chk" for="live_cam">Reqeust Live Cam</label> &nbsp;
                    <input className = "add-label" type="checkbox" id="live_cam" placeholder="Enter Live Cam" value = "true" onChange = {this.setLiveCam}/>
                    <br/>&nbsp;&nbsp;&nbsp;-$20/monthly
                    <br/>
                </div>
                <label hidden>{this.state.member_id = (user ? `${user.id}`: '' )}</label>
                {/* <div className="form-group">
                    <label for="age">Animal Id</label>
                    <input type="text" className="form-control" id="age" placeholder="Enter Animal Id" value = {this.state.animal_id} onChange = {this.setAnimalId}/>
                    
                </div> */}
                {/* <div className="form-group">
                    <label for="age">Member Id</label>
                    <input type="text" className="form-control" id="age" placeholder="Enter Memeber Id" value = {this.state.member_id} onChange = {this.setMemberId}/>
             
                </div> */}
                  <button className="btn btn-primary" onClick = {this.validateform} style = {{textDecoration:"none",marginLeft:'70px',marginTop:'30px'}}>Submit</button>
                    
                </div>
                <br/>
                </div>

                <div className = "adoption_level" id = "adpt_lvl_dis">
                    
                    {this.state.adptlvl}

                </div>
                <div className = 'footerspace'><br/></div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({ //Maps state to redux store as props
    button: state.ui.button,
    authState: state.auth
  });

export default connect(mapStateToProps, { logout, buttonReset })(AddAdoption);