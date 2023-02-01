import { BrowserRouter,Routes, Route} from "react-router-dom";
import EnviHome from "./components/EnvironmentHome";
import HealthCare from "./components/HealthCare";
import HealthHome from "./components/HealthHome";
import HealthPrpjects from "./components/HealthProjects";
import LandingPage from "./components/LandingPage";
import SafetyHome from "./components/SafetyHome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path="/healthcare/*" element={<HealthHome/>} />
      <Route path="/safety/*" element={<SafetyHome/>}/>
      <Route path="/Environment/*" element={<EnviHome/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
