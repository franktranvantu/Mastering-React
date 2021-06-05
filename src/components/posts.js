import React from "react";
import queryString from 'query-string';

const Posts = ({match: {params: {year, month}}, location: {search}}) => {
  const result = queryString.parse(search);
  console.log(result);

  return (
    <div>
      <h1>Posts</h1>
      Year: {year}, Month: {month}
    </div>
  );
};

export default Posts;
