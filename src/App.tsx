import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/info">info</Link>
        </li>
      </ul>
      <Route path="/" component={Home} exact={true}></Route>
      <Route path={["/about", "/info"]} component={About}></Route>
    </div>
  );
}

export default App;
