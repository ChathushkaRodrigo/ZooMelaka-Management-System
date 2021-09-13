import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Login extends Component {

    constructor(props){
        super(props);

        this.state ={           
            email:"",
            password:""
        }
    }

    // handleInputChange = (e)=>{
    //     const {name,value} = e.target;
    //     this.setState({
    //         ...this.state,
    //         [name]:value
    //     })
    // }

    // handleSubmit =(e)=>{

    //        e.preventDefault()
    // }   

    render() {
        return (
            <div className="col-md-8 mt-4 mx-auto">
            {/* <h1 className="h3 mb-3 font-weight-normal">Login</h1>
              <form className="needs-validation" noValidate>                  
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Email</label>
                        <input type="text"
                            className="form-control"
                            name="email"
                            placeholder="Enter Email"
                            value={this.state.email}
                            onChange={this.handleInputChange} />                    
                    </div>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Password</label>
                        <input type="text"
                            className="form-control"
                            name="password"
                            placeholder="Enter Password"
                            value={this.state.password}
                            onChange={this.handleInputChange} />                    
                    </div> */}
    
                    <Link to = "./AdminPanelHome"><button className="btn btn-success" type="submit"  href="#">   
                        
                        &nbsp; Login
                    </button></Link>

                    <Link to="/signup">
                             <button > JOIN US </button>
                        </Link>
    
                {/* </form> */}
            </div>
        )
    }
}
export default Login;