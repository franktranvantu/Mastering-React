import React, {Component} from 'react';
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";
import Login from "./context/Login";

class App extends Component {
  state = {
    currentUser: {
      name: null
    }
  }

  handleLoggedIn = (username) => {
    console.log(username);
    const user = {
      name: 'Frank'
    };
    this.setState({
      currentUser: user
    });
  }

  render() {
    return (
      <UserContext.Provider value={{
        currentUser: this.state.currentUser,
        onLoggedIn: this.handleLoggedIn
      }}>
        <div>
          <MoviePage />
          <Login />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;