import React, { Component } from "react";
import Counter1 from "./hooks/Counter1";
import Counter2 from "./hooks/Counter2";

class App extends Component {
  render() {
    return (
      <div>
        <Counter1 />
        <Counter2 />
      </div>
    );
  }
}

export default App;
