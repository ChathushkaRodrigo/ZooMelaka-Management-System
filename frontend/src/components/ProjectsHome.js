import React, { Component } from 'react';

import ProjectSlider from './ProjectSlider/ProjectSlider'

import '../CSS/Projects.css';



export default class ProjectsHome extends Component{

    render() {

        return(

              

            <div className="Hback">

                <div className="Caption">

                <h1 className="pageCaption">Project Management Dashboard</h1>

                </div>



                <ProjectSlider/>

               

                <div id="PHomeBtn">

                    <a href="project/add" ><button className="HomeB1">

                        <i class="fa fa-plus" aria-hidden="true"></i>

                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Create New Project 

                    </button></a>

                    <p></p>
                    <br/>

                    <a href="project/find"><button className="HomeB1">

                        <i class="fa fa-search" aria-hidden="true"></i>

                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search Project

                        </button>  

                    </a>

                </div>

            </div>     

        )

    }  

}