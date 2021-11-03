import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import { Link } from "react-router-dom";
import Profile from "./Profile";

function App() {
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
      <Route path="/" component={Home} exact={true}></Route>
      <Route path={["/about", "/info"]} component={About}></Route>
      <Route path="/profile/:userName" component={Profile}></Route>
    </div>
  );
}

export default App;
