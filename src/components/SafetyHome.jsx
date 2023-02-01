
import SafetyNavbar from "./SafetyNavbar";
import { Route,Routes } from "react-router-dom";
import Community from "./community";
import SafetyProjects from "./safetyProjects";
import SafetyCare from "./SafetyCare";
import AddSafetyproject from "./addProjects";
import AddMember from "./addMembers";
const SafetyHome = () => {
    return ( 
        <div className="home">
        <SafetyNavbar/>
        <Routes>
           <Route path="/" element={<SafetyCare/>} />
           <Route path="/safetyProjects" element={<SafetyProjects/>}  />
           <Route path="/Be-A-Community-Member" element={<AddMember/>}  />
           <Route path="/Add-Project"  element={<AddSafetyproject/>} />
           <Route path="/Community" element={<Community/>} />
        </Routes>
       </div> 
     );
}
 
export default SafetyHome;