import React, {useContext} from 'react';
import UserContext from "./userContext";

function MovieRow(props) {
  const currentUser = useContext(UserContext);
  console.log("Context: ", currentUser);

  return (
    <div>{currentUser.name}</div>
  );
}

export default MovieRow;