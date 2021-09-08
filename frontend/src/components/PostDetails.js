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
            </div>
        )
    }
}
