
import { Link } from "react-router-dom";
const SafetyNavbar = () => {
    return ( 
        
        <div className="healthNavbar">
            <div className="navbar">
                <div className="left">
                    <h1>Industrial Safety-IOT</h1>
                </div>
                <div className="right">
                 <Link to='/safety' >DashBoard</Link>
                 <Link to="/safety/safetyProjects" >Projects</Link>
                 <Link to='/safety/Add-Project'>Add Projects</Link>
                 <Link to="/safety/Community">Community</Link>
                 <Link>Trending</Link>
                </div>
                <div className="community">
                    <Link to='/safety/Be-A-Community-Member'>Be a Community Member</Link>
                    <Link to='/'>Go Back</Link>
                </div>
            </div>
        </div>
     );
}
 
export default SafetyNavbar ;