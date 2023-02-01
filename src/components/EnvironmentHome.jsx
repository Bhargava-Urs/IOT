

import { Route,Routes } from "react-router-dom";
import Community from "./community";
import SafetyProjects from "./safetyProjects";
import SafetyCare from "./SafetyCare";
import AddSafetyproject from "./addProjects";
import AddMember from "./addMembers";
import EnviNavbar from "./EnvironmentNavbar";
import EnviCare from "./EnvironmentCare";
import EnviProjects from "./EnvironmentProjects";
import AddEnviproject from "./addEnviProjects";
import EnviTrending from "./EnviTrending";
const EnviHome = () => {
    return ( 
        <div className="home">
        <EnviNavbar/>
        <Routes>
           <Route path="/" element={<EnviCare/>} />
           <Route path="/EnvironmentProjects" element={<EnviProjects/>}  />
           <Route path="/Be-A-Community-Member" element={<AddMember/>}  />
           <Route path="/Add-Project"  element={<AddEnviproject/>} />
           <Route path="/Community" element={<Community/>} />
           <Route path="/Trending" element={<EnviTrending/>} />
        </Routes>
       </div> 
     );
}
 
export default EnviHome;