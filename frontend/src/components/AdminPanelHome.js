import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom';
import '../CSS/admin-panel-home.css';
import BannerImage from '../images/adminHome2.gif';
import employeePic from '../images/businessman.png';
import userPic from '../images/visitors.png';
import reasearchPic from '../images/documents.png';
import projectPic from '../images/testing.png';
import adoptionPic from '../images/adoption.png';
import medicalPic from '../images/medical-record.png';
import customerServPic from '../images/support.png';
import animalPic from '../images/lion.png';

class AdminPanelHome extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
                <div className="admin-body" id="admin-id">
                            
                                <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
                            <div className="headerContainer">
                            
                                
                            </div>

                            
                                </div> 
                                {/* Management Section  */}

                                <div id="service" class="Services">
         <div class="containerDash">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage">
                     <h2>Panel Home</h2>
                     <p>Our Online Help Desk serves efficent commandacity to betterment of our client
                     </p>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
               <Link to = "./EmployeeDash">
                  <div class="Services-box">
                     <i><img src={employeePic} alt="#"id="icons" /> </i>
                     <h3> Employee Management</h3> <br/>
                     <p>Analyze essential details regarding Zoo Employees in an efficent manner</p>
                  </div>
                  </Link>
               </div>
               <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
               <Link to = "./adminprofiledash">
                  <div class="Services-box">
                    <i><img src={userPic} alt="#" id="icons"/></i>
                     <h3>Member/Visitor Profile Management</h3>
                     <p>Convey Member and visitor details statistically in greater scale</p>
                  </div>
                </Link>
               </div>
               <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
               <Link to = "./ResearchDashboard">
                  <div class="Services-box">
                     <i><img src={reasearchPic} alt="#" id="icons"/></i>
                     <h3>Research Management</h3>
                     <p>Report details can be created ,deleted,updated and retrieved based on your purpose</p>
                  </div>
                </Link>
               </div>
               <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
               <Link to = "./medicalDashboard">
                  <div class="Services-box">
                     <i><img src={medicalPic} alt="#"id="icons" /></i>
                     <h3>Handling Medical Records</h3>
                     <p>Creation of medical records , documents are mostly handled efficently</p>
                  </div>
                  </Link>
               </div>
               <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
               <Link to = "./ProjectsHome">
                  <div class="Services-box">
                     <i><img src={projectPic} alt="#" id="icons"/></i>
                     <h3>Project Management</h3>
                     <p>Zoo Projects are done on the go and manged conveniently</p>
                  </div>
                </Link>
               </div>
               <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
               <Link to = "./TourGuideDashboard">
                  <div class="Services-box">
                    <i><img src={customerServPic} alt="#" id="icons"/></i>
                     <h3>Customer Service Managment</h3>
                     <p>Handle visitors actions and response with just one tap away</p>
                  </div>
                </Link>
               </div>
               <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
               <Link to = "./AllAdoptions">
                  <div class="Services-box">
                     <i><img src={adoptionPic} alt="#" id="icons" /></i>
                     <h3>Adoption Management</h3>
                     <p>Zoo adoption details are embedded and handled for care ,betterment of our animals</p>
                  </div>
                </Link>
               </div>
               <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
               <Link to = "./animaldashboard">
                  <div class="Services-box">
                  <i><img src={animalPic} alt="#"id="icons" /></i>
                     <h3>Animal Management</h3>
                     <p>Zoo Animal data displayed and analysed based on animals reports</p>
                  </div>
                </Link>
               </div>
               
            </div>
         </div>
      </div>
        </div>

           
            
        )
    }
}

export default AdminPanelHome