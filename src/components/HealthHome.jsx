import {BrowserRoute,Routes,Route} from "react-router-dom"
import AddMember from "./addMembers";
import Addproject from "./addProjects";
import Community from "./community";
import HealthCare from "./HealthCare";
import HealthNavbar from "./HealthNavbar";
import HealthProjects from "./HealthProjects";
const HealthHome = () => {
    return ( 
        <div className="home">
         <HealthNavbar/>
         <Routes>
            <Route path="/" element={<HealthCare/>} />
            <Route path="/healthProjects" element={<HealthProjects/>} />
            <Route path="/Be-A-Community-Member" element={<AddMember/>} />
            <Route path="/Add-Project" element={<Addproject/>} />
            <Route path="/Community" element={<Community/>} />
         </Routes>
        </div>
     );
}
 
export default HealthHome;