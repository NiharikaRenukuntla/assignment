import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import UserProfileComponent from "./components/UserProfileComponent";
import UserContext from "./context/UsersContext";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/userDashboard/:id">
            <UserContext>
              <UserProfileComponent />
            </UserContext>
          </Route>
          <Route path="/">
            <UserContext>
              <LoginPage />
            </UserContext>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
