import React, { Component } from 'react';


export default class ProjectsHome extends Component{
    render() {
        return(
            <div src="/IMG/zooMelaka.jpg">
              
            <div>
                <div className="d-grid gap-2 col-6 mx-auto" style={{marginTop:'30px'}}>
                    <button className="btn btn-success"><a href="project/add" style={{textDecoration:'none',color:'white'}}><i className="far fa-plus"></i>Create New Post</a></button>
                    <p></p>
                    <button className="btn btn-success"><a href="project/find" style={{textDecoration:'none',color:'white'}}>Search Project</a></button>
                    
                </div>
            </div>  
            </div>          
        )
    }  
}