import React, { Component } from "react";

import UserList from "./UserList";

import { fetchUsers } from "../actions/userActions";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <UserList />
      </div>
    );
  }
}

export default App;
