import "./App.css";
import LandingPage from "./Components/Main/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./Components/Main/Login";
import { WorkerRegister } from "./Components/Main/WorkerRegister";
import { AgencyRegister } from "./Components/Main/AgencyRegister";
import { WorkerProfile } from "./Components/Worker/Profile";
import { Agencyprofile } from "./Components/Agency/Agencyprofile";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* Main routes */}
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/worker/register">
            <WorkerRegister />
          </Route>
          <Route exact path="/agency/register">
            <AgencyRegister />
          </Route>
          {/* routes for worker */}
          <Route exact path="/worker/Profile">
            <WorkerProfile />
          </Route>
          {/*Routes for the agency*/}
          <Route exact path="/agency/Profile">
            <Agencyprofile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
