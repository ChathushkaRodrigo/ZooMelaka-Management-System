/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, PureComponent } from 'react';
import { connect } from "react-redux";
import { Route, Switch, Link } from 'react-router-dom'
import PropTypes from "prop-types";
import store from '../store';
import { isAuth } from '../actions/authActions'
import {Redirect} from 'react-router-dom'

import '../CSS/home.css'

import BannerImage from "../images/bannerZoo.jpg";
import serviceImage from "../images/serviceBanner.jpg";

class home extends PureComponent{

    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    componentDidMount() {
      // Check if session cookie is present
      store.dispatch(isAuth());
    }

    static propTypes = {
      button: PropTypes.bool,
      isAuthenticated: PropTypes.bool,
    };

    render() {
        if(this.props.isAuthenticated) {
            //return <Redirect to="/profile"/>
          }

          return (
            <div className="home-body">
    
            
                
               
                <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
                    <div className="headerContainer">
                     <h1>Zoo Melaka</h1>
                        <br/><br/>
                        <p> Fresh look at our new services join us  <br/>to serve zoo community and <br/> spend some time with us lets make <br/> good memories </p> <br/>
                            <Link to="/login">
                                 <button > JOIN US </button>
                            </Link>
                    </div>
    
                    
                </div>    
                <div className="home"style={{ backgroundImage: `url(${serviceImage})` }}>
                <div className="headerContainer2">
                    <div className="card1">
                        <center>
                            <h1>The Community</h1>
                            <p>vemvklvmmdcmkldamcmdscmdcmldmklcmaddcmlkmklcm<br/>jkcjkncjksmcwlkoc<br/></p>
                        </center>
    
                    </div>  
                </div>
                </div>                   
            </div>        
        )
    }

}
const mapStateToProps = (state) => ({ //Maps state to redux store as props
    button: state.ui.button,
    isAuthenticated: state.auth.isAuthenticated
  
  });

export default connect(mapStateToProps)(home);

    
