import React from "react";
import { Link, Route } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  return (
    <div>
      <div>
        <h3>사용자 목록</h3>
        <ul>
          <li>
            <Link to="/profiles/person1">person1</Link>
          </li>
          <li>
            <Link to="/profiles/person2">person2</Link>
          </li>
        </ul>
      </div>
      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해주세요.</div>}
      ></Route>
      <Route path="/profiles/:userName" component={Profile}></Route>
    </div>
  );
};

export default Profiles;
