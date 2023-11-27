import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import ManageUsers from "./ManageUsers";
import ManageEvents from "./ManageEvents";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/manage-users" component={ManageUsers} />
        <Route path="/manage-events" component={ManageEvents} />
      </Switch>
    </Router>
  );
}

export default App;
