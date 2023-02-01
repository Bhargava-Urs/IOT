
import { Link } from "react-router-dom";
const EnviNavbar = () => {
    return ( 
        
        <div className="healthNavbar">
            <div className="navbar">
                <div className="left">
                    <h1>Environment-IOT</h1>
                </div>
                <div className="right">
                 <Link to='/Environment' >DashBoard</Link>
                 <Link to="/Environment/EnvironmentProjects" >Projects</Link>
                 <Link to='/Environment/Add-Project'>Add Projects</Link>
                 <Link to="/Environment/Community">Community</Link>
                 <Link to="/Environment/Trending" >Trending</Link>
                </div>
                <div className="community">
                    <Link to='/Environment/Be-A-Community-Member'>Be a Community Member</Link>
                    <Link to='/'>Go Back</Link>
                </div>
            </div>
        </div>
     );
}
 
export default EnviNavbar ;