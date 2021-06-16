import React from "react";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import App from "../App";
import About from './About';
import Sources from './Sources';
import NavBar from "./NavBar";

export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/Home" component={App} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/About" component={About} />
        <Route exact path="/Sources" component={Sources} />
      </Switch>
    </div>
  );
};

/*
export default function RouteComponent() {
  return (
  
      <Router>
        <div className="navbar">
          <nav>
            <ul>
              <li>
                <Link to="/App">Home</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Sources">Sources</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Sources">
              <Sources />
            </Route>
            <Route path="../App">
              <App />
            </Route>
          </Switch>
        </div>
      </Router>

    );
  }
  */


