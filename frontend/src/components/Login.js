/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';

import "../CSS/Loginps.css";
import { FormErrors } from './FormErrors';
import "../CSS/FormError.css";

class Login extends Component {

    constructor(props){
        super(props);

        this.state ={           
            email:"",
            password:"",

            // Variables to handle Validation
            formErrors: {email: '', password:''},
            emailValid: false,
            passwordValid: false,
            formvalid: false
        }
    }

    // Method to handle user input
    handleInputChange = (e)=>{
      const {name,value} = e.target;
      this.setState({
          ...this.state,
          [name]:value
      },() => { this.validateField(name, value) }
  );
  }   
  
  // Method to Validate the user Input
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

    render() {
        return (
            <div className="col-md-8 mt-4 mx-auto">
            <h1 className="h3 mb-3 font-weight-normal">Login</h1>              

            {/* Begining of Login Overlay */}
            <section class="vh-100">
            <div class="container-fluid h-custom">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-md-9 col-lg-6 col-xl-5">
                  <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png" class="img-fluid"
                    alt="Sample image"/>
                </div>
                <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

                  {/* Tag to display Form validation Errors */}
                <FormErrors formErrors={this.state.formErrors} className="FormError"/>

                {/* Begining of the Form */}
                  <form>
                    <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                      <p class="lead fw-normal mb-0 me-3">Sign in with</p>
                      <button type="button" class="btn btn-primary btn-floating mx-1">
                        <i class="fab fa-facebook-f"></i>
                      </button>
          
                      <button type="button" class="btn btn-primary btn-floating mx-1">
                        <i class="fab fa-twitter"></i>
                      </button>
          
                      <button type="button" class="btn btn-primary btn-floating mx-1">
                        <i class="fab fa-linkedin-in"></i>
                      </button>
                    </div>
          
                    <div class="divider d-flex align-items-center my-4">
                      <p class="text-center fw-bold mx-3 mb-0">Or</p>
                    </div>
          
                    {/* <!-- Email input --> */}
                    <div class="form-outline mb-4">
                      <input type="email" id="form3Example3" class="form-control form-control-lg"
                        placeholder="Enter a valid email address" />
                      <label class="form-label" for="form3Example3">Email address</label>
                    </div>
          
                    {/* <!-- Password input --> */}
                    <div class="form-outline mb-3">
                      <input type="password" id="form3Example4" class="form-control form-control-lg"
                        placeholder="Enter password" />
                      <label class="form-label" for="form3Example4">Password</label>
                    </div>
          
                    <div class="d-flex justify-content-between align-items-center">
                      {/* <!-- Checkbox --> */}
                      <div class="form-check mb-0">
                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                        <label class="form-check-label" for="form2Example3">
                          Remember me
                        </label>
                      </div>
                      <a href="#!" class="text-body">Forgot password?</a>
                    </div>
          
                    <div class="text-center text-lg-start mt-4 pt-2">
                      {/* Submit Button named Login */}
                      <button type="button" class="btn btn-primary btn-lg"><a href="./AdminPanelHome"
                          >Login</a></button>
                          {/* Button to Signup Page */}
                      <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/signup"
                          class="link-danger">Register</a>
                     </p>
                    </div>          
                  </form>
                </div>
              </div>
            </div>           
          </section>               
          </div>
        )
    }
}
export default Login;