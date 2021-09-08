import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom';

class AdminPanelHome extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <button><Link to = "./EmployeeDash">Employee Management</Link></button>
                <button><Link to = "./adminprofiledash">Member Management</Link></button>
                <button><Link to = "./ResearchDashboard">Research Management</Link></button>
                <button><Link to = "./ProjectsHome">Project Management</Link></button>
                <button><Link to = "./medicalDashboard">Medical Management</Link></button>
                <button><Link to = "./TourGuideDashboard">Customer Services Management</Link></button>
                <button><Link to = "./AllAdoptions">Adoption Management</Link></button>
                <button><Link to = "./animaldashboard">Animal Management</Link></button>
            </div>
            
        )
    }
}

export default AdminPanelHome