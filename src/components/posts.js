import React from "react";

const Posts = ({match: {params: {year, month}}}) => {
  return (
    <div>
      <h1>Posts</h1>
      Year: {year}, Month: {month}
    </div>
  );
};

export default Posts;
