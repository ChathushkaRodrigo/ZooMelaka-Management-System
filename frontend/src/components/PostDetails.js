import React, { Component } from 'react'
import axios from 'axios'

export default class PostDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            post:{}
        };
    }

    componentDidMount(){
        const id =  this.props.match.params.id;

        axios.get(`/post/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                })
                console.log(this.state.post)
            }
        })
    }
    
    render() {

        const {eID,userName,firstName,lastName,email,address,employeeType,DOB,salary} = this.state.post;

        return (
            <div style={{marginTop:'20px'}}>
                <h4>{userName}</h4>
                <hr/>

                <dl className="row">
                    <dt className="col-sm-3">FirstName</dt>
                    <dd className="col-sm-9">{firstName}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">LastName</dt>
                    <dd className="col-sm-9">{lastName}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">EID</dt>
                    <dd className="col-sm-9">{eID}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">Email</dt>
                    <dd className="col-sm-9">{email}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">Address</dt>
                    <dd className="col-sm-9">{address}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">Employee Type</dt>
                    <dd className="col-sm-9">{employeeType}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">D.O.B</dt>
                    <dd className="col-sm-9">{DOB}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">Salary</dt>
                    <dd className="col-sm-9">{salary}</dd>
                </dl>
            </div>
        )
    }
}
