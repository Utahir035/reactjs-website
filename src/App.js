import Login from "./Components/Pages/login/Login";
import Signup from "./Components/Pages/signup/Signup";
import Profile from "./Components/Pages/profile/Profile";
import Company from "./Components/Pages/company/Company";
import Motor from "./Components/Pages/motor/Motor";
import Identity from "./Components/Pages/identity/Identity";
import Firearms from "./Components/Pages/firearms/Firearms";
import Forget from "./Components/Pages/login/Forget";
import Registration from "./Components/Pages/registration/Registration";
import Incident from "./Components/Pages/incident report/Incident";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Motor" index element={<Motor />} />
          <Route path="/Signup" index element={<Signup />} />
          <Route path="/Firearms" index element={<Firearms />} />
          <Route path="/Profile" index element={<Profile />} />
          <Route path="/Company" index element={<Company />} />
          <Route path="/Registration" index element={<Registration />} />
          <Route path="/Incident" index element={<Incident />} />
          <Route path="/Identity" index element={<Identity />} />
          <Route path="/Forget Password" index element={<Forget />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
