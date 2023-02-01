import { Link } from "react-router-dom";
import '../styles/HealthNavbar.css'
const HealthNavbar = () => {
    return ( 
        <div className="healthNavbar">
            <div className="navbar">
                <div className="left">
                    <h1>Health Care-IOT</h1>
                </div>
                <div className="right">
                 <Link to='/healthcare' >DashBoard</Link>
                 <Link to="/healthcare/healthProjects" >Projects</Link>
                 <Link to='/healthcare/Add-Project'>Add Projects</Link>
                 <Link to="/healthcare/Community">Community</Link>
                 <Link>Trending</Link>
                </div>
                <div className="community">
                    <Link to='/healthcare/Be-A-Community-Member'>Be a Community Member</Link>
                    <Link to='/'>Go Back</Link>
                </div>
            </div>
        </div>
     );
}
 
export default HealthNavbar;