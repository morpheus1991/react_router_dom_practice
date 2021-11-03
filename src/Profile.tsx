import { Match } from "@testing-library/react";
import React from "react";
import { withRouter, RouteComponentProps, match, Route } from "react-router";
import { Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
type Person = {
  name: string;
  description: string;
};

type Data = {
  [property: string]: Person;
};
type MatchParams = {
  userName: string;
};
const data: Data = {
  person1: {
    name: "김말자",
    description: "광진구에 살고있어요",
  },
  person2: {
    name: "고진감래",
    description: "서울시에 살고있어요",
  },
};

const Profile: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const { userName } = match.params;
  const profile = data[userName];
  if (!profile) {
    return <>존재하지 않는 사용자입니다.</>;
  }
  return (
    <div>
      {userName}({profile.name})<p>{profile.description}</p>
    </div>
  );
};

export default Profile;
