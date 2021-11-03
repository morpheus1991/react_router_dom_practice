import React from "react";
import qs from "qs";
type LocationProps = {
  location: Location;
};
type Location = {
  pathname: string;
  search: string;
  hash: string;
};
const About = ({ location }: LocationProps) => {
  console.log(location);
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, //문자열 맨 앞의 ? 생략.
  });
  const showDetail = query.detail === "true";
  console.log(query.detail);
  return (
    <div>
      <h1>소개</h1>
      <p>라우터 연습</p>
      {showDetail && <p>detail 값이 true</p>}
    </div>
  );
};

export default About;
