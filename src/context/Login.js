import React, {useContext} from 'react';
import UserContext from "./userContext";

function Login(props) {
  const userContext = useContext(UserContext);
  return (
    <div>
      <button onClick={() => userContext.onLoggedIn('Your username')}>Login</button>
    </div>
  );
}

export default Login;