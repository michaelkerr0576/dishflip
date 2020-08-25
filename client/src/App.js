import React, { Component } from "react";

import Navbar from "./components/Navbar";
import Menu from "./components/Menu";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Menu />
      </div>
    );
  }
}

export default App;
