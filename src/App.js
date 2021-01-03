import './App.css';
import LandingPage from './Components/Main/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Login } from './Components/Main/Login';
import { WorkerRegister } from './Components/Main/WorkerRegister';
import { AgencyRegister } from './Components/Main/AgencyRegister';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/login'>
            <Login/>
          </Route>
          <Route exact path='/' >
          <LandingPage/>
          </Route>
          <Route exact path='/worker/register' >
          <WorkerRegister/>
          </Route>
          <Route exact path='/agency/register' >
          <AgencyRegister/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
