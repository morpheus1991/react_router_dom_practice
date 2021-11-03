import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";

function App() {
  console.log(window.location);
  return (
    <div className="App">
      <div>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/profile/person1">person1</Link>
          </li>
          <li>
            <Link to="/profile/person2">person2</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/" component={Home} exact={true}></Route>
        <Route path={["/about", "/info"]} component={About}></Route>
        <Route path="/profiles" component={Profiles}></Route>
        <Route path="/history" component={HistorySample}></Route>
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다.</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
