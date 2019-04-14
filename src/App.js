import React, { Component } from "react";

import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "first",
        finished: false
      },
      {
        id: 2,
        title: "secons",
        finished: false
      },
      {
        id: 3,
        title: "third",
        finished: false
      }
    ]
  };
  render() {
    console.log(this.state.todos);
    return (
      <div>
        <Todos />
      </div>
    );
  }
}

export default App;
